import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-info" viewBox="0 0 1024 1024"><path d="M512 287c-31.066 0-56.25 25.184-56.25 56.25s25.184 56.25 56.25 56.25c31.066 0 56.25-25.184 56.25-56.25 0-31.066-25.184-56.25-56.25-56.25zM512 62c-248.5 0-450 201.5-450 450 0 248.575 201.5 450 450 450s450-201.425 450-450c0-248.5-201.5-450-450-450zM512 905.75c-217.475 0-393.75-176.275-393.75-393.75 0-217.5 176.275-393.75 393.75-393.75s393.75 176.25 393.75 393.75c0 217.475-176.275 393.75-393.75 393.75zM540.125 455.75h-56.25c-15.549 0-28.125 12.576-28.125 28.125v225c0 15.549 12.576 28.125 28.125 28.125h56.25c15.549 0 28.125-12.576 28.125-28.125v-225c0-15.549-12.576-28.125-28.125-28.125z"  ></path></symbol>
	<use xlink:href="#icon-info"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconInfo', [])
	.component(`iconInfo`, ddo)
	.name;