# Репозиторий сайта tp-pack.ru
## Установка

1. Установи [Node.js](http://nodejs.org/).
2. Возможно собрать так же с помошью [yarn](https://yarnpkg.com/en/docs/install)
3. Скопируй репозиторий `git clone https://github.com/1deam0nster/wp-tppack2.git`.
4. Открой папку с репозиторием и введи `npm install` или если установил yarn `yarn`. 


#### Доступные команды

* `yarn start` or `npm run start` ─ Запуск dev сервера.
* `yarn build` or `npm run build` ─ Скомпилировать без сжатия и оптимизации.
* `yarn build:production` or `npm run build:production` ─ Скомпилировать и сжать файлы для продакшены.
* `yarn clean` or `npm run clean` ─ Очистка папки билд.
* `yarn lint:js` or `npm run lint:js` ─  Линтинг JS основанный ```.eslintrc.js```.
* `yarn lint:style` or `npm run lint:style` ─ Линтинг CSS основанный ```.stylelintrc.js```
* `yarn webp` or `npm run webp` ─  Сжать изображения и перевести в формат webp.

## Структура проекта

```shell
▼ project/
│
├──▼ src/
│  ├──▼ assets/            # template asset files
│  │  ├──► fonts/          # place template fonts files here
│  │  ├──► images/         # template images files
│  │  └──▼ styles/         # template style files
│  │     ├── [...]         # 7-1 Sass architecture folders
│  │     └── main.scss     # main Sass file that references scss source files
│  ├──▼ html/              # template HTML files
│  │  ├──▼ partials/       # partials of HTML code
│  │  │  └── [...]
│  │  ├── 404.html         # example 404 error page
│  │  └── index.html       # default index page
│  │  └── [...]
│  ├──▼ scripts/           # template javascript files
│  │  ├──► modules/        # dedicated project modules
│  │  ├──▼ vendor/         # necessary parts of frameworks and libs
│  │  │  └── [...]         # Bootstrap, jQuery, etc...
│  │  └── main.js          # main javascript file that references JS source files
│  ├── index.js            # entry point of template
│  └── [...]
├──▼ dist/                 # distribution folder with production build (don't edit*)
│  ├──► css/               # output styles
│  ├──► images/            # output images
│  ├──► js/                # output javascripts
│  ├── index.html          # homepage
│  └── [...]               # miscellaneous
├──▼ node_modules/         # Node.js packages (don't edit*)
│  └── [...]
├── .babelrc               # Babel configuration file
├── .eslintrc.js           # ESLint configuration file
├── .stylelintrc.js        # StyleLint configuration file
├── package.json           # Node.js dependencies and scripts
├── webpack.config.js      # Webpack configuration file
├── package-lock.json      # Node.js dependencies lock file (don't edit)
└── [...]                  # other files
```
