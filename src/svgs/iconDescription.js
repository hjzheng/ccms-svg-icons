import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-description" viewBox="0 0 1024 1024"><path d="M723.758 537.136h-428.786c-21.183-0.43-38.19-17.704-38.19-38.949 0-0.205 0.002-0.412 0.005-0.617 0-21.697 17.164-39.505 38.185-39.505h428.786c21.022 0 38.122 17.808 38.122 39.536 0.003 0.175 0.005 0.381 0.005 0.587 0 21.223-16.971 38.483-38.082 38.947zM723.758 731.022h-428.786c-21.183-0.43-38.19-17.704-38.19-38.949 0-0.205 0.002-0.412 0.005-0.617 0-21.762 17.164-39.569 38.185-39.569h428.786c21.022 0 38.122 17.808 38.122 39.6 0.003 0.175 0.005 0.381 0.005 0.587 0 21.223-16.971 38.482-38.082 38.947zM256.786 303.714c0-21.728 17.164-39.536 38.186-39.536h270.386c21.022 0 38.186 17.808 38.186 39.536 0.003 0.174 0.005 0.38 0.005 0.586 0 21.246-17.007 38.519-38.15 38.948l-270.427 0.001c-21.183-0.43-38.19-17.704-38.19-38.949 0-0.205 0.002-0.412 0.005-0.617zM850.978 62h-680.786c-41.786 0-76.050 35.486-76.050 78.814v736.328c0 43.392 34.2 78.878 76.050 78.878h680.786c41.85 0 76.050-35.486 76.050-78.878v-736.328c0-43.328-34.2-78.814-76.050-78.814z"  ></path></symbol>
	<use xlink:href="#icon-description"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconDescription', [])
	.component(`iconDescription`, ddo)
	.name;