import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-man" viewBox="0 0 1024 1024"><path d="M729.26 547.55c-64.35-52.74-111.42-50.31-111.42-50.31l-105.84-0.36-105.84 0.36c0 0-47.070-2.43-111.42 50.31s-147.96 160.83-142.020 287.28c5.94 126.36 148.32 126.36 359.19 126.9v0c210.87-0.45 353.25-0.45 359.19-126.9 6.030-126.45-77.58-234.54-141.84-287.28z"  ></path><path d="M512 474.11c113.76 0 205.92-92.16 205.92-205.92 0-113.67-92.16-205.83-205.92-205.83s-205.92 92.16-205.92 205.83c0 113.76 92.16 205.92 205.92 205.92z"  ></path></symbol>
	<use xlink:href="#icon-man"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconMan', [])
	.component(`iconMan`, ddo)
	.name;