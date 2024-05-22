import '../App.css'

function Meme () {
    return (
        <main>
            <form className='form' action="">
                <div>
                    <label className='form--label'> Top Text
                        <input className='form--input' placeholder='Shut up' type="text" />
                    </label>
                </div>
                <div>
                    <label className='form--label'> Bottom Text
                        <input className='form--input' placeholder='and take my money' type="text" />
                    </label>
                </div>
                <button className='form--button'>
                    Get a new meme image 🖼️
                </button>
            </form>
        </main>
    )
}

export default Meme