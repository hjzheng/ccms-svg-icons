import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-rename" viewBox="0 0 1024 1024"><path d="M259.759 812.592l0.582 0.582 581.959-582.542-188.743-188.743-582.542 581.959-12.234 201.559 200.977-12.816z"  ></path><path d="M58.782 901.721h929.738v56.507h-929.738v-56.507z"  ></path></symbol>
	<use xlink:href="#icon-rename"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconRename', [])
	.component(`iconRename`, ddo)
	.name;