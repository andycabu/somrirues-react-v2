function Footer() {
  return (
    <footer>
      <div class="footer">
        <div class="footer__details">
          <div class="align-self-center">
            <img
              class="footer__details__img"
              src="./assets/images/logo.svg"
              alt="logo-empresa"
            />
          </div>
          <div>
            <ul class="footer__details__ul">
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
        <div class="footer__icons">
          <a target="_blank" href="https://www.instagram.com">
            <i id="zoom" class="fab fa-instagram-square transition"></i>
          </a>
          <a target="_blank" href="https://www.facebook.com">
            <i id="zoom" class="fab fa-facebook-square transition"></i>
          </a>
          <a target="_blank" href="LinkPrueba">
            <i id="zoom" class="fab fa-whatsapp-square transition"></i>
          </a>
        </div>
      </div>
      <div class="footer__copy">
        <p>Empresa, Copyright ©2023,Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
