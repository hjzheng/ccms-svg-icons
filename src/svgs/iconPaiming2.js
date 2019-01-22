import angular from 'angular';
import insertCSSRule from './utils';

insertCSSRule();

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-paiming2" viewBox="0 0 1024 1024"><path d="M501.344334 405.423896c-141.254859 0-255.782036 114.526154-255.782036 255.78306 0 141.251789 114.527178 255.77999 255.782036 255.77999 141.253835 0 255.77999-114.528201 255.77999-255.77999C757.1233 519.951073 642.597146 405.423896 501.344334 405.423896zM610.415254 811.452564 400.782188 811.452564c0-30.26729 9.804277-56.701283 30.245801-79.72358 11.073174-13.19653 34.095471-31.516745 68.60845-55.41192 20.4405-14.485894 34.928441-25.976576 43.462797-34.926394 13.613015-15.361842 20.858009-31.974162 20.858009-49.875844 0-17.068713-4.665244-29.849782-14.049966-38.384139-9.367326-8.53231-23.418316-12.781069-41.318975-12.781069-19.193093 0-33.678986 6.370068-43.463821 19.610601-10.241228 12.779022-15.340353 31.09719-16.194812 55.826358l-46.438566 0c0.436951-34.094448 10.221785-61.36448 29.410785-81.845913 19.590135-22.147372 46.002638-32.805085 78.392261-32.805085 28.97588 0 53.245585 8.07694 71.980237 25.14463 18.33761 17.07076 27.704937 38.801647 27.704937 65.653148 0 26.436039-10.218715 50.290283-29.829316 72.02117-11.925587 12.363561-32.804061 28.560419-63.048839 49.040828-32.805085 21.730887-52.392149 40.92398-58.80315 57.535276l152.118256 0L610.416277 811.452564z"  ></path><path d="M738.768294 416.408043c0.002047 0.002047 0.004093 0.004093 0.00614 0.00614L970.440261 21.7534l-85.259655 0L680.270088 370.836215c-5.73562-3.541656-11.57971-6.924699-17.536363-10.129688L861.702938 21.7534 712.495983 21.7534 536.290171 321.934557c0.085958 0.00921 0.169868 0.020466 0.255826 0.029676-11.572547-1.187033-23.315985-1.798969-35.201663-1.798969-4.852508 0-9.675341 0.12689-14.47873 0.327457L311.506064 21.7534 162.300132 21.7534l194.108518 330.675621c-6.133685 2.883671-12.175273 5.930048-18.10225 9.161642L138.821441 21.7534 53.560763 21.7534l224.192637 381.927809c0.001023-0.001023 0.002047-0.001023 0.00307-0.002047-71.953632 62.52286-117.453827 154.701075-117.453827 257.527793 0 188.338106 152.702562 341.039645 341.041692 341.039645 188.339129 0 341.039645-152.702562 341.039645-341.039645C842.383979 565.144278 802.660335 478.386505 738.768294 416.408043zM501.344334 959.617796c-164.818483 0-298.411864-133.595427-298.411864-298.410841 0-164.819507 133.593381-298.411864 298.411864-298.411864 164.815414 0 298.410841 133.592357 298.410841 298.411864C799.754151 826.022369 666.159747 959.617796 501.344334 959.617796z"  ></path></symbol>
	<use xlink:href="#icon-paiming2"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconPaiming2', [])
	.component(`iconPaiming2`, ddo)
	.name;