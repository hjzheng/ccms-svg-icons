import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M229.959 677.639c-59.109-59.111-91.693-137.71-91.693-221.287 0-83.574 32.583-162.175 91.693-221.258 59.108-59.113 137.652-91.662 221.258-91.662 83.602 0 162.146 32.55 221.258 91.662 59.109 59.082 91.69 137.681 91.69 221.258 0 83.575-32.58 162.174-91.69 221.287-59.111 59.109-137.655 91.63-221.258 91.63-83.605-0.001-162.149-32.522-221.258-91.63M777.547 703.355c53.408-69.703 85.174-156.793 85.174-251.367 0-228.442-185.243-413.628-413.655-413.628-228.473 0-413.66 185.186-413.66 413.628 0 228.444 185.187 413.63 413.659 413.63 97.565 0 187.222-33.803 257.969-90.354l195.597 195.6c9.893 9.831 22.749 14.777 35.607 14.777 12.916 0 25.833-4.945 35.606-14.777 19.666-19.666 19.666-51.545 0-71.21l-196.298-196.298z"  ></path></symbol>
	<use xlink:href="#icon-search"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconSearch', [])
	.component(`iconSearch`, ddo)
	.name;