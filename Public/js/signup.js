
    // // const url = "https://favicongen-teamspoonbill.onrender.com/api/users/signup";

    // export const signup = async(name, email, password, passwordConfirm) => {
    //     // try {
    //         // userData = {
    //         //     username: username.value,
    //         //     email: email.value,
    //         //     password: password.value,
    //         //   };

    //         // const res = await axios({
    //         //     method: 'POST',
    //         //     url: 'https://favicongen-teamspoonbill.onrender.com/api/users/signup',
    //         //     data: {
    //         //         name,
    //         //         email,
    //         //         password,
    //         //         passwordConfirm
    //         //     }
    //         // })

    //         await fetch('https://favicongen-teamspoonbill.onrender.com/api/users/signup', {
    //             method: 'POST', // or 'PUT'
    //             headers: {
    //               'Content-Type': 'application/json; charset=UTF-8',
    //             },
    //             body: JSON.stringify({
    //                 name,
    //                 email,
    //                 password,
    //                 passwordConfirm
    //             }),
    //           }).then((response) => response.json())
    //             .then((data) => {
    //                 console.log(data)
    //                 // if (data.status === 'success') {
    //                 //     window.setTimeout(() => {
    //                 //     location.assign('/')
    //                 // }, 1500);
    //             // }
    //             })
    //             .catch((error) => {
    //               console.error('Error:',  error.response.data.message);
    //             });
                
    
    //         // if (res.data.status === 'success') {
    //         //         window.setTimeout(() => {
    //         //         location.assign('/')
    //         //     }, 1500);
    //         // }
    
    // //     } catch (err) {
    // //         showAlert('error', err.response.data.message)
    // //     }
    //     //
    // }
import axios from 'axios';
// import { showAlert } from './alerts';

export const signup = async(name, email, password, passwordConfirm) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:5000/api/users/signup',
            data: {
                name,
                email,
                password,
                passwordConfirm
            }
        })

        if (res.data.status === 'success') {
            // showAlert('success', 'Account created successfully');
            window.setTimeout(() => {
                location.assign('/conversion')
            }, 1500);
        }

    } catch (err) {
        // showAlert('error', err.response.data.message)
        console.log(err.response.data.message);
    }
}