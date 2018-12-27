import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-banyuan" viewBox="0 0 1024 1024"><path d="M513.133 1001.253c-274.159 0-497.214-223.041-497.214-497.214 0.014-274.159 223.055-497.214 497.214-497.214s497.214 223.055 497.214 497.214c0 62.86-11.714 124.354-34.83 182.75l-25.381-10.035c21.845-55.2 32.905-113.309 32.905-172.715 0-259.1-210.794-469.907-469.907-469.907s-469.893 210.807-469.893 469.907 210.794 469.907 469.907 469.907c94.604 0 185.808-28.003 263.769-81.005l15.36 22.582c-82.521 56.087-179.036 85.729-279.142 85.729z"  ></path></symbol>
	<use xlink:href="#icon-banyuan"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconBanyuan', [])
	.component(`iconBanyuan`, ddo)
	.name;