# Siddhi Portfolio Dev v2

### To run this project locally:

  - Run `yarn install` to install the node modules.
  - Run `yarn start:local` to run the project locally.

- to deploy this project on git pages:
  - yarn add gh-pages
  - Add below LOC
  ```
  "predeploy": "npm run build", <----------- #1
  "deploy": "gh-pages -d build", <---------- #2
  ```
  - finally run below command in CLI
  `npm run deploy`
