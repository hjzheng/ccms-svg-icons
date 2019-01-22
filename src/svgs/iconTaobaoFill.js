import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-taobao-fill" viewBox="0 0 1024 1024"><path d="M62.527 739.021c0.352 20.215 1.582 40.606 5.010 58.887 3.779 19.864 8.789 37.969 18.018 56.162 9.317 18.281 21.973 34.19 35.771 48.34 14.151 13.799 30.059 26.631 48.428 35.947 18.193 9.141 36.123 14.151 55.987 17.93 18.281 3.428 38.672 4.658 58.974 5.185 6.768 0.175 12.656 0.175 26.982 0.352 13.623 0.176 24.873 0.176 33.047 0.176h334.336c8.262 0 19.336 0 33.047-0.176 14.326-0.176 20.215-0.176 26.982-0.352 20.215-0.352 40.605-1.758 58.974-5.185 19.864-3.779 38.057-8.789 55.987-17.93 18.369-9.317 34.19-22.148 48.428-35.947 13.799-14.151 26.631-30.059 35.947-48.34 9.141-18.106 14.151-36.123 18.018-56.162 3.428-18.106 4.658-38.672 5.185-58.887 0.175-6.768 0.175-12.568 0.352-26.982 0.176-13.623 0.176-24.873 0.176-32.959v-334.336c0.176-8.086 0.176-19.336 0-32.959-0.176-14.326-0.176-20.215-0.352-26.982-0.352-20.215-1.758-40.606-5.185-58.887-3.779-19.864-8.789-37.969-18.018-56.162-9.317-18.281-22.148-34.19-35.947-48.34-14.151-13.799-30.059-26.631-48.428-35.947-18.369-9.141-36.387-14.151-56.25-17.93-18.193-3.428-38.76-4.658-58.974-5.010-6.768-0.176-12.656-0.176-26.982-0.352-13.623-0.176-24.697-0.176-32.959-0.176h-334.336c-8.262 0-19.336 0-33.047 0.176-14.326 0.175-20.215 0.175-26.982 0.352-20.215 0.352-40.606 1.758-58.974 5.185-19.864 3.779-38.057 8.789-56.162 17.93-18.281 9.317-34.19 22.148-48.428 35.947-13.799 14.151-26.631 30.059-35.771 48.34-9.141 18.106-14.151 36.123-18.018 56.162-3.428 18.106-4.834 38.672-5.010 58.887-0.176 6.768-0.176 12.568-0.352 26.982v367.119c0 8.262 0 19.336 0.176 32.959 0.176 14.414 0.176 20.215 0.352 26.982zM409.256 227.674l90.088 25.576s-7.295 17.754-22.852 44.912c359.912-103.447 381.182 63.369 381.182 63.369s23.291 115.313 4.482 296.367c-19.072 180.791-250.84 113.467-250.84 113.467l12.656-51.855 53.789 11.602c99.229 6.416 89.56-81.563 89.56-81.563v-255.762c0.703-97.207-90.088-107.403-253.213-48.164l37.881 10.547c-3.076 11.25-15.381 29.004-31.289 48.339h218.32v44.912h-122.872v55.987h122.344v44.912h-122.344v93.779c18.457-6.065 35.42-14.502 50.098-25.752l-10.723-40.781 57.744-18.281 48.252 119.531-71.016 30.059-12.656-47.637c-31.817 24.697-97.646 60.469-212.959 57.129-122.872 3.252-91.23-140.8-91.23-140.8l3.076-1.583h86.572c-0.703 18.458-8.086 48.691 2.109 65.127 8.438 13.447 30.059 15.732 43.769 16.612 1.583 0.176 3.252 0.176 4.658 0.176v-107.49h-125.156v-44.912h125.156v-55.898h-32.52c-28.213 30.234-53.965 55.459-53.965 55.459l-37.881-33.487c26.982-28.828 53.789-74.443 70.313-104.677-13.447 5.537-27.334 11.602-41.661 17.754-13.799 18.105-29.883 36.474-47.901 54.756 0.703 0.879-62.051-35.771-62.051-35.771 64.776-55.987 101.075-175.957 101.075-175.957zM279.266 237.781c35.244 0 63.984 26.104 63.984 58.359s-28.653 58.359-63.984 58.359c-35.596 0-64.336-26.279-64.336-58.359 0.176-32.432 28.74-58.359 64.336-58.359zM286.56 562.537c23.643-48.34-26.279-74.092-26.279-74.092l-74.707-47.109 40.606-63.193c56.162 42.451 60.293 45.967 98.174 84.638 29.356 30.234 25.576 71.631 8.262 125.947-16.963 53.174-12.656 33.487-79.893 181.846l-97.119-61.7c0.088-0.088 108.809-100.459 130.957-146.338z"  ></path></symbol>
	<use xlink:href="#icon-taobao-fill"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconTaobaoFill', [])
	.component(`iconTaobaoFill`, ddo)
	.name;