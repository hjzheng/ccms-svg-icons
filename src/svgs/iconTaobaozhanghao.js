import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-taobaozhanghao" viewBox="0 0 1024 1024"><path d="M512 11.722996c-276.29472 0-500.277004 223.982284-500.277004 500.277004s223.982284 500.277004 500.277004 500.277004 500.277004-223.982284 500.277004-500.277004S788.29472 11.722996 512 11.722996zM257.046331 313.713958c11.641131-9.012258 25.347295-13.518898 41.121559-13.518898 16.524348 0 30.417777 4.50664 41.684378 13.518898 11.267625 9.013281 16.899902 19.904329 16.899902 32.673144s-5.632277 23.657816-16.899902 32.670073c-11.266601 9.013281-25.160029 13.520945-41.684378 13.520945-15.773242 0-29.480428-4.50664-41.121559-13.520945-11.642155-9.012258-17.46272-19.901259-17.462721-32.670073s5.820566-23.658839 17.462721-32.673144z m90.692558 263.631306c-3.755534 10.514471-6.759961 18.402115-9.013281 23.657816-2.252297 5.258771-5.633301 11.82942-10.139941 19.717064-4.505617 7.885598-10.513448 19.339464-18.024515 34.361599l-36.051078 65.345263-89.005126-48.445362c18.777669-15.021112 36.051077-29.668717 51.824319-43.938721 13.518898-12.016685 26.852578-24.598234 39.995923-37.741579s22.344914-24.222681 27.601638-33.234939c5.257747-9.764388 7.134491-18.21485 5.6333-25.350364-1.502213-7.134491-4.50664-13.33061-9.012257-18.589381-5.258771-6.007831-12.018731-10.889001-20.279883-14.645558l-68.723197-37.178761 37.177737-49.569976c12.768815 8.260128 23.096021 14.833847 30.982642 19.716041 7.885598 4.881171 14.645558 9.576099 20.278859 14.08274a559.3801 559.3801 0 0 1 16.899902 14.08274c5.633301 4.883217 12.95608 11.078313 21.968337 18.590403 13.520945 12.016685 20.278859 26.099425 20.278859 42.247197 0 16.146749-4.130064 35.112706-12.392238 56.893778z m490.644623-42.812062c-0.37453 28.541033-2.441609 60.836577-6.196119 96.889701-2.252297 18.027585-7.323802 33.047674-15.208377 45.064359-7.887644 12.016685-17.46272 21.970384-28.729321 29.855981-11.265578 7.887644-23.659863 13.706163-37.177738 17.462721-13.520945 3.755534-27.039843 6.007831-40.559764 6.75996-32.295544 3.004427-68.348668 0-108.156302-9.012257l11.266601-40.559765 49.569976 9.013281c22.533202 1.50119 40.183188-1.12666 52.952002-7.887644 12.768815-6.759961 22.532179-14.270005 29.291117-22.532179 7.511067-9.765411 12.393261-21.030989 14.645558-33.798781V424.124604c0-18.776645-5.819542-33.611515-17.46272-44.50154-11.640108-10.892071-28.16548-17.84032-49.568953-20.843724-21.406542-3.003404-47.508014-2.251274-78.301343 2.254343-30.795377 4.50664-64.593134 12.767791-101.397365 24.7855l34.926464 7.885597c-3.755534 9.765411-13.518898 22.532179-29.293163 38.306444h200.539362v36.051078H594.468247v33.796734h123.929543v33.800827H594.468247v85.621053a3970.105708 3970.105708 0 0 0 30.4188-8.44944c12.018731-3.377934 21.406542-7.322779 28.165479-11.829419l-10.138917-32.671097 52.952002-14.646582 43.936675 94.636381-65.344241 23.659862-11.266601-37.178761c-7.511067 4.505617-16.898879 9.576099-28.164456 15.2094-11.265578 5.634324-24.972764 10.703783-41.122583 15.208377-16.147772 4.508687-34.548864 8.263198-55.203276 11.266601-20.654412 3.004427-44.125987 4.13211-70.414723 3.381004-28.54001 0.75213-48.818869-4.693906-60.836577-16.335037-12.016685-11.642155-19.903306-24.600281-23.657816-38.869262-3.756557-16.524348-3.37998-35.298947 1.124614-56.329937l2.254343-1.127683h73.230862c0 7.511067-0.75213 16.338107-2.254344 26.477024s0 18.58938 4.506641 25.347295c3.755534 5.258771 10.891048 8.637728 21.406542 10.139941 10.514471 1.503237 18.776645 2.252297 24.784476 2.252297h13.518898v-94.635357H398.437571V504.114402h25.91216l-24.787546-19.154245c12.769838-11.265578 24.787546-24.784476 36.052101-40.557718 11.266601-15.772218 20.654412-29.667693 28.167526-41.684378a1019.430938 1019.430938 0 0 1-18.59245 6.757914 1175.799288 1175.799288 0 0 1-19.713994 6.759961c-12.768815 15.023158-27.414373 29.668717-43.936675 43.939745l-9.013281-4.508687-9.014305-4.505617c-3.003404-1.50119-6.383384-3.004427-10.139941-4.506641-8.262174-3.755534-17.649985-8.637728-28.165479-14.644535 15.022135-11.267625 28.16548-24.787546 39.432081-40.559764 11.265578-15.773242 21.030989-31.17093 29.293163-46.191019a474.934826 474.934826 0 0 0 23.660886-52.954049l82.242096 20.279882c-1.502213 3.006474-3.381004 6.383384-5.633301 10.139941-3.004427 6.007831-8.262174 14.645558-15.773242 25.91216 41.309848-9.763364 77.92579-16.711614 109.845781-20.841677 31.92306-4.131087 59.899228-6.008854 83.934644-5.633301 24.034393 0.37453 44.689828 2.626827 61.963237 6.759961 17.275455 4.130064 31.54546 8.823969 42.813085 14.08274 27.03882 13.520945 43.936675 31.921014 50.696635 55.205322 3.756557 18.024515 6.760984 39.055504 9.012258 63.089897 1.503237 20.280906 2.065032 44.691875 1.690502 73.232908z" fill="#FF4C64" ></path><path d="M460.401832 488.905002c-6.759961 6.385431-12.768815 11.453866-18.027586 15.210424h79.990822V468.063325H482.932987c-8.262174 7.511067-15.772218 14.456247-22.531155 20.841677z" fill="#FF4C64" ></path></symbol>
	<use xlink:href="#icon-taobaozhanghao"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconTaobaozhanghao', [])
	.component(`iconTaobaozhanghao`, ddo)
	.name;