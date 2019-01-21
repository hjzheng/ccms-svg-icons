import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-narrow" viewBox="0 0 1024 1024"><path d="M129.955 894.738 706.51 894.738l0-579.34L129.955 315.398 129.955 894.738zM713.26 961.736 123.205 961.736c-33.498 0-60.75-27.05-60.75-60.297L62.455 308.698c0-33.249 27.252-60.297 60.75-60.297L713.26 248.401c33.498 0 60.75 27.049 60.75 60.297l0 592.741C774.01 934.688 746.758 961.736 713.26 961.736L713.26 961.736zM900.796 775.598 740.265 775.598l0-66.997 153.78 0 0-579.34L317.487 129.261l0 152.638-67.5 0L249.987 122.561c0-33.249 27.252-60.297 60.75-60.297l590.058 0c33.498 0 60.75 27.05 60.75 60.297l0 592.741C961.545 748.551 934.293 775.599 900.796 775.598L900.796 775.598z"  ></path></symbol>
	<use xlink:href="#icon-narrow"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconNarrow', [])
	.component(`iconNarrow`, ddo)
	.name;