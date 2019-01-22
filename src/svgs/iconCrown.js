import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-crown" viewBox="0 0 1024 1024"><path d="M833.416 416.638c0 20.479 9.756 38.672 24.961 50.273l-171.914 131.396-152.315-285.469c24.609-8.964 42.099-32.256 42.099-59.678 0-35.156-28.74-63.545-64.248-63.545s-64.248 28.477-64.248 63.545c0 27.422 17.578 50.801 42.099 59.678l-152.315 285.469-171.914-131.396c15.205-11.602 24.961-29.795 24.961-50.273 0-35.156-28.74-63.545-64.248-63.545-35.508 0-64.248 28.477-64.248 63.545 0 35.156 28.74 63.545 64.248 63.545 5.801 0 11.426-0.791 16.7-2.197l56.778 256.553c0 55.195 139.834 99.932 312.276 99.932 172.441 0 312.276-44.737 312.276-99.932l56.69-256.553c5.362 1.406 10.987 2.198 16.7 2.198 35.508 0 64.248-28.477 64.248-63.545 0-35.156-28.74-63.545-64.248-63.545-35.508-0.088-64.336 28.388-64.336 63.545z"  ></path></symbol>
	<use xlink:href="#icon-crown"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconCrown', [])
	.component(`iconCrown`, ddo)
	.name;