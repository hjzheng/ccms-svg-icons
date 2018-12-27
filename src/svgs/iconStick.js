import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-stick" viewBox="0 0 1024 1024"><path d="M511.941 255.182l-303.229 303.297 195.002-0.112 0.558 346.372 215.738 0.272v-346.663l195.277 0.131-303.343-303.297zM208.714 118.99h606.571v77.695h-606.571v-77.695z"  ></path></symbol>
	<use xlink:href="#icon-stick"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconStick', [])
	.component(`iconStick`, ddo)
	.name;