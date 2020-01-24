var fs = require("fs");

/*//writing into the file
fs.writeFile("mytext.txt", "Hello Rajeev, Come back soon", function(err) {
  if (err) throw err;
  console.log("The data is written");
});

//reading the file
fs.readFile("myText.txt", "utf-8", function(err, data) {
  if (err) throw err;
  console.log(data);
});

fs.appendFile("mytext.txt", "\n We are missing you", function(err) {
  if (err) throw err;
  console.log("Data appended");
});

//data appended to the file and read it
fs.appendFile('mytext.txt', '\nA new set of data added', function(err){
  if(err) throw err;
 console.log('Data appended');
 fs.readFile('mytext.txt', 'utf-8', function(err, data){
   if(err) throw err;
   console.log(data);
 })
})

//data can be read from the json file as well
fs.readFile('db.json','utf-8', function(err, data){
  if(err) throw err;
  console.log(data);
})

//If the file does'nt exist then writeFile will create a file and write into it
fs.writeFile("mytext1.txt", "Hello Rajeev! Welcome back to London", function(
  err
) {
  if (err) throw err;
  console.log("New file created and data entered");
});

//renaming the file
fs.rename('mytext1.txt', 'mytext2.txt', function(err){
  if(err) throw err;
  console.log('File is renamed');
})
*/

fs.unlink("mytext2.txt", function(err) {
  if (err) throw err;
  console.log("File is Deleted");
});

//fs.open()
