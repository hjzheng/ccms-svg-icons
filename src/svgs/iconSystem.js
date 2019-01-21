import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-system" viewBox="0 0 1024 1024"><path d="M519.2 604.4l42.1 41-27 27s-19.7 20.8 6 47.2l211.6 210.3s20.2 18.2 42.6 2.6l105.9-102.8s18.7-24.9-6.2-47.8L684.3 574.3s-22.8-22.3-48.3-3.1l-27.5 28-44.1-43.6-45.2 48.8z m-29-121L263.3 259.7v-69l-133.9-79.4-66.3 64.4 80.8 128.7 71.1 0.5L438.8 525l51.4-41.6z m-366 376.4s0-34.3 35.8-34.3c0 0 32.2 1 33.2 34.3 0 0-1 31.1-34.5 33.2l-29.9 29.6s43.6 40.5 92.9 0l404.4-433.5s44.1 29.6 110.6 29.1c0 0 81.2 3.1 144.8-52.3 0 0 124.3-97.4 60.6-249.9L797.5 355.9 675 234.7 819.6 96.3s-92.1-54-216.7 24.2c0 0-64.4 45-83.8 126 0 0-29.1 96.2 36 182.7L100.5 802.3S72.1 830 86 870.8l38.2-11z m0 0s2.8 32.5 34.5 33.2l-29.9 29.6s-39.3-33.7-42.9-51.7l38.3-11.1z" fill="" ></path></symbol>
	<use xlink:href="#icon-system"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconSystem', [])
	.component(`iconSystem`, ddo)
	.name;