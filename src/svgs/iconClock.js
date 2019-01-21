import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-clock" viewBox="0 0 1024 1024"><path d="M240.563 62c4.817 0.927 9.882 1.206 14.414 2.918 11.898 4.493 19.071 17.445 17.053 29.631-2.272 13.694-12.803 23.595-26.248 23.842-24.807 0.448-47.524 7.254-67.292 22.529-29.186 22.545-43.683 52.762-44.628 89.748-0.289 11.508-5.656 19.898-15.813 24.843-9.786 4.763-19.394 3.618-28.124-2.791-7.806-5.723-11.518-13.822-11.233-23.511 1.716-59.104 26.544-105.655 74.97-138.928 26.058-17.908 55.297-26.477 86.901-28.28z"  ></path><path d="M944.916 227.485c0.338 4.417-0.218 11.987-4.923 18.725-6.971 9.986-19.352 14.398-30.848 10.867-11.509-3.537-19.384-13.945-19.557-27.053-0.275-20.961-5.345-40.544-16.504-58.155-21.79-34.409-53.253-51.987-93.609-53.348-19.957-0.672-32.956-18.762-26.592-37.157 3.956-11.426 14.346-18.917 26.947-18.57 61.872 1.707 109.289 29.251 141.886 82.289 14.788 24.066 21.945 50.691 23.202 82.401z"  ></path><path d="M726.658 601.667h-263.387v-2.080h-2.060v-389.974h79.031v312.223h186.414v79.829zM928.569 532.063c0-232.478-186.577-420.94-416.735-420.94-230.154 0-416.729 188.457-416.729 420.94 0 121.19 50.723 230.393 131.869 307.205l-84.905 85.757 36.437 36.809 88.359-89.246c68.759 50.558 153.404 80.406 244.97 80.406 96.001 0 184.403-32.804 254.868-87.895l95.774 96.736 36.43-36.801-93.392-94.34c75.989-76.255 123.053-181.889 123.053-298.63v0z"  ></path></symbol>
	<use xlink:href="#icon-clock"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconClock', [])
	.component(`iconClock`, ddo)
	.name;