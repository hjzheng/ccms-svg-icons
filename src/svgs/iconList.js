import angular from 'angular';

const template = `<svg style="font-size:20px; width:1em; height:1em;" ng-class="$ctrl.className">
    <symbol id="icon-list" viewBox="0 0 1229 1024"><path d="M478.01117696 758.0313392a66.41336765 66.41336765 0 1 0 0 132.91059054h607.95065073a66.41336765 66.41336765 0 1 0 0-132.91059054h-607.95065073zM212.60927219 757.69591815a66.4972229 66.4972229 0 1 0 0 132.99444581 66.4972229 66.4972229 0 0 0 0-132.99444581z m265.40190477-332.2345487a66.41336765 66.41336765 0 1 0 0 132.99444579h607.95065073a66.41336765 66.41336765 0 1 0 0-132.99444579h-607.95065073zM212.60927219 425.12594839A66.41336765 66.41336765 0 1 0 212.3577064 557.95268366a66.41336765 66.41336765 0 0 0 0.16771051-132.82673527zM1085.87797242 226.053556a66.4972229 66.4972229 0 0 0 0-132.91059055h-607.95065073a66.4972229 66.4972229 0 0 0 0 132.91059055h607.95065073zM146.11204929 159.22091205a66.41336765 66.41336765 0 1 0 132.82673527 0A66.41336765 66.41336765 0 0 0 146.11204929 159.30476731z"  ></path></symbol>
	<use xlink:href="#icon-list"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconList', [])
	.component(`iconList`, ddo)
	.name;