# example-adaptable-with-parceljs

Demo of AdapTable - using parceljs as build tool for quick setup

This demo is using TypeScript for convenience - but it could easily be just JavaScript.

## Installation

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

to launch a webserver that serves the generated `dist` folder - now go to [localhost:3000](http://localhost:3000) to see the production version.

## Running with minified script

This repo also shows how you can minify AdapTable - for this, run `npm run minify` - this runs webpack (see config in `webpack.config.js`) on :
 - `agGridConfig.js` file found in the root folder. The script generates `minified/agGridBundle.umd.js` - a minified bundle of several AG Grid modules, see [the AG Grid documentation](https://www.ag-grid.com/javascript-data-grid/modules-building/) for details
 - `adaptableConfig.js` file found in the root folder. The script generates `minified/adaptableBundle.js` - a minified version of AdapTable, which contains all the dependencies that AdapTable needs to work properly, excluding the `@ag-grid-community/core` peer dependency package which is provided by the previous `agGridBundle.umd.js` file

Then, in order to use the minified version, you can run `npm run serve-minified` - which simply runs a webserver in the current folder - now you can open [localhost:1234/with-minified](http://localhost:1234/with-minified.html)

In order to modify the demo, you can edit the [with-minified.html](./with-minified.html) file, which uses the minified version of AdapTable.

## Licences

An AdapTable Licence provides access to all product features as well as quarterly updates and enhancements through the lifetime of the licence, comprehensive support, and access to all 3rd party libraries.

Licences can be purchased individually, for a team, for an organisation or for integratn into software for onward sale.

We can make a Trial Licence available for a short period of time to allow you to try out AdapTable for yourself.

Please contact [`sales@adaptabletools.com`](mailto:sales@adaptabletools.com) for more information.

## Help

Developers can learn how to access AdapTable programmatically at [AdapTable Documentation](https://docs.adaptabletools.com).  

Here you can see a large number of AdapTable demos each showing a different feature, function or option in AdapTable.

## Demo

To see AdapTable in action visit our [Demo Site](https://www.adaptabletools.com/demos) which contains a few larger demos.

## More Information

General information about Adaptable Tools is available at our [Website](http://www.adaptabletools.com) 
 
## Support

For all support enquiries please email [`support@adaptabletools.com`](mailto:support@adaptabletools.com) or [raise a Support Ticket](https://adaptabletools.zendesk.com/hc/en-us/requests/new).
io