# Emily's Advent of Code site

[![pages-build-deployment](https://github.com/emilyhunt/aoc.emilydoesastro.com/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/emilyhunt/aoc.emilydoesastro.com/actions/workflows/pages/pages-build-deployment)

View the site at [aoc.emilydoesastro.com](https://aoc.emilydoesastro.com/).

This site is an attempt at learning and improving my skills working with web technologies. I'm solving [Advent of Code](https://adventofcode.com/) puzzles in web browsers! It's also a part of the [Backstage Advent of Code](https://github.com/emilyhunt/backstage-advent-of-code) group.

The site is made with the web framework Svelte and built using Sveltekit. The site lives statically on GitHub pages. I might do some of the puzzles using Typescript, but I want to make sure I'm comfortable with Javascript first.

## To-do list

* Add ~~keywords for each page~~ and a way to sort pages by keywords (e.g.: `lists`, `sorting`, etc)
* Basic visualisation support (integrate e.g. chartjs into library stuff?)
* Improve theme and page design (just use the VS Code colours & add a width? I dunno)
* Chat about the project on Twitter
* Throw errors at runtime in console in dev mode, or catch+throw visually on the production site (unless I can somehow find a way to show a whole stack trace, which I'd be fine with then having visually - e.g. in the result area.) If the error happens when using custom data, the site should suggest to the user that their input may be invalid.

## Acknowledgements
* ric2b's [2021 Advent of Code site](https://github.com/ric2b/advent-of-code/tree/master/2021) was used as inspiration
* Glench's [sveltekit GitHub pages template](https://github.com/Glench/sveltekit-github-pages-template) was used to work out how to get this working with GitHub Pages




## Instructions for use

### Developing

1. Ensure you have node.js installed (I recommend node.js v18, which gives you npm v8, which is required!)

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

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
