import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-goods" viewBox="0 0 1024 1024"><path d="M861.184 132.779h-195.584c-16.384 0-29.184 13.312-29.184 29.184s13.312 29.184 29.184 29.184h182.784c28.672 0 52.224 23.552 52.224 52.224v520.192c0 28.672-23.552 52.224-52.224 52.224h-673.28c-28.672 0-52.224-23.552-52.224-52.224v-520.192c0-28.672 23.552-52.224 52.224-52.224h496.64c16.384 0 29.184-13.312 29.184-29.184 0-16.384-13.312-29.184-29.184-29.184h-509.44c-54.272 0-98.304 44.032-98.304 98.304v545.792c0 54.272 44.032 98.304 98.304 98.304h699.392c54.272 0 98.304-44.032 98.304-98.304v-545.792c-0.512-54.272-44.544-98.304-98.816-98.304z"  ></path><path d="M811.008 378.368c0-27.136-22.016-49.664-49.664-49.664-27.136 0-49.664 22.016-49.664 49.664 0 15.872 7.68 30.208 19.456 39.424-22.016 100.352-112.128 175.616-219.136 175.616s-196.608-75.264-219.136-175.616c11.776-9.216 19.456-23.04 19.456-39.424 0-27.136-22.016-49.664-49.664-49.664s-49.664 22.016-49.664 49.664c0 17.92 9.728 33.792 24.064 42.496 1.024 1.024 2.56 2.048 4.096 2.56 21.504 129.536 134.656 228.864 270.336 228.864 135.68 0 248.832-99.328 270.336-228.864 2.048-1.024 3.072-2.048 4.608-3.072 15.36-8.704 24.576-24.064 24.576-41.984z"  ></path></symbol>
	<use xlink:href="#icon-goods"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconGoods', [])
	.component(`iconGoods`, ddo)
	.name;