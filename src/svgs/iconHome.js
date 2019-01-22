import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-home" viewBox="0 0 1025 1024"><path d="M936.951 615.008c-6.856 0-13.711-2.989-18.721-8.965l-375.557-450c-8.438-10.107-19.512-15.645-31.114-15.645s-22.676 5.625-31.114 15.732l-374.766 450c-9.141 10.987-24.961 11.953-35.244 2.197-10.372-9.756-11.25-26.543-2.109-37.529l374.766-450.088c18.018-21.622 42.364-33.575 68.467-33.575h0.088c26.104 0 50.45 11.953 68.379 33.487l375.645 450.088c9.229 10.987 8.262 27.773-2.109 37.617-4.747 4.482-10.635 6.68-16.612 6.68v0zM811.268 564.295v266.045c0 29.355-22.412 53.174-49.922 53.174h-99.932v-212.783c0-58.711-44.825-106.435-99.932-106.435h-99.844c-55.107 0-99.932 47.724-99.932 106.435v212.871h-99.932c-27.51 0-49.922-23.818-49.922-53.174v-266.133h-49.922v266.045c0 58.711 44.825 106.435 99.932 106.435h149.854v-266.045c0-29.356 22.412-53.174 49.922-53.174h99.932c27.598 0 49.922 23.906 49.922 53.174v266.045h149.854c55.107 0 99.932-47.724 99.932-106.435v-266.045h-50.010z"  ></path></symbol>
	<use xlink:href="#icon-home"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconHome', [])
	.component(`iconHome`, ddo)
	.name;