FlowRouter.route('/login', {
  action: function (params, queryParams) {
    FlowLayout.render('loginLayout', {
      body: 'login'
    });
  }
});

FlowRouter.route('/signup', {
  action: function (params, queryParams) {
    FlowLayout.render('loginLayout', {
      body: 'signup'
    });
  }
});
