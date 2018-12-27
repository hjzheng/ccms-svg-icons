import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-folder" viewBox="0 0 1024 1024"><path d="M62 406.092v418.359c0 28.828 24.697 52.383 55.107 52.383h789.697c30.411 0 55.107-23.467 55.107-52.383v-425.303h-899.912v6.943z"  ></path><path d="M906.893 225.652h-384.258v-11.426c0-37.002-30.762-67.060-68.467-67.060h-323.701c-37.705 0-68.467 30.058-68.467 67.060v127.705h900v-63.896c0-28.916-24.697-52.383-55.107-52.383z"  ></path></symbol>
	<use xlink:href="#icon-folder"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconFolder', [])
	.component(`iconFolder`, ddo)
	.name;