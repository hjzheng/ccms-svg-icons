import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-evaluate" viewBox="0 0 1194 1024"><path d="M376.114 397.039h454.992c12.129 0 21.938-15.75 21.938-35.121 0-19.477-9.844-35.156-21.938-35.156h-454.992c-12.094 0-21.903 15.68-21.903 35.156 0 19.371 9.844 35.156 21.903 35.156zM376.114 593.422h454.992c12.129 0 21.938-15.75 21.938-35.156s-9.844-35.156-21.938-35.156h-454.992c-12.094 0-21.903 15.75-21.903 35.156s9.844 35.156 21.903 35.156zM131.145 184.062c0.036-41.766 32.45-75.656 72.352-75.656h800.297c39.937 0 72.316 33.856 72.316 75.586v554.766c0 41.73-32.379 75.586-72.316 75.586h-134.648l-96.75 101.25-96.715-101.144h-472.148c-39.938 0-72.352-33.891-72.352-75.656v-90.387c0.386-1.266 0.563-2.461 0.809-3.691v-186.856c-0.513-1.936-0.808-4.16-0.809-6.452 0-0.931 0.457-1.705 0.492-2.583l-0.492-264.761z"  ></path></symbol>
	<use xlink:href="#icon-evaluate"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconEvaluate', [])
	.component(`iconEvaluate`, ddo)
	.name;