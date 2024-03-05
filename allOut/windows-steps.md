# Steps to get Android emulator and npx expo to work on Windows

- Uninstall Java and reinstall Java 17

- Update path (system and user) and update JAVA_HOME to point to `.../AppData/Local/Java/jdk-17`

- Restart computer

- Install Android Studio

- Open SDK Manager and point Android SDK Location to Android SDK path (the same path in local.properties)

- Click SDK Tools tab, check the box for Android Emulator and click OK (re-do this step if emulator is being a bitch)

- Create an AVD and make sure it can start up in Android Studio (keep it running)

- Upgrade Node and NPM/NPX to v20.11.1 and 10.5.0 respectively (download Node off the website and use `npm install -g npm` to update npm)

- MAKE SURE local.properties file is in `all-out\allOut\android` folder

- Open POWERSHELL

- Go to `all-out/allout` directoary and run `npm install` then `npx expo run:android`