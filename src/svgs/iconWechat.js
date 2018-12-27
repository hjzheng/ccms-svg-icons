import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-wechat" viewBox="0 0 1024 1024"><path d="M 675.742 363.034 c 10.645 0 21.125 0.813 31.646 1.958 c -28.354 -132.042 -169.479 -230.125 -330.625 -230.125 c -180.125 0 -327.667 122.73 -327.667 278.667 c 0 89.98 49.062 163.875 131.125 221.27 l -32.75 98.542 l 114.562 -57.396 c 40.958 8.042 73.834 16.375 114.75 16.375 c 10.291 0 20.479 -0.459 30.542 -1.209 c -6.375 -21.937 -10.125 -44.833 -10.125 -68.75 c 0.063 -143.146 122.958 -259.333 278.542 -259.333 Z M 499.617 274.221 c 24.771 0 41.021 16.25 41.021 40.916 c 0 24.542 -16.25 40.958 -41.021 40.958 c -24.479 0 -49.125 -16.437 -49.125 -40.958 c 0 -24.729 24.583 -40.916 49.125 -40.916 Z M 270.304 356.096 c -24.583 0 -49.354 -16.437 -49.354 -40.958 c 0 -24.646 24.771 -40.916 49.354 -40.916 s 40.916 16.208 40.916 40.916 c 0.001 24.521 -16.311 40.958 -40.916 40.958 Z M 974.887 618.429 c 0 -131.001 -131.125 -237.75 -278.375 -237.75 c -155.937 0 -278.667 106.813 -278.667 237.75 c 0 131.355 122.791 237.75 278.667 237.75 c 32.625 0 65.563 -8.166 98.313 -16.375 l 89.854 49.292 l -24.645 -81.917 c 65.792 -49.417 114.854 -114.853 114.854 -188.75 Z M 606.138 577.408 c -16.25 0 -32.75 -16.208 -32.75 -32.75 c 0 -16.313 16.5 -32.75 32.75 -32.75 c 24.875 0 41.021 16.437 41.021 32.75 c 0 16.542 -16.146 32.75 -41.021 32.75 Z M 786.387 577.408 c -16.146 0 -32.583 -16.208 -32.583 -32.75 c 0 -16.313 16.375 -32.75 32.583 -32.75 c 24.646 0 41.021 16.437 41.021 32.75 c 0 16.542 -16.374 32.75 -41.021 32.75 Z"  ></path></symbol>
	<use xlink:href="#icon-wechat"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconWechat', [])
	.component(`iconWechat`, ddo)
	.name;