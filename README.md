# This is my simple portfolio
## Setup 
### Seting up mongodb
#### After cloning this repository you shoul create a folder in the `root directory`
#### This folder should me named `private` and contain a js file called `dbkeys.js`
#### In the `dbkeys.js`file you should export an object having a key `dbUrl` and the value should be link to your mongodb
example:`module.exports = {dbUrl: 'link to your mongoDB server'}`

### Script commands to get it running
#### `npm run build` to produce an optimised version of the app
#### `npm run dev` to run the app in a development environment which is not optimised
#### `npm run start` to run the optimised version of the app
