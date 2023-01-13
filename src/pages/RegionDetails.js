import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromApi'

function RegionDetails() {

    const { region } = useParams()
    const navigate = useNavigate()
    const [provinces, setProvinces] = useState([])
    const [regionReport, setRegionReport] = useState([])
    var provincesCounter = 0



    useEffect(() => {
        fetchFromApi(`provinces?iso=${region}`)
            .then((res) => setProvinces(res.data))

        fetchFromApi(`reports?iso=${region}`)
            .then((res) => setRegionReport(res.data[0]))
    }, [region])



    return (
        <div className='region-details'>


            <div className="provinces">
                {provinces.map((province, key) => {
                    console.log(province)
                    if (province.province !== "") {
                        provincesCounter += 1
                        return (
                            <div className='province' key={key} onClick={() => navigate(province.province)}>
                                {province.province}
                            </div>
                        )
                    }
                }
                )}
            </div>

            {provincesCounter === 0 && (
                <div className='no-provinces'>
                    No provinces
                </div>
            )}


            <div className="covid-details">
                <div className="header">
                    {regionReport?.region?.name}
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
                        <div>{regionReport?.last_update}</div>
                        <div>{regionReport?.active}</div>
                        <div>{regionReport?.deaths}</div>
                        <div>{regionReport?.recovered}</div>
                        <div>{regionReport?.fatality_rate}</div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default RegionDetails