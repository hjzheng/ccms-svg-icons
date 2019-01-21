import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-able" viewBox="0 0 1025 1024"><path d="M862.005 266.497c-13.47-13.47-31.357-20.93-50.332-20.93-0.073 0-0.073 0-0.073 0-18.975 0.073-36.863 7.46-50.26 20.93l-339.359 339.793-159.251-159.541c-26.578-26.867-73.723-26.94-100.736 0.072-27.666 27.809-27.666 72.999 0 100.808l209.654 209.945c13.47 13.47 31.358 20.857 50.332 20.857 0.072 0 0.072 0 0.072 0 18.975 0 36.863-7.387 50.26-20.857l389.691-390.27c27.737-27.809 27.737-72.999 0-100.808z"  ></path></symbol>
	<use xlink:href="#icon-able"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconAble', [])
	.component(`iconAble`, ddo)
	.name;