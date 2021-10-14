import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "assets/css/styleVendedores.css";
function Vendors() {
    return (
        <div className="Vendors">
            <Navbar title={'Gestion de Vendedores'}/>
            <div class="main-content"> 

            {/* Se comento el header de esta interfaz ya que se esta utilizando la barra de navegacion reutilizable */}
        {/* <header>
            <h1>
                 <label for="nav-toggle">
                     <span class="las la-bars"></span>
                 </label>
                 Buscar
            </h1>
 
            <div class="search-wrapper">
                <span class="las la-search"></span>
                <input type="search" placeholder="Buscar aqui"/>
             </div>
 
             <div class="user-wrapper">
                 
             </div>
                 <h4>Daniel Felipe</h4>
                 <small>Vendedor</small>
         </header> */}



              
        <main>     

            <div class="cards"> 
             
            <div class="card-single">
                    <div>
                        <h1>10</h1>
                        <span>Vendedores Actuales</span>
                    </div>
                    <div>
                       <span class="las la-users"></span>
    
                    </div>
                </div>
    
                <div class="card-single">
                    <div>
                        <h1>790000</h1>
                        <span>ventas de semana </span>
                    </div>
                    <div>
                       <span class="las la-clipboard"></span>
    
                    </div>
                </div>
    
                <div class="card-single">
                    <div>
                        <h1>4</h1>
                        <span>ingreso por día</span>
                    </div>
                    <div>
                       <span class="las la-shopping-bag"></span>
    
                    </div>
                </div>
    
    
                <div class="card-single">
                    <div>
                        <h1>40</h1>
                        <span>compras mensuales</span>
                    </div>
                    <div>
                       <span class="lab la-google-wallet"></span>
    
                    </div>
                </div> 
    
                 
             
             </div>
                
        </main>       
                
            
          
        

        
                   
        
                <div class="recent-grid">  
                    <div class="projects">
                        <div class="card">
                            <div class="card-header">
                                <h2>Consultas recientes</h2>
                                <button>ver todo<span class="las la-arrow-right"></span></button>
                            </div>
                        
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table width="100%">
                                        <thead>
                                            <tr>
                                                <td>nombre vendedor</td>
                                                <td>id</td>
                                                <td>ventas recientes</td>
                                            </tr>
                                        </thead>
                
                
                                        <tbody>
                                            <tr>
                                                <td>alberto</td>
                                                <td>21256161554</td>
                                                <td>
                                                    
                                                    <span class="status purple"></span>
                                                    Indefinido
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Mario</td>
                                                <td>45151815441</td>
                                                <td>
                                                    <span class="status pink"></span>
                                                    libro arseni lupin
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Diego Cabrera</td>
                                                <td>154116514541</td>
                                                <td>
                                                    <span class="status orange"></span>
                                                    libro cronicas de una muerte anunciada
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Sebastian Henriquez</td>
                                                <td>5618148456418</td>
                                                <td>
                                                        
                                                    <span class="status purple"></span>
                                                        la conquista de la felicidad
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Sebastian Henriquez</td>
                                                <td>5618148456418</td>
                                                <td>
                                                        
                                                    <span class="status purple"></span>
                                                        la conquista de la felicidad
                                                </td>
                                            </tr>
            
                                            <tr>
                                                
                                            </tr>
                                                <td>Mario</td>
                                                <td>45151815441</td>
                                                <td>
                                                    <span class="status pink"></span>
                                                    libro arseni lupin
                                                </td>
                                            <tr>
                                                <td>UI/UX Design</td>
                                                <td>UI Team</td>
                                                <td>
                                                    
                                                    <span class="status purple"></span>
                                                    review
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Web development</td>
                                                <td>Frontend</td>
                                                <td>
                                                    <span class="status pink"></span>
                                                    In Progress
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Ushop app</td>
                                                <td>Mobile Team</td>
                                                <td>
                                                    <span class="status orange"></span>
                                                    pending
                                                </td>
                                            </tr> 
                                        
                                         </tbody>
                                
                        
                                    </table>
                                        
                                </div>
                                 
                            </div>
                              
                        </div>
                           
                    </div>
                       
               
            
        
        
                <div class="customers">
                    <div class="card">
                        <div class="card-header">
                            <h3>Nuevo vendedor</h3>
        
                            <button>ver todo<span class="las la-arrow-right"></span></button>
                        </div>
                            
                        <div class="card-body">
                            <div class="customer">
                                <div class="info">
                                 
                                </div>
                                <div>
                                    <h4>María Alba</h4>
                                    <small>Reok</small>
                                </div>
                            </div>
                            <div class="contact">
                                <span class="las la-user-circle"></span>
                                <span class="las la-comment"></span>
                                <span class="las la-phone"></span>
                            </div>    
                        </div>
                        
                    </div>





                    <div class="card">
                        <div class="card-header">
                            <h3>Nuevo vendedor</h3>
        
                            <button>ver todo<span class="las la-arrow-right"></span></button>
                        </div>
                            
                        <div class="card-body">
                            <div class="customer">
                                <div class="info">
                                 
                                </div>
                                <div>
                                    <h4>Daniel Ramirez</h4>
                                    <small>Reok</small>
                                </div>
                            </div>
                            <div class="contact">
                                <span class="las la-user-circle"></span>
                                <span class="las la-comment"></span>
                                <span class="las la-phone"></span>
                            </div>    
                        </div>
                        
                    </div>
                  
                
            


            
                    <div class="card">
                        <div class="card-header">
                            <h3>Nuevo vendedor</h3>
        
                            <button>ver todo<span class="las la-arrow-right"></span></button>
                        </div>
                            
                        <div class="card-body">
                            <div class="customer">
                                <div class="info">
                                 
                                </div>
                                <div>
                                    <h4>Juan Hernandez</h4>
                                    <small>Reok</small>
                                </div>
                            </div>
                            <div class="contact">
                                <span class="las la-user-circle"></span>
                                <span class="las la-comment"></span>
                                <span class="las la-phone"></span>
                            </div>    
                        </div>
                        
                    </div>
                  
                
            
               
                    <div class="card">
                        <div class="card-header">
                            <h3>Nuevo vendedor</h3>
        
                            <button>ver todo<span class="las la-arrow-right"></span></button>
                        </div>
                            
                        <div class="card-body">
                            <div class="customer">
                                <div class="info">
                                    <img src="reok\src\media\images\profile-image-01.png" width="40px" height="40px" alt=""></img>
                                </div>
                                <div>
                                    <h4>Jofat Zhan Segura</h4>
                                    <small>Reok</small>
                                </div>
                            </div>
                            <div class="contact">
                                <span class="las la-user-circle"></span>
                                <span class="las la-comment"></span>
                                <span class="las la-phone"></span>
                            </div>    
                        </div>
                        
                    </div>
                 
             

             
                    <div class="card">
                        <div class="card-header">
                            <h3>Nuevo vendedor</h3>
        
                            <button>ver todo<span class="las la-arrow-right"></span></button>
                        </div>
                            
                        <div class="card-body">
                            <div class="customer">
                                <div class="info">
                                    <img src="../media/images/pho" width="40px" height="40px"/>
                                </div>
                                <div>
                                    <h4>Dayana Velasquez</h4> 
                                    <small>Reok</small>
                                </div>
                            </div>
                            <div class="contact">
                                <span class="las la-user-circle"></span>
                                <span class="las la-comment"></span>
                                <span class="las la-phone"></span>
                            </div>    
                        </div>
                        
                    </div>
                 
             
            
                </div>    
                
                </div>     
            

        </div>
        </div>
    )
}

export default Vendors;
