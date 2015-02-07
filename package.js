Package.describe({
  name: 'ryanswapp:login-pages-skeleton',
  version: '0.0.22',
  // Brief, one-line summary of the package.
  summary: 'Login and signup pages for Meteor accounts styled with skeleton',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ryanswapp/login-pages-skeleton.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
    api.use([
        'templating',
        'iron:router@1.0.7',
        'accounts-password',
        'skeleton:skeleton@2.0.4',
        'ryanswapp:errors@0.0.13'
    ]);

    api.addFiles([
        'lib/routes.js'
    ]);

    api.addFiles([
        'lib/client/login/login.html',
        'lib/client/login/login.css',
        'lib/client/login/login.js',
        'lib/client/signup/signup.html',
        'lib/client/signup/signup.css',
        'lib/client/signup/signup.js',
    ], 'client');
});


