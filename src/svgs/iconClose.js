import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-close" viewBox="0 0 1025 1024"><path d="M871.613 923.947l-771.561-771.561c-13.235-13.235-13.235-34.893 0-48.127v0c13.241-13.241 34.9-13.241 48.134 0l771.561 771.554c13.235 13.241 13.235 34.9 0 48.134v0c-13.241 13.235-34.9 13.235-48.134 0z"  ></path><path d="M919.745 152.388l-771.561 771.561c-13.235 13.235-34.893 13.235-48.127 0v0c-13.241-13.241-13.241-34.9 0-48.134l771.554-771.561c13.241-13.235 34.9-13.235 48.134 0v0c13.235 13.241 13.235 34.9 0 48.134z"  ></path></symbol>
	<use xlink:href="#icon-close"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconClose', [])
	.component(`iconClose`, ddo)
	.name;