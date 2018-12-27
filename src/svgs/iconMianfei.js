import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-mianfei" viewBox="0 0 1024 1024"><path d="M742.15424 821.53344C675.26656 871.35872 595.68 897.69472 512 897.69472c-212.67328 0-385.696-173.02272-385.696-385.69728 0-81.248 24.95488-158.94528 72.1664-224.6912 16.49408-22.96832 11.2448-54.95936-11.72352-71.45216-22.96832-16.4928-54.95936-11.2448-71.45216 11.72352-59.78752 83.26016-91.39072 181.61024-91.39072 284.41984 0 65.87008 12.91264 129.79712 38.37696 190.00576 24.58624 58.12736 59.77216 110.32064 104.5824 155.13088 44.80896 44.80896 97.00352 79.99616 155.13088 104.5824 60.20864 25.4656 124.1344 38.37696 190.00448 38.37696 105.89056 0 206.62912-33.34912 291.32672-96.4416 22.67648-16.89216 27.3664-48.96896 10.47424-71.64672C796.91008 809.3312 764.832 804.64 742.15424 821.53344z"  ></path><path d="M961.71776 321.99424c-24.58624-58.12864-59.77216-110.32192-104.5824-155.13088C812.3264 122.0544 760.13312 86.86848 702.0032 62.28224 641.79584 36.81664 577.87008 23.904 512 23.904c-105.8752 0-206.60352 33.34016-291.29216 96.416-22.67776 16.89088-27.37024 48.96768-10.47936 71.64544 16.8896 22.67776 48.96768 27.37024 71.64544 10.47936C348.75392 152.6336 428.33024 126.304 512 126.304c212.672 0 385.69472 173.02144 385.69472 385.69344 0 83.51232-26.23872 162.96704-75.87968 229.77536-16.864 22.69696-12.13568 54.76864 10.56128 71.63392 9.17504 6.81728 19.88096 10.10688 30.496 10.10688 15.64416-0.00128 31.08992-7.14496 41.13792-20.66688 62.85824-84.59904 96.08448-185.17248 96.08448-290.848C1000.09472 446.12864 987.18208 382.2016 961.71776 321.99424z"  ></path><path d="M355.5712 243.97568c-24.39296 46.66368-51.4368 88.0256-93.32864 143.17312l87.4944 0c18.0288-22.272 34.46784-46.13376 49.31584-70.52672l219.0016 0c3.712 0 7.42528 2.12096 9.01504 4.77312 1.59232 3.1808 1.59232 6.8928 0.52992 10.07488l-37.64736 69.4656L315.80032 400.93568c-19.08992 0-34.99776 15.90784-34.99776 35.52896l0 97.57056c0 19.61984 15.90784 35.52896 34.99776 35.52896l120.9024 0c-36.5888 58.85952-95.97952 98.6304-165.44512 115.59936l0 60.45184c112.41856-18.0288 200.97408-74.76864 247.10784-165.97504L518.36544 709.5552c0 19.08992 15.90784 34.99904 35.52768 34.99904l207.86688 0 0-30.22592L618.5856 714.32832c-11.13472 0-19.61984-9.01376-19.61984-20.14976l0-124.61312 109.23776 0c20.14976 0 35.52768-15.90912 35.52768-35.52896l0-97.57056c0-19.62112-15.37792-35.52896-35.52768-35.52896l-36.06016 0 41.89312-77.41952c4.24192-7.95392 4.24192-16.96896-1.05984-24.92288-4.77312-7.95392-12.19712-12.19584-21.2096-12.19584L417.0816 286.39872c7.95392-13.78688 15.90912-28.10496 23.33312-42.42176L355.5712 243.97696zM452.61056 539.33696l-71.05664 0c-11.136 0-20.15104-9.01504-20.15104-20.14976l0-67.87456c0-11.136 9.01504-20.15104 20.15104-20.15104l93.85856 0C474.88128 471.4624 466.39744 507.52128 452.61056 539.33696zM663.1296 451.31264l0 67.87456c0 11.13472-9.01504 20.14976-20.15232 20.14976l-107.64544 0c11.13728-32.34688 16.97024-68.9344 18.03008-108.17536l89.61536 0C654.11456 431.1616 663.1296 440.17664 663.1296 451.31264z"  ></path></symbol>
	<use xlink:href="#icon-mianfei"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconMianfei', [])
	.component(`iconMianfei`, ddo)
	.name;