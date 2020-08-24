import React, { useEffect, useState } from 'react'

import axios from 'axios'

import Comments from './Comments'

function Dashboard(props) {

    //using useEffect at the time being until we set up a data management

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://jsonblob.com/api/jsonBlob/824df1e3-e636-11ea-b735-85daf3898380`)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const cards = data.map(item => <Comments key={item.id} item={item} />)

    return (
        <div>
            {cards}
        </div>
    )
}

export default Dashboard