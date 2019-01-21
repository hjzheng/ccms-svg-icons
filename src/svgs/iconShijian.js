import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-shijian" viewBox="0 0 1024 1024"><path d="M512 62C264.4 62 62 263.1 62 512c0 247.6 201.1 450 450 450s450-201.1 450-450C960.7 264.4 759.6 62 512 62z m262.7 559.4H449.2V273.3h115.6v232.5h209.9v115.6z"  ></path></symbol>
	<use xlink:href="#icon-shijian"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconShijian', [])
	.component(`iconShijian`, ddo)
	.name;