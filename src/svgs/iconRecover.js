import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-recover" viewBox="0 0 1024 1024"><path d="M1022.953669 492.476341c0 0-289.980417-277.208533-477.54835-424.974971l-2.182712 254.537184c0 0-411.828556 46.845934-520.347109 340.812129 0 0-58.367339 137.361461 23.611767 297.705356 0 0-10.465352-130.130779 95.747691-281.942347 0 0 106.20895-130.443911 400.986627-65.035202l-2.116197 250.485915C575.246975 864.064404 1022.953669 492.476341 1022.953669 492.476341z"  ></path></symbol>
	<use xlink:href="#icon-recover"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconRecover', [])
	.component(`iconRecover`, ddo)
	.name;