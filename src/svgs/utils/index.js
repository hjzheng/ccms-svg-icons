/**
 * Created by hjzheng on 2019/1/22.
 */
export default function insertCSSRule() {

	const styleTag = document.getElementById('svg-icon');

	if (styleTag && styleTag.nodeName.toLowerCase() === 'style') {
		return;
	}

	const style = document.createElement('style');
	style.type = 'text/css';
	style.id = 'svg-icon';
	style.innerHTML = '.cc-icon {width:1em; height:1em; font-size:12px;}'; // default style
	document.getElementsByTagName('head')[0].appendChild(style);
}
