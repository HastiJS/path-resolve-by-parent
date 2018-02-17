# Path Resolve By Parent

> Resolve path or paths by module parent path

Useful when you want to resolve your path or array of paths by module parant path.

## Install

```
$ npm install path-resolve-by-parent --save
```

## Know more

Assume that we have a sub directory named `sample-directory` and a module named `child-module` into `/home/hastijs` directory. There is another module named `parent-module` and a sub-directory named `another-sample-directory` into `sample-directory`.

```
/home/hastijs/
|_ child-module.js
|_ sample/
   |_ another-sample-directory/
   |_ parent-module.js
```

As module names show, `child-module` is child of (required in) `parent-module`.

Now we run `parent-module` while `path-resolve-by-parent` called into  `child-module`.

```js
// child-module.js
console.log(require('path-resolve-by-parent')('another-sample-directory'));
```

The result is:

```js
//=> /home/hastijs/sample-directory/another-sample-directory
```

## Usage

In example bellow, **parent-module** executed.

### Resolve paths by module parent path

```js
// child-module.js (path: /home/hastijs/child-module.js)
const pathResolveByParent = require('path-resolve-by-parent');
console.log(pathResolveByParent(['..', 'another-sample-directory']));
```

```js
// parent-module.js (path: /home/hastijs/sample-directory/parent-module.js)
require('../child-module');
//=> /home/hastijs/another-sample-directory
```

## API

### pathResolveByParent(paths)

#### paths

Type: `string` | `array`

Path or array of paths to resolve by module parent path.

## Contributing

Everyone is very welcome to contribute to Path Resolve By Parent project. Path Resolve By Parent is a HastiJS project so please see [HastiJS contributing guidelines](https://github.com/HastiJS/contributing) before contributing.

## License

MIT © [HastiJS](https://github.com/HastiJS)
