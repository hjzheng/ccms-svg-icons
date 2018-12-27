import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-zhongzhi" viewBox="0 0 1024 1024"><path d="M512 962c-247.5 0-450-202.5-450-450s202.5-450 450-450 450 202.5 450 450S759.5 962 512 962zM512 112.625C292.625 112.625 112.625 292.625 112.625 512s180 399.375 399.375 399.375 399.375-180 399.375-399.375S731.375 112.625 512 112.625z"  ></path><path d="M343.25 343.25l337.5 0 0 337.5-337.5 0 0-337.5Z"  ></path></symbol>
	<use xlink:href="#icon-zhongzhi"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconZhongzhi', [])
	.component(`iconZhongzhi`, ddo)
	.name;