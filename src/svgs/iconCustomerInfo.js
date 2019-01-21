import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-customer_info" viewBox="0 0 1170 1024"><path d="M767.575 307.561h333.578v-77.142h-333.578v77.142zM899.811 706.905h201.342v-77.142h-201.342v77.142zM741.541 436.905v77.142h359.614v-77.142h-359.614zM841.696 875.975c-5.978-170.036-116.164-311.336-266.4-362.572 66.086-40.95 108.192-112.628 108.192-196.65 0-126.964-100.158-231.428-226.35-231.428-124.2 0-226.286 102.408-226.286 231.428 0 81.964 44.036 155.7 108.128 196.714-150.236 49.050-260.358 190.35-266.4 362.508 0 30.728 24.042 55.286 54.064 55.286h666.964c30.086 0 54.064-55.286 48.086-55.286z"  ></path></symbol>
	<use xlink:href="#icon-customer_info"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconCustomerInfo', [])
	.component(`iconCustomerInfo`, ddo)
	.name;