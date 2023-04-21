# UI Bootstrap 5

## Fork

This is a fork of the original [ui-bootstrap5][] project. It has been modified to work with Bootstrap 5. The reason this repository exists is because some applications are choosing (or are forced to chose) to stay with Angular 1, but would like to move to Bootstrap 5.

## 🚨 Help Wanted 🚨

Help is always appreciated since this is a small step to keep our AngularJS project alive for a few more years while development on a new stack is
performed.  Once out new stack is ready to go live the need for this library will be deprecated and we will be looking for those individuals that would like to
see this stay alive.

### 💵 Incentivising 💵

If you really want your issue fixed and you feel you can't fix it on your own, or your don't want to, I've setup IssueHunt for this project:

### Contributing

Wanting to contribute, but not take over the reigns? The things that are really holding this project back are, as I can see it:

* [ ] Undocumented/confusing build system.
    * [ ] The whole `SNAPSHOT` thing seems like it adds a lot of complexity, for very little gain.
    * [ ] Making a release should be a single `npm` command
    * [ ] Getting started with development should be very simple
* [ ] Switch to ES2015
    * [ ] The code should be cleaned up, and better formatted
	 
If you can think of more, feel free to make issues.

---

## Quick links
- [Demo](#demo)
- [Installation](#installation)
    - [NPM](#install-with-npm)
    - [Custom](#custom-build)
    - [Manual](#manual-download)
- [Webpack / JSPM](#webpack--jspm)
- [Support](#support)
    - [FAQ](#faq)
    - [Code of Conduct](#code-of-conduct)
    - [Supported browsers](#supported-browsers)
    - [Need help?](#need-help)
    - [Found a bug?](#found-a-bug)
- [Contributing to the project](#contributing-to-the-project)
- [Development, meeting minutes, roadmap and more.](#development-meeting-minutes-roadmap-and-more)


## Demo

Do you want to see directives in action? Visit https://lede701.github.io/ui-bootstrap5/!

## Installation

Installation is easy as UI Bootstrap has minimal dependencies - only the AngularJS and Twitter Bootstrap's CSS are required.
*Notes:*

### Angular Requirements
* UI Bootstrap 1.0 and higher _requires_ Angular 1.8.2 which is the last update for the 1.x project.

### Bootstrap Requirements
* UI Bootstrap 1.0 and higher requires Bootstrap CSS version 5.3.0 or higher.

#### Install with NPM

```sh
$ npm install ui-bootstrap5
```

#### Install with Yarn

```sh
$ yarn add ui-bootstrap5
```

This will install AngularJS and Bootstrap NPM packages.

#### Custom build

Head over to https://lede701.github.io/ui-bootstrap5/ and hit the *Custom build* button to create your own custom UI Bootstrap build, just the way you like it.

#### Manual download

After downloading dependencies (or better yet, referencing them from your favorite CDN) you need to download build version of this project. All the files and their purposes are described here:
https://github.com/lede701/ui-bootstrap5/tree/gh-pages#build-files
Don't worry, if you are not sure which file to take, opt for `ui-bootstrap-tpls-[version].min.js`.

### Adding dependency to your project

When you are done downloading all the dependencies and project files the only remaining part is to add dependencies on the `ui.bootstrap` AngularJS module:

```js
angular.module('myModule', ['ui.bootstrap']);
```

## Webpack / JSPM

To use this project with webpack, follow the [NPM](#install-with-npm) instructions.
Now, if you want to use only the accordion, you can do:

```js
import accordion from 'ui-bootstrap5/src/accordion';

angular.module('myModule', [accordion]);
```

You can import all the pieces you need in the same way:

```js
import accordion from 'ui-bootstrap5/src/accordion';
import datepicker from 'ui-bootstrap5/src/datepicker';

angular.module('myModule', [accordion, datepicker]);
```

This will load all the dependencies (if any) and also the templates (if any).

Be sure to have a loader able to process `css` files like `css-loader`.

If you would prefer not to load your css through your JavaScript file loader/bundler, you can choose to import the `index-nocss.js` file instead, which is available for the modules:
* carousel
* datepicker
* datepickerPopup
* dropdown
* modal
* popover
* position
* timepicker
* tooltip
* typeahead

The other modules, such as `accordion` in the example below, do not have CSS resources to load, so you should continue to import them as normal:

```js
import accordion from 'ui-bootstrap5/src/accordion';
import typeahead from 'ui-bootstrap5/src/typeahead/index-nocss.js';

angular.module('myModule', [accordion, typeahead]);
```

## Versioning

Pre-2.0.0 does not follow a particular versioning system. 2.0.0 and onwards follows [semantic versioning](http://semver.org/). All release changes can be viewed on our [changelog](CHANGELOG.md).

## Support

### FAQ

https://github.com/lede701/ui-bootstrap5/wiki/FAQ

## Code of Conduct

Take a moment to read our [Code of Conduct](CODE_OF_CONDUCT.md)

### Supported browsers

Directives from this repository are automatically tested with the following browsers:
* Chrome (stable and canary channel)
* Firefox
* IE 9 and 10
* Opera
* Safari

Modern mobile browsers should work without problems.

## Need help?
Need help using UI Bootstrap?

* ~~Live help in the IRC (`#angularjs` channel at the `freenode` network). Use this [webchat](https://webchat.freenode.net/) or your own IRC client.~~
* ~~Ask a question in [StackOverflow](http://stackoverflow.com/) under the [ui-bootstrap5](http://stackoverflow.com/questions/tagged/ui-bootstrap5) tag.~~

**For now, please create new issues in this repository to ask questions about using UI Bootstrap 5**

## Found a bug?
Please take a look at [CONTRIBUTING.md](CONTRIBUTING.md#you-think-youve-found-a-bug) and submit your issue [here](https://github.com/lede701/ui-bootstrap5/issues/new).


----


## Contributing to the project

We are always looking for the quality contributions! Please check the [CONTRIBUTING.md](CONTRIBUTING.md) for the contribution guidelines.

~~## Development, meeting minutes, roadmap and more.~~

~~Head over to the [Wiki](https://github.com/lede701/ui-bootstrap5/wiki) for notes on development for UI Bootstrap, meeting minutes from the UI Bootstrap team, roadmap plans, project philosophy and more.~~

----

## Building a Release

I've currently hacked out a solution, but the whole thing's very messy. For now, to build a release, just do:

```
$ grunt release:3.0.0
```

(Obviously, replace `3.0.0` with the version you're releasing.) That should build a correct release, and update the 
docs, and everything.
