import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-xinlaokehuguanli" viewBox="0 0 1024 1024"><path d="M221.079 853.554c-14.595 0-26.472-11.782-26.472-26.263v-64.373c0-64.299 19.451-126.202 56.246-179.012 35.933-51.571 85.821-91.095 144.268-114.293l9.621-3.82-8.16-6.369c-45.988-35.895-72.362-89.529-72.362-147.152 0-103.222 84.553-187.2 188.485-187.2 103.929 0 188.484 83.98 188.484 187.2 0 57.622-26.376 111.256-72.363 147.152l-8.159 6.369 9.619 3.82c58.454 23.199 108.34 62.717 144.271 114.28 36.794 52.805 56.243 114.713 56.241 179.024v64.372c0 14.482-11.875 26.264-26.472 26.264l-583.247 0.001z m291.658-354.08c-146.221 0-265.178 118.183-265.178 263.444v38.116h530.293v-38.116c0-145.26-118.931-263.444-265.115-263.444z m-0.031-321.88c-74.735 0-135.54 60.418-135.54 134.684 0 74.264 60.804 134.681 135.54 134.681s135.54-60.416 135.54-134.681c0-74.266-60.803-134.684-135.54-134.684zM91.472 756.988c-14.595 0-26.472-11.781-26.472-26.26v-49.796c0-94.46 52.166-179.978 136.141-223.181l6.892-3.546-5.226-5.726c-26.181-28.687-40.601-65.615-40.601-103.981 0-84.588 68.553-153.572 153.364-155.02-0.541 0.863-1.077 1.729-1.61 2.598-13.07 17.091-23.188 35.968-30.11 56.154-41.217 14.545-68.699 52.858-68.699 96.266 0 40.078 23.778 76.7 60.574 93.297l0.175 0.079 0.177 0.068c10.961 4.123 18.042 13.629 18.042 24.218 0 10.851-7.615 20.696-18.98 24.568l-6.067 1.439c-89.015 22.328-151.134 101.59-151.134 192.768v23.54h30.929a326.704 326.704 0 0 0-5.222 52.518H91.471l0.001-0.003z m789.943-0.004a326.562 326.562 0 0 0-5.221-52.513h30.925v-23.539c0-91.18-62.118-170.441-151.064-192.751l-6.135-1.456c-11.358-3.871-18.973-13.716-18.973-24.569 0-10.587 7.082-20.094 18.04-24.218l0.177-0.066 0.172-0.079c36.801-16.597 60.579-53.219 60.579-93.297 0-43.412-27.485-81.724-68.707-96.266-6.916-20.19-17.037-39.067-30.106-56.162a244.57 244.57 0 0 0-1.611-2.595c84.814 1.449 153.366 70.434 153.366 155.024 0 38.373-14.418 75.301-40.6 103.98l-5.227 5.726 6.896 3.549c83.976 43.202 136.139 128.721 136.134 223.181v49.796c0 14.475-11.873 26.253-26.469 26.253h-52.174l-0.002 0.002z" fill="" ></path></symbol>
	<use xlink:href="#icon-xinlaokehuguanli"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconXinlaokehuguanli', [])
	.component(`iconXinlaokehuguanli`, ddo)
	.name;