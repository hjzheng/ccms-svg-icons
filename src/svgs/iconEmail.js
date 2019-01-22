import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-email" viewBox="0 0 1024 1024"><path d="M954.163 258.014c-2.355 19.866-11.162 38.912-26.214 53.965l-350.31 350.413c-35.84 35.84-94.515 35.84-130.355 0l-350.208-350.31c-15.155-15.155-23.859-34.304-26.214-53.965-0.41 3.789-0.717 7.578-0.717 11.469v479.232c0 50.688 41.472 92.16 92.16 92.16h700.416c50.688 0 92.16-41.472 92.16-92.16v-479.334c0-3.891-0.307-7.68-0.717-11.469z"  ></path><path d="M577.638 595.319l367.206-367.309c-15.155-30.003-46.49-50.688-82.227-50.688h-700.416c-35.738 0-66.97 20.685-82.227 50.688l367.206 367.309c36.045 35.84 94.618 35.84 130.458 0z"  ></path></symbol>
	<use xlink:href="#icon-email"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconEmail', [])
	.component(`iconEmail`, ddo)
	.name;