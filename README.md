# static-site-boilerplate
Simple static site boilerplate with SASS and ES6 support.

**Features**
- Uses [Rollup.js](https://rollupjs.org/guide/en/).
- ES6 support (using [@rollup/plugin-babel](https://github.com/rollup/plugins/tree/master/packages/babel)).
- SASS support (using [rollup-plugin-scss](https://github.com/differui/rollup-plugin-sass)).
- Hot-reloading enabled.
- Automated deploy on GitHub Pages with (using [Publish to GitHub Pages](https://github.com/marketplace/actions/publish-to-github-pages)).

**Index**

* [Installation](#installation)
* [Run development environment](#run-development-environment)
* [Deploy to `gh-pages`](#deploy-to-gh-pages)

## Installation

1. Clone project and go to the project folder:

```
    $ > git clone https://github.com/lucasmenendez/static-site-boilerplate.git && cd static-site-boilerplate/
```

2. **Lest hack**!

## Run development environment

1. Install dependencies via `npm` running:  
```
    $ > npm install
```

2. Run development enviroment with hot-reload using defined `npm` script:

```
    $ > npm run dev
```

3. Serve `dist/` folder locally (for example using Python `SimpleHTTPServer`):
```
    $ > cd dist/ && pyhon -m SimpleHTTPServer 8080
```

4. Visit `localhost:8080`.

## Deploy to `gh-pages`

1. Create and empty branch named as `gh-pages` to push on it the site when building process ends:

```
    $ > git branch gh-pages && \ 
    git checkout gh-pages && \
    git commit --allow-empty -m "initial gh-pages commit" && \
    git push origin gh-pages
```

2. Enable GitHub Pages with `gh-pages` branch as source into repository settings (read more [here](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-github-pages#publishing-sources-for-github-pages-sites)).

3. Every push to `master` or `main` branches runs the [`gh-pages`]('.github/workflows/gh-pages.yml') action that builds the site running `npm build` script, and pushes the folder result (`dist/`) into `gh-pages` branch to make it public.