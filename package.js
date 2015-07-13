Package.describe({
  name: 'hwillson:login-pages-skeleton',
  version: '0.0.1',
  summary: 'Login and signup pages for Meteor accounts styled with skeleton',
  git: 'https://github.com/hwillson/login-pages-skeleton.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {

  api.versionsFrom('1.0.3.1');

  api.use([
    'templating',
    'meteorhacks:flow-router',
    'meteorhacks:flow-layout',
    'accounts-password',
    'skeleton:skeleton@2.0.4',
    'ryanswapp:errors@0.0.13'
  ]);

  api.addFiles([
    'lib/routes.js'
  ]);

  api.addFiles([
    'lib/client/common/login_layout.html',
    'lib/client/login/login.html',
    'lib/client/login/login.css',
    'lib/client/login/login.js',
    'lib/client/signup/signup.html',
    'lib/client/signup/signup.css',
    'lib/client/signup/signup.js',
  ], 'client');

});
