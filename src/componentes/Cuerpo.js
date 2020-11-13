

import React, {Component} from 'react';
export default class Cuerpo extends Component{ 
  constructor(props) {
    super(props);
    this.state = {
        mensaje: "",
        colorFondo: ""
    }


}


cambiarColor = (e) => {
  this.setState({
      colorFondo: "#4AE0DB"
  })
}

mostrarDespedida = (e) => {
  alert("adios")
}

mostrarAyuda = (e) => {
  this.setState({
      mensaje: "La vida es corta, disfrutala, inspirate y vivela a tu manera"
  })
}




    render (){
        return (
            <div className="main-container" style={{ backgroundColor: this.state.colorFondo }}>
  <div className="cloud-image">
    <img src="img/successCloudNew.svg" />
  </div>
  <div className="content">

  <button className = "boton" onClick={this.mostrarDespedida}> Mostrar mensaje de despedida
                        </button>

  <button className = "boton" onClick={this.cambiarColor}> Cambiar color
                        </button>


  <button className = "boton" onClick={this.mostrarAyuda}> Mostrar mensaje de texto
                        </button>

  <button className = "boton" type="button"
            onClick={(e) => {
                e.preventDefault();
                window.location.href = 'https://www.smugmug.com/';
            }} >Ver más</button>
            


    <div className="content-body">
      <div className="success-text">Universo Fotografico!</div>
      <div className="description line-1"> Gracias por su preferencia y elegir esta pagina</div>
      <div className="description line-2"> Proximamente mas contenido</div>
      <div className="next-steps-container">
        <div className="next-steps-header">Hasta la proxima</div>
        <div className="next-steps-body">
          <div className="step">
            <div className="step-icon">
                <img src="img/mountain.jpg" />
            </div>
            
          </div>
    

          <div className="step">
          </div>
          <div className="step">
          </div>
          <div className="step">
                <div className="step-icon">
                  <img src="img/lightbulbWhite.svg" />
                </div>
              <div className="step-text"><a href="https://aline196.github.io/Universofotograficoo/">Visita nuestra pagina oficial    </a></div>

              




          </div>
          <div  className="step-text"> {this.state.mensaje}  </div>
        </div>
      </div>
    </div>
  </div>
</div>


        );
    }
 }
