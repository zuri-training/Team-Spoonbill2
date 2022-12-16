import axios from 'axios';

export const donwloadIcon = async(data) => {
    try {

        const url =`http://localhost:5000/api/users/uploads`
            
        const res = await axios({
            method: 'POST',
            url,
            data
        });

        if (res.data.status === 'success') {
            console.log("Download was a success");
        }

    } catch (err) {
        console.log('error', err.response.data.message)
    }
}