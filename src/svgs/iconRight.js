import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M512 62c-248.555 0-450 201.445-450 450s201.445 450 450 450c248.555 0 450-201.445 450-450 0-248.555-201.445-450-450-450v0zM770.135 395.281l-291.094 291.006c-13.447 13.447-33.838 15.557-49.482 6.328-2.901-1.67-5.625-3.779-8.086-6.328 0 0 0 0 0 0l-167.607-167.519c-15.908-15.908-15.908-41.661 0-57.568s41.661-15.908 57.568 0l138.867 138.692 262.266-262.266c15.908-15.908 41.66-15.908 57.568 0 15.908 15.996 15.908 41.748 0 57.656v0zM770.135 395.281z"  ></path></symbol>
	<use xlink:href="#icon-right"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconRight', [])
	.component(`iconRight`, ddo)
	.name;