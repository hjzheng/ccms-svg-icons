import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-jian" viewBox="0 0 1025 1024"><path d="M874.971429 149.942857C776.228571 54.857143 648.228571 0 512.914286 0S245.942857 54.857143 150.857143 149.942857c-201.142857 201.142857-201.142857 522.971429 0 724.114286C245.942857 969.142857 377.6 1024 512.914286 1024s266.971429-54.857143 362.057143-149.942857c201.142857-201.142857 201.142857-522.971429 0-724.114286m-51.2 672.914286C739.657143 906.971429 629.942857 950.857143 512.914286 950.857143s-226.742857-43.885714-310.857143-128c-171.885714-171.885714-171.885714-449.828571 0-621.714286C286.171429 117.028571 395.885714 73.142857 512.914286 73.142857s226.742857 43.885714 310.857143 128c171.885714 171.885714 171.885714 449.828571 0 621.714286"  ></path><path d="M772.571429 475.428571H253.257143c-21.942857 0-36.571429 14.628571-36.571429 36.571429 0 10.971429 3.657143 18.285714 10.971429 25.6s14.628571 10.971429 25.6 10.971429H768.914286c21.942857 0 36.571429-14.628571 36.571428-36.571429s-14.628571-36.571429-32.914285-36.571429"  ></path></symbol>
	<use xlink:href="#icon-jian"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconJian', [])
	.component(`iconJian`, ddo)
	.name;