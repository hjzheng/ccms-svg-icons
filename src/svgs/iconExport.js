import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-export" viewBox="0 0 1024 1024"><path d="M422.301 741.725l179.249 0.325v-331.874l161.901 0.125-251.55-289.85-251.301 289.85 161.701-0.125z"  ></path><path d="M816.7 631.75v166.901h-609.4v-166.901h-104.901v271.8h819.2v-271.8z"  ></path></symbol>
	<use xlink:href="#icon-export"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconExport', [])
	.component(`iconExport`, ddo)
	.name;