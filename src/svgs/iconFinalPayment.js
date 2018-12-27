import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-Final-Payment" viewBox="0 0 1024 1024"><path d="M797.117 62h-571.026c-90.703 0-164.092 73.388-164.092 164.18v572.344c0 90.088 73.388 163.477 164.092 163.477h571.904c89.912 0 164.092-73.388 164.092-164.18v-571.641c-0.879-90.791-74.268-164.18-164.971-164.18zM340.349 443.357c-0.44 142.031-27.247 263.935-80.332 365.713l-49.482-44.209c43.682-83.057 65.83-190.195 66.27-321.504v-228.428h495.967v179.56h-432.422v48.867zM786.043 788.943c-13.359 8.438-32.607 12.744-57.568 12.744h-159.258c-38.848 0-58.271-21.885-58.271-65.654v-44.912l-166.641 15.381v-54.229l166.641-15.381v-44.912l-135.878 12.041v-53.614l135.878-12.041v-42.891c-49.042 4.482-91.67 7.383-127.793 8.701l-18.106-50.888c147.217-7.998 265.693-22.324 355.342-42.891l28.74 48.252c-56.69 12.92-115.137 23.028-175.342 30.146v44.297l186.153-16.7v52.911l-186.065 16.787v44.912l228.867-20.742v54.932l-228.867 20.742v36.826c0 14.326 4.482 21.445 13.359 21.445h130.518c12.041 0 21.006-2.461 26.807-7.383 7.119-5.362 11.602-22.060 13.359-50.273l55.547 18.106c-4.395 46.846-13.536 74.971-27.422 84.287z"  ></path><path d="M340.349 274.519h368.086v62.315h-368.086z"  ></path></symbol>
	<use xlink:href="#icon-Final-Payment"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconFinalPayment', [])
	.component(`iconFinalPayment`, ddo)
	.name;