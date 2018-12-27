import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-create-orders" viewBox="0 0 1024 1024"><path d="M829.354 714.507h-25.986v-137.177h-82.273v137.177h-137.095v82.272h137.095v137.095h82.273v-137.095h137.177v-82.272z"  ></path><path d="M529.096 684.611v-25.008h137.095v-137.257h163.080v-350.762c0-44.964-36.494-81.458-81.458-81.458h-540.234c-44.965 0-81.458 36.494-81.458 81.458v680.832c0 44.964 36.494 81.458 81.458 81.458h458.613v-82.272h-137.095v-166.99zM262.89 320.817c0-18.736 15.314-34.050 34.050-34.050h386.848c18.736 0 34.050 15.314 34.050 34.050v9.287c0 18.736-15.314 34.050-34.050 34.050h-386.848c-18.736 0-34.050-15.314-34.050-34.050v-9.287zM262.89 497.989v-9.287c0-18.736 15.314-34.050 34.050-34.050h291.215c18.736 0 34.050 15.314 34.050 34.050v9.287c0 18.736-15.314 34.050-34.050 34.050h-291.215c-18.736 0-34.050-15.314-34.050-34.050z"  ></path></symbol>
	<use xlink:href="#icon-create-orders"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconCreateOrders', [])
	.component(`iconCreateOrders`, ddo)
	.name;