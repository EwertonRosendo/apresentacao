import './styles.css'

function Menu(){
    
    return(
        <>
            <div className="menu">
                <div style={{display: 'flex'}}>
                    <p><a href={'http://localhost:3000/'}>Home</a></p>
                    <p><a href={'http://localhost:3000/Infos'}>Info</a></p>
                </div>
                <div style={{display:'flex'}}>
                    <p><a href={'http://localhost:3000/Login'}>Login</a></p>
                    <p><a href={'http://localhost:3000/Logout'}>Logout</a></p>
                </div>
                
            </div>
        </>
    )
}

export default Menu