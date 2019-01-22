import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-finish" viewBox="0 0 1024 1024"><path d="M962 246.307l-60.381-60.293-531.914 531.914-247.325-247.412-60.381 60.381 298.916 298.916 8.526 8.174 9.053-8.174 583.506-583.506z"  ></path></symbol>
	<use xlink:href="#icon-finish"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconFinish', [])
	.component(`iconFinish`, ddo)
	.name;