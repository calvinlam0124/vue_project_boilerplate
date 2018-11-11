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

### add bootstrap
ref: https://guahsu.io/2017/12/vue-cli-webpack-pug-scss-bootstrap4/
```sh
npm install --save bootstrap
npm install --save jquery
npm install --save popper.js
```

edit build/webpack.base.conf.js
```js
const webpack = require('webpack')
module.exports = {
  ...
  // 新增plugins
  plugins: [
    new webpack.ProvidePlugin({
        '$': "jquery",
        'jQuery': "jquery",
        'Popper': 'popper.js'
    })
  ],
	...
}
```

edit src/main.js
```js
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
```
