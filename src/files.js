const fs = require('fs'); 

//fs => flle system

// fs.writeFile('myfile.txt', 'Hello World from Felipe Daniel', (err) => {
//     if(err) {
//         throw err;
//     }
// }); 

// fs.readFile('myfile.txt', (err, data) => console.log(data.toString('utf8'))); 

// fs.readdir('.', (err, files) => {
//     if(err) {
//         throw err;
//     }
//     for (var file in files) {
//         console.log(files[file]); 
//     }
// })

fs.readdirSync('.')
  .filter(file => file.endsWith('.js'))
  .forEach(file => console.log(file))