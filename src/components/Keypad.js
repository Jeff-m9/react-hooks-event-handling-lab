// Code Keypad Component Here

function Keypad() {
    const message = () => {
        console.log("Entering password...")
    }

    return (
        <div>
            <input type="password" onChange={message}></input>
        </div>
    )
}

export default Keypad;