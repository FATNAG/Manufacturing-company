import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "assets/css/styleVendedores.css";
function Vendors() {
    return (
        <div className="Vendors">
            <Navbar title={'Gestion de Vendedores'}/>
            <div className="main-content"> 

            {/* Se comento el header de esta interfaz ya que se esta utilizando la barra de navegacion reutilizable */}
        {/* <header>
            <h1>
                 <label for="nav-toggle">
                     <span className="las la-bars"></span>
                 </label>
                 Buscar
            </h1>
 
            <div className="search-wrapper">
                <span className="las la-search"></span>
                <input type="search" placeholder="Buscar aqui"/>
             </div>
 
             <div className="user-wrapper">
                 
             </div>
                 <h4>Daniel Felipe</h4>
                 <small>Vendedor</small>
         </header> */}



              
        <main>     

            <div className="cards"> 
             
            <div className="card-single">
                    <div>
                        <h1>10</h1>
                        <span>Vendedores Actuales</span>
                    </div>
                    <div>
                       <span className="las la-users"></span>
    
                    </div>
                </div>
    
                <div className="card-single">
                    <div>
                        <h1>790000</h1>
                        <span>ventas de semana </span>
                    </div>
                    <div>
                       <span className="las la-clipboard"></span>
    
                    </div>
                </div>
    
                <div className="card-single">
                    <div>
                        <h1>4</h1>
                        <span>ingreso por día</span>
                    </div>
                    <div>
                       <span className="las la-shopping-bag"></span>
    
                    </div>
                </div>
    
    
                <div className="card-single">
                    <div>
                        <h1>40</h1>
                        <span>compras mensuales</span>
                    </div>
                    <div>
                       <span className="lab la-google-wallet"></span>
    
                    </div>
                </div> 
    
                 
             
             </div>
                
        </main>       
                
            
          
        

        
                   
        
                <div className="recent-grid">  
                    <div className="projects">
                        <div className="card">
                            <div className="card-header">
                                <h2>Consultas recientes</h2>
                                <button>ver todo<span className="las la-arrow-right"></span></button>
                            </div>
                        
                            <div className="card-body">
                                <div className="table-responsive">
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
                                                    
                                                    <span className="status purple"></span>
                                                    Indefinido
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Mario</td>
                                                <td>45151815441</td>
                                                <td>
                                                    <span className="status pink"></span>
                                                    libro arseni lupin
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Diego Cabrera</td>
                                                <td>154116514541</td>
                                                <td>
                                                    <span className="status orange"></span>
                                                    libro cronicas de una muerte anunciada
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Sebastian Henriquez</td>
                                                <td>5618148456418</td>
                                                <td>
                                                        
                                                    <span className="status purple"></span>
                                                        la conquista de la felicidad
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Sebastian Henriquez</td>
                                                <td>5618148456418</td>
                                                <td>
                                                        
                                                    <span className="status purple"></span>
                                                        la conquista de la felicidad
                                                </td>
                                            </tr>
            
                                            <tr>
                                                
                                            </tr>
                                                <td>Mario</td>
                                                <td>45151815441</td>
                                                <td>
                                                    <span className="status pink"></span>
                                                    libro arseni lupin
                                                </td>
                                            <tr>
                                                <td>UI/UX Design</td>
                                                <td>UI Team</td>
                                                <td>
                                                    
                                                    <span className="status purple"></span>
                                                    review
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Web development</td>
                                                <td>Frontend</td>
                                                <td>
                                                    <span className="status pink"></span>
                                                    In Progress
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Ushop app</td>
                                                <td>Mobile Team</td>
                                                <td>
                                                    <span className="status orange"></span>
                                                    pending
                                                </td>
                                            </tr> 
                                        
                                         </tbody>
                                
                        
                                    </table>
                                        
                                </div>
                                 
                            </div>
                              
                        </div>
                           
                    </div>
                       
               
            
        
        
                <div className="customers">
                    <div className="card">
                        <div className="card-header">
                            <h3>Nuevo vendedor</h3>
        
                            <button>ver todo<span className="las la-arrow-right"></span></button>
                        </div>
                            
                        <div className="card-body">
                            <div className="customer">
                                <div className="info">
                                 
                                </div>
                                <div>
                                    <h4>María Alba</h4>
                                    <small>Reok</small>
                                </div>
                            </div>
                            <div className="contact">
                                <span className="las la-user-circle"></span>
                                <span className="las la-comment"></span>
                                <span className="las la-phone"></span>
                            </div>    
                        </div>
                        
                    </div>





                    <div className="card">
                        <div className="card-header">
                            <h3>Nuevo vendedor</h3>
        
                            <button>ver todo<span className="las la-arrow-right"></span></button>
                        </div>
                            
                        <div className="card-body">
                            <div className="customer">
                                <div className="info">
                                 
                                </div>
                                <div>
                                    <h4>Daniel Ramirez</h4>
                                    <small>Reok</small>
                                </div>
                            </div>
                            <div className="contact">
                                <span className="las la-user-circle"></span>
                                <span className="las la-comment"></span>
                                <span className="las la-phone"></span>
                            </div>    
                        </div>
                        
                    </div>
                  
                
            


            
                    <div className="card">
                        <div className="card-header">
                            <h3>Nuevo vendedor</h3>
        
                            <button>ver todo<span className="las la-arrow-right"></span></button>
                        </div>
                            
                        <div className="card-body">
                            <div className="customer">
                                <div className="info">
                                 
                                </div>
                                <div>
                                    <h4>Juan Hernandez</h4>
                                    <small>Reok</small>
                                </div>
                            </div>
                            <div className="contact">
                                <span className="las la-user-circle"></span>
                                <span className="las la-comment"></span>
                                <span className="las la-phone"></span>
                            </div>    
                        </div>
                        
                    </div>
                  
                
            
               
                    <div className="card">
                        <div className="card-header">
                            <h3>Nuevo vendedor</h3>
        
                            <button>ver todo<span className="las la-arrow-right"></span></button>
                        </div>
                            
                        <div className="card-body">
                            <div className="customer">
                                <div className="info">
                                    <img src="reok\src\media\images\profile-image-01.png" width="40px" height="40px" alt=""></img>
                                </div>
                                <div>
                                    <h4>Jofat Zhan Segura</h4>
                                    <small>Reok</small>
                                </div>
                            </div>
                            <div className="contact">
                                <span className="las la-user-circle"></span>
                                <span className="las la-comment"></span>
                                <span className="las la-phone"></span>
                            </div>    
                        </div>
                        
                    </div>
                 
             

             
                    <div className="card">
                        <div className="card-header">
                            <h3>Nuevo vendedor</h3>
        
                            <button>ver todo<span className="las la-arrow-right"></span></button>
                        </div>
                            
                        <div className="card-body">
                            <div className="customer">
                                <div className="info">
                                    <img src="../media/images/pho" width="40px" height="40px"/>
                                </div>
                                <div>
                                    <h4>Dayana Velasquez</h4> 
                                    <small>Reok</small>
                                </div>
                            </div>
                            <div className="contact">
                                <span className="las la-user-circle"></span>
                                <span className="las la-comment"></span>
                                <span className="las la-phone"></span>
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
