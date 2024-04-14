export const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      {
        title: "Geolocation Permission",
        message: "Can we access your location?",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    if (granted === "granted") {
      return true;
    } else {
      console.log("You cannot use Geolocation");
      return false;
    }
  } catch (err) {
    return false;
  }
};
export const randomFloatBetween0And5 = () => {
  return (Math.random() * 5).toFixed(1);
};
export const generateDifficulty = () => {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "Easy";
  } else if (randomNumber < 0.67) {
    return "Medium";
  } else {
    return "Hard";
  }
};
