import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-lastpage" viewBox="0 0 1024 1024"><path d="M173.067 884.736v-753.664l580.71 376.831-580.71 376.831zM850.954 777.114h-104.243v-538.318h104.243v538.318z"  ></path></symbol>
	<use xlink:href="#icon-lastpage"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconLastpage', [])
	.component(`iconLastpage`, ddo)
	.name;