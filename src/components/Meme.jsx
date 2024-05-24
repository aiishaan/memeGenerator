import '../App.css'
import memesData from '../assets/memesData.js'
import { useState } from 'react'

function Meme () {

    const [meme, setMeme] = useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"

    })

    const [allMemeImages, setAllMemesImage] = useState(memesData)

    function getMemeImage() {
    
        const memeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        setMeme((prevState) => {
            return {
                ...prevState,
                randomImage : url
            }
        })
    }



    return (
        <main>
        <div className="form">
            <input 
                type="text"
                placeholder="Top text"
                className="form--input"
            />
            <input 
                type="text"
                placeholder="Bottom text"
                className="form--input"
            />
            <button 
                className="form--button"
                onClick={getMemeImage}
            >
                Get a new meme image 🖼
            </button>
        </div>
        <img src={meme.randomImage} className="meme--image" />
    </main>
    )
}

export default Meme