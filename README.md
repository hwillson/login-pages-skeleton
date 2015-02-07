#Login Pages style with Skeleton

Sometimes I prefer regular login and signup pages instead of the dropdown that comes with accounts-ui. Therefore, I created this package!

The package depends on iron:router, skeleton:skeleton, and accounts-password and it provides you with two routes and templates for "/submit" and "/login".

The sign up form includes fields for email, username, and password while the login form asks only for an email and password. The package includes an accounts config page that allows for usernames to be collected on signup.

#Usage

    meteor add ryanswapp:login-pages-skeleton

Go to /signup or /login in your browser and you should have new accounts pages.