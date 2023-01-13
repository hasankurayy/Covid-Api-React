import React, { useEffect, useState } from 'react'
import { fetchFromApi } from '../utils/fetchFromApi'

function Home() {

    const [totalReport, setTotalReport] = useState([])

    useEffect(() => {
        fetchFromApi("reports/total")
            .then((res) => setTotalReport(res.data))
    }, [])

    return (
        <div className='home'>
            <div className="container">
                <div className="header">
                    COVID REPORTS
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
                        <div>{totalReport.last_update}</div>
                        <div>{totalReport.active}</div>
                        <div>{totalReport.deaths}</div>
                        <div>{totalReport.recovered}</div>
                        <div>{totalReport.fatality_rate}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home