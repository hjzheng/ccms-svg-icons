import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-shift" viewBox="0 0 1085 1024"><path d="M577.41 948.682l0.159-272.313-485.407-0.778-0.382-301.272h485.814l-0.186-272.694 425.044 423.604z"  ></path></symbol>
	<use xlink:href="#icon-shift"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconShift', [])
	.component(`iconShift`, ddo)
	.name;