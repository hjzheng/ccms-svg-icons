import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-cl-wx" viewBox="0 0 1024 1024"><path d="M904.7 142.7c-6.6-8.9-14.4-16.8-23.4-23.4-18.6-13.8-41.5-22.3-66.5-22.3H209.2c-25 0-47.9 8.5-66.6 22.3-8.9 6.6-16.8 14.4-23.4 23.4-13.7 18.6-22.2 41.5-22.2 66.5v605.6c0 25 8.5 47.9 22.3 66.6 6.6 8.9 14.4 16.8 23.4 23.4 18.7 13.8 41.5 22.3 66.6 22.3h605.6c25 0 47.9-8.5 66.6-22.3 8.9-6.6 16.8-14.4 23.4-23.4 13.8-18.7 22.3-41.5 22.3-66.6V209.2c-0.2-25-8.7-47.9-22.5-66.5z" fill="#51C333" ></path><path d="M414.4 587.8c0-105.1 100.6-190.5 224.4-190.5 6.4 0 12.7 0.3 18.9 0.7-20.6-92.7-118.1-162.8-235.4-162.8-132.3 0-239.5 89.3-239.5 199.5 0 62.5 26.6 112.8 80.9 149.3 10.5 7.1-10.5 88.5-10.5 88.5s65.2-41.3 94.6-43.6c20.9-1.6 50.7 4.9 73.3 5.1-4.5-14.9-6.7-30.2-6.7-46.2z m97.1-247.4c16.5 0 30 13.5 30 30s-13.5 30-30 30c-16.6 0-30-13.5-30-30s13.4-30 30-30z m-177.6 60c-16.6 0-30-13.5-30-30 0-16.6 13.4-30 30-30 16.5 0 29.9 13.5 29.9 30 0 16.6-13.4 30-29.9 30z" fill="#FFFFFF" ></path><path d="M436.5 587.8c0 93.1 90.6 168.5 202.3 168.5 19.1 0 45-5.8 63-4.4 24.8 1.9 79.9 36.9 79.9 36.9s-17.8-68.8-9-74.8c45.8-30.9 68.4-73.3 68.4-126.3 0-93-90.6-168.5-202.3-168.5-111.7 0.1-202.3 75.6-202.3 168.6z m251.7-54.1c0-13.9 11.3-25.3 25.3-25.3 14.1 0 25.4 11.3 25.4 25.3s-11.3 25.5-25.4 25.5c-13.9-0.1-25.3-11.5-25.3-25.5z m-150.1 0c0-13.9 11.4-25.3 25.4-25.3 14 0 25.3 11.3 25.3 25.3s-11.3 25.5-25.3 25.5c-14-0.1-25.4-11.5-25.4-25.5z" fill="#FFFFFF" ></path></symbol>
	<use xlink:href="#icon-cl-wx"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconClWx', [])
	.component(`iconClWx`, ddo)
	.name;