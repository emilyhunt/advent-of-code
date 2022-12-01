# Emily's Advent of Code site

[![pages-build-deployment](https://github.com/emilyhunt/aoc.emilydoesastro.com/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/emilyhunt/aoc.emilydoesastro.com/actions/workflows/pages/pages-build-deployment)

[View the site at aoc.emilydoesastro.com](http://aoc.emilydoesastro.com/)

This site is an attempt at learning and improving my skills working with web technologies. I'm solving [Advent of Code](https://adventofcode.com/) puzzles in web browsers! It's also a part of the [Backstage Advent of Code](https://github.com/emilyhunt/backstage-advent-of-code) group.

The site is made with the web framework Svelte and built using Sveltekit. The site lives statically on GitHub pages. I might do some of the puzzles using Typescript, but I want to do more Javascript first before I make my life more complicated -- as a Python dev, I'm used to living in dynamic typing hell already...

## To-do list

### Priorities
* ~~Make working initial template site~~
* ~~Add auto-generated menus~~
* ~~Write data loading library functions (asynchronously?)~~
* ~~Add a way to run code on-demand with a button (asynchronously?)~~
* ~~Make a working demo or two for 2021 puzzles~~
* ~~Update Runner component to be more flexible/split up, allowing for custom data visualisations. (MAYBE: split it up and let user decide what to do with subcomponents if needed?)~~

### Optional
* ~~Add timing information to code runs~~
* ~~Add a way to use custom inputs~~
* Change page metadata to be stored in a .json file or within page scripts themselves as exportable module parameters
* Add keywords for each page and a way to sort pages by keywords (e.g.: `lists`, `sorting`, etc)
* Basic visualisation support (integrate e.g. chartjs into library stuff?)
* Improve theme (just use the VS Code colours? I dunno)
* ~~Add gifs for a sweet web 1.0 aesthetic~~
* Chat about the project on Twitter
* Update dev etc. README.md information to provide instructions for setting this repo up on other machines

## Acknowledgements
* ric2b's [2021 Advent of Code site](https://github.com/ric2b/advent-of-code/tree/master/2021) was used as inspiration
* Glench's [sveltekit GitHub pages template](https://github.com/Glench/sveltekit-github-pages-template) was used to work out how to get this working with GitHub Pages




## Instructions for use from create-svelte

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
