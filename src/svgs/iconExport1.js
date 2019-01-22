import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-export1" viewBox="0 0 1243 1024"><path d="M609.777 771.201c7.199 7.199 14.4 7.199 21.599 7.199s21.599 0 21.599-7.199l280.799-280.801c7.201-7.199 7.201-14.4 7.201-21.601s-7.201-21.599-7.201-21.599c-14.4-14.4-36.001-14.4-50.399 0l-223.199 216v-554.399c0-21.601-14.4-36.001-36.001-36.001s-36.001 14.4-36.001 36.001v554.399l-223.199-216c-14.4-14.4-36.001-14.4-50.401 0-7.199 7.199-7.199 14.4-7.199 21.599 0 7.201 7.199 21.601 7.199 21.601l295.199 280.799z"  ></path><path d="M1142.577 713.601c-21.601 0-36.001 14.4-36.001 36.001v108.001c0 14.4-7.201 21.599-21.601 21.599h-907.2c-14.4 0-21.599-7.199-21.599-21.599v-108.001c0-21.599-14.4-36.001-36.001-36.001s-36.001 14.4-36.001 36.001v108.001c0 50.399 43.2 93.599 93.599 93.599h907.2c50.399 0 93.601-43.2 93.601-93.599v-108.001c0-21.599-14.4-36.001-36.001-36.001z"  ></path></symbol>
	<use xlink:href="#icon-export1"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconExport1', [])
	.component(`iconExport1`, ddo)
	.name;