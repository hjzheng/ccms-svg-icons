import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
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