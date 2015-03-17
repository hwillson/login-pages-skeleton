/*****************************************************************************/
/* Login: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Login.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   'submit form': function(e) {
      e.preventDefault();
      var email = $(e.target).find('[name=email]').val();
      var password = $(e.target).find('[name=password]').val();

      Meteor.loginWithPassword(email, password, function(error) {
        if (error) {
            console.log("Error: " + error.reason);
            Errors.throw("Incorrect email/password combination.")
        } else {
          Router.go('/');
        }
      });
      return false;
   }
});

Template.Login.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.created = function () {
};

Template.Login.rendered = function () {
};

Template.Login.destroyed = function () {
};
