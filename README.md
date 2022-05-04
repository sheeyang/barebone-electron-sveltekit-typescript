# barebone-electron-sveltekit-typescript

A barebone and minimal project template for Electron and SvelteKit with complete TypeScript support and no extra features added.

## Screenshot

![Screenshot](https://github.com/sheeyang/barebone-electron-sveltekit-typescript/blob/main/screenshot.png)

## Why did I create this?

I needed a project template for Electron and SvelteKit that has TypeScript support, but I couldn't find a template that just has the basic functionalities with no extra bloat so that I can add my own features on top of it.

This template is just a combination of [electron-quick-start-typescript](https://github.com/electron/electron-quick-start-typescript) and the template created from `npm init svelte my-app` with some changes to make them work together

## Features

- Auto reload when main and renderer files are changed
- Build to executable (Windows)
- Thats it!

## Get Started

```bash
# Clone this repository
git clone https://github.com/sheeyang/barebone-electron-sveltekit-typescript project
# OR
npx degit sheeyang/barebone-electron-sveltekit-typescript project
# Go into the repository
cd project
# Install dependencies
yarn setup
# Run the app
yarn dev
# Create executable
yarn build
```
