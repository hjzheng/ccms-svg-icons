import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-view-list" viewBox="0 0 1024 1024"><path d="M138.166 303.633h747.642c19.529 0 35.514-15.632 35.514-34.78 0-19.124-15.785-34.756-35.514-34.756h-747.642c-19.503 0-35.489 15.632-35.489 34.756 0 19.147 15.986 34.78 35.489 34.78v0zM885.808 477.333h-747.642c-19.503 0-35.489 15.632-35.489 34.755 0 19.148 15.962 34.78 35.489 34.78h747.642c19.529 0 35.514-15.632 35.514-34.78 0-19.123-15.986-34.755-35.514-34.755v0zM885.808 720.393h-747.642c-19.503 0-35.489 15.481-35.489 34.807 0 19.225 15.962 34.704 35.489 34.704h747.642c19.529 0 35.514-15.481 35.514-34.704 0-19.326-15.986-34.807-35.514-34.807v0z"  ></path></symbol>
	<use xlink:href="#icon-view-list"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconViewList', [])
	.component(`iconViewList`, ddo)
	.name;