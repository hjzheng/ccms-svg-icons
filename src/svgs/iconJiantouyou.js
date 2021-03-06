import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-jiantouyou" viewBox="0 0 1024 1024"><path d="M808.058711 478.106446l-20.433455-20.467306a43.486149 43.486149 0 0 0-13.134281-9.008661L377.026645 50.514512C360.392992 33.85124 333.286612 33.986645 316.483702 50.814942l-20.281123 20.310744c-16.798678 16.824066-16.934083 43.976992-0.296199 60.644496l377.872926 378.490711-372.139372 372.757157c-16.764826 16.794446-16.629421 44.146248 0.296198 61.10995l20.437686 20.467306c16.929851 16.963702 44.24357 17.090645 61.008397 0.30043l424.976925-425.675108c16.764826-16.794446 16.629421-44.154711-0.300429-61.114182z"  ></path></symbol>
	<use xlink:href="#icon-jiantouyou"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconJiantouyou', [])
	.component(`iconJiantouyou`, ddo)
	.name;