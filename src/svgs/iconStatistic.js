import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-statistic" viewBox="0 0 1024 1024"><path d="M230.75 563.563h-112.5c-31.026 0-56.25 25.224-56.25 56.25v281.25c0 31.026 25.224 56.25 56.25 56.25h112.5c31.026 0 56.25-25.224 56.25-56.25v-281.25c0-31.026-25.224-56.25-56.25-56.25zM568.25 57.312h-112.5c-31.026 0-56.25 25.224-56.25 56.25v787.5c0 31.026 25.224 56.25 56.25 56.25h112.5c31.026 0 56.25-25.224 56.25-56.25v-787.5c0-31.026-25.224-56.25-56.25-56.25zM905.75 338.562h-112.5c-31.026 0-56.25 25.224-56.25 56.25v506.25c0 31.026 25.224 56.25 56.25 56.25h112.5c31.026 0 56.25-25.224 56.25-56.25v-506.25c0-31.026-25.224-56.25-56.25-56.25z"  ></path></symbol>
	<use xlink:href="#icon-statistic"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconStatistic', [])
	.component(`iconStatistic`, ddo)
	.name;