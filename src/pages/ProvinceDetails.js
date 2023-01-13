import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {fetchFromApi} from "../utils/fetchFromApi"

function ProvinceDetails() {

    const { province, region } = useParams()
    const [provinceDetails, setProvinceDetails] = useState(null)

    useEffect(() => {
        fetchFromApi(`reports?iso=${region}&region_province=${province}`)
            .then((res) => setProvinceDetails(res.data[0]))
    }, [])


    return (
        <div className='province-details'>
            <div className="header">
                {provinceDetails?.region?.name} / {provinceDetails?.region?.province}
            </div>

            <div className="grid">
                <div className="col-1 col">
                    <div>Last Update</div>
                    <div>Active Case</div>
                    <div>Deaths</div>
                    <div>Recovered</div>
                    <div>Fatality Rate</div>
                </div>
                <div className="col-2 col">
                    <div>{provinceDetails?.last_update}</div>
                    <div>{provinceDetails?.active}</div>
                    <div>{provinceDetails?.deaths}</div>
                    <div>{provinceDetails?.recovered}</div>
                    <div>{provinceDetails?.fatality_rate}</div>
                </div>
            </div>
        </div>
    )
}

export default ProvinceDetails