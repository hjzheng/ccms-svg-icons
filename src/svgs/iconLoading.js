import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M515.714 934.707c-90.986 0-179.132-29.054-253.297-84.432-90.658-67.721-149.422-166.571-165.478-278.309-16.057-111.739 12.452-223.15 80.282-313.481 140.138-186.669 406.432-224.679 593.538-84.978 78.425 58.545 134.349 143.087 157.614 237.787 3.932 16.165-6.007 32.549-22.173 36.482-16.275 3.823-32.659-5.899-36.591-22.173-19.879-81.155-67.829-153.572-135.114-203.817-160.345-119.712-388.628-87.054-508.778 72.854-58.218 77.442-82.575 172.906-68.813 268.698 13.762 95.792 64.116 180.551 141.886 238.442 160.454 119.931 388.628 87.163 508.778-72.745 31.457-41.834 52.975-88.801 64.006-139.483 3.604-16.275 19.77-26.652 36.045-23.156 16.384 3.495 26.761 19.661 23.156 35.936-12.889 59.201-38.011 114.033-74.711 162.966-67.939 90.331-167.117 148.986-279.183 165.041-20.426 2.949-40.851 4.369-61.167 4.369z"  ></path></symbol>
	<use xlink:href="#icon-loading"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconLoading', [])
	.component(`iconLoading`, ddo)
	.name;