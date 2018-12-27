import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-subtract" viewBox="0 0 1024 1024"><path d="M915.456 475.136l-363.52 0-442.88 0c0 0 0 0 0 0-19.968 0-36.352 16.384-36.864 36.352 0 20.48 16.384 36.864 36.352 36.864l442.88 0.512 0 0 0.512 0 0 0 0 0 362.496 0c0 0 0 0 0 0 19.968 0 36.352-16.384 36.864-36.352C951.808 491.52 935.424 475.136 915.456 475.136z"  ></path></symbol>
	<use xlink:href="#icon-subtract"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconSubtract', [])
	.component(`iconSubtract`, ddo)
	.name;