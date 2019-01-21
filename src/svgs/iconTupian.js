import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-tupian" viewBox="0 0 1024 1024"><path d="M939 38H84C39 38 2.4 71.4 2.4 116.4V902c0 45 36.8 81.8 81.6 81.8h861.8c44.8 0 78.2-36.8 78.2-81.8V116.4c0-45-40.2-78.4-85-78.4zM331.4 154.2c69.2 0 125.2 56 125.2 125.2 0 69-56.2 125-125.2 125s-125.2-56-125.2-125 56.2-125.2 125.2-125.2z m-192 712.6c-8.8 0-17.8-3-25-9.2-16.2-13.8-18-38.2-4.2-54.4l176.8-266.6c13.2-15.4 35.8-17.8 52.2-5.8l156 116 279.8-317.8c13.2-16.6 83.4-94.8 124.6-6.2 0-0.2 0.2 117.4 0.2 237.4v306.6c-0.6-0.4-760 0-760.4 0z" fill="" ></path></symbol>
	<use xlink:href="#icon-tupian"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconTupian', [])
	.component(`iconTupian`, ddo)
	.name;