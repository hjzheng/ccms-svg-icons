import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-count" viewBox="0 0 1024 1024"><path d="M982.72 952.213h-940.373v-886.293h40.748v845.547h899.628z"  ></path><path d="M193.28 356.267h71.36v448.214h-71.36v-448.214z"  ></path><path d="M617.813 519.253h71.36v285.228h-71.36v-285.228z"  ></path><path d="M831.68 342.613h71.36v461.868h-71.36v-461.868z"  ></path><path d="M410.56 125.333h71.36v679.147h-71.36v-679.147z"  ></path></symbol>
	<use xlink:href="#icon-count"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconCount', [])
	.component(`iconCount`, ddo)
	.name;