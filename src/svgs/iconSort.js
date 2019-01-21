import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-sort" viewBox="0 0 1024 1024"><path d="M614.4 599.2448 614.4 121.856 409.6 121.856l0 477.3888L202.752 599.2448 512 908.288l309.248-309.0432L614.4 599.2448z"  ></path></symbol>
	<use xlink:href="#icon-sort"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconSort', [])
	.component(`iconSort`, ddo)
	.name;