import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-cargo" viewBox="0 0 1024 1024"><path d="M900.74 212.732l-360.615-146.513c-16.875-5.625-33.838-5.625-50.713 0l-366.153 146.513c-22.5 5.625-39.463 33.838-39.463 56.338v428.203c0 22.5 11.25 45.088 33.838 56.338l366.24 197.138c5.625 11.25 16.875 11.25 28.213 11.25 11.25 0 22.5 0 28.125-5.625l366.24-197.138c22.5-11.25 33.838-33.838 33.838-56.338v-433.828c-0.088-22.588-17.050-50.713-39.551-56.338zM506.375 105.682h11.25l78.838 28.213-349.277 163.301-90.176-50.713 349.365-140.801zM489.5 911.287l-354.99-191.513c-5.625 0-11.25-11.25-11.25-16.875v-428.203l95.801 50.713v169.013c0 5.625 5.625 11.25 11.25 16.875l112.676 56.338c16.875 11.25 33.838 0 33.838-16.875v-140.888l112.675 56.338v445.078zM512 432.459l-107.051-56.338 349.277-174.638 112.676 45.088-354.903 185.888zM895.115 702.81c0 5.625-5.625 11.25-11.25 16.875l-354.99 185.977v-439.453l366.24-191.513v428.115z"  ></path></symbol>
	<use xlink:href="#icon-cargo"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconCargo', [])
	.component(`iconCargo`, ddo)
	.name;