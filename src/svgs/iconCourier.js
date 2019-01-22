import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-Courier" viewBox="0 0 1024 1024"><path d="M763.575 397.58h-414.493c2.545 53.282 25.193 101.385 60.568 136.76 37.569 37.569 89.447 60.742 146.679 60.742 57.32 0 109.197-23.174 146.767-60.742 35.287-35.375 58.022-83.478 60.48-136.76v0zM241.289 397.58h-133.864v-73.91l142.992-14.66c34.585-141.763 162.479-247.011 314.864-247.011 178.981 0 324.169 145.187 324.169 324.257 0 3.775-0.088 7.549-0.263 11.324h-41.783c-2.545 76.456-34.585 145.45-85.058 196.011-52.756 52.756-125.525 85.322-206.018 85.322-80.406 0-153.262-32.566-205.93-85.322-50.473-50.473-82.6-119.555-85.146-196.011h-23.963zM307.035 724.908h166.605v77.333h186.882v-77.333h152.824l103.141 237.092h-683.273l73.822-237.092z"  ></path></symbol>
	<use xlink:href="#icon-Courier"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconCourier', [])
	.component(`iconCourier`, ddo)
	.name;