import { Link } from "react-router-dom";
import img from "../assets/images/familia-joven-feliz-uniendo-juntos-casa.webp";
import Form from "../components/Form";
import TreatmentCard from "../components/TreatmentCard";
import { COMPANY_NAME } from "../constants/companyInfo";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Home = () => {
  const FORM = [
    {
      id: 1,
      name: "name",
      placeholder: "Nombre",
      type: "name",
    },
    {
      id: 2,
      name: "phone",
      placeholder: "Teléfono",
      type: "tel",
    },
    {
      id: 3,
      name: "email",
      placeholder: "Correo electrónico",
      type: "email",
    },
  ];
  return (
    <>
      <section>
        <div className="max-[1154px]:mt-8 max-[830px]:mt-16">
          <img
            className="w-full max-h-screen object-cover"
            src={img}
            alt="familia-joven-feliz-uniendo-juntos-casa"
          />
        </div>
      </section>
      <section>
        <div className="bg-[var(--background-color)]">
          <div className="flex relative py-0 px-32  max-[1154px]:px-6 max-[830px]:flex-col">
            <div className="w-1/2 py-8 px-12 max-[1154px]:px-0 max-[830px]:w-full">
              <p>Bienvenido a {COMPANY_NAME}</p>
              <h1 className="max-[320px]:text-[1.3em]">
                Tu centro de salud bucodental
              </h1>
              <p>
                En {COMPANY_NAME}, todo nuestro equipo de profesionales quieren
                transmitir su visión de lo mejor de la odontología moderna,
                desde un punto de vista teórico-práctico, instalaciones, así
                como en el empleo de materiales.
                <br />
                <br />
                Queremos liderar la incorporación de las últimas técnicas en el
                mundo dental para ser más eficientes tanto en los procedimientos
                más sencillos como en los más complejos, así, conseguimos que tu
                experiencia dental sea lo más indolora posible, a la vez que
                satisfactoria y con el mínimo de complicaciones.
                <br />
                <br />
                ¡¡Ven a conocernos porque no te vamos a decepcionar!!
              </p>
            </div>
            <div className=" w-[45%] absolute -top-[6.5625rem] pr-28 right-0 max-[1154px]:pr-8 max-[830px]:mt-4 max-[830px]:p-0 max-[830px]:w-full max-[830px]:static">
              <div className="h-[10rem] bg-[var(--color-primary)]">
                <p className="text-[2em] text-white h-full text-start flex justify-center items-center">
                  Reserva tu cita!
                </p>
              </div>
              <Form form={FORM} />
            </div>
          </div>
          <div className="mt-72 max-[1154px]:mt-64 max-[1154px]:bg-[var(--card-background-color)] max-[830px]:mt-0">
            <h2 className="max-[320px]:text-[1.3em]">
              Nuestras Especialidades
            </h2>
          </div>
        </div>
      </section>
      <section>
        <div className=" bg-[var(--card-background-color)] h-[25rem] px-64 max-[1154px]:px-8 max-[830px]:px-4">
          <TreatmentCard />
          <Link
            href="./pages/tratamientos"
            className=" mt-16 text-center text-[var(--color-secundary)] flex items-center justify-center"
          >
            Más especialidades
            <FaRegArrowAltCircleRight />
          </Link>
        </div>
      </section>
      <section className="philosophy">
        <div className="container-philosophy">
          <div className="container-philosophy__1">
            <p>¿Cual es nuestra filosofia?</p>
            <ul>
              <li>Familiaridad y confianza.</li>
              <li>Trabajo bien hecho.</li>
              <li>Dar lo mejor de nosotros.</li>
              <li>Excelencia e innovación.</li>
            </ul>
            <img
              src="./assets/images/dos-dentistas-sonrientes-mirando-camara-pie-lugar-trabajo-clinica-dental-moderna.webp"
              alt="dos-dentistas-sonrientes-mirando-camara-pie-lugar-trabajo-clinica-dental-moderna"
            />
          </div>
          <div className="container-philosophy__2">
            <div className="container-philosophy__2__text">
              <h3>¿Por qué escogernos?</h3>
              <ul>
                <li>
                  <i className="fas fa-check-circle"></i>
                  Todas las especialidades,
                  <br />
                  un único espacio
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  Tratamientos multidisciplinares
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  Excelencia en los materiales
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  Profesionales altamente cualificados
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  Estudios personalizados
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  Somos los propietarios del centro,
                  <br />
                  no somos franquicia
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  Filosofia SLOW
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-mutuas">
          <h2>Nuestras Mútuas</h2>
          <div className="container-mutuas__logos">
            <div>
              <img
                src="./assets/images/axa_logo_solid_rgb.svg"
                alt="axa-logo"
              />
            </div>
            <div>
              <img src="./assets/images/cigna.svg" alt="logo-cigna" />
            </div>
            <div>
              <img src="./assets/images/generali.svg" alt="logo-generali" />
            </div>
          </div>
          <a href="./pages/mutuas.html" className="container-mutuas__a">
            Ver todas las mutuas
            <i className="fas fa-arrow-circle-right"></i>
          </a>
        </div>
      </section>
      <section className="information">
        <div className="container-information">
          <div className="container-information__text">
            <h2>Estamos aquí para atenderte</h2>
            <p className="container-information__text-p">
              Información de contacto
            </p>
          </div>
          <div className="container-information__logos">
            <a href="https://goo.gl/maps/PP6t3DvSMrKejNzf9">
              <div className="container-information__logos__logo">
                <div className="container-information__logos__logo__a">
                  <img
                    src="./assets/svg/location-pin_5837790.svg"
                    alt="logo-ubicacion"
                  />
                </div>
                <div className="container-information__logos__logo__text">
                  <p>C/ d'Antoni Gaudí 27</p>
                  <p>08850 Gavà (BCN)</p>
                </div>
              </div>
            </a>
            <a href="tel:936384298">
              <div className="container-information__logos__logo">
                <div className="container-information__logos__logo__a">
                  <img
                    src="./assets/svg/telephone-call_159052.svg"
                    alt="logo-telefono"
                  />
                </div>
                <div className="container-information__logos__logo__text">
                  <p>936 384 298</p>
                  <p>627 149 677</p>
                </div>
              </div>
            </a>
            <a href="mailto:hola@somriuresdental.com">
              <div className="container-information__logos__logo">
                <div className="container-information__logos__logo__a">
                  <img
                    src="./assets/svg/messages-silhouette_20173.svg"
                    alt="diente-con-brackets"
                  />
                </div>
                <div className="container-information__logos__logo__text">
                  <p>hola@somriuresdental.com</p>
                  <p className="hiddden">prueba</p>
                </div>
              </div>
            </a>
            <a href="./pages/contacto.html">
              <div className="container-information__logos__logo">
                <div className="container-information__logos__logo__a">
                  <img
                    src="./assets/svg/time_4121770.svg"
                    alt="diente-con-brackets"
                  />
                </div>
                <div className="container-information__logos__logo__text">
                  <p>10:00 a 14:00</p>
                  <p>16:00 a 20:00</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
