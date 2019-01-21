import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-circle-spot" viewBox="0 0 1097 1024"><path d="M967.528 711.028l-355.758-124.458c-12.986-4.5-19.608 1.736-14.786 13.95l133.714 334.286c4.822 12.15 13.628 12.472 19.542 0.642 0 0 32.722-65.958 61.842-107.742l86.914 84.086c4.015 3.782 9.442 6.106 15.411 6.106 5.801 0 11.090-2.196 15.081-5.801l20.295-18.818c3.959-3.611 6.432-8.792 6.432-14.549 0-5.603-2.343-10.66-6.103-14.243l-86.794-84.029c42.558-25.586 104.786-51.558 104.786-51.558 12.664-5.272 12.408-13.308-0.578-17.872z"  ></path><path d="M517.208 874.442c-0.373 0.002-0.814 0.002-1.255 0.002-98.646 0-187.987-39.832-252.819-104.29-64.959-63.911-105.219-152.789-105.219-251.070 0-0.253 0-0.506 0.001-0.759 0-95.104 37.35-184.524 105.236-251.768 64.822-64.479 154.189-104.337 252.866-104.337 0.418 0 0.837 0.001 1.255 0.002 95.914 0 186.171 37.028 254.057 104.336 64.976 63.928 105.236 152.806 105.236 251.088 0 0.253 0 0.506-0.001 0.759 0 29.854-3.728 59.232-10.928 87.518l55.028 14.592c8.486-32.978 12.858-67.242 12.858-102.214 0-0.216 0.001-0.471 0.001-0.726 0-113.883-46.656-216.867-121.896-290.884-75.148-74.744-178.673-120.914-292.983-120.914-0.505 0-1.010 0.001-1.514 0.003-111.136 0-215.6 42.942-294.222 120.857-75.295 74.071-121.951 177.055-121.951 290.938 0 0.277 0 0.555 0.001 0.833 0 110.143 43.328 213.707 121.95 291.622 75.093 74.691 178.618 120.86 292.928 120.86 0.483 0 0.965-0.001 1.448-0.003 36.183 0 71.733-4.564 105.869-13.5l-14.722-54.386c-27.343 7.349-58.734 11.572-91.114 11.572-0.037 0-0.076 0-0.113 0z"  ></path></symbol>
	<use xlink:href="#icon-circle-spot"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconCircleSpot', [])
	.component(`iconCircleSpot`, ddo)
	.name;