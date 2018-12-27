import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-nextpage" viewBox="0 0 1024 1024"><path d="M206.864 85.579l659.438 428.751-659.438 428.751v-857.502z"  ></path></symbol>
	<use xlink:href="#icon-nextpage"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconNextpage', [])
	.component(`iconNextpage`, ddo)
	.name;