import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-radio-checked" viewBox="0 0 1024 1024"><path d="M512.013 62.318c-248.369 0-449.695 201.326-449.695 449.668 0 248.341 201.326 449.694 449.695 449.694 248.342 0 449.667-201.353 449.667-449.694 0-248.342-201.324-449.668-449.667-449.668v0zM512.013 858.754c-191.526 0-346.795-155.242-346.795-346.767 0-191.527 155.27-346.769 346.795-346.769s346.768 155.242 346.768 346.769c0 191.525-155.242 346.767-346.768 346.767v0zM512.013 858.754z"  ></path><path d="M512.013 299.572c-117.309 0-212.413 95.104-212.413 212.414 0 117.308 95.104 212.441 212.413 212.441s212.439-95.133 212.439-212.441c0.001-117.309-95.131-212.414-212.439-212.414v0 0zM512.013 299.572z"  ></path></symbol>
	<use xlink:href="#icon-radio-checked"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconRadioChecked', [])
	.component(`iconRadioChecked`, ddo)
	.name;