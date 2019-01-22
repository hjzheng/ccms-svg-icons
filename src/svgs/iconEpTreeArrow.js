import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-ep-tree-arrow" viewBox="0 0 1024 1024"><path d="M311.48765 70.1l5.94 5.13 440.1 382.5a71.1 71.1 0 0 1 24.21 54c0 21.6-9.54 41.04-24.21 54L318.23765 947.96l-7.29 6.48A43.47 43.47 0 0 1 286.46765 962 45.63 45.63 0 0 1 242.00765 915.29V108.8C242.00765 82.7 261.98765 62 286.46765 62c9.27 0 18 3.06 25.02 8.1z"  ></path></symbol>
	<use xlink:href="#icon-ep-tree-arrow"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconEpTreeArrow', [])
	.component(`iconEpTreeArrow`, ddo)
	.name;