import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-bell" viewBox="0 0 1024 1024"><path d="M758.032 653.628c8.491-23.724 12.776-48.114 12.776-72.665v-199.257c0-101.66-70.039-190.308-175.102-222.931v-20.102c0-42.291-37.62-76.674-83.82-76.674-46.219 0-83.814 34.384-83.814 76.674v20.102c-105.059 32.623-175.068 121.379-175.068 222.931v199.257c0 24.716 4.284 49.048 12.747 72.665-69.315 3.627-121.932 38.006-121.932 81.225v71.731c0 5.442 4.537 9.886 10.151 9.886h715.815c5.615 0 10.18-4.444 10.18-9.886v-71.731c0-43.219-52.642-77.598-121.932-81.225M585.555 875.186h-147.328c-5.615 0-10.155 4.395-10.155 9.832 0 42.232 37.596 76.669 83.814 76.669 46.201 0 83.82-34.438 83.82-76.669 0-5.438-4.537-9.832-10.151-9.832z"  ></path></symbol>
	<use xlink:href="#icon-bell"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconBell', [])
	.component(`iconBell`, ddo)
	.name;