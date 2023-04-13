import axios from 'axios'

const API_URL = 'http://localhost:8000'

const UploadFile = async (data)=> {
    try {
        let response = await axios.post(`${API_URL}/upload`, data)
        return response.data
    }
    catch(error) {
        console.log("Error calling API", error.message)
    }
}

export default UploadFile