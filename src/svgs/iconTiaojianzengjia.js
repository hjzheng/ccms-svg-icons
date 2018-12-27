import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-tiaojianzengjia" viewBox="0 0 1024 1024"><path d="M484.576 484.576v-137.152a27.424 27.424 0 0 1 54.848 0v137.152h137.152a27.424 27.424 0 0 1 0 54.848h-137.152v137.152a27.424 27.424 0 0 1-54.848 0v-137.152h-137.152a27.424 27.424 0 0 1 0-54.848h137.152z"  ></path><path d="M512 123.744C297.568 123.744 123.744 297.568 123.744 512c0 214.432 173.824 388.256 388.256 388.256 214.432 0 388.256-173.824 388.256-388.256 0-214.432-173.824-388.256-388.256-388.256zM512 64c247.424 0 448 200.576 448 448s-200.576 448-448 448S64 759.424 64 512 264.576 64 512 64z"  ></path></symbol>
	<use xlink:href="#icon-tiaojianzengjia"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconTiaojianzengjia', [])
	.component(`iconTiaojianzengjia`, ddo)
	.name;