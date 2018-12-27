import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-hezuoguanxi" viewBox="0 0 1024 1024"><path d="M127.2 256c0-70.4 57.6-128 128-128s128 57.6 128 128-57.6 128-128 128-128-57.6-128-128z m641.6 128c70.4 0 128-57.6 128-128s-57.6-128-128-128-128 57.6-128 128 56.8 128 128 128z m0 64c-70.4 0-128 57.6-128 128v51.2L512 701.6l-128-74.4V576c0-70.4-57.6-128-128-128s-128 57.6-128 128v288c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32V701.6l110.4 64c0.8 0 0.8 0.8 1.6 0.8 9.6 5.6 21.6 6.4 32 0l112.8-65.6V864c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32V576c0-70.4-57.6-128-128-128z"  ></path></symbol>
	<use xlink:href="#icon-hezuoguanxi"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconHezuoguanxi', [])
	.component(`iconHezuoguanxi`, ddo)
	.name;