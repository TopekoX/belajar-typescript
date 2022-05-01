## Belajar Typescript

### Dependency

Typescript dependency:

* Node
* npm
* tsc

Compile file `filename.ts`, and will make new file javascript `filename.js`:

```
tsc hello.ts
```

Run

```
node hello.js
```

by default compiler `tsc` will to generate new file `.js` although compile is error.
To Fix that use flag command, example.

```bash
tsc --noEmitOnError Customer.ts
```

add ecma ES5 to set target compiler

```bash
tsc --target ES5 --noEmitOnError Customer.ts
```

Generate tsc config

```bash
tsc --init
```

edit file `tsconfig.json`, change parameter and uncomment

```json
{
....
"target": "es5",

"noEmitOnError": true, 
....

}
```

clean
```bash
tsc --build --clean
```

Compile 
```bash
tsc
```

Run file
```bash
node filename.js
```