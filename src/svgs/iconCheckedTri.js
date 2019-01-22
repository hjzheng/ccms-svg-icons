import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-checked-tri" viewBox="0 0 1024 1024"><path d="M691.122 332.791l-629.122 629.209h900v-900l-270.879 270.791zM864.529 603.143l-206.719 215.156c-0.088 0.088-0.175 0.088-0.175 0.176-0.088 0-0.088 0.176-0.176 0.176-1.67 1.67-3.604 2.724-5.625 3.867-0.967 0.528-1.67 1.318-2.724 1.758-3.076 1.318-6.328 1.934-9.668 1.934s-6.592-0.615-9.756-1.934c-0.967-0.44-1.758-1.23-2.724-1.758-1.933-1.143-3.955-2.197-5.625-3.955-0.088 0-0.088-0.176-0.176-0.176-0.088-0.088-0.176-0.088-0.176-0.175l-101.602-107.754c-9.932-10.459-9.756-27.334 0.528-37.529 10.195-10.195 26.455-10.020 36.474 0.528l83.32 88.154 188.086-195.908c10.020-10.459 26.367-10.459 36.474-0.176s10.195 27.070 0.263 37.617z"  ></path></symbol>
	<use xlink:href="#icon-checked-tri"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconCheckedTri', [])
	.component(`iconCheckedTri`, ddo)
	.name;