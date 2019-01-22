import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-lock" viewBox="0 0 1024 1024"><path d="M826.82 429.29h-72.72v-145.26c0-133.74-108.36-222.030-242.1-222.030s-242.1 88.29-242.1 222.030v145.26h-72.63c-40.14 0-72.63 32.49-72.63 72.63v387.45c0 40.14 32.49 72.63 72.63 72.63h629.55c40.14 0 72.63-32.49 72.63-72.63v-387.45c0-40.14-32.58-72.63-72.63-72.63zM512 807.83c-31.32 0-56.7-25.38-56.7-56.7 0-19.35 9.72-36.36 24.48-46.62v-38.52c0-17.73 14.49-32.22 32.22-32.22v0c17.73 0 32.22 14.49 32.22 32.22v38.52c14.76 10.26 24.48 27.27 24.48 46.62 0 31.32-25.38 56.7-56.7 56.7zM681.47 429.29v0h-338.94v-121.050c0-93.6 75.87-169.47 169.47-169.47s169.47 75.87 169.47 169.47v121.050z"  ></path></symbol>
	<use xlink:href="#icon-lock"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconLock', [])
	.component(`iconLock`, ddo)
	.name;