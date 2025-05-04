// const fs = require('fs')

// if(process.argv[2]=== 'create'){
//   
//   const fileName = process.argv[3] || 'default.txt'
//   const content = process.argv[4] || "Hello world"
//   fs.writeFile(fileName,content, (err)=>{
//     if(err){
//       console.log('Error creating file',err);
//     }else{
//       console.log(`File ${fileName} created successfully`)
//     }
//   })
// }

const fs = require('fs')
const operation = process.argv[2]
//const fileName = process.argv[3] || 'default.txt'
const fileName = process.argv[3] || (operation === "list" ? '.' : 'default.txt');

const content = process.argv[4] || 'default value added'

switch (operation) {
  case "create":
    if (fileName.endsWith('.txt')) {
      fs.writeFile(fileName, content, (err) => {
        if (err) {
          console.log(`error in creating file ${err}`)
        } else {
          console.log(`File ${fileName} created successfully`)
        }
      })
    } else {
      console.log('Enter valid .txt format')
    }
    break;
  case "read":
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        console.log(`cannot read File ${err}`)
      } else {
        console.log(data)
      }
    })
    break;
  case "delete":
    fs.unlink(fileName, (err) => {
      if (err) {
        console.log(`error in deleting file:${err}`)
      } else {
        console.log(`file ${fileName} deleted successfully`)
      }
    })
    break;
  case "append":
    fs.appendFile(fileName, content, (err) => {
      if (err) {
        console.log(`error in appending data`)
      } else {
        console.log(`data appended succesfully`)
      }
    })
    break;
  case "rename":
    fs.rename(fileName, content, (err) => {
      if (err) {
        console.log(`error in renaming the file`)
      } else {
        console.log(`File renamed to ${content}`)
      }
    })
    break;
  case "list":

    fs.readdir(fileName, (err, files) => {

      if (err) {
        return console.log(`error reading directory ${err}`)
      } else {
        console.log('files in directory')
        files.forEach(file => console.log(" .", file))
      }
    })
    break;


}

