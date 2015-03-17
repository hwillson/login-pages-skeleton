/*****************************************************************************/
/* Signup: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Signup.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   'submit form': function(e) {
      e.preventDefault();

      var email = $(e.target).find('[name=email]').val();
      var username = $(e.target).find('[name=username]').val();
      var password = $(e.target).find('[name=password]').val();

      Accounts.createUser({
        email: email,
        username: username,
        password: password
      }, function(error) {
        if (error) {
            console.log("Error: " + error.reason);
            Errors.throw("Error: " + error.reason);
        } else {
          Router.go('/');
        }
      });
      
   }
});

Template.Signup.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Signup: Lifecycle Hooks */
/*****************************************************************************/
Template.Signup.created = function () {
};

Template.Signup.rendered = function () {
};

Template.Signup.destroyed = function () {
};

