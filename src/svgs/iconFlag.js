import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-flag" viewBox="0 0 1024 1024"><path d="M727.976 138.94c-66.399 0-125.949-16.161-166.614-38.469-40.665-22.397-100.215-38.469-166.614-38.469-66.312 0-125.861 27.579-166.614 49.975v423.080c40.665-22.397 100.215-49.975 166.614-49.975s125.949 16.161 166.614 38.469c40.665 22.397 100.215 38.469 166.614 38.469s125.861-29.599 166.614-51.908v-423.168c-40.753 22.397-100.302 51.997-166.614 51.997v0zM166.475 62c-20.465 0-37.064 16.776-37.064 37.504v824.992c0 20.728 16.6 37.504 37.064 37.504s37.064-16.776 37.064-37.504v-824.992c-0.088-20.728-16.6-37.504-37.064-37.504v0z"  ></path></symbol>
	<use xlink:href="#icon-flag"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconFlag', [])
	.component(`iconFlag`, ddo)
	.name;