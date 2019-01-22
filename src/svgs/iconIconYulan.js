import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-icon_yulan" viewBox="0 0 1024 1024"><path d="M512 736a224 224 0 1 1 0-448 224 224 0 0 1 0 448z m0-64a160 160 0 1 0 0-320 160 160 0 0 0 0 320z"  ></path><path d="M512 864C323.232 864 154.144 751.264 5.44 529.856a32 32 0 0 1 0-35.712C154.144 272.704 323.2 160 512 160c188.768 0 357.856 112.736 506.56 334.144a32 32 0 0 1 0 35.712C869.856 751.296 700.8 864 512 864z m0-64c159.84 0 306.72-94.784 441.248-288C818.72 318.784 671.84 224 512 224c-159.84 0-306.72 94.784-441.248 288 134.528 193.216 281.408 288 441.248 288z"  ></path></symbol>
	<use xlink:href="#icon-icon_yulan"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconIconYulan', [])
	.component(`iconIconYulan`, ddo)
	.name;