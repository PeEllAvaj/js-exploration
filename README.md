# TL;DR

## Setting up Drupal (for dummies)

1 Checkout the 'angular2-extension-fields' branch.

1 Install [Acquia Dev Desktop](https://www.acquia.com/products-services/dev-desktop). This installs Apache, MySQL, PHP and everything needed to run a Drupal site.

1  Select the 'Start with an Existing Drupal site located on my computer' option in the setup wizard. Follow the flow.


### Installing the Comment Angular2 module
1 In the admin go to the Extend menu select the checkbox against Comment Angular2 and hit install

1 Uninstall and re-install the module everytime you are switching branches.

1 Modify `/profiles/js_exploration/modules/comment_angular2/vendor/config.js` if you are using drupal in a subfolder

Most of the work for this project is stored in `profiles/js_exploration/` and the `modules/comment_angular2` subfolder.


### Seeing the Angular2 Comments in action
1 Verify you have enabled permissions to view the comments on a node

1 Vist a URL that looks something like  /node/1#comments , make sure you have some comments added in.
