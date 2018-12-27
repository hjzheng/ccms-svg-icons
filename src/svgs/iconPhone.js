import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-phone" viewBox="0 0 1024 1024"><path d="M682.667008 47.65184 341.984256 47.65184c-42.635264 0-77.44 34.884608-77.44 77.436928l0 774.513664c0 42.59328 34.804736 77.44 77.44 77.44l340.682752 0c42.597376 0 77.441024-34.84672 77.441024-77.44L760.108032 125.087744C760.108032 82.536448 725.264384 47.65184 682.667008 47.65184zM465.854464 109.584384l92.944384 0c8.556544 0 15.545344 6.946816 15.545344 15.504384 0 8.602624-6.987776 15.504384-15.545344 15.504384l-92.944384 0c-8.51968 0-15.422464-6.90176-15.422464-15.504384C450.432 116.5312 457.33376 109.584384 465.854464 109.584384zM512.285696 946.034688c-25.637888 0-46.470144-20.754432-46.470144-46.43328s20.832256-46.512128 46.470144-46.512128c25.757696 0 46.512128 20.83328 46.512128 46.512128S538.044416 946.034688 512.285696 946.034688zM729.220096 822.162432 295.552 822.162432 295.552 202.528768l433.668096 0L729.220096 822.162432z"  ></path></symbol>
	<use xlink:href="#icon-phone"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconPhone', [])
	.component(`iconPhone`, ddo)
	.name;