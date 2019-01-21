import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-location" viewBox="0 0 1024 1024"><path d="M512 49.906c-194.344 0-351.844 157.5-351.844 351.844 0 277.125 351.844 577.031 351.844 577.031s351.844-312.656 351.844-577.031c0-194.344-157.5-351.844-351.844-351.844zM512 593.75c-107.156 0-193.969-86.906-193.969-193.969s86.812-194.063 193.969-194.063 193.969 86.906 193.969 194.063-86.812 193.969-193.969 193.969z"  ></path></symbol>
	<use xlink:href="#icon-location"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconLocation', [])
	.component(`iconLocation`, ddo)
	.name;