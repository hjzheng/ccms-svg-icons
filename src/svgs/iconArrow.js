import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-arrow" viewBox="0 0 1024 1024"><path d="M959.65246 324.093353c0 5.140067-1.929955 9.829879-5.109368 13.384845L527.494902 855.510588c-3.815909 4.630461-9.506515 7.312546-15.506159 7.312546-5.998621 0-11.69025-2.681062-15.504112-7.312546L68.939115 336.87854c-4.948709-6.003737-5.989411-14.3181-2.672876-21.357424 3.317559-7.034207 10.400884-11.524474 18.176988-11.524474l855.092056 0c0.010233 0 0.01535 0 0.020466 0C950.654528 303.997666 959.65246 312.994574 959.65246 324.093353L959.65246 324.093353z"  ></path></symbol>
	<use xlink:href="#icon-arrow"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconArrow', [])
	.component(`iconArrow`, ddo)
	.name;