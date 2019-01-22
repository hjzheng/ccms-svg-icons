import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    ${symbol}
	<use xlink:href="#${symbolName}"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.${componentName}', [])
	.component(`${componentName}`, ddo)
	.name;