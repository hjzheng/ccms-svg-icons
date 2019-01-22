import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-ep-tree-more" viewBox="0 0 4096 1024"><path d="M980.44893447 483.61895311a190.95023145 190.95023145 0 1 0 381.90046345 0 190.95023145 190.95023145 0 0 0-381.90046345 0zM1850.03628931 483.61895311a190.95023145 190.95023145 0 1 0 381.90046343 0 190.95023145 190.95023145 0 0 0-381.90046343 0zM2719.62364413 483.61895311a190.95023145 190.95023145 0 1 0 381.90046344 0 190.95023145 190.95023145 0 0 0-381.90046344 0z"  ></path></symbol>
	<use xlink:href="#icon-ep-tree-more"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconEpTreeMore', [])
	.component(`iconEpTreeMore`, ddo)
	.name;