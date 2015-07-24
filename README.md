# Koop UI

> An experimental user interface for Koop

The goal of this work is to explore some ideas around building a useful tool for inspecting various koop instances from a distance. This app can tell you: 

* what providers are installed
* how many datasets are cached
* provide direct access to data in the cache 

## Installation 

```
  git clone 
  npm install 
  bower install 
  npm run start
```

## Configuring 

The app is configured by default to point at a localhost instance of koop, but can be changed by modifying the `host` property in `scripts/app.js`.
