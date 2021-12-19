import React, { useState, useEffect } from "react";
import "../App.css";

function StartPage({ fetchData }) {
    const [disabled, setDisabled] = useState(true);
    const [country, setCountry] = useState("");

    function checkDisabled() {
        if (!country.length) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }
    useEffect(() => {
        checkDisabled();
    }, [country])
    return (
        <div className="input-div">
            <input type="text" placeholder="country name" onChange={(event) => { setCountry(event.target.value); }}></input>
            {disabled
                ? <button className="submit-button" type="submit" value="Submit" disabled={disabled}>Enter</button>
                : <button className="submit-button" type="submit" value="Submit" onClick={() => { setCountry(""); fetchData(country) }}>Enter</button>}
        </div>
    )
}
export default StartPage;