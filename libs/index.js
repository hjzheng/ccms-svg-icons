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


results.forEach(result => {
	const fileName = `${result.componentName}.js`;
	const jsFile = template.replace(/\$\{(.*)\}/g, function($, $1) {
		return result[$1];
	});

	fs.writeFileSync(path.join(__dirname, '../src/svgs', fileName), jsFile, 'utf-8');
});

