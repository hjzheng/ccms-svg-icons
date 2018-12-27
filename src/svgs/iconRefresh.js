import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-refresh" viewBox="0 0 1024 1024"><path d="M901.12 414.72 609.28 414.72l109.056-109.056C663.2448 250.5728 589.9264 220.16 512 220.16s-151.2448 30.4128-206.336 85.504C250.5728 360.7552 220.16 434.0736 220.16 512s30.4128 151.2448 85.504 206.336C360.7552 773.4272 434.0736 803.84 512 803.84s151.2448-30.4128 206.336-85.504c4.608-4.608 9.0112-9.3184 13.312-14.2336l73.216 64.1024C733.4912 849.7152 628.8384 901.12 512 901.12c-214.9376 0-389.12-174.1824-389.12-389.12s174.1824-389.12 389.12-389.12c107.4176 0 204.6976 43.52 275.1488 113.9712L901.12 122.88 901.12 414.72 901.12 414.72 901.12 414.72z"  ></path></symbol>
	<use xlink:href="#icon-refresh"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconRefresh', [])
	.component(`iconRefresh`, ddo)
	.name;