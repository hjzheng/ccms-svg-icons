import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-rightarrow" viewBox="0 0 1024 1024"><path d="M293.416 73.074c-13.623 14.678-13.535 38.32 0.176 52.911l362.724 383.467-361.143 388.74c-13.623 14.678-13.535 38.32 0.176 52.91 13.799 14.59 36.036 14.414 49.658-0.263l383.818-413.174c0.615-0.615 0.703-1.494 1.318-2.109 0.175-0.175 0.352-0.175 0.44-0.352 6.768-7.295 10.195-16.875 10.195-26.367 0-9.58-3.516-19.248-10.372-26.543l-387.334-409.395c-13.799-14.59-36.036-14.502-49.658 0.175v0z"  ></path></symbol>
	<use xlink:href="#icon-rightarrow"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconRightarrow', [])
	.component(`iconRightarrow`, ddo)
	.name;