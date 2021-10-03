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
                            <td><h3>Identificador: </h3></td>
                            <td><input type="text" name="fname" maxlength="50"/></td>
                        </tr>
                        <tr>
                            <td><h3>Valor unitario: </h3></td>
                            <td><input type="text" name="fname" maxlength="50"/></td>
                        </tr>
                        <tr>
                            <td><h3>Estado: </h3></td>
                            <td><input type="radio" name="valor"/>Disponible</td>
                            <td><input type="radio" name="valor"/>No Disponible</td>
                        </tr>
                        <tr>
                            <td><h3>Descripcion: </h3></td>
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
                </section>
        </div>   
    )
}

export default Products;