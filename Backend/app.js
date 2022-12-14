const express = require("express");
const globalErrorHandler = require("../Backend/controllers/errorController");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");
const app = express();
const { favicons } = require('favicons');
const icons = require('./Icons/iconsFactory/iconsFactory');
const fs = require('fs');
const cors = require('cors');


// Body parser
app.use(express.json());

app.use(cors({
  origin: "*",
}));

// Development loging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
let sources='./Backend/Icons/images/part.png';

// try {
//   const response = favicons(sources, icons.configuration);
//   console.log(response)
//     console.log(response.images);
//     console.log(response.files);
//     console.log(response.html);
// } catch (error) {
//     console.log(error.messages);
// }

// const faviconGen = favicons(sources, icons.configuration);
// faviconGen.then((response) => {
//   console.log(response.html[0]);
//   console.log(response.images[0]);
//   // const data=response.images
//   const html = response.html;
  // fs.writeFile('./Backend/Icons/iconGen/icon.html', html.map(el => el + '\n').join(''), (err) => {
  //   if (err) throw err;
  //   console.log('The file has been saved!');
  // });

  // function writeImage(response) {
  //   // fs.mkdirSync('imageIcons');
  //   response.images.forEach(image => {
  //     fs.writeFile(`./Backend/Icons/iconGen/${image.name}`, image.contents, err => {
  //       if (err) throw err;
  //     });
  //   });

  // }; 
  

  // writeImage(response);

// }).catch((error) => {
//   console.log(error.messages)
// })

app.use((req, res) => {
  res.send('Hellooo')
})

// Routes
app.use("/api/users", userRouter);
app.use(globalErrorHandler);
module.exports = app;
