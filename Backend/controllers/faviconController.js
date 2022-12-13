const Favicon = require('../models/faviconModel');
const favicons = require('favicons');
const multer = require('multer');
const path = require('path');
const sharp = require('sharp');
const icons =require('../Icons/iconsFactory/iconsFactory')
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
// const upload = multer({ dest: '../Icons/images' });

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'./Backend/Icons/images')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null,file.fieldname+ '_' + Date.now() + path.extname(file.originalname));
    }
})

// const multerStorage = multer.memoryStorage();
// const multerFilter = (req, file, cb) => {
//     if (file.mimetype.startsWith('image')) {
//         cb(null,true)
//     } else {
//         cb(new AppError(`Not an image! Please upload only images`,400),false)
//     }
// }


const upload = multer({
    storage: storage,
    // fileFilter:multerFilter
});

exports.uploads = upload.single('image');


// console.log(req.file.path);
// exports.resizeImage = catchAsync(async (req, res, next) => {
//     if (!req.file) return next();
//     req.file.filename = Date.now() + path.extname(file.originalname);

//     await sharp(req.file.buffer)
//         .resize(500, 500)
//         .toFormat('png')
//         .png({ quality: 90 })
//         .toFile(`Backend/Icons/images/${req.file.filename}`);
//     next()
// });


// exports.uploads =( upload.single('image'), (req, res) => {
//       // Get the uploaded image file
//     //   const image = req.file;
//     console.log("Success");
//       // Generate favicons and related html
//     // const faviconGen = favicons(image, icons.configuration);
//     // faviconGen.then((response) => {
//     //     const html = response.html;
//     //     res.send(html);
//     // }).catch((error) => {
//     //     console.log(error.messages);
//     // });
// });

// app.post('/upload', upload.single('image'), (req, res) => {
//     // Get the uploaded image file
//     const image = req.file;

//     // Generate favicons and related html
//     const faviconGen = favicons(image.path, icons.configuration);
//     faviconGen.then((response) => {
//         const html = response.html;
//         res.send(html);
//     }).catch((error)=>{
//         console.log(error.messages);
//     })
// })


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

// function generate(source, config) {
//     const faviconGen = favicons(source, config);
//       faviconGen.then((response) => {
//         const html = response.html;
//         res.send(html);
//     }).catch((error) => {
//         console.log(error.messages);
//     });
// }

exports.generateFavicon = catchAsync(async (req, res) => {
    const image = req.file;
    console.log(image.path);
    const source= 'Backend\Icons\images\image_1670919931424.png'
    // generate(image.path, icons.configuration);
   
    // Generate favicons and related html
    const faviconGen = await favicons(source, icons.configuration);
    faviconGen.then((response) => {
        const html = response.html;
        res.send(html);
    }).catch((error) => {
        console.log(error.messages);
    });

//    await favicons(image.path,icons.configuration, (err, response) => {
//         if (err) {
//           // Handle error
//             console.log(err.message)
//         } else {
//           // Get the generated HTML
//           const html = response.html;
    
//           // Send the HTML back to the client
//           res.send(html);
//         }
//       });

})
    
