import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-edit" viewBox="0 0 1024 1024"><path d="M888.473 970.66h-739.689c-45.335 0-82.189-36.851-82.189-82.189v-739.157c0-45.335 36.851-82.189 82.189-82.189h493.125c15.111 0 27.44 12.196 27.44 27.44s-12.196 27.44-27.44 27.44h-465.685c-30.223 0-54.747 24.524-54.747 54.747v684.411c0 30.223 24.524 54.747 54.747 54.747h684.941c30.223 0 54.747-24.524 54.747-54.747v-492.729c0-15.111 12.196-27.44 27.44-27.44s27.44 12.196 27.44 27.44v520.035c-0.132 45.335-36.986 82.189-82.319 82.189zM441.213 607.975c-10.737 10.737-27.969 10.737-38.707 0s-10.737-27.969 0-38.707l492.332-494.717c10.737-10.737 27.969-10.737 38.707 0s10.737 27.969 0 38.707l-492.332 494.717z"  ></path></symbol>
	<use xlink:href="#icon-edit"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconEdit', [])
	.component(`iconEdit`, ddo)
	.name;