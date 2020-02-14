import React, { useState, useContext,useRef } from 'react'
import Axios from 'axios';
import SimpleHOC from '../SimpleHOC';
import SearchButton from '../SearchButton';
import { AppContext } from '../../context/AppContext'

const Search = () => {

    const [searchKey, setSearchKey] = useState("");
    const [results, setResults] = useState([]);
    const context = useContext(AppContext);
    const btnRef = useRef(null);

    const change = (evt) => {
        setSearchKey(evt.target.value);
    }

    const search = async () => {
        //https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=javascript
        const url = "https://en.wikipedia.org/w/api.php";
        const params = {
            action: "opensearch",
            origin: "*",
            format: "json",
            search: searchKey
        };

        try {
            const response = await Axios.get(url, { params: params });
            setResults(response.data)
            console.log("response from wiki", response);
        } catch (error) {

        }
    }

    const renderResults = () => {
        return (results && results[1].map((item, index) => {
            return (
                <div key={index}>
                    <p>{item}</p>
                </div>
            )

        }))
    }

    return (
        <div>
            <h3>Wiki Search</h3>
            <div>
                <p> App Name : {context.appName}</p>
                <p> User Name : {context.userName}</p>
            </div>
            <input type="search" placeholder="Search"
                value={searchKey} onChange={change} />
            <br />
            <SearchButton onClick={search}  ref={btnRef}>Search</SearchButton>
            <SearchButton onClick={search}>Find</SearchButton>
            <SearchButton onClick={search} title="Lookup" />
            <p> Search results for {searchKey}</p>

            <div>
                {results.length > 0 ? renderResults() : null}

            </div>
        </div>
    )
}

export default Search;