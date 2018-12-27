import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-dengludiannao" viewBox="0 0 1024 1024"><path d="M120.32 378.88l-61.44-64V128s0-65.28 64-65.28h778.24s65.28 0 64 65.28v570.88s0 64-64 64H636.16L638.72 896l-198.4-197.12h460.8V128h-780.8v250.88z"  ></path><path d="M241.92 494.08V227.84H774.4v371.2H340.48zM638.72 896h179.2s47.36 30.72 0 61.44H700.16L638.72 896z"  ></path></symbol>
	<use xlink:href="#icon-dengludiannao"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconDengludiannao', [])
	.component(`iconDengludiannao`, ddo)
	.name;