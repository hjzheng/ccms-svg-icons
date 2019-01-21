import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-qiehuan" viewBox="0 0 1024 1024"><path d="M43.17487407407407 422.4341333333333h937.6502518518519c24.51531851851852 0 36.53025185185185-29.85528888888889 18.811259259259256-46.8461037037037L732.2737777777778 119.87626666666665c-17.23354074074074-16.505362962962963-45.996562962962955-4.247703703703704-45.996562962962955 19.6608v146.97054814814814c0 15.049007407407407-12.136296296296294 27.185303703703703-27.185303703703703 27.185303703703703H43.17487407407407c-15.049007407407407 0-27.185303703703703 12.136296296296294-27.185303703703703 27.185303703703703v54.370607407407405c0 14.927644444444445 12.136296296296294 27.185303703703703 27.185303703703703 27.185303703703703z m937.6502518518519 179.13173333333333H43.17487407407407c-24.51531851851852 0-36.53025185185185 29.85528888888889-18.811259259259256 46.8461037037037l267.36260740740744 255.71176296296292c17.23354074074074 16.505362962962963 45.996562962962955 4.247703703703704 45.996562962962955-19.6608V737.4923851851852c0-15.049007407407407 12.136296296296294-27.185303703703703 27.185303703703703-27.185303703703703h616.0384c15.049007407407407 0 27.185303703703703-12.136296296296294 27.185303703703703-27.185303703703703v-54.370607407407405c-0.12136296296296296-14.927644444444445-12.25765925925926-27.185303703703703-27.30666666666667-27.185303703703703z"  ></path></symbol>
	<use xlink:href="#icon-qiehuan"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconQiehuan', [])
	.component(`iconQiehuan`, ddo)
	.name;