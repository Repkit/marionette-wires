import Route from '../common/route';
import View from './view';

export default Route.extend({
  initialize(options) {
    this.container = options.container;
  },

  render() {
    this.view = new View();
    this.container.show(this.view);
  }
});
