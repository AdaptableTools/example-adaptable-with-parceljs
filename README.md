# example-adaptable-with-parceljs

Demo of AdapTable - using parceljs as build tool for quick setup

This demo is using TypeScript for convenience - but it could easily be just JavaScript.

## Installation

NOTE: In order to be able to run `npm install`, you need to follow the [AdapTable installation instructions](https://adaptabletools.zendesk.com/hc/en-us/articles/360002754737-Installation) - so you need to be logged into our private NPM registry.

Run `npm install` (or `yarn`), depending on what tool you're using.

## Running for development

Execute the following command

```sh
$ npm run dev
```

NOTE: The first time you run this, it takes longer as parcel generates some cache, etc - subsequent runs will be a lot faster

Now navigate to [localhost:1234](http://localhost:1234) in order the see the AdapTable in action.

Any change you make in your sources will trigger a browser reload, since parceljs comes with built-in hot-reloading in order to keep you productive.

## Building for production

```sh
$ npm run build
```

This generates a `dist` folder, which you can deploy on a webserver.

On your local machine, you can run

```sh
$ npx serve dist
```

to launch a webserver that serves the generated `dist` folder - now go to [localhost:5000](http://localhost:5000) to see the production version.

## Running with minified script

This repo also shows how you can minify AdapTable - for this, run `npm run minify` - this runs webpack on the `ab.js` file found in the root folder. The script generates `minified/ab.js` - a minified version of AdapTable, which contains all the dependencies that AdapTable needs to work properly, excluding the ag-grid-community and enterprise packages (the exclude is found in `webpack.config.js`, on the `externals` property).

Then, in order to use the minified version, you can run `npm run serve-minified` - which simply runs a webserver in the current folder - now you can open [localhost:1234/with-minified](http://localhost:1234/with-minified.html)

In order to modify the demo, you can edit the [with-minified.html](./with-minified.html) file, which uses the minified version of AdapTable.

## Licences

A licence for AdapTable provides access to all product features as well as quarterly updates and enhancements through the lifetime of the licence, comprehensive support, and access to all 3rd party libraries.

Licences can be purchased individually, for a team (minimum 30 end-users), for an organisation or for integration into software for onward sale.

We can make a trial licence available for a short period of time to allow you to try out AdapTable for yourself.

Please contact [`sales@adaptabletools.com`](mailto:sales@adaptabletools.com) for more information.

## Demo

To see AdapTable in action visit our [Demo Site](https://demo.adaptabletools.com).  Here you can see a large number of AdapTable demos each showing a different feature, function or option in AdapTable (using dummy data sets).

## Help

Developers can learn how to access AdapTable programmatically at [AdapTable Documentation](https://docs.adaptabletools.com).

## Other AdapTable Resources

General information about Adaptable Tools is available at our [Website](http://www.adaptabletools.com)

## Support

For all support enquiries please email [`support@adaptabletools.com`](mailto:support@adaptabletools.com) or [raise a Support Ticket](https://adaptabletools.zendesk.com/hc/en-us/requests/new).
