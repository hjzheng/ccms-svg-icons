import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-single-sign-on" viewBox="0 0 1024 1024"><path d="M788.562 962h-553.125c-61.113 0-110.624-53.73-110.624-120v-120h55.283v120c0 33.106 24.757 60 55.342 60h553.125c30.556 0 55.313-26.895 55.313-60v-660.001c0-33.106-24.757-60-55.313-60h-553.125c-30.586 0-55.342 26.895-55.342 60v120.001h-55.283v-120.001c0-66.269 49.511-120 110.624-120h553.125c61.113 0 110.625 53.73 110.625 120v660.001c0 66.269-49.513 120-110.625 120z"  ></path><path d="M493.22 324.735c-11.69-11.719-11.69-30.704 0-42.422 11.721-11.719 30.733-11.719 42.45 0l206.982 206.953c6.242 6.269 8.908 14.531 8.498 22.734 0.411 8.145-2.256 16.464-8.498 22.734l-206.982 206.953c-11.718 11.721-30.731 11.721-42.45 0-11.69-11.719-11.69-30.703 0-42.422l157.296-157.267h-495.703c-16.553 0-30-13.417-30-30 0-16.523 13.447-30 30-30h495.703l-157.296-157.266z"  ></path></symbol>
	<use xlink:href="#icon-single-sign-on"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconSingleSignOn', [])
	.component(`iconSingleSignOn`, ddo)
	.name;