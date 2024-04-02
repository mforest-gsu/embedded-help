# embedded-help

Build `src/js/data/config.js` with the following commands:
```sh
cp ./src/js/data/config.js ./src/js/data/config.js.backup
composer -q run configBuilder > ./src/js/data/config.js
```
CVS files and Javascript template are located in `conf\`.

---

Package Javascript with the following commands:
```sh
npm run build
```
Output should be in `dist/`
