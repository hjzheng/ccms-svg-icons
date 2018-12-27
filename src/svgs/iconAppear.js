import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-appear" viewBox="0 0 1366 1024"><path d="M675.266 767.773c-141.278 0-255.821-114.544-255.821-255.821 0-141.338 114.544-255.882 255.821-255.882 141.279 0 255.821 114.544 255.821 255.882 0 141.278-114.544 255.821-255.821 255.821M115.705 511.89c0 61.98 280.867 387.746 559.562 383.401 278.695-4.284 559.562-337.234 559.562-383.401 0-46.107-304.946-386.237-559.562-383.341-254.615 2.836-559.562 321.362-559.562 383.341z"  ></path><path d="M571.001 512.64v0c0 57.332 46.469 103.802 103.741 103.802 57.332 0 103.801-46.469 103.801-103.801 0-57.332-46.469-103.741-103.801-103.741-57.272 0-103.741 46.409-103.741 103.741z"  ></path></symbol>
	<use xlink:href="#icon-appear"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconAppear', [])
	.component(`iconAppear`, ddo)
	.name;