// App.js
import React from "react";
import Formulario from "./components/Formulario/Formulario";
import AppNavBar from "./components/AppNavBar/AppNavBar";
import { Button } from "bootstrap";
import Search from './components/Search/Search'


function App() {
  return (
    <div className="App">
      <AppNavBar />
      <div className="container-api">
        <Search />
      </div>

      <div className="container-bebidas" id="bebidas">
        <div className ='item-bebida'>
          < img src = '/imagens/cafeExpresso.jpg' alt ='Café Expresso' />
          <h2>Café Expresso</h2>
          <button>Comprar</button>
        </div>

        <div className ='item-bebida'>
          < img src = '/imagens/latte.jpg' alt ='Latte' />
          <h2>Latte </h2>
          <button>Comprar</button>
        </div>
        
        <div className ='item-bebida'>
          < img src = '/imagens/capuccino.png' alt ='Capuccino'/>
          <h2>Capuccino </h2>
          <button>Comprar</button>
        </div>
      </div>
      <div className="container-doces" id="doces">
       
        <div className='doce-item'>
          <img src='/imagens/boloTrufado.jpeg' alt='Bolo Trufado' />
          <h2>Bolo trufado</h2>
          <button>Comprar</button>
        </div>

        <div className='doce-item'>
          <img src='/imagens/redVelvet.jpg' alt ='Bolo vermelho'/>
          <h2>redVelvet</h2>
          <button>Comprar</button>
        </div>

        <div className='doce-item'>
          <img id='diferente' src='/imagens/torta.jpeg' alt ='Torta' />
          <h2>Torta doce</h2>
          <button>Comprar</button>
        </div>
      </div>

      <div className="container-contato" id="contato">
        <div className="contato-item">
          <h3>Saiba Mais</h3>
          <Formulario/>
          <button>Enviar</button>
          <p>©Desenvolvido por Tabata Macedo</p>
        </div>
      </div>
    </div>
  );
}

export default App;