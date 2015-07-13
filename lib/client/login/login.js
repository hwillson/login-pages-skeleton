Template.login.events({

  'submit form': function (e) {

    e.preventDefault();
    var email = $(e.target).find('[name=email]').val();
    var password = $(e.target).find('[name=password]').val();

    Meteor.loginWithPassword(email, password, function (error) {
      if (error) {
        Errors.throw("Incorrect email/password combination.")
      } else {
        FlowRouter.go('/');
      }
    });

    return false;
  }

});
