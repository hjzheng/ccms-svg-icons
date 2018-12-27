import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-diannao" viewBox="0 0 1025 1024"><path d="M974.458 806.132H660.65v81.725l66.048 65.34v16.336H297.3v-16.335l66.048-65.341v-81.725H49.566c-27.38 0-49.542-21.943-49.542-49.055v-653.58c0-27.063 22.163-49.03 49.542-49.03h924.892c27.38 0 49.566 21.943 49.566 49.03v653.605c0 27.087-22.186 49.03-49.566 49.03z m-16.53-686.275H66.072V675.45h891.856V119.857z"  ></path></symbol>
	<use xlink:href="#icon-diannao"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconDiannao', [])
	.component(`iconDiannao`, ddo)
	.name;