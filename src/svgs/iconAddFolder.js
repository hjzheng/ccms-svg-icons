import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-add-folder" viewBox="0 0 1024 1024"><path d="M512 397.303c-17.051 0-30.849 14.239-30.849 31.817v105.645h-102.568c-17.051 0-30.849 14.239-30.849 31.817v0c0 17.578 13.799 31.817 30.849 31.817h102.568v105.644c0 17.578 13.799 31.817 30.849 31.817v0c17.051 0 30.849-14.239 30.849-31.817v-105.82h102.568c17.051 0 30.849-14.239 30.849-31.817v0c0-17.578-13.799-31.817-30.849-31.817h-102.568v-105.557c0-17.578-13.799-31.729-30.849-31.729v0z"  ></path><path d="M899.862 832.010h-775.723v-633.516c0-3.604 2.813-6.503 6.328-6.503h323.614c3.516 0 6.328 2.901 6.328 6.503v76.026h439.365v557.49zM906.893 210.535h-384.258v-12.041c0-38.935-30.762-70.576-68.467-70.576h-323.701c-37.793 0-68.467 31.641-68.467 70.576v642.393c0 30.411 24.697 55.107 55.107 55.107h789.697c30.411 0 55.107-24.697 55.107-55.107v-575.244c0.088-30.322-24.609-55.107-55.020-55.107v0z"  ></path></symbol>
	<use xlink:href="#icon-add-folder"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconAddFolder', [])
	.component(`iconAddFolder`, ddo)
	.name;