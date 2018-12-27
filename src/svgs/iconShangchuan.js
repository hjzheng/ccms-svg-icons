import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-shangchuan" viewBox="0 0 1024 1024"><path d="M934.56756 904.418484 934.56756 904.418484 89.43244 904.418484c-16.683645 0-30.183653-13.499455-30.183653-30.182416L59.248787 632.778784c0-16.653285 13.500008-30.182416 30.183653-30.182416s30.183653 13.529131 30.183653 30.182416L119.616093 844.053652 904.383907 844.053652 904.383907 632.778784c0-16.653285 13.500008-30.182416 30.183653-30.182416s30.183653 13.529131 30.183653 30.182416l0 241.457284C964.751213 890.919029 951.251205 904.418484 934.56756 904.418484zM641.752867 352.089987 542.183141 231.420697l0 431.481152c0 16.712637-13.500008 30.241768-30.183653 30.241768s-30.183653-13.529131-30.183653-30.241768l0-430.330956-98.626199 119.520117c-11.819671 11.908214-31.008472 11.908214-42.829166 0-11.849348-11.877515-11.849348-31.154557 0-43.033096L489.539044 128.229476c6.307918-6.337335 14.678906-9.049097 22.932208-8.607028 8.252279-0.442068 16.62429 2.269693 22.961885 8.607028l149.148896 180.827415c11.849348 11.877515 11.849348 31.154557 0 43.033096C672.761339 363.998201 653.572538 363.998201 641.752867 352.089987z"  ></path></symbol>
	<use xlink:href="#icon-shangchuan"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconShangchuan', [])
	.component(`iconShangchuan`, ddo)
	.name;