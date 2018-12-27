import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-user-information" viewBox="0 0 1024 1024"><path d="M912.384 918.016c0-1.024 0-2.048-0.512-3.584 0-3.072-0.512-6.144-1.024-9.216-18.432-144.896-113.152-265.728-242.688-321.024 74.752-51.2 123.904-137.216 123.904-235.008 0-157.184-127.488-284.672-284.672-284.672-157.184 0-284.672 127.488-284.672 284.672 0 97.792 49.152 183.808 123.904 235.008-128 55.296-221.696 174.08-241.664 316.928-1.536 4.096-2.56 8.704-2.56 13.312l0.512 3.072v0.512c0 22.528 17.92 40.448 40.448 40.448s40.448-17.92 40.448-40.448v-0.512h0.512c18.944-155.136 146.944-275.968 304.64-284.672 5.632 0.512 11.776 0.512 17.92 0.512 6.144 0 11.776 0 17.92-0.512 157.696 8.704 285.696 129.536 304.64 284.672h1.024v0.512c0 22.528 17.92 40.448 40.448 40.448 23.552 0.512 41.472-17.408 41.472-40.448zM304.64 349.696c0-112.128 91.136-203.264 203.264-203.264 112.128 0 203.264 91.136 203.264 203.264 0 105.472-80.896 192.512-183.808 202.24-6.144-0.512-12.8-0.512-19.456-0.512-6.656 0-13.312 0-19.456 0.512-102.912-9.728-183.808-96.768-183.808-202.24z" fill="" ></path></symbol>
	<use xlink:href="#icon-user-information"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconUserInformation', [])
	.component(`iconUserInformation`, ddo)
	.name;