import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-line-star" viewBox="0 0 1024 1024"><path d="M773.1 960.8c-10.4 0-21.6-3.2-33.4-9.5l-170.5-90.8c-14.7-7.8-35.6-12.3-57.2-12.3-21.6 0-42.5 4.5-57.2 12.3l-170.5 90.8c-11.8 6.3-23 9.5-33.4 9.5-12.7 0-23.9-5-31.5-14-6.9-8.1-14.1-23.4-9.7-50l32.6-192.4c5.9-35.1-10.3-85.8-35.5-110.6L69 457.7c-24.7-24.4-22.7-45.1-19.4-55.3 3.3-10.1 14-27.9 47.9-32.9l190.7-28.1c34.7-5.1 77.1-36.4 92.7-68.3l85.3-175c15.2-31.2 35.4-35.9 46-35.9 10.7 0 30.8 4.7 46 35.9l85.3 175c15.5 31.9 58 63.1 92.7 68.3l190.6 28.1c33.9 5 44.5 22.7 47.9 32.9 3.3 10.2 5.3 30.9-19.4 55.3l-138 136.2c-25.2 24.8-41.4 75.5-35.5 110.6l32.6 192.4c4.5 26.5-2.8 41.8-9.7 50C797 955.9 785.8 960.8 773.1 960.8zM512 817.5c26.9 0 52.3 5.7 71.6 16l170.5 90.8c9.1 4.8 15.3 5.8 18.9 5.8 4.8 0 6.9-1.8 8-3.1 3.7-4.4 4.7-13.7 2.8-25l-32.6-192.4c-7.7-45.2 11.7-105.6 44.2-137.6l138-136.2c9.1-9 13.7-18.2 11.8-23.9-1.8-5.6-10.7-10.2-23.1-12l-190.7-28.1c-44.9-6.6-95.7-44-115.8-85.2l-85.3-175C523.7 97.9 516.5 93 512 93c-4.5 0-11.7 4.9-18.4 18.6l-85.3 175c-20.1 41.2-70.9 78.6-115.8 85.2l-190.7 28.1c-12.4 1.8-21.3 6.5-23.1 12-1.9 5.7 2.7 14.8 11.8 23.9l138 136.2c32.4 32 51.8 92.4 44.2 137.6L240.1 902c-1.9 11.3-0.9 20.7 2.8 25 1.1 1.3 3.1 3.1 8 3.1 3.6 0 9.9-1 18.9-5.8l170.5-90.8C459.7 823.1 485.1 817.5 512 817.5z"  ></path></symbol>
	<use xlink:href="#icon-line-star"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconLineStar', [])
	.component(`iconLineStar`, ddo)
	.name;