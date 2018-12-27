import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-copy" viewBox="0 0 1024 1024"><path d="M226.269531 769.394531 190.078125 769.394531l0-651.5625 506.777344 0 0 36.191406 36.191406 0 0-36.191406c0 0 0-36.191406-36.191406-36.191406L190.078125 81.640625c-36.191406 0-36.191406 36.191406-36.191406 36.191406l0 651.5625c0 0 0 36.191406 36.191406 36.191406l36.191406 0L226.269531 769.394531 226.269531 769.394531zM298.671875 950.371094c-36.191406 0-36.191406-36.191406-36.191406-36.191406l0-687.773438c0 0 0-36.191406 36.191406-36.191406l542.96875 0c36.191406 0 36.191406 36.191406 36.191406 36.191406l0 470.585938L624.453125 950.371094 298.671875 950.371094 298.671875 950.371094zM298.671875 914.179688l325.78125 0 217.1875-217.1875L841.640625 226.40625l-542.96875 0L298.671875 914.179688 298.671875 914.179688zM620.839844 945c-1.386719 0-2.792969-0.273438-4.140625-0.839844-4.023438-1.699219-28.457031-25.527344-28.457031-29.980469l0-217.1875c0 0 0-36.191406 36.191406-36.191406l253.378906 0c0 0-25.878906 25.820312-28.964844 28.945312L628.476563 941.777344C626.425781 943.886719 623.652344 945 620.839844 945L620.839844 945zM624.453125 696.992188l0 217.1875 217.1875-217.1875L624.453125 696.992188 624.453125 696.992188zM769.257813 443.613281 479.667969 443.613281l0-36.191406 289.589844 0L769.257813 443.613281 769.257813 443.613281zM769.257813 552.207031 479.667969 552.207031l0-36.191406 289.589844 0L769.257813 552.207031 769.257813 552.207031zM624.453125 298.808594l-108.59375 0 0 36.191406 108.59375 0L624.453125 298.808594 624.453125 298.808594zM371.074219 407.402344l72.402344 0 0 36.191406-72.402344 0L371.074219 407.402344 371.074219 407.402344zM371.074219 515.996094l72.402344 0 0 36.191406-72.402344 0L371.074219 515.996094 371.074219 515.996094z"  ></path></symbol>
	<use xlink:href="#icon-copy"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconCopy', [])
	.component(`iconCopy`, ddo)
	.name;