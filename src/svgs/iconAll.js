import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-all" viewBox="0 0 1065 1024"><path d="M622.742 474.031h272.109c25.313 0 44.297-18.984 44.297-44.297v-265.781c0-25.313-18.984-44.297-44.297-44.297h-272.109c-25.313 0-44.297 18.984-44.297 44.297v265.781c-3.164 22.148 18.984 44.297 44.297 44.297z"  ></path><path d="M432.898 116.492h-272.109c-25.313 0-44.297 18.984-44.297 44.297v265.781c0 25.313 18.984 44.297 44.297 44.297h272.109c25.313 0 44.297-18.984 44.297-44.297v-265.781c3.164-25.313-18.984-44.297-44.297-44.297z"  ></path><path d="M432.898 549.969h-272.109c-25.313 0-44.297 18.984-44.297 44.297v268.945c0 25.313 18.984 44.297 44.297 44.297h272.109c25.313 0 44.297-18.984 44.297-44.297v-265.781c3.164-25.313-18.984-47.461-44.297-47.461z"  ></path><path d="M894.852 549.969h-272.109c-25.313 0-44.297 18.984-44.297 44.297v265.781c0 25.313 18.984 44.297 44.297 44.297h272.109c25.313 0 44.297-18.984 44.297-44.297v-265.781c0-22.148-18.984-44.297-44.297-44.297zM888.523 856.883h-262.617v-256.289h262.617v256.289z"  ></path></symbol>
	<use xlink:href="#icon-all"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconAll', [])
	.component(`iconAll`, ddo)
	.name;