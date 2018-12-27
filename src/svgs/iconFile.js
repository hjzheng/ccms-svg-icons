import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-file" viewBox="0 0 1024 1024"><path d="M911.96 207.687h-450v-34.2c0-31.14-19.35-51.21-49.95-51.21h-306.27c-24.12 0-43.74 20.070-43.74 44.82v679.14c0 24.75 19.62 44.82 43.74 44.82h812.52c24.12 0 43.74-20.070 43.74-44.82v-589.41c0-31.23-17.55-50.22-50.040-49.14zM911.96 805.647c-0.81 20.070-5.94 35.19-33.3 34.2h-733.32c-22.68 3.69-33.12-10.26-33.3-34.2v-392.94h800.010v392.94zM111.95 361.407v-153.72c0-20.88 12.15-34.2 33.3-34.2h233.37c21.6-1.62 34.11 11.7 33.3 34.2v51.21h499.95v102.51h-799.92z" fill="" ></path></symbol>
	<use xlink:href="#icon-file"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconFile', [])
	.component(`iconFile`, ddo)
	.name;