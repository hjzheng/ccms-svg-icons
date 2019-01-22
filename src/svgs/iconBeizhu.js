import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-beizhu" viewBox="0 0 1024 1024"><path d="M511.914 928.016c-8.257 0-16.341-3.096-22.706-9.46l-95.984-95.985c-12.557-12.557-12.557-32.682 0-45.24s32.683-12.556 45.24 0l73.45 73.45 73.45-73.45c6.02-6.02 14.105-9.46 22.706-9.46h223.962c17.718 0 31.995-14.277 31.995-31.995V223.962c0-17.545-14.277-31.994-31.995-31.994H192.14c-17.546 0-31.995 14.449-31.995 31.994v511.914c0 17.718 14.45 31.995 31.995 31.995h95.984c17.717 0 31.994 14.277 31.994 31.995s-14.277 31.994-31.994 31.994H192.14c-52.98 0-95.984-43.003-95.984-95.984V223.962c0-52.98 43.003-95.984 95.984-95.984h639.892c52.98 0 95.984 43.004 95.984 95.984v511.914c0 52.98-43.003 95.984-95.984 95.984H621.143l-86.523 86.695c-6.193 6.193-14.45 9.461-22.706 9.461z m-175.97-416.102c-26.49 0-47.992-21.502-47.992-47.992s21.501-47.992 47.992-47.992 47.991 21.502 47.991 47.992-21.501 47.992-47.991 47.992z m191.967 0c-26.49 0-47.992-21.502-47.992-47.992s21.502-47.992 47.992-47.992 47.992 21.502 47.992 47.992-21.502 47.992-47.992 47.992z m192.14 0c-26.49 0-47.992-21.502-47.992-47.992s21.502-47.992 47.992-47.992 47.992 21.502 47.992 47.992-21.674 47.992-47.992 47.992z" fill="" ></path></symbol>
	<use xlink:href="#icon-beizhu"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconBeizhu', [])
	.component(`iconBeizhu`, ddo)
	.name;