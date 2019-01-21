import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-pay" viewBox="0 0 1024 1024"><path d="M925.789 176.961h-827.578c-20.039 0-36.211 17.842-36.211 39.903v87.715h900v-87.715c0-22.060-16.172-39.903-36.211-39.903z"  ></path><path d="M444.94 560.164h68.818v-72.685h-68.818v72.685zM175.555 725.926h339.434v-72.685h-339.434v72.685zM400.203 487.479h-224.648v72.685h224.737l-0.088-72.685zM962 368.914v439.893c0 21.094-16.172 38.232-36.211 38.232h-827.578c-20.039 0-36.211-17.138-36.211-38.232v-439.893h900z"  ></path></symbol>
	<use xlink:href="#icon-pay"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconPay', [])
	.component(`iconPay`, ddo)
	.name;