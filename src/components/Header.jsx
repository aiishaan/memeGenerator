import '../App.css'

function Header () {
    return (
        <header className='header'>
            <img className='header--image' src="../../images/troll-face.png" alt="meme face" />
            <h1 className='header--title'>Meme Generator</h1>
            <h4 className='header--project'>Generate your own memes</h4>
        </header>
    )
}

export default Header