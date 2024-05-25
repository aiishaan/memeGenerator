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

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name] : value
            }
        })
    }

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
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                placeholder="Top text"
                className="form--input"
            />
            <input 
                type="text"
                name="bottomText"
                onChange={handleChange}
                value={meme.bottomText}
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
        <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </main>
    )
}

export default Meme