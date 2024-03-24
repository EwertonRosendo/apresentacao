import './styles.css'
import React, { useState } from 'react';


import Menu from '../Menu'
function Home(){
    
    /*FUNÇÃO DE ADICIONAR OS DADOS NA TABELA*/

    /*FUNÇÃO QUE É CHAMADA TODA VEZ QUE VOCÊ MUDA A OPÇÃO DO QUE SERÁ CONVERTIDO*/
    const changingOpt = (opt) =>{
        if (opt==='kms'){
            setOpt('kms')
            setLeftText('Anos Luz')
            
            setValorConvertido('1.0570234105227001e-13')
        }else {
            setOpt('years')
            setLeftText('Kilometros')
            
            setValorConvertido(9460528405000.02)
        }

        console.log('lado esquero:', opt)
        setValor('1.0')
        setOpt(opt)
        
        
    }

    /*FUNÇÃO CHAMADA PARA CALCULAR O VALOR CONVERTIDO*/
    const calculateValue = (n)=>{
        if (n<1){
            return alert('O valor não pode ser menor que 0')
        }
        let kms = 0
        let years = 0
        if(opt==='kms'){
            kms = n
            years = n/9460528405000.02
            console.log(n, 'kilometros é igual a', years, 'anos luz')
            setValorConvertido(years)
            
        }else{
            years = n
            kms = n*9460528405000.02
            console.log(n, 'ano luz é igual a ', kms, 'kilometros')
            setValorConvertido(kms)
            
        }
        
        setList((prevList)=>{
            return[
                ...prevList, {"id":list.length,"Data da Medição": new Date().toLocaleDateString(), "valor em km's":kms, "Valor em anos luz":years}
            ];
        })
        
        console.log(list)
    }

    /*c*/
    const saveValue = (value) => {
        setValor(value)
        console.log(value)
    }

    /*obj para lista
    let [obj, setObj] = useState()
    */
    
    /*list variable*/
    let [list, setList] = useState([])
    /*Opção escolhida para ser convertida*/
    let [opt, setOpt] = useState('years')

    let [leftText, setLeftText] = useState('Kilometros')

    /*numero do campo da esquerda*/
    let [valor, setValor] = useState('1.0');

    /*numero do campo da direita*/
    var [valorConvertido, setValorConvertido] = useState(9460528405000.02)
    
    return(
        <>
            <main>

                <Menu/>
        
        <div className="content">

            <div className="title"><p>Conversor de Anos Luz para Kilometros</p></div>
            
            <div className="conversor">
                <div className="inputs">
                    <div className="years" id="input">
                        <label >converter de</label>
                        
                        <select name="" id="left" onChange={e => changingOpt(e.target.value)} >
                            <option value='years'><p>Anos Luz</p></option>
                            <option value='kms'><p>Kilometros</p></option>
                        </select>
                        <input type="number" name="" id="" placeholder={valor} onChange={ e => saveValue(e.target.value) }/>
                    </div>
    
                    <div className="kms" id="input">
                        <label><p>para</p></label>
                        <select name="" id="right" placeholder={"TESTE"} disabled>
                            <option><p>{leftText}</p></option>
                            
                        </select>

                        <input type="number"  name="" id="" value={valorConvertido} disabled/>
                    </div>
                </div>
                <div className="button" >
                    <button onClick={()=>calculateValue(valor)}>Converter</button>
                </div>
                
            </div>

            <div className="texts">
                

                <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Data da Medição</th>
                                <th>Valor em km's</th>
                                <th>Valor em anos luz</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((item, index) => (
                                <tr key={index}>
                                    <td>{item["id"]}</td>
                                    <td>{item["Data da Medição"]}</td>
                                    <td>{item["valor em km's"]}</td>
                                    <td>{item["Valor em anos luz"]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p>Ano-luz é uma unidade de medida usada na Astronomia. Significa a distância que um fóton (uma partícula de luz) percorre durante um ano, no vácuo. Um ano-luz é o comprimento da distância percorrida pela luz em um ano no vácuo.

                    A velocidade da luz é a mais rápida que existe. A capacidade de um fóton se deslocar é cerca de 300.000 quilômetros por segundo. Cada ano-luz corresponde a cerca de 9,5 trilhões de quilômetros, ou seja, 9.500.000.000.000 quilômetros.
                    
                    Um fóton percorre a distância da Lua ao planeta Terra em cerca de 1 segundo. Apesar de ser o corpo celeste mais perto da Terra, a distância entre a Lua e o nosso planeta é de aproximadamente 384 mil quilômetros.
                    
                    Por que ano-luz é a unidade astronômica? Simplesmente para evitar a utilização de números gigantescos, afinal, em relação ao Universo, as distâncias são realmente imensas.
                    
                    Não confunda! Ano-luz não é uma unidade de tempo, é uma unidade de comprimento
                </p>

                <h2>Caso você tenha interesse em saber um pouco mais sobre Anos Luz deixo aqui dois videos onde o especialista sergio sacani explica pouco mais</h2>
                    <div className="videos">
                    <iframe width="560" height="315" src={"https://www.youtube.com/embed/hZVgWJLqysQ?si=YE-mCETF0opDgefv"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src={"https://www.youtube.com/embed/Duq4Rvy40tQ?si=xUk1mFAKbmysoCu7"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                
                
            </div>
        </div>
    </main>
        </>
    )
}

export default Home