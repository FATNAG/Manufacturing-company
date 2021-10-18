import "assets/css/footer.css";

const Footer = () => {
  return (
    <section className="footer bg-dark" id="footer">
      <div className="container">
        <div className="footer-box">
          <div className="row footer-box-left text-center">
            <h4>About us</h4>
            <p>
              Reok es una empresa ficticia de manufaturacion enfocada en productos reciclados. Esta empresa fue creada por FATNAG un equipo de desarrolladores, con el fin de implementar todos los conocimientos que hemos logrado ir obteniendo a lo largo de nuestra ruta.
            </p>
          </div>
          <div className="row footer-box-right text-start">
            <h4>This page was made by</h4>
            <ul>
              <li>Jofay Zhan Segura</li>
              <li>Daniel Felipe Ramirez Ferrín</li>
              <li>Omaira Dayana Velásquez Mantilla</li>
              <li>Juan Alberto Hernandez</li>
              <li>María José Jadnat Pérez Alba</li>
            </ul>
          </div>
        </div>
        <hr />
        <span className="copyright">© 2021 FATNAG. All rights reserved.</span>
      </div>
    </section>
  );
};

export default Footer;