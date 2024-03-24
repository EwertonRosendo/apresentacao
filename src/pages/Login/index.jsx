import Menu from '../Menu'
import './styles.css'
function Login(){

    return(
        <>
            <section>
            <Menu/>
            <div className="center">
            <div className="form-box">
                <div className="form-value">
                    <form action="">
                        <h2>Login</h2>
                        <div className="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" id="email" />
                            <label for="">Email</label>
                        </div>
                        <div className="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input type="password" id="senha" />
                            <label for="">Password</label>
                        </div>
                        <div className="forget">
                            <label for=""><input type="checkbox"/>Remember Me  <a href="#"/><a>Forget Password</a> </label>
                        </div>
                        <p className="erros"></p>
                        
                        <div><button type="button" onclick="login()" className='botao'  ><p>Login</p></button></div>
                        
                        <div className="register">
                            <p style={{color:'#4184d2'}}>Don't have a account <a href="cadastro.html" style={{color:'#4184d2'}}>Register</a></p>
                        </div>
                    </form>
                </div>
                
            </div>
            </div>
            
    </section>
        
        </>
    )
}

export default Login