import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-share" viewBox="0 0 1024 1024"><path d="M512 62c-247.5 0-450 202.5-450 450s202.5 450 450 450 450-202.5 450-450-202.5-450-450-450zM444.5 519.5v7.5l142.5 97.5c15-30 45-52.5 82.5-52.5 52.5 0 90 37.5 90 90s-37.5 90-90 90-90-37.5-90-90v-7.5l-142.5-97.5c-15 30-45 45-75 45-52.5 0-90-37.5-90-90s37.5-90 90-90c30 0 60 15 75 37.5l142.5-97.5v-15c0-52.5 37.5-90 90-90s90 37.5 90 90-37.5 90-90 90c-30 0-60-15-75-45l-142.5 97.5c-7.5 15-7.5 22.5-7.5 30z"  ></path></symbol>
	<use xlink:href="#icon-share"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconShare', [])
	.component(`iconShare`, ddo)
	.name;