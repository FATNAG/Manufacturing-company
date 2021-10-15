import Navbar from "components/Navbar";
import "assets/css/products.css";

function Products() {
    return (
      <div className="Products">
        <Navbar title={'Gestion de Productos'} />
        <section className="productos">
          <div className="form">
            <form>
              <h5>Identificador: </h5>
              <input type="text" name="fname" maxLength="50" />
              <h5>Valor unitario: </h5>
              <input type="text" name="fname" maxLength="50" />
              <h5>Estado: </h5>
              <input type="radio" id="b" name="valor" 
              checked/>
              <label for="b">Disponible</label>
              <input type="radio" id="b" name="valor" 
              checked/>
              <label for="b">No Disponible</label>
              <h5>Descripcion: </h5>
              <textarea name="comments" cols="45" rows="5"></textarea>
            </form>
            <div className="botones">
              <button className="botton" type="submit">
                Registrar
              </button>
              <button className="botton" type="submit">
                Actualizar
              </button>
              <button className="botton" type="reset">
                Borrar
              </button>
            </div>
          </div>

          <div name="table" className="sales-table">
            <table className="default">
              <thead>
                <tr>
                  <th>Codigo</th>
                  <th>Descripcion</th>
                  <th>Valor Unitario</th>
                  <th>Disponible</th>
                  <th>Valor Inventario</th>
                  <th>Accion</th>
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
        </section>
      </div>
    )
}

export default Products;