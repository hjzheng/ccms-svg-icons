import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-editorial-background" viewBox="0 0 1024 1024"><path d="M910.3 920.6 113.7 920.6c-39.4 0-71.7-32.3-71.7-71.7L42 214c0-39.4 32.3-71.7 71.7-71.7l796.7 0c39.4 0 71.7 32.3 71.7 71.7l0 635.4C982 888.3 949.8 920.6 910.3 920.6zM113.7 183.3c-16.9 0-30.7 13.8-30.7 30.7l0 635.4c0 16.9 13.8 30.7 30.7 30.7l796.7 0c16.9 0 30.7-13.8 30.7-30.7L941.1 214c0-16.9-13.8-30.7-30.7-30.7L113.7 183.3z"  ></path><path d="M666.6 914.9 325.1 578.6 75.3 775.7 49.7 743.4 327.7 524.3 695.3 885.8Z"  ></path><path d="M486.9 711.7 460.3 681 763.4 416.8 975.9 621.1 947.2 650.8 762.4 472.1Z"  ></path></symbol>
	<use xlink:href="#icon-editorial-background"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconEditorialBackground', [])
	.component(`iconEditorialBackground`, ddo)
	.name;