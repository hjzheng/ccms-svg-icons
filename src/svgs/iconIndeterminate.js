import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-indeterminate" viewBox="0 0 1024 1024"><path d="M805.959 64.994h-588.030c-85.827 0-155.625 67.905-155.625 151.345v591.433c0 83.385 69.799 151.235 155.625 151.235h588.030c85.911 0 155.736-67.849 155.736-151.235v-591.433c0-83.439-69.881-151.345-155.736-151.345zM895.849 807.77c0 47.101-40.347 85.416-89.889 85.416h-588.030c-49.515 0-89.752-38.316-89.752-85.416v-591.432c0-47.099 40.238-85.471 89.752-85.471h588.030c49.543 0 89.889 38.371 89.889 85.471v591.432z"  ></path><path d="M282.184 317.508h459.604v388.983h-459.604v-388.983z"  ></path></symbol>
	<use xlink:href="#icon-indeterminate"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconIndeterminate', [])
	.component(`iconIndeterminate`, ddo)
	.name;