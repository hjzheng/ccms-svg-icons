import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-fullscreen" viewBox="0 0 1024 1024"><path d="M129.302 894.7 894.7 894.7 894.7 129.302 129.302 129.302 129.302 894.7 129.302 894.7zM901.429 962.001 122.571 962.001c-33.399 0-60.572-27.172-60.572-60.572L61.999 122.571c0-33.398 27.172-60.572 60.572-60.572l778.858 0c33.398 0 60.572 27.174 60.572 60.572l0 778.858C962.001 934.828 934.827 962.001 901.429 962.001L901.429 962.001z"  ></path></symbol>
	<use xlink:href="#icon-fullscreen"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconFullscreen', [])
	.component(`iconFullscreen`, ddo)
	.name;