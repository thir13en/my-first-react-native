# seg-react-native

A simple app using React Native, Redux, Firebase. It works on both iOS and Android.


## Install

Built and tested with:

* OS X / macOS
* Node 10
* Xcode 10
* Android SDK

A [Firebase](https://firebase.google.com) account is also needed.

Run:

```bash
git clone https://github.com/bruz/react-native-redux-groceries.git groceries
cd seg-react-native
yarn install
```

Configure:

```bash
cp firebase.config.js.dist firebase.config.js
```

Update firebase.config.js with your Firebase app credentials.

## Develop

Follow the [React Native Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) guide.

## Build and install on an iOS device

* In the Xcode menu, go to Product -> Scheme -> Edit Scheme..., and under Run change the Build Configuration to Release.
* Choose your device in Xcode and run it on there.

To get back to development mode, just change the Build Configuration back to Debug.

## Build and install on an Android device

Follow the [React Native APK signing instructions](https://facebook.github.io/react-native/docs/signed-apk-android.html).
