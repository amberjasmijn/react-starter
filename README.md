# React Starter

This project will be a basic set up for a quick and easy start with:
- [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/)
- Statemanagement with [Redux](https://redux.js.org/)
- Styling with SCSS (or CSS modules)
- Webpack as a build tool

## Quick start
1. Run `yarn` to install required packages
2. From your project directory, run `yarn run start`. This will build the application and start a simple Express server.

## Backlog

### General checklist 
- [ ] Add required packages
- [ ] Hot reloading (?)
- [ ] Write documentation
 
### React components
- [ ] Set up folder structure (check with Redux)
- [ ] Add basic components with stylesheet (?)

```
├── components
│   ├── common
│   │   ├── Button
│   │   │   ├── Button.tsx
│   │   │   └── Button.scss
│   ├── navigation
│   │   ├── Navigation.tsx
│   │   └── Navigation.scss
└── ...    
```


### Webpack
- [X] Add config in TypeScript
- [ ] Set up config for production build
- [ ] Add loaders for scss and source maps

### SCSS
- [ ] Add autoprefixer
- [ ] Include cssnext for converting modern syntax
- [ ] Inlude a list for browser support 
