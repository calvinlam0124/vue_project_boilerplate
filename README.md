### Get start
```sh
# https://github.com/vuejs-templates/webpack
npm install -g vue-cli
vue init webpack my-project # config package.json
cd my-project
npm install
npm run dev
```


### Add new route
- edit `src/router/index.js`
- create a new components for a new route


### add vue template (nested-route)
```sh
vim src/components/TemplateOne.vue (include <router-view/>)
mkdir -p src/components/TemplateOne
vim src/components/TEmplateOne/ContentOne.vue
vim src/router/index.js
```
