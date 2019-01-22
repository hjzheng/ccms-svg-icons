import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-dengluerweima" viewBox="0 0 1024 1024"><path d="M723.456 209.92h90.624v90.624h-90.624z"  ></path><path d="M844.288 391.168h60.416V119.296H632.832v271.872h211.456z m-151.04-211.456h151.04v151.04h-151.04v-151.04z m-60.416 422.912v30.208l60.416 60.416V663.04h60.416v60.416h-30.208l120.832 120.832v-60.416h60.416V663.04h-60.416v-60.416z m211.456 241.664l60.416 60.416v-60.416zM300.544 300.544V209.92H209.92z m151.04 120.832v30.208l30.208 30.208H512V512l30.208 30.208h30.208v30.208h90.624V512h60.416v-60.416h-151.04V360.96H512v60.416z"  ></path><path d="M179.712 179.712h151.04v151.04l60.416 60.416V119.296H119.296z m604.16 392.704h120.832V512h-60.416v-60.416h-60.416V512h-60.416v60.416z m-332.288-453.12H512v60.416h-60.416z m120.832 181.248V179.712H512v60.416h-60.416V360.96H512v-60.416z"  ></path></symbol>
	<use xlink:href="#icon-dengluerweima"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconDengluerweima', [])
	.component(`iconDengluerweima`, ddo)
	.name;