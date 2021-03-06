import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-taobaowang" viewBox="0 0 1024 1024"><path d="M233.2 179.8c43.5 0 77.7 34.3 77.7 77.8 0 43.4-34.3 77.7-77.7 77.7-43.4 0-77.8-34.3-77.8-77.7C155.4 214.1 189.8 179.8 233.2 179.8L233.2 179.8z"  ></path><path d="M416.2 499.9l-54.9-29.7 107.5-146.4c-48.1 20.6-84.6 52.6-112.1 91.5-2.3 11.4-6.9 20.6-11.4 29.7-27.5-20.6-54.9-41.2-80.1-64 43.4-70.9 86.9-141.8 130.4-215 36.6 13.7 73.2 25.1 109.7 38.9-9.1 20.6-16 41.2-25.1 64 173.8-84.6 443.7-93.8 457.4 96 9.2 121.2 4.6 224.1-9.2 327.1C914.7 808.7 859.9 824.7 789 827c-52.6 0-105.2 0-155.5 0-2.3-18.3-4.6-34.3-4.6-50.3 32 0 64 0 96.1 0 66.3-4.6 96.1-32 98.3-114.3l4.6-166.9c2.3-89.2 6.9-187.5-80-205.8-64-13.8-130.4 4.6-196.7 6.8-11.4 4.6-25.2 6.9-36.6 9.1l50.3 43.5-41.2 41.1 256.1 0 0 54.9-151 0 0 64 151 0 0 45.7-151 0 0 109.8c22.9-4.6 48.1-11.5 70.9-16.1-6.9-13.7-16-27.4-25.2-41.2 20.6-9.1 38.8-18.3 59.4-27.4C779.8 612 798.1 653.1 789 708c-18.3 16-36.6 34.3-54.9 50.4-9.1-18.3-20.6-36.6-29.7-54.9C423 813.2 306.4 776.6 354.4 593.7L455 593.7c0 75.5 13.8 86.9 50.3 89.1 2.3 0 2.3 0 4.6 0L509.9 554.8 356.7 554.8l0-45.7 153.2 0 0-64-29.7 0 0-9.2L416.2 499.9z"  ></path><path d="M171.5 355.8c-18.3 22.9-36.6 45.8-54.9 68.6 93.8 52.6 173.8 116.6 100.6 199-38.8 43.4-89.2 75.5-134.9 114.3 41.2 32.1 82.3 64 123.5 96.1 25.2-57.2 43.5-114.4 80.1-189.8C338.4 534.2 322.4 451.9 171.5 355.8L171.5 355.8z"  ></path></symbol>
	<use xlink:href="#icon-taobaowang"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconTaobaowang', [])
	.component(`iconTaobaowang`, ddo)
	.name;