import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-pen" viewBox="0 0 1024 1024"><path d="M962 326.287l-529.453 529.541-264.375-264.375 529.541-529.453 264.287 264.287zM62 697.713l264.287 264.287h-264.287v-264.287z"  ></path></symbol>
	<use xlink:href="#icon-pen"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconPen', [])
	.component(`iconPen`, ddo)
	.name;