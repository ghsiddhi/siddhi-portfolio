## Siddhi Portfolio

This is a Portfolio website built in React.

This was built to showcase my technical & web design skills.

### Live Link
https://siddhi-gh.github.io/siddhi-portfolio/

### Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- React
- Git
- GitHub
- Node JS
- Yarn (package manager)

### To run this project locally
- Run `yarn install` to install the node modules.
- Run `yarn start:local` to run the project on local development server.

### To deploy this project on git pages
Add this to your _scripts_ section of **package.json**
```
"predeploy": "yarn build",
"deploy": "gh-pages -d build",
```

Run the following command in CLI:
- `yarn add gh-pages` for static site hosting.
- `yarn build` to ensure the project build.
- `yarn run deploy` to deploy the project.
