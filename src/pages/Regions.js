import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchFromApi } from "../utils/fetchFromApi"

function Regions() {

    const [regions, setRegions] = useState([])
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        fetchFromApi("regions")
            .then((res) => setRegions(res.data))
    }, [])

    return (
        <>
            <div className="search-container">
                <div className="search">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Region..."/>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>

            <div className='regions'>
                {regions.map((region, key) => {
                    if (region.name.toLowerCase().startsWith(search)) {
                        return (
                            <div className='region' onClick={() => navigate(region.iso)} key={key}>
                                {region.name}
                            </div>
                        )
                    }
                }
                )}
            </div>

        </>
    )
}

export default Regions