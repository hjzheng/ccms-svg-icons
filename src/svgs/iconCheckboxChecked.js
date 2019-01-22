import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-checkbox-checked" viewBox="0 0 1024 1024"><path d="M805.163 62h-586.298c-85.721 0-155.426 68.214-155.426 152.103v595.849c0 83.834 69.705 152.048 155.426 152.048h586.298c85.639 0 155.398-68.214 155.398-152.048v-595.849c0-83.888-69.76-152.103-155.398-152.103zM894.416 809.897c0 47.46-40.027 86.071-89.253 86.071h-586.298c-49.282 0-89.334-38.557-89.334-86.071v-595.849c0-47.458 40.054-86.127 89.334-86.127v0.055h586.298c49.225 0 89.253 38.613 89.253 86.127v595.793z"  ></path><path d="M803.493 372.703l-340.825 340.197c-8.46 8.409-19.931 11.303-28.337 7.866-4.575-1.365-9.2-4.042-13.196-7.866l-199.808-189.732c-10.924-10.375-13.331-25.506-5.393-33.807l31.594-33.152c7.942-8.302 23.162-6.665 34.087 3.715l159.258 151.282 300.692-300.109c10.457-10.485 25.545-12.397 33.729-4.315l32.47 32.332c8.103 8.083 6.187 23.102-4.272 33.588v0z"  ></path></symbol>
	<use xlink:href="#icon-checkbox-checked"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconCheckboxChecked', [])
	.component(`iconCheckboxChecked`, ddo)
	.name;