import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-hongbao" viewBox="0 0 1024 1024"><path d="M819.004139 1023.653099 204.987674 1023.653099c-75.352175 0-136.439462-61.09138-136.439462-136.448672L68.548212 205.000977 477.888088 341.448626l68.215638 0 409.346015-136.448672 0 682.204473C955.450764 962.560696 894.357338 1023.653099 819.004139 1023.653099L819.004139 1023.653099zM547.769668 680.401408l99.019201-0.23843c24.798802 0.23843 33.634028-12.620435 34.090423-28.120454 0.382717-13.446243-12.320607-38.783305-34.69008-39.390125l-98.985432 0 0-23.876804c0 0 75.133188-76.735685 94.632287-94.417393 19.435655-17.764596 24.348548-31.674397 12.33391-46.041616-12.177344-14.661931-33.646308-13.754259-49.365314-0.743944-15.951297 13.222139-92.681866 84.505649-92.681866 84.505649s-65.869197-68.023256-80.127945-81.70793c-12.80463-12.32777-39.98569-24.272823-54.612829-7.714705-15.261589 17.307178-3.397377 38.926568 6.160303 48.381917 9.530051 9.366322 91.958388 96.518241 91.958388 96.518241l-0.150426 26.224268c0 0-88.022753 0-103.290481 0-15.267728 0-28.756951 27.164686-28.271904 41.600467 0.490164 14.361079 12.05557 25.624611 28.238135 25.624611 16.175401 0 102.982466-0.600681 102.982466-0.600681l-0.224104 73.139787c0 0-91.719958 0-106.987686 0-15.267728 0-28.080545 15.377222-28.695552 29.811979-0.599657 14.442944 11.412934 34.008558 28.695552 34.008558 17.308201 0 106.754373 0 106.754373 0s-0.184195 25.022906 0.457418 35.446303c1.439792 23.277146 16.708544 32.80208 37.113269 33.18275 20.412912 0.388856 34.896788-16.693194 34.848693-31.967062-0.069585-12.622482-0.369414-36.661991-0.369414-36.661991s88.846514-0.157589 105.629759 0c16.783245 0.14224 29.330002-16.84362 28.647457-34.008558-0.599657-17.232476-11.032264-30.411637-36.505425-30.411637-25.480324 0-97.170087 0-97.170087 0L547.769668 680.401408 547.769668 680.401408zM546.104749 273.220708 477.888088 273.220708 68.549236 136.787386c0-75.363432 61.086264-136.440485 136.439462-136.440485l614.016465 0c75.352175 0 136.446625 61.077054 136.446625 136.440485L546.104749 273.220708 546.104749 273.220708z"  ></path></symbol>
	<use xlink:href="#icon-hongbao"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconHongbao', [])
	.component(`iconHongbao`, ddo)
	.name;