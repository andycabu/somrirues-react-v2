import { Link } from "react-router-dom";
import location from "../assets/svg/location-pin_5837790.svg";
import telephone from "../assets/svg/telephone-call_159052.svg";
import message from "../assets/svg/messages-silhouette_20173.svg";
import time from "../assets/svg/time_4121770.svg";
import IconCard from "./IconCard";
const Information = () => {
  const INFORMATION = [
    {
      id: 1,
      href: "https://goo.gl/maps/PP6t3DvSMrKejNzf9",
      img: location,
      alt: "logo-ubicacion",
      text_1: "C/ d'Antoni Gaudí 27",
      text_2: "08850 Gavà (BCN)",
    },
    {
      id: 2,
      href: "tel:936384298",
      img: telephone,
      alt: "logo-telefono",
      text_1: "936 384 298",
      text_2: "627 149 677",
    },
    {
      id: 3,
      href: "mailto:hola@somriuresdental.com",
      img: message,
      alt: "logo-telefono",
      text_1: "hola@somriuresdental.com",
    },
    {
      id: 4,
      href: "./pages/contacto",
      img: time,
      alt: "logo-time",
      text_1: "10:00 a 14:00",
      text_2: "16:00 a 20:00",
    },
  ];
  return (
    <div className="container-information__logos">
      {INFORMATION.map((item) => (
        <Link key={item.id} to={item.href} className="prueba">
          <div className="container-information__logos__logo">
            <IconCard img={item.img} link={item.href} alt={item.alt} />
            <div className="container-information__logos__logo__text">
              <div className="flex h-[20%] justify-center items-center flex-col">
                <p>{item.text_1}</p>
                {item.text_2 && <p>{item.text_2}</p>}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Information;
