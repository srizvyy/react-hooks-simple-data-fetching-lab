import React, {useEffect, useState} from "react";

function App () {
    const [dogImage, setDogImage] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => setDogImage(data))
            setIsLoaded(true)
    }, [])

     if (!isLoaded) return <h3>Loading...</h3> 

    return (
        <div>
            <img src={dogImage.message} alt="A Random Dog" />

        </div>
    )
}

export default App