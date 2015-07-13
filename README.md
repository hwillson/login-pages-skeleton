# Login Pages Styled With Skeleton

**Fork of [ryanswapp:login-pages-skeleton](https://github.com/ryanswapp/login-pages-skeleton) to replace [iron:router](https://github.com/iron-meteor/iron-router) dependency with [meteorhacks:flow-router](https://github.com/meteorhacks/flow-router) and [meteorhacks:flow-layout](https://github.com/meteorhacks/flow-layout).**





From [ryanswapp:login-pages-skeleton](https://github.com/ryanswapp/login-pages-skeleton):

Sometimes I prefer regular login and signup pages instead of the dropdown that comes with accounts-ui. Therefore, I created this package!

The package depends on **meteorhacks:flow-router**, **meteorhacks:flow-layout**,  skeleton:skeleton, and accounts-password and it provides you with two routes and templates for "/signup" and "/login".

The sign up form includes fields for email, username, and password while the login form asks only for an email and password.

## Usage

    meteor add hwillson:login-pages-skeleton

Error template has been added into the common layout template, just above the dynamic template include body.

    {{> meteorErrors}}

Go to /signup or /login in your browser and you should have new accounts pages.

The login template is named "login" and the signup template is named "signup."
