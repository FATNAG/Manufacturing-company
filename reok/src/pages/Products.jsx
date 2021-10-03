import Navbar from "components/Navbar";
import "assets/css/products.css";

function Products() {
    return (
        <div className="Products">
            <Navbar title={'Gestion de Productos'}/>
                <section class="productos"> 
                <div class="tabla">
                    <table>
                        <tr>
                            <td><h5>Identificador: </h5></td>
                            <td><input type="text" name="fname" maxlength="50"/></td>
                        </tr>
                        <tr>
                            <td><h5>Valor unitario: </h5></td>
                            <td><input type="text" name="fname" maxlength="50"/></td>
                        </tr>
                        <tr>
                            <td><h5>Estado: </h5></td>
                            <td><input type="radio" name="valor"/>Disponible</td>
                            <td><input type="radio" name="valor"/>No Disponible</td>
                        </tr>
                        <tr>
                            <td><h5>Descripcion: </h5></td>
                            <td>
                                <textarea name="comments" cols="45" rows="5"></textarea> 
                            </td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td>
                                <button type="submit">Registrar</button>
                            </td>
                            <td>
                                <button type="submit">Actualizar</button>
                            </td>
                            <td>
                                <button type="reset">Borrar</button>
                            </td>
                        </tr>
                    </table>
                </div>
                <div name="table" className="sales-table">
            <table class="default">
              <thead>
                <tr>
                  <th>Codigo</th>
                  <th>Descripcion</th>
                  <th>Valor Unitario</th>
                  <th>Disponible</th>
                  <th>Valor Inventario</th>
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