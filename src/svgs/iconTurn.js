import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-turn" viewBox="0 0 1024 1024"><path d="M841.66 580.727h-206.016v-261.603c0-8.957-7.552-16.246-16.773-16.246h-213.743c-9.308 0-16.773 7.289-16.773 16.246v261.603h-206.016c-18.88 0-28.452 23.271-15.104 36.97l329.66 337.914c8.343 8.518 21.866 8.518 30.121 0l329.66-337.914c13.436-13.7 3.952-36.97-15.016-36.97z"  ></path><path d="M625.633 239.037h-227.179c-5.62 0-10.187-5.357-10.187-11.943v-44.435c0-6.587 4.567-11.943 10.187-11.943h227.091c5.62 0 10.187 5.357 10.187 11.943v44.435c0 6.674-4.567 11.943-10.099 11.943z"  ></path><path d="M625.546 130.233h-227.091c-5.62 0-10.187-5.357-10.187-11.943v-44.347c0-6.587 4.567-11.943 10.187-11.943h227.091c5.62 0 10.187 5.357 10.187 11.943v44.435c0 6.499-4.567 11.855-10.187 11.855z"  ></path></symbol>
	<use xlink:href="#icon-turn"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconTurn', [])
	.component(`iconTurn`, ddo)
	.name;