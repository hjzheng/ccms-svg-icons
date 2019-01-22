import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-diable" viewBox="0 0 1024 1024"><path d="M864.249 253.244l-259.553 258.756 259.553 258.756c9.27 9.27 18.54 27.737 18.54 46.204 0 36.935-27.809 64.672-64.888 64.672-18.54 0-37.079-9.27-46.348-18.467l-259.553-258.756-259.553 258.756c-9.27 9.27-27.809 18.467-46.348 18.467-37.079 0-64.888-27.737-64.888-64.672 0-18.467 9.27-36.935 18.54-46.204l259.553-258.756-259.553-258.756c-9.27-9.27-18.54-27.737-18.54-46.204 0-36.935 27.809-64.672 64.888-64.672 18.54 0 37.079 9.27 46.348 18.467l259.553 258.756 259.553-258.756c9.27-9.27 27.809-18.467 46.348-18.467 37.079 0 64.888 27.737 64.888 64.672 0 18.467-9.27 36.935-18.54 46.204v0z"  ></path></symbol>
	<use xlink:href="#icon-diable"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconDiable', [])
	.component(`iconDiable`, ddo)
	.name;