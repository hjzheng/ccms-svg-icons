import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-number-full" viewBox="0 0 1024 1024"><path d="M720.2 955.5c-57.7 0-132.2-38.5-184.6-70.7-70.1-43.2-145.6-103-212.7-168.3l-0.2-0.2-21.3-21.3c-65.3-67-125.1-142.6-168.3-212.7-32.3-52.4-70.7-126.9-70.7-184.6 0-61.8 44.2-127.3 63.2-152.6 14.8-19.8 66.6-84.2 110.6-84.2 18.1 0 37.5 11.8 63.1 38.3 22.6 23.4 44.3 52.6 58.5 72.9 19.1 27.3 36.8 55.8 49.7 80.4 21 39.8 23.4 56.9 23.4 66.3 0 18.9-9.9 35.3-29.4 48.8-12.8 8.9-28.2 15.5-43.1 22-10 4.3-26.1 11.3-32.2 16.2 2.1 9 11.5 30.9 36.7 67.9 23.5 34.5 53.9 71.9 81.4 100.1 28.2 27.5 65.6 57.8 100.1 81.3 37 25.2 58.9 34.6 67.9 36.7 4.9-6.1 11.8-22.2 16.2-32.2 6.4-14.9 13.1-30.3 22-43.1 13.4-19.5 29.9-29.4 48.8-29.4 9.4 0 26.4 2.4 66.3 23.4 24.6 13 53.1 30.6 80.4 49.7 20.3 14.2 49.5 35.9 72.9 58.5 26.5 25.6 38.3 45 38.3 63.1 0 44-64.5 95.8-84.2 110.6-25.5 18.9-91 63.1-152.8 63.1" fill="#333333" ></path></symbol>
	<use xlink:href="#icon-number-full"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconNumberFull', [])
	.component(`iconNumberFull`, ddo)
	.name;