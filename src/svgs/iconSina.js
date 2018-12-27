import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-sina" viewBox="0 0 1024 1024"><path d="M 742.804 519.534 c -12.938 -3.875 -21.812 -6.521 -15.021 -23.521 c 14.667 -36.916 16.188 -68.75 0.271 -91.458 c -29.834 -42.625 -111.438 -40.313 -204.979 -1.146 c 0 -0.042 -29.375 12.854 -21.875 -10.437 c 14.396 -46.25 12.229 -85.001 -10.166 -107.375 c -50.75 -50.791 -185.709 1.917 -301.438 117.604 c -86.667 86.688 -137.001 178.542 -137.001 257.979 c 0 151.937 194.833 244.313 385.458 244.313 c 249.895 0 416.105 -145.187 416.105 -260.459 c 0 -69.646 -58.645 -109.167 -111.354 -125.5 Z M 438.575 851.012 c -152.105 15.021 -283.417 -53.75 -293.292 -153.604 s 105.458 -192.958 257.541 -208 c 152.125 -15.042 283.417 53.709 293.292 153.541 c 9.855 99.897 -105.417 193.022 -257.541 208.063 Z M 908.741 241.471 c -60.354 -66.896 -149.355 -92.417 -231.521 -74.938 h -0.042 c -19.001 4.063 -31.125 22.771 -27.062 41.75 c 4.042 19.001 22.75 31.125 41.771 27.084 c 58.437 -12.417 121.687 5.75 164.583 53.27 c 42.854 47.521 54.5 112.334 36.146 169.167 h 0.021 c -5.979 18.5 4.146 38.313 22.667 44.291 c 18.459 5.979 38.291 -4.125 44.291 -22.604 v -0.125 c 25.771 -79.938 9.5 -171.063 -50.854 -237.897 M 816.075 325.095 c -29.375 -32.583 -72.75 -44.958 -112.771 -36.459 c -16.354 3.479 -26.791 19.583 -23.292 35.958 c 3.5 16.313 19.583 26.791 35.917 23.229 v 0.042 c 19.563 -4.146 40.791 1.895 55.146 17.792 c 14.375 15.937 18.25 37.646 12.083 56.687 h 0.021 c -5.125 15.895 3.583 33.001 19.479 38.146 c 15.917 5.104 33.001 -3.583 38.125 -19.521 c 12.583 -38.916 4.708 -83.292 -24.708 -115.875 M 453.762 566.262 c -72.375 -18.833 -154.188 17.25 -185.625 81.021 c -32.02 65.042 -1.062 137.25 72.063 160.854 c 75.749 24.417 165.041 -13.021 196.083 -83.229 c 30.625 -68.625 -7.604 -139.292 -82.522 -158.646 Z M 398.492 732.367 c -14.708 23.479 -46.229 33.75 -69.937 22.916 c -23.396 -10.645 -30.291 -37.917 -15.583 -60.791 c 14.542 -22.791 44.979 -32.938 68.542 -23.062 c 23.834 10.146 31.438 37.229 16.979 60.938 Z M 446.971 670.158 c -5.333 9.084 -17.084 13.479 -26.291 9.687 c -9.062 -3.729 -11.895 -13.895 -6.75 -22.833 c 5.292 -8.896 16.604 -13.229 25.646 -9.646 c 9.167 3.333 12.48 13.626 7.396 22.791 Z"  ></path></symbol>
	<use xlink:href="#icon-sina"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconSina', [])
	.component(`iconSina`, ddo)
	.name;