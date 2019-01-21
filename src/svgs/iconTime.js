import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-time" viewBox="0 0 1024 1024"><path d="M512.9 959.6c-246.6 0-446.4-199.9-446.4-446.4 0-246.6 199.9-446.4 446.4-446.4 246.6 0 446.4 199.9 446.4 446.4 0.1 246.5-199.8 446.4-446.4 446.4z m0-837.1c-215.7 0-390.6 174.9-390.6 390.6 0 215.7 174.9 390.6 390.6 390.6 215.7 0 390.6-174.9 390.6-390.6 0.1-215.7-174.8-390.6-390.6-390.6z m237.6 446.4h-238c-8.4 0-15.8-3.9-20.9-9.9-4.1-4.8-6.6-10.9-6.6-17.6v-0.2-0.1V261.7c0-15.2 12.5-27.5 27.9-27.5 15.4 0 27.9 12.3 27.9 27.5v251.5h209.6c15.2 0 27.6 12.5 27.5 27.9 0.1 15.4-12.2 27.8-27.4 27.8z" fill="" ></path></symbol>
	<use xlink:href="#icon-time"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconTime', [])
	.component(`iconTime`, ddo)
	.name;