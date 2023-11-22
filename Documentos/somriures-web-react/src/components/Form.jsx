const Form = () => {
  return (
    <div className="w-50 align-items-center wc contact-form bg-[var(--card-background-color)] p-12">
      <form>
        <div className="field row justify-content-center">
          <div className="col-md-12 col-lg-6 fp">
            <input
              className="w-100"
              required
              name="name"
              type="name"
              placeholder="Nombre"
              autoComplete="name"
            />
          </div>
          <div className="col-md-12 col-lg-6 fp">
            <input
              className="w-100"
              required
              name="phone"
              type="tel"
              placeholder="Teléfono"
              autoComplete="tel"
            />
          </div>
          <div className="col-12 fp">
            <input
              className="w-100"
              required
              name="email"
              type="email"
              placeholder="Correo electrónico"
              autoComplete="email"
            />
          </div>
          <div className="col-12 fp">
            <textarea
              className="w-100"
              id="message"
              placeholder="Escribe aquí tu consulta"
              name="mensaje"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div className="w-100 mt-2 d-flex">
          <input required type="checkbox" />
          <a className="pl-1" href="./privacidad.html">
            Acepto las condiciones de privacidad.
          </a>
        </div>
        <div className="send">
          <button id="button" type="submit" value="Enviar">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
