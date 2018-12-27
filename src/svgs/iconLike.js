import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-like" viewBox="0 0 1024 1024"><path d="M 256.406 422.48 h -141.758 c -29.844 0 -29.844 29.844 -29.844 29.844 l 29.844 473.731 c 0 29.844 29.844 29.844 29.844 29.844 h 123.086 c 26.113 0 26.113 -18.652 26.113 -18.652 v -477.461 c -3.73 -37.305 -37.285 -37.305 -37.285 -37.305 Z M 883.066 422.48 h -235.001 c 89.531 -335.723 -63.418 -354.375 -63.418 -354.375 c -67.148 0 -52.227 52.227 -55.957 59.687 c 0 164.121 -175.313 294.688 -175.313 294.688 v 470 c 0 44.766 63.418 63.418 89.531 63.418 h 350.645 c 33.574 0 59.687 -85.801 59.687 -85.801 c 85.801 -298.418 85.801 -387.93 85.801 -387.93 c 3.711 -63.418 -55.977 -59.689 -55.977 -59.689 Z"  ></path></symbol>
	<use xlink:href="#icon-like"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconLike', [])
	.component(`iconLike`, ddo)
	.name;