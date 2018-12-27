import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-fahuo" viewBox="0 0 1024 1024"><path d="M388.68330078 473.47753906H96.40302734c-15.21826172 0-27.26367188 12.04628906-27.26367187 27.26367188s12.68085937 27.26191406 27.26367187 27.26191406h292.28027344c15.21738281 0 27.26367188-12.04628906 27.26367188-27.26367188 0.6328125-14.58105469-12.04716797-27.26191406-27.26367188-27.26191406zM261.88085937 591.40390625H96.40126953c-15.21738281 0-27.26367188 12.04716797-27.26367187 27.26367188s12.68173828 27.26191406 27.26367187 27.26191406H261.88085937c15.21738281 0 27.26367188-12.04628906 27.26367188-27.26367188 0.6328125-15.21474609-12.04716797-27.26191406-27.26367187-27.26191406z m504.67763672 27.26367188c0-1.90195313 0-3.80390625-0.6328125-5.70673829 0-0.6328125-0.63369141-1.90195313-0.6336914-2.53652343s-0.63369141-1.90195313-0.63369141-2.53564454c-0.6328125-1.26826172-1.26826172-1.90283203-1.26826172-3.17021484-0.6328125-0.6328125-0.6328125-1.26738281-0.6328125-1.90195312-1.26826172-1.27001953-1.90195313-3.17021484-3.80390625-4.43935547L663.85039062 504.54335937c-10.77802734-10.77890625-27.89648438-10.77890625-38.67626953 0-10.77802734 10.77802734-10.77802734 28.52929688 0 38.67451172l47.55146485 47.55058594H510.41796875c-15.21738281 0-27.26367188 12.04716797-27.26367188 27.26367188s12.68085937 27.26191406 27.26367188 27.26191406h162.30761719l-47.55146485 47.55146484c-10.77802734 10.77802734-10.77802734 27.89648438 0 38.67539063 10.77890625 10.77802734 28.53193359 10.77802734 38.67626954 0l94.46923828-94.46835938c1.26738281-1.26826172 2.53652344-2.53652344 3.80302734-4.43847656 0.6328125-0.63369141 0.6328125-1.26826172 1.26738281-1.90283203 0.63369141-1.26738281 1.26826172-1.90195313 1.26826172-3.16933594 0.6328125-0.63457031 0.6328125-1.90283203 0.6328125-2.53740234 0-0.6328125 0.63369141-1.90195313 0.63369141-2.53652344 0.63369141 0 0.63369141-1.90195313 0.6336914-3.80302734zM178.18964844 708.69833984H95.76757812c-15.21738281 0-27.26367188 12.68085937-27.26367187 27.26367188 0 15.21474609 12.04716797 27.26191406 27.26367188 27.26191406h82.42207031c15.21826172 0 27.26367188-12.04716797 27.26367187-27.26367187 0.6328125-14.58105469-12.04628906-27.26191406-27.26367187-27.26191407z" fill="#666666" ></path><path d="M921.25830078 271.22626953L845.81035156 126.03710937C827.421875 90.52929687 781.14042969 62 740.56308594 62H277.73017578c-39.94277344 0-86.22685547 27.89648438-105.24726562 63.40253906L97.03496094 267.42236328C80.55019531 297.85361328 67.87109375 349.20986328 67.87109375 384.07958984v22.190625c0 15.21738281 12.04541016 27.26367188 27.26279297 27.26367188s27.26191406-12.04716797 27.26191406-27.26367188v-22.18974609c0-1.90195313 0.63369141-5.07128906 0.63369141-7.60869141h770.33144531c0.63369141 3.80390625 0.63369141 7.60869141 0.63369141 10.77802735v473.6109375c0 15.21826172-12.04716797 27.26367188-27.26367188 27.26367187H150.29316406c-15.21738281 0-27.26367188-12.67998047-27.26367187-27.26367187v-33.60234375c0-15.215625-12.04541016-27.26191406-27.26191406-27.26191407S68.50390625 812.04277344 68.50390625 827.26015625v34.23603516c0 45.64863281 36.7734375 82.42207031 82.42382813 82.42207031h716.43955078c45.64863281 0 82.42207031-37.40800781 82.42207031-82.42207031V387.88525391c0-34.87148438-12.04628906-86.22685547-28.53017578-116.66074219z m-786.18164062 50.08623047c3.17021484-10.77802734 6.97412109-20.92148437 10.77890625-27.89648437l75.44794922-142.02070313c9.50976563-17.75126953 36.13886719-34.23691406 56.42753906-34.23691406h463.46660156c20.28867187 0 46.91777344 16.48476562 56.42753906 34.23779297l75.44794922 145.19003906c3.80390625 6.97324219 6.97324219 15.85019531 10.14521484 25.35996094H135.07578125z" fill="#666666" ></path></symbol>
	<use xlink:href="#icon-fahuo"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconFahuo', [])
	.component(`iconFahuo`, ddo)
	.name;