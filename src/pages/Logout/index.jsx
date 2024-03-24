import './styles.css'
import Menu from '../Menu'

function Logout(){
    
    return(
        <>
            <Menu/>
            <div className='screen'>
                <div className='icon'>
                    <img src="https://www.shareicon.net/download/2016/08/07/808377_turn-on_512x512.png" alt="" />
                </div>
                <div className='title'>
                    <p>Você encerrou seu login com sucesso</p>
                </div>
                <div className='text'>
                    <p>Faça o login novamente para utilizar das nossas ferramentas</p>
                </div>

            </div>
        </>
    )
}

export default Logout