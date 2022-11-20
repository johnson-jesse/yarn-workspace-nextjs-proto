# Prototype Frontend Project Structure as a Monorepo
This project leverages yarn workspaces to create a [monorepo](https://en.wikipedia.org/wiki/Monorepo) with the goal of decoupling aspects of the project which deserve their own black-boxing & versioning. e.g. `ui` `api`.

Testing is also made easier with an e2e framework brought in-house and triggered through pre-commits if desired. Using Cypress, we also gain component testing that can be used to replace both React Testing Library AND Storybook. Huge wins in language continuity by having all this testing through one API like Cypress.

## Setup
As usual with SnapAttack FE:
```bash
yarn install
```

Leveraging NextJS so we switch to dev script for local development. Yarn start is reserved for upping the production server.
```bash
yarn dev
```

## Workflow
Cypress component testing is now our primary unit test machine. Basic unit tests with Jest should still be leveraged for complicated business logic where it makes sense. Primarily  for `Xxx.ts` and `Xxx.js` files as needed.

e2e tests are currently hooked to Husky pre-commit but this is probably overkill for this often used command. Maybe this should be converted to a pre-push command if such exists.

## Structure
This project currently has two workspace entry points. Any direct child folder in `apps` or `packages` will be a workspace if configured with package.json. The main source code is under `apps > web > src`.

ESLint and TSConfig are both configured through their self named workspace folders and as as waterfall configs.

## Dependencies
To add or remove dependencies, one must specify a workspace. For instance, if we wanted to add lodash to web we would type:
```bash
yarn workspace web add lodash
```

And for something in a package? Check the package.json name for the correct verbiage to use. Workspace names are not based on the directory name.
```
yarn workspace @fizzog/sx add Xxx
```
Scoping package names is a nice future proofing tactic and works just fine with workspaces. For SnapAttack, using something like `@snap/xx` will be nice.

## Troubleshooting
Seeing some wonk? There are two scripts to help if errors get sketch. `yarn reset` and `yarn reset:hard`. The first clears cache. The second clears cache and node modules.

Workspaces work by creating symlinks into node_modules with give us the power to declare a dependency (workspace) in the package.json dependencies list. That means the packages need to be transpiled to work. With this setup using NextJS, that is made easy with a root level next config file where we declare:

```js
experimental: {
    transpilePackages: ["@fizzog/ui", "@fizzog/sx"],
  }
```

This file is then picked up by `web` and `qa` with both use NextJS. If using CRA, we would need to include these packages in the webpack config. With that said, I recommend converting SnapAttack to a monorepo after moving to NextJS for our own sanity.

### Vision 
* `@fizzog/ui` This package should serve most of the time as a reexport only of a the chosen component library. We may choose to Create a wrapper here and there to correct bugs or add some basic feature that doesn't already exist. e.g InputRange
* `@fizzog/sx` This package should serve for common use cases with custom component, widgets, or larger composed control inputs. e.g. See the OptionFormControl component. 
* `@fizzog/filter` Forward thinking here with the need to hide away BE database design from prying eyes. i.e. The snap filter. If we pass our query param to Next API route, we can leverage this plug-in-play filter to do the work of converting to whatever shape the BE needs while hiding network requests
* `@fizzog/api` For housing API endpoint and their accompanying types

Another advantage of using packages is we could leverage the power of a private npm repo and version our packages for easier development cycles and adoption.