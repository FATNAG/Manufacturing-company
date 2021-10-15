import Navbar from "components/Navbar";
import "assets/css/sales.css";

function Sales() {
  return (
    <div className="Sales">
      <Navbar title={"Informacion de Ventas"} />
      {/* En esta parte renombre la clase ya que la clase intro-section es muy general y solo quiero que a la hora de hacer estilos afecte esta interfaz */}
      <section id="section" className="sales-intro-section">
          {/* Despues encerre el formulario y la tabla en un div para a la hora de hacer estilos fuera mas facil */}
        <div className="sales-main-container">
          <form
            action="#"
            method="post"
            name="gestion_ventas"
            className="form-ventas"
          >
            <h3>Formulario de Pedido</h3>
            <main className="contenedor-imput">
              <div className="inputs">
                <label for="numero de pedido">Numero de Pedido :</label>
                <br />
                <input
                  type="number"
                  name="numero de pedido"
                  required="true"
                  placeholder="numero de pedido"
                  size="50"
                  value=""
                />
                <br />
              </div>
              <div className="inputs">
                <label for="fecha de pedido">Fecha de Pedido</label>
                <br />
                <input
                  type="date"
                  name="fecha de pedido"
                  required="true"
                  placeholder="fecha de pedido"
                  size="50"
                  value=""
                />
                <br />
              </div>
              <div className="inputs">
                <label for="nombre cliente">Nombre Cliente </label>
                <br />
                <input
                  type="text"
                  name="nombre cliente"
                  required="true"
                  placeholder="Nombre Cliente"
                  size="50"
                  value=""
                />
                <br />
              </div>
              <div className="inputs">
                <label for="Id cliente">Identificacion Cliente</label>
                <br />
                <input
                  type="number"
                  name="Id cliente"
                  required="true"
                  placeholder="Identificacion Cliente"
                  size="50"
                  value=""
                />
                <br />
              </div>
              <div className="inputs">
                <label for="vendedor">Identificacion Vendedor</label>
                <br />
                <input
                  type="number"
                  name="Id vendedor"
                  required="true"
                  placeholder="Id Vendedor"
                  size="50"
                  value=""
                />
                <br />
              </div>
              <div className="inputs">
                <label for="fecha de despacho">Fecha de Despacho</label>
                <br />
                <input
                  type="date"
                  name="fecha de despacho"
                  required="true"
                  placeholder="fecha de despacho"
                  size="50"
                  value=""
                />
                <br />
              </div>
              <div className="inputs">
                <label for="forma de pago">Forma de Pago</label>
                <br />
                <select name="forma de pago" id="forma de pago">
                  <option>Credito</option>
                  <option>Contado</option>
                </select>

                <br />
              </div>
              <button>Registrar</button>
              <button>Actualizar</button>
              <button>Consultar</button>
              <button>Editar/Borrar</button>
            </main>
          </form>

          <div name="table" className="sales-table">
            <table className="default">
              <thead>
                <tr>
                  <th> Codigo</th>
                  <th>Descripcion</th>
                  <th>Valor Unitario</th>
                  <th> Cantidad</th>
                  <th>Valor Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11111</td>
                  <td> Cuaderno</td>
                  <td>10000</td>
                  <td>1</td>
                  <td>10000</td>
                </tr>
                <tr>
                  <td>11111</td>
                  <td> Cuaderno</td>
                  <td>10000</td>
                  <td>1</td>
                  <td>10000</td>
                </tr>
                <tr>
                  <td>11111</td>
                  <td> Cuaderno</td>
                  <td>10000</td>
                  <td>1</td>
                  <td>10000</td>
                </tr>
                <tr>
                  <td>11111</td>
                  <td> Cuaderno</td>
                  <td>10000</td>
                  <td>1</td>
                  <td>10000</td>
                </tr>
                <tr>
                  <td>11111</td>
                  <td> Cuaderno</td>
                  <td>10000</td>
                  <td>1</td>
                  <td>10000</td>
                </tr>
                <tr>
                  <td>11111</td>
                  <td> Cuaderno</td>
                  <td>10000</td>
                  <td>1</td>
                  <td>10000</td>
                </tr>
                <tr>
                  <td>11111</td>
                  <td> Cuaderno</td>
                  <td>10000</td>
                  <td>1</td>
                  <td>10000</td>
                </tr>
                <tr>
                  <td>11111</td>
                  <td> Cuaderno</td>
                  <td>10000</td>
                  <td>1</td>
                  <td>10000</td>
                </tr>
                <tr>
                  <td>11111</td>
                  <td> Cuaderno</td>
                  <td>10000</td>
                  <td>1</td>
                  <td>10000</td>
                </tr>
                <tr>
                  <td>22222</td>
                  <td> Agenda</td>
                  <td>20000</td>
                  <td>1</td>
                  <td>20000</td>
                </tr>
                <tr>
                  <td>33333</td>
                  <td> MiniCuaderno</td>
                  <td>5000</td>
                  <td>2</td>
                  <td>10000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sales;
