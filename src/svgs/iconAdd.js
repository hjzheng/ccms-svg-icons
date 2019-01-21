import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-add" viewBox="0 0 1024 1024"><path d="M915.253906 475.039062l-363.574219 0.117188 0-365.039063c0-20.234375-16.425781-36.660156-36.660156-36.660156s-36.660156 16.425781-36.660156 36.660156l0 364.785156-369.335938-0.195313c-0.039063 0-0.078125 0-0.117188 0-20.195313 0-36.582031 16.308594-36.660156 36.5625-0.117188 20.234375 16.269531 36.699219 36.523438 36.777344l369.589844 0.195313 0 365.664063c0 20.273438 16.425781 36.660156 36.660156 36.660156 20.234375 0 36.660156-16.386719 36.660156-36.660156L551.679688 548.476563l363.28125-0.117188c0.078125 0 0.117188 0 0.136719 0 20.195313 0 36.582031-16.308594 36.660156-36.5625S935.449219 475.117188 915.253906 475.039062z"  ></path></symbol>
	<use xlink:href="#icon-add"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconAdd', [])
	.component(`iconAdd`, ddo)
	.name;