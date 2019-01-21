import fs from 'fs';
import path from 'path';
import camel from 'to-camel-case';


const content = fs.readFileSync(path.join(__dirname, '../svg-source/iconfont.js'), 'utf-8');

const results = [];

content.replace(/(<symbol\s*id="([^"]+)"[^<]*>.*?<\/symbol>)/g, function($, $1, $2){
	results.push({
		symbol: $1,
		symbolName: $2,
		componentName: camel($2)
	})
});

const template = fs.readFileSync(path.join(__dirname, '../template/svg.template.js'), 'utf-8');


const indexJSContent = [], ngIconModuleNames = [], tagNames = [];

results.forEach(result => {

	// because Mac OS is case-insensitive, we need ...
	// our ux is idiot.
	// TODO: we need fix it in Mac OS

	if(result.componentName == 'iconShoppingcart') {
		result.componentName = 'iconShoppingcartA';
	}

	if(result.componentName == 'iconShoppingCart') {
		result.componentName = 'iconShoppingcartB';
	}

	let fileName = `${result.componentName}.js`;

	ngIconModuleNames.push(result.componentName);
	tagNames.push(result.symbolName);

	indexJSContent.push(`import ${result.componentName} from './svgs/${result.componentName}';`);

	const jsFile = template.replace(/\$\{(.*)\}/g, function($, $1) {
		return result[$1];
	});

	fs.writeFileSync(path.join(__dirname, '../src/svgs', fileName), jsFile, 'utf-8');
});

indexJSContent.push(`export default angular.module('ccms.icon', [${ngIconModuleNames.join(',\n')}]).name;`);

// write index.js
fs.writeFileSync(path.join(__dirname, '../src', 'index.js'), indexJSContent.join('\n'), 'utf-8');



// write demos index.html
const demoTemplate = fs.readFileSync(path.join(__dirname, '../template/index.template.html'), 'utf-8');

const demoTemplateHtml = demoTemplate.replace('${tagNames}', (tagNames.map(t =>
	`<div class="item"><${t}></${t}>
		<button class="btn" data-clipboard-text="import ${camel(t)} from 'ccms-svg-icons/svgs/${camel(t)};'">
    		拷贝到剪贴板
		</button>
	</div>`)
).join('\n'));

fs.writeFileSync(path.join(__dirname, '../demos', 'index.html'), demoTemplateHtml, 'utf-8');

