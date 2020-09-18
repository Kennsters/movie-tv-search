import React, { useState } from 'react'

const Home = () => {

    const [mediaState, setMediaState] = useState({
        search: '',
        media: []
    })

    mediaState.handleInputChange = event => {
        setMediaState({ ...mediaState, [event.target.name]: event.target.value })
    }

    mediaState.handleSearchOMDB = event => {
        event.preventDefault()
    }

    return (
        <>
            <h1>Search for Movies & TV Shows</h1>
            <form>
                <p>
                    <label htmlFor="search">Search</label>
                    <input type="text" 
                    name="search" 
                    value={mediaState.search}
                    onChange={mediaState.handleInputChange} />
                </p>
                <p>
                    <button onClick={mediaState.handleSearchOMDB}>Search OMDB</button>
                </p>
            </form>
        </>
    )
}

export default Home