import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-ep-tree-add" viewBox="0 0 1024 1024"><path d="M924.35000029 474.35000029H549.64999971V99.64999971a37.72500029 37.72500029 0 0 0-75.29999942 0v374.70000058H99.64999971a37.72500029 37.72500029 0 0 0 0 75.29999942h374.70000058v374.70000058a37.64999971 37.64999971 0 1 0 75.29999942 0V549.64999971h374.70000058a37.64999971 37.64999971 0 1 0 0-75.29999942z"  ></path></symbol>
	<use xlink:href="#icon-ep-tree-add"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconEpTreeAdd', [])
	.component(`iconEpTreeAdd`, ddo)
	.name;