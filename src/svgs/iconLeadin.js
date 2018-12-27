import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-leadin" viewBox="0 0 1024 1024"><path d="M610.036 144.017h8.156l200.625 187.969h-208.781v-187.969zM883.411 751.986c-16.781 0-30.375 13.406-30.375 30v150h-728.906v-840h425.156v253.125c0 25.969 21.281 46.969 47.625 46.969h256.125v150c0 16.5 13.594 30 30.375 30 16.688 0 30.375-13.5 30.375-30v-203.813l-327.001-306.281h-493.031c-16.781 0-30.375 13.406-30.375 30v900c0 16.5 13.594 30 30.375 30h789.657c16.688 0 30.375-13.5 30.375-30v-180c0-16.594-13.686-30-30.375-30z"  ></path><path d="M1011.661 646.142c-3.75-8.813-12.281-14.531-21.75-14.531h-350.438l132-133.031c2.25-2.25 3.938-4.969 5.25-7.969 1.125-2.906 1.687-5.813 1.687-8.813 0-6.375-2.438-12.281-6.938-16.781-8.906-9.001-24.469-9.001-33.469 0l-172.219 173.531c-4.5 4.5-6.938 10.406-6.938 16.781 0 2.156 0.938 3.844 1.219 3.844 0.469 3.188 1.5 8.719 5.719 12.938l172.313 173.531c2.156 2.25 4.969 4.125 7.781 5.344 2.813 1.125 5.906 1.687 8.906 1.687 3.094 0 6.094-0.563 8.906-1.687 2.906-1.219 5.531-2.906 7.875-5.344 2.343-2.343 3.001-5.062 3.469-6.844l1.125-2.719c0.938-1.594 2.345-4.031 2.345-7.219 0-6.375-2.438-12.281-6.938-16.781l-132.094-132.938h350.343c9.562 0 18.094-5.719 21.75-14.439 1.219-2.906 1.875-6 1.875-9.281 0.094-3.281-0.563-6.469-1.781-9.281z"  ></path></symbol>
	<use xlink:href="#icon-leadin"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconLeadin', [])
	.component(`iconLeadin`, ddo)
	.name;