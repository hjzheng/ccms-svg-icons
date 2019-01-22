import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-nextpage" viewBox="0 0 1024 1024"><path d="M206.864 85.579l659.438 428.751-659.438 428.751v-857.502z"  ></path></symbol>
	<use xlink:href="#icon-nextpage"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconNextpage', [])
	.component(`iconNextpage`, ddo)
	.name;