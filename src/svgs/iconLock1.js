import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-lock1" viewBox="0 0 1024 1024"><path d="M826.153 403.384h-74.064v-93.378c0-133.068-107.553-240.975-240.089-240.975s-240.089 107.907-240.089 240.798v93.378h-74.064c-31.539 0-57.054 25.692-57.054 57.409v436.944c0 31.717 25.515 57.409 57.054 57.409h628.307c31.539 0 57.054-25.692 57.054-57.409v-436.944c0-31.539-25.515-57.232-57.054-57.232zM322.764 309.475c0-103.123 84.696-186.756 189.236-186.756s189.236 83.632 189.236 186.756v93.732h-378.473v-93.732zM779.376 904.825h-534.752c-26.755 0-48.549-20.908-48.549-46.6v-356.147c0-25.692 21.794-46.6 48.549-46.6h27.287v0.177l50.853 0.532v-0.886h456.612c26.755 0 48.549 20.908 48.549 46.6v356.147c0 25.869-21.794 46.777-48.549 46.777z"  ></path><path d="M531.491 697.692v-32.248c0-14.884-12.049-26.933-26.933-26.933s-26.933 12.049-26.933 26.933v32.248c-12.403 8.505-20.554 22.857-20.554 38.981 0 26.224 21.262 47.486 47.486 47.486s47.486-21.262 47.486-47.486c0-16.124-8.151-30.299-20.554-38.981z"  ></path></symbol>
	<use xlink:href="#icon-lock1"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconLock1', [])
	.component(`iconLock1`, ddo)
	.name;