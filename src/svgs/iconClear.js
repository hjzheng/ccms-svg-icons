import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-clear" viewBox="0 0 1024 1024"><path d="M512.355328 130.675712c-210.798592 0-381.702144 170.872832-381.702144 381.642752 0 210.798592 170.902528 381.700096 381.702144 381.700096 210.768896 0 381.641728-170.901504 381.641728-381.700096C893.997056 301.548544 723.124224 130.675712 512.355328 130.675712zM679.54176 628.09088c14.20288 14.203904 14.20288 37.238784 0 51.47136-14.203904 14.203904-37.26848 14.176256-51.442688-0.05632l-115.74272-115.71712-115.745792 115.77344c-14.232576 14.176256-37.26848 14.176256-51.442688 0-14.231552-14.231552-14.231552-37.267456-0.028672-51.47136l115.745792-115.77344L345.166848 396.602368c-14.231552-14.204928-14.231552-37.23776-0.028672-51.470336 14.203904-14.175232 37.267456-14.175232 51.47136 0l115.745792 115.744768 115.74272-115.744768c14.175232-14.175232 37.238784-14.175232 51.442688 0 14.20288 14.232576 14.20288 37.266432 0 51.470336L563.795968 512.347136 679.54176 628.09088z"  ></path></symbol>
	<use xlink:href="#icon-clear"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconClear', [])
	.component(`iconClear`, ddo)
	.name;