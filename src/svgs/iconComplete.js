import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-complete" viewBox="0 0 1024 1024"><path d="M469.28 693.715l283.028-282.995c6.801-6.801 11.006-16.194 11.006-26.572 0-20.753-16.824-37.578-37.578-37.578-10.377 0-19.771 4.206-26.572 11.006l-256.457 256.457-114.925-114.96c-6.801-6.801-16.194-11.006-26.572-11.006-20.753 0-37.578 16.824-37.578 37.578 0 10.377 4.206 19.771 11.006 26.572l141.497 141.497c6.788 6.825 16.187 11.049 26.572 11.049s19.783-4.224 26.57-11.047zM512 66.285c119.040 0 230.983 46.355 315.155 130.56 80.649 80.212 130.562 191.257 130.562 313.958 0 0.42-0.001 0.841-0.002 1.261 0 86.677-24.925 170.746-72.137 243.124-5.618 8.522-15.147 14.069-25.972 14.069-17.124 0-31.006-13.882-31.006-31.006 0-6.3 1.879-12.161 5.107-17.053 38.828-58.756 61.986-130.999 61.986-208.651 0-0.192 0-0.385 0-0.578 0-211.513-172.115-383.662-383.692-383.662-211.577 0-383.692 172.115-383.692 383.692 0 211.543 172.115 383.692 383.692 383.692 70.045 0 138.617-19.028 198.205-55.063 4.575-2.812 10.116-4.477 16.045-4.477 17.119 0 30.997 13.878 30.997 30.997 0 11.189-5.929 20.993-14.815 26.443-65.732 40.3-145.154 64.123-230.14 64.123-0.102 0-0.205 0-0.307 0-0.335 0.001-0.75 0.002-1.165 0.002-122.707 0-233.756-49.912-313.954-130.542-80.669-80.236-130.581-191.286-130.581-313.992 0-0.415 0.001-0.831 0.002-1.246 0-118.975 46.354-230.918 130.56-315.090 80.212-80.649 191.257-130.562 313.958-130.562 0.42 0 0.841 0.001 1.261 0.002z"  ></path></symbol>
	<use xlink:href="#icon-complete"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconComplete', [])
	.component(`iconComplete`, ddo)
	.name;