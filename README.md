#generator-spa-angular


>For scaffolding enterprise AngularJS SPA.

This generator is a fork of [cc-angular](https://github.com/leanovate/generator-cc-angular), with additional improvments:

- Bower components auto-injected into index.html (by wiredep package)
- Added restangular module (for fast building REST-full interaction.)
- separated API develop/production configuration
- Subgenerator `rest_service` - add restangularzed service.

To start
-------------

    npm install -g grunt-cli yo bower

Next, install this generator:

    # for global use, otherwise install in project
    npm install -g generator-spa-angular

To create a project:

    mkdir VeryNiceApp
    cd VeryNiceApp

    #if not installed globally, install it in the project
    npm install generator-spa-angular

    # let's generate the app
    yo spa-angular

    #we need webdriver for protractor
    ./node_modules/grunt-protractor-runner/node_modules/protractor/bin/webdriver-manager update


Grunt Tasks
-------------

After creating project, edit `conf/api-config.dev.js` and `conf/api-config.prod.js` (set valid api url's)

Now, grunt commands available:

    grunt serve   #This will run a development server with watch & livereload enabled.
    grunt test    #Run local unit tests.
    grunt build   #Places a fully optimized (minified, concatenated, and more) in /dist

When `grunt serve` is running, any changed javascript files will be linted using JSHint as well as have their appropriate unit tests executed.  Only the unit tests that correspond to the changed file will be run.  This allows for an efficient test driven workflow.

Yeoman Subgenerators
-------------

There are a set of subgenerators to initialize empty Angular components.  Each of these generators will:

* Create one or more skeleton files (javascript, LESS, html, spec etc) for the component type.
* Update index.html and add the necessary `script` tags.
* Update app.less and add the @import as needed.
* For partials, update the app.js, adding the necessary route call if a route was entered in the generator prompts.

There are generators for `directive`,`partial`,`service`, `rest_service`, `filter`, and `module`.

Running a generator:

    yo spa-angular:directive my-awesome-directive
    yo spa-angular:partial my-partial
    yo spa-angular:service my-service
    yo spa-angular:rest_service my-service endpoint
    yo spa-angular:filter my-filter
    yo spa-angular:module my-module

The name paramater passed (i.e. 'my-awesome-directive') will be used as the file names.  The generators will derive appropriate class names from this parameter (ex. 'my-awesome-directive' will convert to a class name of 'MyAwesomeDirective').  Each sub-generator will ask for the folder in which to create the new skeleton files.  You may override the default folder for each sub-generator in the `.yo-rc.json` file.

Subgenerators are also customizable.  Please read [CUSTOMIZING.md](CUSTOMIZING.md) for details.

Submodules
-------------

Submodules allow you to more explicitly separate parts of your application.  Use the `yo spa-angular:module my-module` command and specify a new subdirectory to place the module into.  Once you've created a submodule, running other subgenerators will now prompt you to select the module in which to place the new component.
Also submodules have the appCore.module as dependency, because this module manages all 3thrd party dependencies

Preconfigured Libraries
-------------

The new app will have a handful of preconfigured libraries included.  This includes Angular 1.3, Bootstrap 3,
AngularUI Utils, FontAwesome 4, JQuery 2, Underscore 1.7, LESS 1.6, and Moment 2.5.  You may of course add to or
remove any of these libraries.
But the work to integrate them into the app and into the build process has already been done for you.

Build Process
-------------

The project will include a ready-made Grunt build that will:

* Build all the LESS files into one minified CSS file.
* Uses [grunt-angular-templates](https://github.com/ericclemmons/grunt-angular-templates) to turn all your partials into Javascript.
* Uses [grunt-ng-annotate](https://github.com/olov/ng-annotate) to preprocess all Angular injectable methods and make them minification safe.  Thus you don't have to use the array syntax.
* Concatenates and minifies all Javascript into one file.
* Replaces all appropriate script references in `index.html` with the minified CSS and JS files.
* (Optionally) Minifies any images in `/img`.
* Minifies the `index.html`.
* Copies any extra files necessary for a distributable build (ex.  Font-Awesome font files, etc).

The resulting build loads only a few highly compressed files.

The build process uses [grunt-dom-munger](https://github.com/cgross/grunt-dom-munger) to pull script references from the `index.html`.  This means that **your index.html is the single source of truth about what makes up your app**.  Adding a new library, new controller, new directive, etc does not require that you update the build file.  Also the order of the scripts in your `index.html` will be maintained when they're concatenated.

Importantly, grunt-dom-munger uses CSS attribute selectors to manage the parsing of the script and link tags.  Its very easy to exclude certain scripts or stylesheets from the concatenated files. This is often the case if you're using a CDN. This can also be used to prevent certain development scripts from being included in the final build.

* To prevent a script or stylesheet from being included in concatenation, put a `data-concat="false"` attribute on the link or script tag.  This is currently applied for the `livereload.js` and `less.js` script tags.

* To prevent a script or link tag from being removed from the finalized `index.html`, use a `data-remove="false"` attribute.


E2E Testing
------------
The generator comes with E2E tests in Gherkin, compiled to JS with cucumber.js. This makes it easy to elaborate these
 tests as part of the "feature contract" together with a non tech person (product owner, customer...).

spa-angular generates .feature files for partial with a route and puts it in the same directory as the partial file.
The step defninitions should be in a sub folder step_definitions of the partial folder, because this way, the whole
module contains all files needed to be placed in another app created with spa-angular.

Naming convention for step files: **PARTIALNAME.steps.js**