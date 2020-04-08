# Bot Robotics and Automation at George Mason University

The template is forked from https://github.com/erickzhao/static-html-webpack-boilerplate

### Available Commands

- `npi i`: Install/ update npm before building and hosting the website locally.
- `npm run build`: Build files to the `dist` folder. Transpiles down to ES5 and bundles all JS into `app.bundle.js`. Transpiles SCSS to CSS and adds prefixing into `style.bundle.css`. Copies static assets and HTML over, and bundled CSS and JS gets added to HTML file.
- `npm run start:dev`: Run `webpack-dev-server` at `localhost:9000`. Includes live reloading on any Javascript/SCSS/HTML changes.
- `npm run start`: Builds files and runs a local production server on `localhost:8080` with `http-server`.
- `npm run run lint:js`: Lints JS with ESLint.
- `npm run lint:styles`: Lints SCSS stylesheets with stylelint.
- `npm run lint:html`: Lints HTML for a11y issues using pa11y.

### To Contribute

1. Create an issue
2. Fork the repo
3. Make your changes & create a PR
