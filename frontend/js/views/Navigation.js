export default Ractive.extend({
  template: require('../../tpl/navigation'),
  onconstruct: function () {
    this.data.isLogged = !!userModel.isLogged();
  }
});