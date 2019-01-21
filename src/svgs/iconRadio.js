import angular from 'angular';

const template = `<svg ng-class="$ctrl.className" class="cc-icon">
    <symbol id="icon-radio" viewBox="0 0 1024 1024"><path d="M961.695 512c0 248.342-201.353 449.641-449.694 449.641-248.343 0-449.696-201.298-449.696-449.641s201.353-449.642 449.696-449.642c248.341 0 449.694 201.298 449.694 449.642v0 0 0zM512.001 165.231c-191.527 0-346.769 155.271-346.769 346.769 0 191.526 155.242 346.768 346.769 346.768 191.525 0 346.767-155.242 346.767-346.768-0.001-191.498-155.242-346.769-346.767-346.769v0 0 0zM512.001 165.231z"  ></path></symbol>
	<use xlink:href="#icon-radio"></use>
</svg>`;

const ddo = {
	template,
	bindings: {
		className: '@'
	}
};

export default angular
	.module('ccms.icon.iconRadio', [])
	.component(`iconRadio`, ddo)
	.name;