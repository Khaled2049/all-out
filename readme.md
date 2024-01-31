Steps I followed for android 

You will need android studio and a simulator

Use java 17
add to path


Docs
https://rnmapbox.github.io/docs/install
https://docs.expo.dev/workflow/customizing/

Run using npx expo expo run:android
npx expo run:android should create an android folder and build things

create a "local.properties" file 
add -> sdk.dir=C\:\\Users\\Khaled\\AppData\\Local\\Android\\Sdk
Create Download token with correct permissions


Follow these steps to run on mac

sudo install -g eas-cli


Optional steps
create a free account here https://expo.dev

eas login
username
password

required steps

Update xcode!
npx expo run:ios should give an error but create the ios folder.

go to the ios der and open the Podfile.properties.json file and change the expo.jsEngine to jsc, this is what I had to do because I have an old mac and I was getting an error when trying to run pod install (for the hermes engine) if it works then I guess you won't need to.

sudo gem install cocoapods
Got an error to install cocoapods so I ran the command it told me to run:

sudo gem install drb -v 2.0.6

tried to install again got another error ran what it told me again

sudo gem install activesupport -v 6.1.7.6

Tried again

This time it worked

run the command npx expo run:ios
