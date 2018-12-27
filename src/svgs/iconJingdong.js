import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-jingdong" viewBox="0 0 1024 1024"><path d="M246.033 163.567v476.228c0 69.905-55.159 135.987-122.88 135.987-32.222 0-57.89 0-77.551-0.546v84.651c24.030 3.277 50.244 3.823 77.551 3.823 120.695 0 217.907-100.489 217.907-223.915v-476.228h-95.027z"  ></path><path d="M669.286 160.29h-225.553v703.966h225.553c153.463 0 309.111-150.733 309.111-349.525 0-204.254-155.648-354.441-309.111-354.441zM681.847 773.598h-148.548v-516.642h148.548c111.411 0 202.069 117.419 202.069 257.775s-90.658 258.867-202.069 258.867z"  ></path></symbol>
	<use xlink:href="#icon-jingdong"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconJingdong', [])
	.component(`iconJingdong`, ddo)
	.name;