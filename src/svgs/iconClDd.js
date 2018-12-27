import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-cl-dd" viewBox="0 0 1024 1024"><path d="M814.8 927H209.2C147.2 927 97 876.8 97 814.8V209.2C97 147.2 147.2 97 209.2 97h605.6c62 0 112.2 50.2 112.2 112.2v605.6c0 62-50.2 112.2-112.2 112.2z" fill="#FF1810" ></path><path d="M187.1 336.5c0 24.8 20.1 44.9 44.9 44.9 24.8 0 44.9-20.1 44.9-44.9 0-24.8-20.1-44.9-44.9-44.9-24.8 0.1-44.9 20.2-44.9 44.9zM246.8 632.4c25.7 36.7 70.5 61.1 121.6 61.1 79.8 0 140.6-59.5 140.6-133s-60.8-133-140.6-133c-52.2 0-98 25.5-123.4 63.7 0 0-18.1 16.5-36.5 1.7-21.2-19.6-1.2-51.5-1.2-51.5 32-36.6 78.3-62.1 131.2-69.1l-0.5-78.5s8.9-20.4 30.1-20.3c21.2 0.2 29.8 20.4 29.8 20.4l0.1 78.3c100.1 13.2 169.3 92.5 169.3 188.3 0 105-84.6 190.2-198.7 190.2-67.5 0-127.4-29.8-165.1-75.8 0 0-13.4-30.2 5.3-42.8 18.3-12.8 38 0.3 38 0.3z" fill="#FFFFFF" ></path><path d="M468 336.5c0 24.8 20.1 44.9 44.9 44.9 24.8 0 44.9-20.1 44.9-44.9 0-24.8-20.1-44.9-44.9-44.9-24.8 0.1-44.9 20.2-44.9 44.9zM745.4 336.5c0 24.8 20.1 44.9 44.9 44.9 24.8 0 44.9-20.1 44.9-44.9 0-24.8-20.1-44.9-44.9-44.9-24.8 0.1-44.9 20.2-44.9 44.9zM446.9 563.2c0 16.1-13.1 29.3-29.3 29.3H198.9c-16.1 0-29.3-13.1-29.3-29.3 0-16.1 13.1-29.3 29.3-29.3h218.7c16.1 0.1 29.3 13.2 29.3 29.3z" fill="#FFFFFF" ></path><path d="M577.2 672.2c22.6 13.4 49.5 21.3 78.4 21.3 79.8 0 140.6-59.5 140.6-133s-60.8-133-140.6-133c-28.8 0-55.7 7.8-78.2 21.1l-32.5-48.7c24-14 51.4-23.7 80.7-27.6l-0.5-78.6s8.9-20.4 30.1-20.3c21.2 0.2 29.8 20.4 29.8 20.4l0.1 78.3c100.3 13.1 169.4 92.4 169.4 188.3 0 105-84.6 190.2-198.7 190.2-39.7 0-76.8-10.3-108.2-28.1l29.6-50.3z" fill="#FFFFFF" ></path><path d="M607 534h97.8c16.1 0 29.3 13.1 29.3 29.3 0 16.1-13.1 29.3-29.3 29.3h-97.4L607 534z" fill="#FFFFFF" ></path></symbol>
	<use xlink:href="#icon-cl-dd"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconClDd', [])
	.component(`iconClDd`, ddo)
	.name;