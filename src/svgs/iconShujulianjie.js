import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-shujulianjie" viewBox="0 0 1024 1024"><path d="M213.408 309.28L512 491.552l298.592-182.272L512 127.04 213.408 309.28z m682.56 1.024L896 311.36v403.36a28.8 28.8 0 0 1-13.92 24.544l-354.464 216.352a30.08 30.08 0 0 1-31.232 0l-354.464-216.32A28.8 28.8 0 0 1 128 714.688V311.36v-1.056a28.576 28.576 0 0 1 13.92-25.6l354.464-216.32a30.08 30.08 0 0 1 31.232 0l354.464 216.32c9.6 5.888 14.24 15.84 13.888 25.6z m-59.04 51.104l-309.312 188.8a30.08 30.08 0 0 1-31.232 0l-309.312-188.8v337.216L512 896.96l324.928-198.336V361.408z"  ></path></symbol>
	<use xlink:href="#icon-shujulianjie"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconShujulianjie', [])
	.component(`iconShujulianjie`, ddo)
	.name;