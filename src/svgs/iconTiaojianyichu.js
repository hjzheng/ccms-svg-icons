import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-tiaojianyichu" viewBox="0 0 1024 1024"><path d="M347.424 543.36c-15.136 0-27.424-14.208-27.424-31.68 0-17.504 12.288-31.68 27.424-31.68h329.152c15.136 0 27.424 14.176 27.424 31.68 0 17.472-12.288 31.68-27.424 31.68H347.424z"  ></path><path d="M512 128C299.936 128 128 299.936 128 512s171.936 384 384 384 384-171.936 384-384S724.064 128 512 128z m0-64c247.424 0 448 200.576 448 448s-200.576 448-448 448S64 759.424 64 512 264.576 64 512 64z"  ></path></symbol>
	<use xlink:href="#icon-tiaojianyichu"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconTiaojianyichu', [])
	.component(`iconTiaojianyichu`, ddo)
	.name;