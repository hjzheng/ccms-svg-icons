import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-shopping-cart" viewBox="0 0 1025 1024"><path d="M406.88 757.43c-43.2 0-78.12 35.37-78.12 79.11 0 43.65 34.92 79.020 78.12 79.020 43.11 0 78.12-35.37 78.12-79.020 0-43.65-35.010-79.11-78.12-79.11zM763.91 757.43c-43.11 0-78.12 35.37-78.12 79.11 0 43.65 35.010 79.020 78.12 79.020 43.11 0 78.12-35.37 78.12-79.020 0-43.65-35.010-79.11-78.12-79.11zM865.070 527.39l94.86-296.82c4.14-12.6 1.98-21.42-5.67-32.22-7.65-10.71-19.98-7.2-33.030-7.2h-655.56c-0.36 0-0.72 0-1.080 0.090l-12.15-50.22c-4.5-18.45-20.79-32.49-39.51-32.49h-110.16c-22.5 0-40.77 18.63-40.77 41.31 0 22.77 18.18 41.31 40.77 41.31h78.12l122.49 505.62c4.5 18.45 20.79 32.58 39.51 32.58h492.93c22.59 0 40.77-18.54 40.77-41.31s-18.18-41.31-40.77-41.31h-460.98l-20.070-82.71h471.6c17.64-0.18 33.21-19.8 38.7-36.63z"  ></path></symbol>
	<use xlink:href="#icon-shopping-cart"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconShoppingcartB', [])
	.component(`iconShoppingcartB`, ddo)
	.name;