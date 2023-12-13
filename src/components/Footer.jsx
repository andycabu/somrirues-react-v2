function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer__details">
          <div className="align-self-center">
            <img
              className="footer__details__img"
              src="./assets/images/logo.svg"
              alt="logo-empresa"
            />
          </div>
          <div>
            <ul className="footer__details__ul">
              <li>Dirección del centro</li>
              <li>
                <a href="prueba@prueba.com">prueba@prueba.com</a>
              </li>
              <li>
                <a href="tel:999999999">999 999 999</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__icons">
          <a target="_blank" href="https://www.instagram.com">
            <i id="zoom" className="fab fa-instagram-square transition"></i>
          </a>
          <a target="_blank" href="https://www.facebook.com">
            <i id="zoom" className="fab fa-facebook-square transition"></i>
          </a>
          <a target="_blank" href="LinkPrueba">
            <i id="zoom" className="fab fa-whatsapp-square transition"></i>
          </a>
        </div>
      </div>
      <div className="footer__copy">
        <p>Empresa, Copyright ©2023,Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
