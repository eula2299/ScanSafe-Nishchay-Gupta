# ScanSafe — Nishchay Gupta

A food barcode scanner app built with JavaScript, React Native, and Expo.

## run it

```
npm ci
npm start
```

then open it in Expo Go (SDK 58). use `npm start -- --tunnel` if your phone isnt on the same wifi

## stuff to know

- App.js is the main screen, everything else is in the stuff folder
- food data comes from Open Food Facts + USDA FoodData Central (+ some store pages)
- the USDA key goes in `.env` as EXPO_PUBLIC_USDA_API_KEY (theres a .env.example). for eas builds add it in the eas env vars bc .env doesnt get uploaded
- if a product isnt anywhere it opens the camera so you can scan the label
- search-server.mjs is optional, you dont need it
