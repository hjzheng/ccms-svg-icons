import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-close-order" viewBox="0 0 1024 1024"><path d="M738.889 119.359h-37.859v57.447h18.885c62.629 0 113.488 51.474 113.488 114.893v497.961c0 63.508-50.771 114.893-113.488 114.893h-415.919c-62.629 0-113.488-51.474-113.488-114.893v-497.872c0-63.508 50.771-114.893 113.488-114.893h18.885v-57.535h-37.859c-83.535 0-151.259 68.602-151.259 153.191v536.258c0 84.59 67.724 153.191 151.259 153.191h453.776c83.535 0 151.259-68.603 151.259-153.191v-536.17c0.088-84.678-67.636-153.279-151.171-153.279M445.857 119.359h132.374c15.636 0 28.372 12.824 28.372 28.723s-12.737 28.723-28.372 28.723h-132.374c-15.636 0-28.372-12.824-28.372-28.723 0-15.811 12.649-28.723 28.372-28.723M436.37 234.341h151.259c41.812 0 75.63-34.345 75.63-76.596s-33.818-95.744-75.63-95.744h-151.259c-41.812 0-75.63 53.406-75.63 95.745s33.817 76.596 75.63 76.596z"  ></path><path d="M655.88 684.692l-108.657-110.501 108.57-108.745c9.837-9.837 9.925-26.001 0.175-36.014s-25.649-10.102-35.574-0.176l-108.745 108.921-106.988-108.832c-9.837-9.925-25.737-10.013-35.574-0.088s-9.837 26.089-0.088 36.014l106.988 108.657-107.866 108.042c-9.837 9.925-9.925 25.913-0.176 35.926 4.919 5.007 11.331 7.554 17.831 7.554 6.413 0 12.824-2.459 17.655-7.378l107.954-108.217 108.832 110.589c4.919 5.007 11.331 7.466 17.831 7.466 6.412 0 12.824-2.459 17.743-7.378 9.837-9.75 9.925-25.913 0.088-35.839z"  ></path></symbol>
	<use xlink:href="#icon-close-order"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconCloseOrder', [])
	.component(`iconCloseOrder`, ddo)
	.name;