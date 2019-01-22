import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-daimabianjiqi" viewBox="0 0 1024 1024"><path d="M116.8 514.816l165.696 261.376a31.296 31.296 0 1 1-52.864 33.504l-176.32-278.08a31.296 31.296 0 0 1 0-33.536l176.32-278.656a31.296 31.296 0 0 1 52.864 33.472L116.8 514.816z m625.152 261.376l165.696-261.376-165.728-261.92a31.296 31.296 0 0 1 52.928-33.472l176.32 278.656a31.296 31.296 0 0 1-0.032 33.504l-176.32 278.112a31.296 31.296 0 1 1-52.864-33.504z m-142.08-595.616a31.296 31.296 0 1 1 58.816 21.472l-234.176 641.376a31.296 31.296 0 1 1-58.816-21.472l234.208-641.376z"  ></path></symbol>
	<use xlink:href="#icon-daimabianjiqi"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconDaimabianjiqi', [])
	.component(`iconDaimabianjiqi`, ddo)
	.name;