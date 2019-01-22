import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-ccgl-yundanpicisaomiao-1" viewBox="0 0 1024 1024"><path d="M914.198 713.099h-804.398c-27.766 0-50.275-22.509-50.275-50.275v-301.649c0-27.766 22.509-50.275 50.275-50.275h804.398c27.766 0 50.275 22.509 50.275 50.275v301.649c0 27.766-22.509 50.275-50.275 50.275zM160.075 612.55h703.85v-201.099h-703.85v201.099zM813.649 210.351h-603.299c-27.766 0-50.275-22.509-50.275-50.275s22.509-50.275 50.275-50.275h603.299c27.766 0 50.275 22.509 50.275 50.275s-22.509 50.275-50.275 50.275zM813.649 914.198h-603.299c-27.766 0-50.275-22.509-50.275-50.275s22.509-50.275 50.275-50.275h603.299c27.766 0 50.275 22.509 50.275 50.275s-22.509 50.275-50.275 50.275z"  ></path></symbol>
	<use xlink:href="#icon-ccgl-yundanpicisaomiao-1"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconCcglYundanpicisaomiao1', [])
	.component(`iconCcglYundanpicisaomiao1`, ddo)
	.name;