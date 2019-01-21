import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-square-spot" viewBox="0 0 1024 1024"><path d="M925.258 670.416l-359.198-125.463c-13.108-4.612-19.795 1.739-14.846 14.042l134.958 337.061c4.881 12.238 13.776 12.505 19.728 0.667 0 0 33.037-66.545 62.464-108.676l87.744 84.8c4.058 3.818 9.538 6.16 15.563 6.16 5.851 0 11.191-2.211 15.221-5.845l20.511-18.973c4.003-3.648 6.505-8.881 6.505-14.7 0-5.659-2.366-10.765-6.162-14.382l-87.684-84.674c43.068-25.814 105.867-51.965 105.867-51.965 12.774-5.351 12.505-13.511-0.6-18.057z"  ></path><path d="M571.544 825.239h-424.806v-685.224h714.115v398.856l15.785 4.213 41.664 11.034v-470.951h-829.077v798.982h497.699l-10.702-39.659z"  ></path></symbol>
	<use xlink:href="#icon-square-spot"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconSquareSpot', [])
	.component(`iconSquareSpot`, ddo)
	.name;