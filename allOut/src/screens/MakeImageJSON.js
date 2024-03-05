// RUN THIS WHEN NEW IMAGES ARE ADDED TO ./img

// Loading images dynamically is a bitch...

const fs = require("fs");
function LoadImages(){
    let imageJSON = [];

    // create objects for climb images
    fs.readdirSync("./img/climbs/").forEach(file => {
      let id = file.split('.', 1);
      let id_str = id.join("");
      let img_path = "./img/climbs/" + file;
      imageJSON.push({
        'id': id_str,
        'image': "require('" + img_path +"')"
      })
    });

    // create objects for hike images
    fs.readdirSync("./img/trailheads/").forEach(file => {
        let id = file.split('.', 2);
        let id_str = id.join(".");
        let img_path = "./img/trailheads/" + file;
        imageJSON.push({
          'id': id_str,
          'image': "require('" + img_path +"')"
        })
      });
  
    return imageJSON;
}

json_data = String(JSON.stringify(LoadImages()));

// console.log(json_data);

// Regular expression pattern to match require() value
const pattern = /"require\((.*?)\)"/g;

// Replace require() values in jsonData
const modifiedData = json_data.replace(pattern, 'require($1)');

// console.log(modifiedData);

// create a file to hold our image JSON object to access images in DetailScreen.js by id
fs.writeFileSync('./images.json', modifiedData);