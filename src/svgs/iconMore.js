import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-more" viewBox="0 0 1024 1024"><path d="M962 62v900h-900z"  ></path></symbol>
	<use xlink:href="#icon-more"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconMore', [])
	.component(`iconMore`, ddo)
	.name;