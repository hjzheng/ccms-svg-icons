import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-new" viewBox="0 0 1024 1024"><path d="M54.507 293.12v400.213h109.547v101.12l101.12-101.12h699.307v-400.213h-909.973zM349.867 600h-25.387l-122.347-177.067h-0.853v176.96h-24.747v-215.253h25.92l121.813 175.253h0.853v-175.253h24.747v215.36zM551.040 600h-157.76v-215.36h152.533v21.44h-127.787v72.107h120.64v21.44h-120.64v79.040h133.013v21.333zM780.8 600h-27.413l-48.853-179.413h-0.853l-49.173 179.413h-27.413l-61.76-215.36h27.733l47.36 180.587h1.173l49.173-180.587h26.88l48.853 180.587h1.173l47.36-180.587h27.733l-61.973 215.36z"  ></path></symbol>
	<use xlink:href="#icon-new"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconNew', [])
	.component(`iconNew`, ddo)
	.name;