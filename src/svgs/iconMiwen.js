import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-miwen" viewBox="0 0 1024 1024"><path d="M562.39328 293.696a32 32 0 0 1-14.336 62.4 160 160 0 0 0-185.056 214.336 32 32 0 1 1-59.584 23.328 224 224 0 0 1 258.976-300.064z m-100.256 436.704a32 32 0 0 1 14.208-62.4 160 160 0 0 0 188.224-204.48 32 32 0 1 1 60.992-19.328 224 224 0 0 1-263.456 286.208z"  ></path><path d="M213.46528 676.096a32 32 0 1 1-42.336 48C132.05728 689.6 77.49728 625.568 6.45728 531.264a32 32 0 0 1-0.992-37.12C154.16928 272.704 323.22528 160 512.02528 160c52.704 0 104.096 8.832 154.016 26.496a32 32 0 0 1-21.344 60.352A394.752 394.752 0 0 0 512.02528 224c-159.584 0-306.24 94.464-440.576 287.04 61.824 81.056 109.44 136.288 142.048 165.056z m599.808-325.76a32 32 0 0 1 42.592-47.808c38.368 34.24 91.968 97.376 161.728 190.24a32 32 0 0 1 0.992 37.088C869.88128 751.296 700.82528 864 512.02528 864c-37.824 0-74.944-4.544-111.36-13.664a32 32 0 0 1 15.488-62.08c31.36 7.84 63.264 11.744 95.872 11.744 159.584 0 306.24-94.464 440.576-287.04-60.64-79.712-107.328-134.112-139.328-162.656zM823.92928 122.912a32 32 0 0 1 48.192 42.176l-672 768a32 32 0 0 1-48.192-42.176l672-768z"  ></path></symbol>
	<use xlink:href="#icon-miwen"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconMiwen', [])
	.component(`iconMiwen`, ddo)
	.name;