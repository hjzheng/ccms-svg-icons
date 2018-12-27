import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-checkbox" viewBox="0 0 1024 1024"><path d="M805.055 62h-586.108c-85.693 0-155.508 68.11-155.508 152.057v595.886c0 83.947 69.814 152.057 155.508 152.057h586.108c85.693 0 155.508-68.11 155.508-152.057v-595.886c0-83.947-69.814-152.057-155.508-152.057v0zM894.362 809.943c0 47.628-40.027 86.025-89.307 86.025h-586.108c-49.253 0-89.306-38.396-89.306-86.025v-595.886c0-47.627 40.053-85.969 89.306-85.969v0h586.108c49.282 0 89.307 38.342 89.307 85.969v595.886zM894.362 809.943z"  ></path></symbol>
	<use xlink:href="#icon-checkbox"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconCheckbox', [])
	.component(`iconCheckbox`, ddo)
	.name;