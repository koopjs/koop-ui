# Koop UI

> An experimental user interface for Koop

<img width="1198" alt="koop-ui" src="https://cloud.githubusercontent.com/assets/351164/8867084/361ed8d8-3182-11e5-9d71-a8416deb0f1b.png">

The goal of this work is to explore some ideas around building a useful tool for inspecting various koop instances from a distance. This app can tell you:

* what providers are installed
* how many datasets are cached
* provide direct access to data in the cache

## Installation

```
git clone git@github.com:koopjs/koop-ui.git
cd koop-ui
npm install
npm start
```

## Configuring

The app is configured by default to point `http://koop.dc.esri.com`, but can be changed by modifying the `host` variable in `scripts/app.js`.

## License

[Apache 2.0](LICENSE)
