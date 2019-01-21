import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-exchange" viewBox="0 0 1024 1024"><path d="M511.998 23.905c-265.875 0-481.41 215.535-481.41 481.41 0 265.877 215.535 481.411 481.41 481.411 265.877 0 481.412-215.535 481.412-481.411 0-265.875-215.535-481.41-481.412-481.41zM156.863 313.71h592.365l-85.647-85.647 42.785-42.785 160.77 160.768-165.953 165.953-40.192-40.192 88.241-88.24h-592.368v-69.858zM867.135 671.597l-592.365 0.001 85.647 85.647-42.785 42.785-160.769-160.768 165.953-165.954 40.192 40.192-88.241 88.241 592.367-0.001v69.858z"  ></path></symbol>
	<use xlink:href="#icon-exchange"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconExchange', [])
	.component(`iconExchange`, ddo)
	.name;