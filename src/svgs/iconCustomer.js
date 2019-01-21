import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-customer" viewBox="0 0 1024 1024"><path d="M319.027 321.223c0 106.571 86.393 192.965 192.965 192.965s192.965-86.393 192.965-192.965-86.393-192.964-192.965-192.964c-106.572 0-192.965 86.393-192.965 192.964v0zM511.993 610.658c-156.509 0-295.6 74.545-383.731 190.055v95.028h767.481v-95.028c-88.147-115.509-227.232-190.055-383.749-190.055v0z"  ></path></symbol>
	<use xlink:href="#icon-customer"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconCustomer', [])
	.component(`iconCustomer`, ddo)
	.name;