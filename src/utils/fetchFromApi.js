import axios from "axios";

const BASE_URL = 'https://covid-19-statistics.p.rapidapi.com'

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cbf2821985msh8d18ff919687cf1p1acabcjsnb9b231f99bc9',
        'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
    }
}

export const fetchFromApi = async (url) => {
    const {data} = await axios.request(BASE_URL+"/"+url, options)
    return data
}