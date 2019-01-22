import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-RMB" viewBox="0 0 1024 1024"><path d="M849.92 51.2l-246.784 419.84h194.56v93.184h-227.328v128h227.328v94.208h-227.328V972.8H453.632v-186.368h-235.52v-94.208h235.52v-128h-235.52V471.04h200.704L174.08 51.2h132.096c114.688 208.896 184.32 340.992 208.896 397.312h2.048c8.192-22.528 30.72-69.632 68.608-139.264L724.992 51.2H849.92z"  ></path></symbol>
	<use xlink:href="#icon-RMB"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconRmb', [])
	.component(`iconRmb`, ddo)
	.name;