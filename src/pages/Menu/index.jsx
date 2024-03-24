import './styles.css'
/*
import Home from '../Home'
import Login from '../Login'
import Infos from '../Infos'
*/

function Menu(){
    /*
    const home = () =>{
        return <Home/>
    }
    
    const login = () =>{
        return <Login/>
    }
    
    const infos = () =>{
        return <Infos/>
    }
    */
    return(
        <>
            <div className="menu">
                <div style={{display: 'flex'}}>
                    <p><a href={'http://localhost:3000/'}>Home</a></p>
                    <p><a href={'http://localhost:3000/Infos'}>Info</a></p>
                </div>
                <div><p><a href={'http://localhost:3000/Login'}>Login</a></p></div>
                
            </div>
        </>
    )
}

export default Menu