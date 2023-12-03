# Emily's Advent of Code site

[![pages-build-deployment](https://github.com/emilyhunt/aoc.emilydoesastro.com/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/emilyhunt/aoc.emilydoesastro.com/actions/workflows/pages/pages-build-deployment)

View the site at [aoc.emilydoesastro.com](https://aoc.emilydoesastro.com/).

This site is an attempt at learning and improving my skills working with web technologies. I'm solving [Advent of Code](https://adventofcode.com/) puzzles in web browsers! It's also a part of the [Backstage Advent of Code](https://github.com/emilyhunt/backstage-advent-of-code) group.

The site is made with the web framework Svelte and built using Sveltekit. The site lives statically on GitHub pages. I might do some of the puzzles using Typescript, but I want to make sure I'm comfortable with Javascript first.

## To-do list
### Things I should do

* Add a way to view code on the page, e.g. with a toggle
* Fix sorting issues on some year pages
* Add ~~keywords for each page~~ and a way to sort pages by keywords (e.g.: `lists`, `sorting`, etc)

_Low-priority:_
* Allow for more customisation/bindings with the Result component, which would be useful for solutions that need a visualisation
* Basic visualisation support (integrate e.g. chartjs into library stuff?)

## Acknowledgements
* ric2b's [2021 Advent of Code site](https://github.com/ric2b/advent-of-code/tree/master/2021) was used as inspiration
* Glench's [sveltekit GitHub pages template](https://github.com/Glench/sveltekit-github-pages-template) was used to work out how to get this working with GitHub Pages


## Instructions for use

### Developing

1. Ensure you have node.js installed, _and_ a high enough version of it (I recommend node.js v18 - which gives you npm v8, which is required!)

2. Clone the project with:

```bash
git clone https://github.com/emilyhunt/advent-of-code.git
```

3. Run the following in the project directory to install dependencies:

```bash
npm install
```

4. Start a development server using:

```bash
npm run dev
```
or open it automatically in a new browser tab with
```bash
npm run dev -- --open
```

### Building

To create a production version of the app:

```bash
npm run build
```

Push this to GitHub to update the pages site. You can preview the production build locally with `npm run preview`.
