import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-cl-jd" viewBox="0 0 1024 1024"><path d="M904.7 142.7c-6.6-8.9-14.4-16.8-23.4-23.4-18.6-13.8-41.5-22.3-66.5-22.3H209.2c-25 0-47.9 8.5-66.6 22.3-8.9 6.6-16.8 14.4-23.4 23.4-13.7 18.6-22.2 41.5-22.2 66.5v605.6c0 25 8.5 47.9 22.3 66.6 6.6 8.9 14.4 16.8 23.4 23.4 18.7 13.8 41.5 22.3 66.6 22.3h605.6c25 0 47.9-8.5 66.6-22.3 8.9-6.6 16.8-14.4 23.4-23.4 13.8-18.7 22.3-41.5 22.3-66.6V209.2c-0.2-25-8.7-47.9-22.5-66.5z" fill="#C9121C" ></path><path d="M392.3 587.5h1.9V259.3h-59.7v326.4c0 67.1-54.1 119.4-119.4 119.4H186v59.7h29.1c97-0.1 177.2-78.4 177.2-177.3zM838 511.1c0-138-98.8-251.8-221.9-251.8H466.9v505.4h149.2c123.1 0 221.9-115.6 221.9-253.6zM526.6 319h89.5c89.5 0 162.3 87.7 164.1 194 0 106.3-74.6 192.1-164.1 192.1h-89.5V319z" fill="#FFFFFF" ></path></symbol>
	<use xlink:href="#icon-cl-jd"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconClJd', [])
	.component(`iconClJd`, ddo)
	.name;