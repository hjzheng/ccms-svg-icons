import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-export2" viewBox="0 0 1243 1024"><path d="M1030.45714248 897.71428584H218.4A75.47142832 75.47142832 0 0 1 142.28571416 823.07857168V723.5c0-13.69285752 11.37857168-24.87857168 25.39285752-24.87857168 14.01428584 0 25.32857168 11.18571416 25.3285708 24.87857168v99.57857168c0 13.69285752 11.37857168 24.87857168 25.39285752 24.8785708h812.05714248a25.13571416 25.13571416 0 0 0 25.39285752-24.8785708V723.5c0-13.69285752 11.31428584-24.87857168 25.32857167-24.87857168 14.01428584 0 25.39285752 11.18571416 25.39285665 24.87857168v99.57857168c0 41.14285752-34.13571416 74.63571416-76.11428584 74.63571416z m-134.35714248-405.45L642.42857168 741.11428584a25.71428584 25.71428584 0 0 1-35.8714292 0l-253.73571416-248.78571416a24.55714248 24.55714248 0 0 1 0-35.22857168 25.71428584 25.71428584 0 0 1 35.8714292 0l210.40714248 206.35714248V151.16428584c0-13.75714248 11.37857168-24.87857168 25.39285752-24.87857168 14.01428584 0 25.39285752 11.12142833 25.39285664 24.87857168v512.29285664l210.40714336-206.35714248a25.71428584 25.71428584 0 0 1 35.93571416 0 24.55714248 24.55714248 0 0 1 0 35.16428584z"  ></path></symbol>
	<use xlink:href="#icon-export2"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconExport2', [])
	.component(`iconExport2`, ddo)
	.name;