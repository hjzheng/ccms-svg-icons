import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-star" viewBox="0 0 1024 1024"><path d="M479.812 104.87c17.721-36.364 46.7-36.364 64.416 0l85.263 175.017c17.715 36.368 64.62 70.884 104.225 76.72l190.653 28.067c39.602 5.831 48.565 33.751 19.903 62.055l-137.961 136.244c-28.663 28.3-46.574 84.159-39.805 124.121l32.567 192.374c6.769 39.961-16.687 57.226-52.107 38.355l-170.537-90.823c-35.42-18.874-93.397-18.874-128.82 0l-170.532 90.825c-35.424 18.87-58.871 1.606-52.107-38.355l32.567-192.374c6.769-39.961-11.143-95.821-39.805-124.121l-137.962-136.245c-28.663-28.303-19.699-56.223 19.903-62.055l190.657-28.067c39.607-5.836 86.506-40.353 104.225-76.72l85.259-175.017z"  ></path></symbol>
	<use xlink:href="#icon-star"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconStar', [])
	.component(`iconStar`, ddo)
	.name;