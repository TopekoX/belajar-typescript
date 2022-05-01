Secara default compiler `tsc` akan tetap mengenerate file `.js` walaupun compile error.
Untuk mengatasi itu gunakan flag seperti contoh dibawah ini.

```bash
tsc --noEmitOnError Customer.ts
```

tambahkan ecma ES5 untuk target compiler

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