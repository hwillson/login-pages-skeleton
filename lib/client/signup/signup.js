Template.signup.events({

  'submit form': function (e) {

    e.preventDefault();

    var email = $(e.target).find('[name=email]').val();
    var username = $(e.target).find('[name=username]').val();
    var password = $(e.target).find('[name=password]').val();

    Accounts.createUser({
      email: email,
      username: username,
      password: password
    }, function (error) {
      if (error) {
          Errors.throw("Error: " + error.reason);
      } else {
        FlowRouter.go('/');
      }
    });

  }

});
