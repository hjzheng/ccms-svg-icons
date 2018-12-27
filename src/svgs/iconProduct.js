import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-product" viewBox="0 0 1024 1024"><path d="M869.75 62h-715.59c-50.85 0-92.16 41.31-92.16 92.16v715.68c0 50.85 41.31 92.16 92.16 92.16h715.59c50.85 0 92.16-41.31 92.16-92.16v-715.77c0-50.85-41.31-92.070-92.16-92.070zM788.21 317.69l-1.89 0.99-0.27 2.16c-19.53 135.45-137.43 237.6-274.050 237.6s-254.52-102.15-274.14-237.51l-0.27-2.16-1.89-0.99c-13.59-8.1-21.69-21.69-21.69-36.72 0-23.76 19.26-43.020 43.11-43.020 23.76 0 43.020 19.26 43.020 43.020 0 12.51-5.67 24.21-16.020 32.76l-2.070 1.62 0.45 2.52c18.090 113.49 114.57 195.84 229.5 195.84s211.41-82.44 229.5-195.93l0.45-2.43-1.98-1.62c-10.44-8.64-16.020-20.25-16.020-32.76 0-23.76 19.26-43.020 43.020-43.020s43.11 19.26 43.11 43.020c-0.090 14.94-8.19 28.62-21.87 36.63z"  ></path></symbol>
	<use xlink:href="#icon-product"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconProduct', [])
	.component(`iconProduct`, ddo)
	.name;