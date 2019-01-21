import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-suoxiaoquanping" viewBox="0 0 1024 1024"><path d="M397.76 360.832v-137.92c0-13.984 11.264-25.344 25.12-25.344 13.888 0 25.12 11.36 25.12 25.344v199.744a25.216 25.216 0 0 1-25.12 25.344H222.144a25.216 25.216 0 0 1-25.088-25.344c0-14.016 11.2-25.344 25.088-25.344h140.768l-259.424-257.92a25.536 25.536 0 0 1-0.256-35.84 24.96 24.96 0 0 1 35.52-0.256l259.04 257.536zM663.424 397.44h137.056a25.28 25.28 0 1 1 0 50.56H601.28a25.28 25.28 0 0 1-25.28-25.28V220.672a25.28 25.28 0 0 1 50.56 0v142.112l258.24-259.328a25.28 25.28 0 0 1 35.84 35.648l-257.216 258.336zM626.016 662.72v136.736c0 13.92-11.2 25.184-25.024 25.184a25.088 25.088 0 0 1-24.992-25.184v-198.272c0-13.92 11.2-25.184 24.992-25.184h199.872c13.824 0 25.024 11.264 25.024 25.184 0 13.888-11.2 25.152-25.024 25.152h-140.256l259.968 258.56a25.28 25.28 0 0 1 0.192 35.616 24.896 24.896 0 0 1-35.328 0.224l-259.424-258.048zM361.12 626.08H223.936a25.152 25.152 0 0 1-25.248-25.024c0-13.856 11.328-25.056 25.28-25.056h198.784c13.952 0 25.248 11.2 25.248 25.056v200.192a25.152 25.152 0 0 1-25.248 25.024 25.152 25.152 0 0 1-25.216-25.024v-140.48L139.2 920.544a25.376 25.376 0 0 1-35.68 0.224 24.896 24.896 0 0 1-0.256-35.392l257.856-259.296z"  ></path></symbol>
	<use xlink:href="#icon-suoxiaoquanping"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconSuoxiaoquanping', [])
	.component(`iconSuoxiaoquanping`, ddo)
	.name;