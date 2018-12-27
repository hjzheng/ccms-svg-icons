import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-kehu" viewBox="0 0 1024 1024"><path d="M778.242272 838.183967c-3.941775-141.211139-89.876983-261.919315-211.906248-316.185242-3.080152-1.51347-6.873548-3.204995-11.485589-5.110391 63.868633-44.333718 105.97973-119.722732 105.97973-205.324342 0-136.420019-106.817818-247.026116-238.552118-247.026116-131.759883 0-238.572584 110.606097-238.572584 247.026116 0 85.467557 41.944298 160.701029 105.610316 205.068516C159.809217 568.262398 67.642075 693.523263 64.55783 840.70437c-0.202615 1.396813-0.313132 2.825348-0.313132 4.278443l0 35.680641c0 16.264429 13.1853 29.448706 29.447682 29.448706 16.265452 0 29.449729-13.1853 29.449729-29.448706l0-35.680641c0-2.086521-0.220011-4.121877-0.633427-6.086625 4.983501-160.814616 136.900973-289.658076 298.92616-289.658076 162.694429 0 295.046806 129.905652 298.995745 291.651476-0.187265 1.338485-0.289596 2.703575-0.289596 4.093225l0 18.203594c-0.079818 1.588171-0.170892 3.172249-0.273223 4.754281l0.273223 0 0 12.723789c0 16.264429 13.1853 29.448706 29.447682 29.448706 16.265452 0 29.449729-13.1853 29.449729-29.448706l0-35.680641C779.039427 842.640466 778.756995 840.367703 778.242272 838.183967zM240.578776 311.562968c0-103.891162 81.338516-188.118472 181.700295-188.118472 100.335173 0 181.677782 84.22731 181.677782 188.118472 0 103.892185-81.34261 188.118472-181.677782 188.118472C321.917292 499.682463 240.578776 415.4572 240.578776 311.562968z"  ></path><path d="M959.817724 777.659499c-2.044566-69.184709-28.16855-136.039349-73.592089-188.290387-30.284747-34.836413-68.156286-62.108546-110.143563-79.886445 51.108005-37.041638 84.594677-98.407264 84.594677-167.907151 0-81.452103-45.925982-151.795195-112.417349-184.80296-2.430352-1.292436-9.267061-4.2897-9.267061-4.2897-6.452969-2.789533-13.07683-5.234211-19.854187-7.313569l-10.42442-3.839445c-15.262612-5.621021-32.381501 2.707668-38.234813 18.603707-5.855358 15.896038 1.77032 33.339316 17.032932 38.960337l17.209964 6.339382 0 0.271176c55.686277 18.35402 96.0291 72.333422 96.0291 136.072095 0 63.464427-39.996946 117.247354-95.309716 135.827525L686.457846 477.404064c-19.430538 0-35.184337 15.752776-35.184337 35.184337 0 19.432585 15.753799 35.184337 35.184337 35.184337l18.263969 0 0 0.153496c109.535719 21.255093 194.448644 117.320009 197.437721 232.336556-0.153496 1.230014-0.232291 2.455935-0.232291 3.64911l0 14.9679c-0.064468 1.255597-0.1361 2.5071-0.216941 3.756557l-0.334621 5.176906 0.551562 0 0 5.688559c0 16.145725 13.136182 29.281907 29.281907 29.281907 16.146749 0 29.283953-13.136182 29.283953-29.281907l0-29.588899C960.494129 781.823332 960.265932 779.722484 959.817724 777.659499z"  ></path></symbol>
	<use xlink:href="#icon-kehu"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconKehu', [])
	.component(`iconKehu`, ddo)
	.name;