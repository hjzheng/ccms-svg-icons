import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-exclamation-mark" viewBox="0 0 1024 1024"><path d="M512 782c-49.658 0-90 40.254-90 90s40.253 90 90 90c49.747 0 90-40.254 90-90 0-49.658-40.253-90-90-90M512 721.971c49.747 0 90-40.253 90-90v-479.971c0-49.747-40.253-90-90-90-49.658 0-90 40.254-90 90v479.971c0 49.747 40.253 90 90 90z"  ></path></symbol>
	<use xlink:href="#icon-exclamation-mark"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconExclamationMark', [])
	.component(`iconExclamationMark`, ddo)
	.name;