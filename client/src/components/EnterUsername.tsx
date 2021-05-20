import React from 'react'

const EnterUsername = (props: {handleConnection: Function, username: string, setUsername: Function}) => {
    return (
        <form className="enter-username-form" onSubmit={e => {
            e.preventDefault();
            props.handleConnection();
        }}>
            <div>
                <h1 style = {{fontSize:"60px", margin:'20px', color:'SkyBlue', fontWeight:'bold'}}>Student Leaders Chat Platform</h1>
            </div>
            <input 
                type="text" 
                value={props.username} 
                onChange={e => props.setUsername(e.target.value)} 
                placeholder="Enter a username..."
                required={true}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default EnterUsername
