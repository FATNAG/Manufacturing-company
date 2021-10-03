import Navbar from "components/Navbar";
import "assets/css/usuarios.css"
function Users() {
  return (
    <div className="Users">
      <Navbar title={'Gestion de Usuario'}/>
        <section id="section" class="intro-section" >
        <h3>Registrar/Actualizar Usuario </h3>
        <form action="#" method="post" name="gestion_usuario" class="form-usuario">
          <div class="contenedor-inputs">
            <div class="inputs">
              <label for="us_nombre">Nombre</label>
              <input
                id="us_nombre"
                name="us_nombre"
                required="true"
                placeholder="Nombre"
                type="text"
                value=""
              />
            </div>
            <div class="inputs">
              <label for="us_apellido">Apellido</label>
              <input
                id="us_apellido"
                name="us_apellido"
                required="true"
                placeholder="Apellido"
                type="text"
                value=""
              />
            </div>

            <div class="inputs">
              <label for="usuario">Usuario</label>
              <input
                id="usuario"
                name="usuario"
                required="true"
                placeholder="Usuario"
                type="text"
                value=""
              />
            </div>
            <div class="inputs">
              <label for="us_telefono">Telefono</label>
              <input
                id="us_telefono"
                name="us_telefono"
                required="true"
                placeholder="Telefono"
                type="number"
                value=""
              />
            </div>

            <div class="inputs">
              <label for="credenciales">Credenciales</label>
              <input
                id="passwd"
                name="passwd"
                required="true"
                placeholder="Password"
                type="password"
                value=""
              />
            </div>

            <div class="inputs">
              <label for="confirm">Confirmar Credenciales</label>
              <input
                id="confirm"
                name="confirm"
                required="true"
                placeholder="Confirmar Password"
                type="password"
                value=""
              />
            </div>

            <div class="inputs">
              <label for="rol">Rol del usuario</label>
              <select name="rol" id="rol" >
                <option value="#"> </option>
                <option value="admin_sist">Administrador de sistema</option>
                <option value="admin_ventas">Administrador de ventas</option>
                <option value="vendedor">Vendedor</option>
                <option value="operario">Operario</option>
                <option value="ejecutivo">Ejecutivo</option>
              </select>
            </div>
            <div class="inputs contenedor-botones">
              <input
                id="registrar_usuario" class="botton"
                name="registrar_usuario"
                type="submit"
                value="Registrar/Actualizar"
              />
              <button id="reset" class="botton" name="reset" type="reset">
                Restaurar
              </button>
            </div>

          </div>
        </form>
        <div class="table-responsive">
          <h3>Maestra de usuarios</h3> 
            <table class="table table-hover text-center">
									<thead>
										<tr>
											<th class="text-center">ID</th>
											<th class="text-center">Nombre</th>
											<th class="text-center">Apellidos</th>
											<th class="text-center">Usuario</th>
											<th class="text-center">Email</th>
											<th class="text-center">Telefono</th>
											<th class="text-center">Rol</th>
											<th class="text-center">Autorizacion</th>
											<th class="text-center">Baja</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>Maria</td>
											<td>Jadnat</td>
											<td>MAJAXX</td>
											<td>majoxx@gmail.com</td>
											<td>1234</td>
											<td>Admin</td>
											<td><select name="us-autorizar" id="us-autorizar" >
                        <option value="#"> </option>
                        <option value="pendiente">Pendiente</option>
                        <option value="autorizado">Aprobado</option>
                        <option value="no_autorizado">Negado</option>
                      </select></td>
                      <td> <label >.</label><input name="us-borrar" id="us-borrar" type="checkbox"   /></td>
                                            
										</tr>
										<tr>
											<td>2</td>
                      <td>Juan</td>
											<td>Hernandez</td>
											<td>JUHEXX</td>
											<td>juhexx@gmail.com</td>
											<td>1234</td>
											<td>User</td>
											<td><select name="us-autorizar" id="us-autorizar" >
                        <option value="#"> </option>
                        <option value="pendiente">Pendiente</option>
                        <option value="autorizado">Aprobado</option>
                        <option value="no_autorizado">Negado</option>
                      </select></td>
                      <td> <label >.</label><input name="us-borrar" id="us-borrar" type="checkbox"   /></td>
                                            
										</tr>
                    <tr>
											<td>3</td>
											<td>Daniel</td>
											<td>Ramirez</td>
											<td>DARAXX</td>
											<td>daraxx@gmail.com</td>
											<td>1234</td>
											<td>Vendedor</td>
											<td><select name="us-autorizar" id="us-autorizar" >
                        <option value="#"> </option>
                        <option value="pendiente">Pendiente</option>
                        <option value="autorizado">Aprobado</option>
                        <option value="no_autorizado">Negado</option>
                      </select></td>
                      <td> <label >.</label><input name="us-borrar" id="us-borrar" type="checkbox"   /></td>
                                            
										</tr>
                    <tr>
											<td>4</td>
											<td>Jofay</td>
											<td>Segura</td>
											<td>JOSEGXX</td>
											<td>josegxx@gmail.com</td>
											<td>1234</td>
											<td>User</td>
											<td><select name="us-autorizar" id="us-autorizar" >
                        <option value="#"> </option>
                        <option value="pendiente">Pendiente</option>
                        <option value="autorizado">Aprobado</option>
                        <option value="no_autorizado">Negado</option>
                      </select></td>
                      <td> <label >.</label><input name="us-borrar" id="us-borrar" type="checkbox"   /></td>
                                            
										</tr>
                    <tr>
											<td>5</td>
											<td>Dayana</td>
											<td>Mantilla</td>
											<td>DAMAXX</td>
											<td>dama@gmail.com</td>
											<td>1234</td>
											<td>Vendedor</td>
											<td><select name="us-autorizar" id="us-autorizar" >
                        <option value="#"> </option>
                        <option value="pendiente">Pendiente</option>
                        <option value="autorizado">Aprobado</option>
                        <option value="no_autorizado">Negado</option>
                      </select></td>
                      <td> <label >.</label><input name="us-borrar" id="us-borrar" type="checkbox"   /></td>
                                            
										</tr>
									</tbody>
				    </table>
				</div>
      </section>
        
    </div>
  );
}

export default Users;