import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-cl-yhd" viewBox="0 0 1024 1024"><path d="M814.3 100.4H212c-61.6 0-111.6 50-111.6 111.6v602.3c0 61.6 50 111.6 111.6 111.6h602.3c61.6 0 111.6-50 111.6-111.6V212c0-61.6-50-111.6-111.6-111.6z" fill="#FFFFFF" ></path><path d="M814.3 928.3H212c-62.9 0-114-51.1-114-114V212c0-62.9 51.1-114 114-114h602.3c62.9 0 114 51.1 114 114v602.3c0 62.9-51.1 114-114 114zM212 102.8c-60.2 0-109.2 49-109.2 109.2v602.3c0 60.2 49 109.2 109.2 109.2h602.3c60.2 0 109.2-49 109.2-109.2V212c0-60.2-49-109.2-109.2-109.2H212z" fill="#999999" ></path><path d="M333.6 407.6l-0.1-129.8L171.8 433l49.3-0.7v316.2h112.6V407.6z" fill="#F01514" ></path><path d="M482.7 464.1c50.2 0 90.9-40.7 90.9-90.9s-40.7-90.9-90.9-90.9-90.9 40.7-90.9 90.9 40.7 90.9 90.9 90.9z m0-148c31.6 0 57.2 25.6 57.2 57.2s-25.6 57.2-57.2 57.2-57.2-25.6-57.2-57.2c0-31.7 25.6-57.2 57.2-57.2zM593.2 515.8v-40.7H373.4v40.7h94.3V562c4.8-1 9.8-1.5 14.9-1.5h0.6c6.2 0.1 12.1 0.9 17.9 2.3 33 8.3 57.4 38 57.4 73.5 0 41.9-34 75.9-75.9 75.9-41.5 0-75.1-33.3-75.8-74.6h-32.5c0 59.8 48.5 108.3 108.3 108.3s108.3-48.5 108.3-108.3c0-53.5-38.8-97.7-89.8-106.5v-15.3h92.1z" fill="#221E1F" ></path><path d="M725.8 282.3h35.5v25.6h-35.5zM758.6 526.5V458h79.7v-31h-79.7v-71h92.8v-31H634.8v192h31V356h61.8v170.5c-54 7.6-95.5 53.9-95.5 110 0 61.4 49.8 111.2 111.2 111.2 61.4 0 111.2-49.8 111.2-111.2 0-56.2-41.7-102.5-95.9-110z m-15.3 183.3c-40.4 0-73.2-32.8-73.2-73.2s32.8-73.2 73.2-73.2 73.2 32.8 73.2 73.2-32.7 73.2-73.2 73.2z" fill="#221E1F" ></path></symbol>
	<use xlink:href="#icon-cl-yhd"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconClYhd', [])
	.component(`iconClYhd`, ddo)
	.name;