const fs = require('fs');

// // Create book variable and write to file

// const book = {
//     title: 'Ego Is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookString = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookString);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const dataObject = JSON.parse(dataJSON);
// console.log(dataObject);

// Challenge: Work with JSON and the file MediaKeySystemAccess
// 1. Load and parse the JSON data
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const dataObject = JSON.parse(dataJSON);

// 2. Change the name and age property using your info
const newDataObject = { ...dataObject };
newDataObject.name = 'Thomas'
newDataObject.age = 5

// 3. Stringify the changed object and overwrite the original data
const newDataString = JSON.stringify(newDataObject);

// 4. Test your work by viewing data in the JSON file
fs.writeFileSync('1-json.json', newDataString);