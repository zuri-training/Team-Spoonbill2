const Favicon = require('../models/faviconModel');
const favicons = require('favicons');
const multer = require('multer');
const icons =require('../Icons/iconsFactory/iconsFactory')

const upload = multer({ dest: '/Backend/Icons/images/' });

app.post('/upload', upload.single('image'), (req, res) => {
    // Get the uploaded image file
    const image = req.file;

    // Generate favicons and related html
    const faviconGen = favicons(image.path, icons.configuration);
    faviconGen.then((response) => {
        const html = response.html;
        res.send(html);
    }).catch((error)=>{
        console.log(error.messages);
    })
})


// const faviconGen = favicons(sources, icons.configuration);
// faviconGen.then((response) => {
//   console.log(response.html[0]);
//   console.log(response.images[0]);
  // const data=response.images
  // const html = response.html;
  // fs.writeFile('./Backend/Icons/iconGen/icon.html', html.map(el => el + '\n').join(''), (err) => {
  //   if (err) throw err;
  //   console.log('The file has been saved!');
  // });

//   function writeImage(response) {
//     // fs.mkdirSync('imageIcons');
//     response.images.forEach(image => {
//       fs.writeFile(`./Backend/Icons/iconGen/${image.name}`, image.contents, err => {
//         if (err) throw err;
//       });
//     });

//   };  // fs.writeFile('./Backend/Icons/iconGen/', data);
//   // console.log('File written');

//   // writeImage(response);

// }).catch((error) => {
//   console.log(error.messages)
// })