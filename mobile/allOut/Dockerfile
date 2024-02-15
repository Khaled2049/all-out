FROM openjdk:18-jdk-slim

LABEL maintainer "tomstoughton1@gmail.com"

WORKDIR /

SHELL ["/bin/bash", "-c"]

# To avoid "tzdata" asking for geographic area
ARG DEBIAN_FRONTEND=noninteractive

# Version of tools
ARG GRADLE_VERSION=8.3
ARG ANDROID_API_LEVEL=29
ARG ANDROID_BUILD_TOOLS_LEVEL=29.0.3
ARG ANDROID_NDK_VERSION=21.1.6352462

# Dependencies and needed tools
RUN apt update -qq && apt install -qq -y \
git unzip libglu1 libpulse-dev libasound-dev libc6  libstdc++6 libx11-6 \
libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxi6 \
libxtst6 libnss3 libdrm-dev libxkbcommon-dev libgbm-dev libxcursor1 libxshmfence-dev xauth xvfb \
x11vnc fluxbox wmctrl libdbus-glib-1-2 wget

# Download gradle, install gradle and gradlew
RUN wget -q https://services.gradle.org/distributions/gradle-${GRADLE_VERSION}-bin.zip -P /tmp \
&& unzip -q -d /opt/gradle /tmp/gradle-${GRADLE_VERSION}-bin.zip

# Download commandlinetools, install packages and accept all licenses
RUN mkdir /opt/android \
&& mkdir /opt/android/cmdline-tools \
&& wget -q 'https://dl.google.com/android/repository/commandlinetools-linux-8092744_latest.zip' -P /tmp \
&& unzip -q -d /opt/android/cmdline-tools /tmp/commandlinetools-linux-8092744_latest.zip

RUN yes Y | /opt/android/cmdline-tools/cmdline-tools/bin/sdkmanager --install "build-tools;${ANDROID_BUILD_TOOLS_LEVEL}" \
    "platforms;android-${ANDROID_API_LEVEL}" "platform-tools" "ndk;${ANDROID_NDK_VERSION}" \
    "system-images;android-${ANDROID_API_LEVEL};google_apis;x86" "system-images;android-${ANDROID_API_LEVEL};google_apis;x86_64" \
&& yes Y | /opt/android/cmdline-tools/cmdline-tools/bin/sdkmanager --licenses

# Install recent version of Node
RUN wget https://nodejs.org/dist/v20.11.0/node-v20.11.0-linux-x64.tar.xz -P /tmp \
&& tar -xf /tmp/node-v20.11.0-linux-x64.tar.xz -C /opt

# Environment variables to be used for build
ENV GRADLE_HOME=/opt/gradle/gradle-$GRADLE_VERSION
ENV ANDROID_HOME=/opt/android
ENV ANDROID_NDK_HOME=${ANDROID_HOME}/ndk/${ANDROID_NDK_VERSION}
ENV NODE=/opt/node-v20.11.0-linux-x64
ENV PATH "$PATH:$GRADLE_HOME/bin:$ANDROID_HOME/emulator:$ANDROID_HOME/cmdline-tools/cmdline-tools/bin:$ANDROID_HOME/platform-tools:${ANDROID_NDK_HOME}:${NODE}/bin"
ENV LD_LIBRARY_PATH "$ANDROID_HOME/emulator/lib64:$ANDROID_HOME/emulator/lib64/qt/lib"

# Clean up
RUN rm /tmp/gradle-${GRADLE_VERSION}-bin.zip \
&& rm /tmp/commandlinetools-linux-8092744_latest.zip \
&& rm /tmp/node-v20.11.0-linux-x64.tar.xz

RUN mkdir /home/allOut
COPY . /home/allOut

WORKDIR /home/allOut

# Elevate gradlew permissions
RUN chmod +x android/gradlew

# Start gradlew
RUN ./android/gradlew

# Install expo and rnmapbox
RUN npm install expo && npm install @rnmapbox/maps

# Install AVD for emulating
RUN echo no | avdmanager create avd -n myAVD -k "system-images;android-29;google_apis;x86"

# Start the emulator
CMD "/bin/bash"