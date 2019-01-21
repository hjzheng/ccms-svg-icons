import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-choujiang" viewBox="0 0 1024 1024"><path d="M925.696 190.976h-35.84c17.92-30.72 26.112-59.904 23.552-88.064-2.048-22.528-13.312-55.296-52.736-81.408-32.768-21.504-75.264-27.136-122.88-14.848-75.776 18.944-166.912 85.504-225.792 164.352-58.88-79.872-148.992-145.408-225.792-164.352-47.104-12.288-89.088-6.656-122.88 14.848-39.424 26.112-50.688 58.88-52.736 81.408-2.56 27.136 5.632 57.344 23.552 88.064h-35.84c-54.272 0-98.304 44.032-98.304 98.304v127.488c0 43.008 28.16 81.408 69.632 93.696-3.584 11.264-5.632 21.504-5.632 33.792v381.44c0 54.272 44.032 98.304 98.304 98.304h699.392c54.272 0 98.304-44.032 98.304-98.304v-381.44c0-11.264-2.048-22.528-5.632-33.792C995.84 497.152 1024 459.776 1024 416.768v-127.488c1.024-54.272-43.008-98.304-98.304-98.304z m-62.976 763.392h-314.368v-438.784h314.368c15.872 0 28.16 13.312 28.16 28.16v381.44c0 16.896-13.312 29.184-28.16 29.184z m-275.456-763.392c49.664-57.344 115.2-102.912 168.96-116.224 27.136-6.656 50.688-4.608 66.56 5.632 17.92 11.264 20.48 21.504 21.504 29.184 2.56 28.16-27.136 66.56-41.984 81.408h-215.04m367.104 98.304v127.488c0 15.872-12.288 28.16-28.16 28.16h-377.856v-183.808h376.832c16.384 0 29.184 13.312 29.184 28.16z m-476.16 226.304v438.784H163.84c-15.872 0-28.16-13.312-28.16-28.16v-381.44c0-15.872 12.288-28.16 28.16-28.16l314.368-1.024m-296.448-406.016c1.024-7.68 3.584-17.92 21.504-29.184 15.872-11.264 39.424-13.312 66.56-5.632 53.248 13.312 119.296 58.88 168.96 116.224h-214.528c-13.312-13.312-45.056-52.224-42.496-81.408z m-110.592 179.712c0-15.872 12.288-28.16 28.16-28.16h377.856v183.808h-376.832c-15.872 0-28.16-13.312-28.16-28.16l-1.024-127.488"  ></path></symbol>
	<use xlink:href="#icon-choujiang"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconChoujiang', [])
	.component(`iconChoujiang`, ddo)
	.name;