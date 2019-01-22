import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-jiantouzuo" viewBox="0 0 1024 1024"><path d="M296.304132 537.401124l20.433455 20.467306c3.905587 3.91405 8.378182 6.888727 13.134281 9.008661l397.46433 398.115967c16.637884 16.663273 43.744264 16.527868 60.542942-0.296198l20.281124-20.310744c16.798678-16.824066 16.934083-43.976992 0.296199-60.644496l-377.872926-378.490711 372.139372-372.757157c16.764826-16.794446 16.629421-44.146248-0.296198-61.10995l-20.437686-20.467306c-16.929851-16.963702-44.24357-17.090645-61.008397-0.30043L296.003702 476.286942c-16.764826 16.794446-16.629421 44.154711 0.30043 61.114182z"  ></path></symbol>
	<use xlink:href="#icon-jiantouzuo"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconJiantouzuo', [])
	.component(`iconJiantouzuo`, ddo)
	.name;