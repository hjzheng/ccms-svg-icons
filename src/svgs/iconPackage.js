import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-package" viewBox="0 0 1024 1024"><path d="M724.959 338.503c-12.92-7.295-26.631-13.447-39.99-20.127 2.637-2.901 4.922-4.922 7.207-7.031 23.203-21.445 44.033-46.231 54.844-75.498 5.273-14.151 6.592-20.303 10.195-33.487 6.768-41.572-1.055-66.797-26.543-87.803-34.453-28.388-73.653-31.729-114.961-15.117-2.901 1.143-4.747 2.021-7.646-0.615-53.174-48.692-138.604-49.131-192.129-1.055-2.461 2.286-4.307 2.813-7.558 1.406-21.709-9.668-44.473-11.777-67.763-7.119-44.209 8.789-80.771 45.263-74.268 94.922 5.625 43.154 22.94 80.42 52.646 112.588 6.153 6.592 12.568 12.92 19.161 19.599-1.67 0.791-3.252 1.582-4.922 2.286-152.051 67.237-254.795 213.487-266.836 379.776-3.34 45.967-0.528 91.582 11.426 136.67 18.809 71.016 83.408 124.278 160.928 124.102 182.724-0.44 365.45 0 548.174-0.263 58.711-0.088 103.887-25.576 136.67-71.982 16.7-23.643 24.434-50.362 29.004-78.487 10.547-65.303 8.349-130.078-9.317-193.887-33.662-121.377-105.732-215.156-218.32-278.877z"  ></path></symbol>
	<use xlink:href="#icon-package"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconPackage', [])
	.component(`iconPackage`, ddo)
	.name;