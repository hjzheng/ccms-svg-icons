import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-dialogfill" viewBox="0 0 1068 1024"><path d="M238.57 466.608c0-29.822 24.278-54 54.221-54 29.946 0 54.221 24.178 54.221 54 0 29.822-24.278 54-54.221 54-29.946 0-54.221-24.178-54.221-54M772.882 412.608c29.946 0 54.221 24.178 54.221 54s-24.278 54-54.221 54c-29.946 0-54.221-24.178-54.221-54 0-29.822 24.278-54 54.221-54M478.612 466.608c0-29.822 24.277-54 54.221-54 29.946 0 54.221 24.178 54.221 54 0 29.822-24.278 54-54.221 54-29.946 0-54.221-24.178-54.221-54M531.027 62c-259.029 0-469.027 181.847-469.027 406.175 0 131.331 71.98 248.089 183.624 322.337l-0.096 171.468 153.313-103.986c41.924 10.649 86.283 16.361 132.184 16.361 259.029 0 469.027-181.847 469.027-406.18 0-224.33-209.997-406.175-469.027-406.175z"  ></path></symbol>
	<use xlink:href="#icon-dialogfill"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconDialogfill', [])
	.component(`iconDialogfill`, ddo)
	.name;