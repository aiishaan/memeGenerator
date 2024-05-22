import '../App.css'
import memesData from '../assets/memesData.js'
import { useState } from 'react'

function Meme () {

    const [memeImage, setMemeImage] = useState("")

    function getMemeImage() {
    
        const memeArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        setMemeImage(memeArray[randomNumber].url)
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
        <img src={memeImage} className="meme--image" />
    </main>
    )
}

export default Meme