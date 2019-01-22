import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-consume" viewBox="0 0 1024 1024"><path d="M173.568 985.088c-5.632 0-10.24-4.608-10.24-10.24V50.688c0-5.632 4.608-10.24 10.24-10.24s10.24 4.608 10.24 10.24v924.16c0 5.632-4.608 10.24-10.24 10.24z"  ></path><path d="M974.848 862.208H50.688c-5.632 0-10.24-4.608-10.24-10.24s4.608-10.24 10.24-10.24h924.16c5.632 0 10.24 4.608 10.24 10.24s-4.608 10.24-10.24 10.24zM953.856 646.144c3.072 0 5.632-1.024 7.68-3.584 3.584-4.096 3.072-10.752-1.024-14.336l-262.144-226.304c-4.096-3.584-10.24-3.072-13.824 0.512l-154.624 156.672-272.384-244.224c-4.096-3.584-10.752-3.584-14.336 1.024-3.584 4.096-3.584 10.752 1.024 14.336l280.064 250.88c4.096 3.584 10.24 3.584 14.336-0.512l154.624-156.672 254.976 220.16c1.024 1.024 3.584 2.048 5.632 2.048z"  ></path></symbol>
	<use xlink:href="#icon-consume"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconConsume', [])
	.component(`iconConsume`, ddo)
	.name;