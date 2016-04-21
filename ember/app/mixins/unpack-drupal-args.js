import Mixin from 'ember-metal/mixin';
export default Mixin.create({
  didReceiveAttrs() {
    let args = this.get('drupalArgs');
    if (args) {
      Object.keys(args).forEach(key => {
        this.set(key, args[key]);
      });
    }
  }
});
