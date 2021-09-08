import React, { useState, useEffect } from "react"
import queryString from "query-string"
import BoxItem from "../components/BoxItem"

function ResultsSearch(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        const parsed = queryString.parse(props.location.search);
        console.log("parsed.q", parsed.q)
        fetch(
            "http://localhost:3000/api?q=" + parsed.q
        )
            .then((response) => response.json())
            .then((dataJson) => {
                console.log("dataJson", dataJson)
                setData(dataJson.data.items)
            })
    }, [props.location])

    return (
        <div className="body__container">
            {data.map(item => {
                return <BoxItem key={item.id} price={item.price.amount} img={item.picture} location={item.address} name={item.title} dataItem={item} />
            })}
        </div>
    )
}

export default ResultsSearch;