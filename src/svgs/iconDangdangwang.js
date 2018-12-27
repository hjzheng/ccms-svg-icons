import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-dangdangwang" viewBox="0 0 1024 1024"><path d="M 95.1 286.9 c 0 31.812 25.788 57.6 57.6 57.6 s 57.6 -25.788 57.6 -57.6 c 0 0 0 0 0 0 c 0 -31.812 -25.788 -57.6 -57.6 -57.6 c -31.812 0 -57.6 25.788 -57.6 57.6 Z"  ></path><path d="M 171.7 666.5 c 33.001 47.1 90.5 78.4 156 78.4 c 102.4 0 180.4 -76.4 180.4 -170.7 s -78 -170.7 -180.4 -170.7 c -67.001 0 -125.7 32.7 -158.3 81.7 c 0 0 -23.2 21.2 -46.9 2.201 c -27.2 -25.1 -1.6 -66.1 -1.6 -66.1 c 41.001 -47.001 100.5 -79.7 168.4 -88.7 l -0.7 -100.8 c 0 0 11.401 -26.201 38.601 -26 s 38.199 26.201 38.199 26.201 l 0.1 100.5 c 128.5 16.9 217.2 118.7 217.2 241.7 c 0 134.8 -108.5 244.1 -255.001 244.1 c -86.601 0 -163.5 -38.199 -211.9 -97.3 c 0 0 -17.2 -38.7 6.8 -54.9 c 23.9 -16.3 49.1 0.4 49.1 0.4 Z"  ></path><path d="M 455.6 286.9 c 0 0 0 0 0 0 c 0 31.812 25.788 57.6 57.6 57.6 c 31.812 0 57.6 -25.788 57.6 -57.6 c 0 0 0 0 0 0 c 0 0 0 0 0 0 c 0 -31.812 -25.788 -57.6 -57.6 -57.6 c -31.812 0 -57.6 25.788 -57.6 57.6 s 0 0 0 0 Z"  ></path><path d="M 811.6 286.9 c 0 0 0 0 0 0 c 0 31.812 25.788 57.6 57.6 57.6 c 31.812 0 57.6 -25.788 57.6 -57.6 c 0 0 0 0 0 0 c 0 0 0 0 0 0 c 0 -31.812 -25.788 -57.6 -57.6 -57.6 c -31.812 0 -57.6 25.788 -57.6 57.6 s 0 0 0 0 Z"  ></path><path d="M 428.5 577.801 c 0 20.7 -16.8 37.6 -37.6 37.6 h -280.601 c -20.7 0 -37.6 -16.8 -37.6 -37.6 v 0 c 0 -20.7 16.8 -37.6 37.6 -37.6 h 280.601 c 20.7 0.1 37.6 16.9 37.6 37.6 v 0 Z"  ></path><path d="M 595.7 717.6 c 29.001 17.2 63.5 27.3 100.601 27.3 c 102.4 0 180.4 -76.4 180.4 -170.7 s -78 -170.7 -180.4 -170.7 c -37.001 0 -71.5 10 -100.4 27.1 l -41.7 -62.5 c 30.8 -18 65.9 -30.4 103.6 -35.401 l -0.7 -100.8 c 0 0 11.401 -26.201 38.601 -26 s 38.201 26.199 38.201 26.199 l 0.1 100.5 c 128.7 16.8 217.401 118.599 217.401 241.6 c 0 134.8 -108.5 244.1 -255.001 244.1 c -50.9 0 -98.5 -13.2 -138.9 -36.1 l 38.201 -64.601 Z"  ></path><path d="M 633.9 540.3 h 125.5 c 20.7 0 37.6 16.8 37.6 37.6 v 0 c 0 20.7 -16.8 37.6 -37.6 37.6 h -125.001 Z"  ></path></symbol>
	<use xlink:href="#icon-dangdangwang"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconDangdangwang', [])
	.component(`iconDangdangwang`, ddo)
	.name;