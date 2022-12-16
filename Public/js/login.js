import axios from 'axios';



export const login = async(email, password) => {
    console.log(email, password)
    try {
        const res = await axios({
            method: 'POST',
            url: '/api/users/login',
            data: {
                email,
                password
            }
        });
        if (res.data.status === 'success') {
            console.log(res.data);
            window.setTimeout(() => {
                location.assign('/conversion');
            }, 1500);
        }


    } catch (err) {
        console.log('error', err.response.data.message)
    }


};

export const logout = async() => {
    try {
        const res = await axios({
            method: 'GET',
            url: 'http://localhost:5000/api/users/login',

        });

        if (res.data.status = 'success') {
            location.reload(true)
            window.setTimeout(() => {
                location.assign('/');
            }, 1500);
        }

    } catch (err) {
        console.log(err.response)
        
    }
}