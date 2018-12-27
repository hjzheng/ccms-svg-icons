import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-fangda" viewBox="0 0 1024 1024"><path d="M977.216 909.056l-166.4-166.464a435.072 435.072 0 0 0 95.872-272.896 437.376 437.376 0 1 0-437.312 437.312 434.752 434.752 0 0 0 273.664-96.512l166.336 166.336a48.512 48.512 0 0 0 68.8 0.896 48.64 48.64 0 0 0-0.96-68.672zM128.064 469.76a341.312 341.312 0 1 1 682.624 0A341.312 341.312 0 0 1 128 469.76z"  ></path><path d="M627.52 427.648H511.488V311.744c0-23.872-18.88-43.328-42.112-43.328s-42.112 19.456-42.112 43.328v115.968H311.296a42.816 42.816 0 0 0-43.328 42.176c0 23.296 19.456 42.048 43.328 42.048h115.968v115.968c0 23.872 18.88 43.392 42.112 43.392s42.112-19.52 42.112-43.392V511.936h115.968a42.816 42.816 0 0 0 43.328-42.112 42.752 42.752 0 0 0-43.264-42.176z"  ></path></symbol>
	<use xlink:href="#icon-fangda"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconFangda', [])
	.component(`iconFangda`, ddo)
	.name;