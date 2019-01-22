import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-zhifu" viewBox="0 0 1024 1024"><path d="M150.48157867 352.70929067L247.67146667 123.72104533c15.089664-35.57512533 56.164352-52.18304 91.73947733-37.093376l0.01092267 0.00546134c12.353536 5.23195733 26.624 10.96635733 43.61966933 17.54180266 8.830976 3.41333333 17.907712 6.897664 29.76426667 11.37595734 30.081024 11.42510933 41.91573333 15.93070933 49.217536 18.81975466l54.90824533-55.115776c30.05917867-30.03733333 79.0528-29.80795733 109.40689067 0.56797867l208.98884266 208.98884267a77.922304 77.922304 0 0 1 22.462464 63.8976H921.6a45.50929067 45.50929067 0 0 1 45.50929067 45.50929066V921.6a45.50929067 45.50929067 0 0 1-45.50929067 45.50929067H102.4A45.50929067 45.50929067 0 0 1 56.89070933 921.6V398.22404267A45.50929067 45.50929067 0 0 1 102.4 352.714752l48.08157867-0.00546133z m52.22673066 0h41.713664L424.89173333 171.6224l-29.15259733-11.08104533a4025.99662933 4025.99662933 0 0 1-30.10833067-11.51249067 1554.47569067 1554.47569067 0 0 1-45.01230933-18.137088 21.889024 21.889024 0 0 0-28.69384533 11.60533333L202.70830933 352.70929067z m116.097024 0h485.28315734a25.07844267 25.07844267 0 0 0-5.64155734-27.01175467L589.45809067 116.70869333a24.920064 24.920064 0 0 0-35.2256-0.229376L318.80533333 352.70929067zM102.4 398.22404267V921.6h819.2V398.22404267H102.4z m271.75048533 296.206336a27.56881067 27.56881067 0 1 0 0 55.13762133h110.27524267v86.72597333a27.574272 27.574272 0 1 0 55.13762133 0V749.568h110.27524267a27.574272 27.574272 0 1 0 0-55.13762133h-110.27524267v-73.52046934h110.27524267a27.574272 27.574272 0 1 0 0-55.13762133h-71.286784l60.05828267-60.05828267a27.56881067 27.56881067 0 1 0-38.98299734-38.99392L512 554.35264 424.36744533 466.72554667a27.574272 27.574272 0 0 0-38.98299733 38.99392l60.05828267 60.05828266H374.15048533a27.56881067 27.56881067 0 1 0 0 55.13762134h110.27524267v73.52046933H374.15048533z"  ></path></symbol>
	<use xlink:href="#icon-zhifu"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconZhifu', [])
	.component(`iconZhifu`, ddo)
	.name;