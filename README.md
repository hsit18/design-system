
# Design-system
### design-system setup in ReactJS. This repo is useful to setup companies internal design systems.

## Initial setup
1. Clone the repo
2. yarn install at root
3. yarn storybook to play with packages.

## Adding Package
lerna create <PACKAGE_NAME>

## Adding another package dependencies
lerna add <DEPENDENT_PACKAGE_NAME> --scope=<DESTINATION_PACKAGE_NAME>

## Usage
### Step1: Packages installation to react projects
1. These packages can be hosted as a npm packages or we can use self hosted package managers like verdicco.
2. Once hosted then add registry to your projects
3. Install packages npm install <PACKAGE_NAME> or yarn add <PACKAGE_NAME>

### Step2: Theme setup
1. We can create our own theme as per the the projects. Or default theme can be added as below. 

	**Default theme**
	```js
	import { DefaultTheme } from '@design-system/themes';
	    <ThemeProvider  theme={DefaultTheme}>
		    <YOUR_APP />
		</ThemeProvider>
	```

	**Create theme**
	```js
	import { createTheme } from '@design-system/themes';
		const theme = createTheme({
			config: {
				zIndex: {
					modal: 500,
				},
				font: {
					rootSize: 16,
					family: 'Montserrat,sans-serif',
				},
			}
		});
	    <ThemeProvider  theme={DefaultTheme}>
		    <YOUR_APP />
		</ThemeProvider>
	```	

## Packages
-  [x] Themes
-  [x] Buttons
- [ ] Typography
- [ ] Icons

## Design system references
1.  [https://www.youtube.com/watch?v=TgWyyoofKIA]
2.  [https://adele.uxpin.com/](https://adele.uxpin.com/)
3.  [https://designsystemsrepo.com/design-systems/](https://designsystemsrepo.com/design-systems/)