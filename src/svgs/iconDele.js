import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-dele" viewBox="0 0 1024 1024"><path d="M511.713 62c-248.373 0-449.713 201.339-449.713 449.703s201.34 449.705 449.713 449.705c248.39 0 449.728-201.34 449.728-449.705 0-248.364-201.339-449.703-449.728-449.703v0zM749.405 716.614l-32.775 32.775-204.911-204.911-204.911 204.911-32.77-32.775 204.911-204.911-204.911-204.911 32.77-32.775 204.911 204.911 204.911-204.911 32.775 32.775-204.911 204.911 204.911 204.911z"  ></path></symbol>
	<use xlink:href="#icon-dele"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconDele', [])
	.component(`iconDele`, ddo)
	.name;