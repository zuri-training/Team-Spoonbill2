exports.configuration = {
    path: '/Backend/Icons/iconGen/',
    appName: 'bilicon',
    appShortName: 'bcon',
    developerName: 'ivan',
    dir: 'auto',
    lang: 'en-US',
    background: '#fff',
    theme_color: '#fff',
    appleStatusBarStyle: 'black-translucent',
    display: 'standalone',
    orientation: 'any',
    scope: '/',
    start_url: '/?homescreen=1',
    preferRelatedApplications: false,
    relatedApplications: undefined,
    version: 1.0,
    pixel_art: false,
    loadManifestWithCredentials: false,
    manifestMaskable: false,
    
    icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        favicons: true,
        windows: true,
        yandex: true,
    },
    shortcuts: [
        {
            name: "view your inbox",
            short_name: 'inbox',
            description: 'view your inbox',
            // url:'/inbox'
        }, ,
    ]
};


// try {
//     const response = await favicons(source, configuration);
//     console.log(response.images);
//     console.log(response.files);
//     console.log(response.html);
// } catch (error) {
//     console.log(error.messages);
// }


// callback =function (error, response) {
//   if (error) {
//     console.log(error.message); // Error description e.g. "An unknown error has occurred"
//     return;
//   }
//   console.log(response.images); // Array of { name: string, contents: <buffer> }
//   console.log(response.files); // Array of { name: string, contents: <string> }
//   console.log(response.html);
// }
//  favicons(sources, icons.configuration, callback);