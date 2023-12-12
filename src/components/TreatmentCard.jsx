import { Link } from "react-router-dom";
import bracketBlanco from "../assets/svg/brackets-blanco.svg";
import extraccion from "../assets/svg/extraction_4650148.svg";
import implant from "../assets/svg/implant_1386815.svg";
import rootCanal from "../assets/svg/root-canal_5997489.svg";
import pediatricDentistry from "../assets/svg/dentist_10503563.svg";
import dentalProstheses from "../assets/svg/disinfection_7336148.svg";
import IconCard from "./IconCard";

const TreatmentCard = () => {
  const TREATMENTS = [
    {
      id: 1,
      img: bracketBlanco,
      title: "Ortodoncia",
      link: "/ortodoncia",
      alt: "brackets-blanco",
    },
    {
      id: 2,
      img: extraccion,
      title: "Cirugía",
      link: "/cirugia",
      alt: "bisturi-cirugia",
    },
    {
      id: 3,
      img: implant,
      title: "Implantología",
      link: "/implantes",
      alt: "implante-dental",
    },
    {
      id: 4,
      img: rootCanal,
      title: "Endodoncia",
      link: "/endodoncia",
      alt: "Diente endodonciado",
    },
    {
      id: 5,
      img: pediatricDentistry,
      title: "Odonto-pediatría",
      link: "/odontopediatria",
      alt: "Bebe en dentista",
    },
    {
      id: 6,
      img: dentalProstheses,
      title: "Prótesis dental",
      link: "/protesis",
      alt: "Protesis dental",
    },
  ];
  return (
    <>
      <div className=" grid grid-cols-3 gap-y-16 gap-x-8 justify-center max-[1154px]:grid-cols-2 max-[830px]:grid-cols-1 max-[830px]:gap-y-8 max-[830px]:gap-x-4">
        {TREATMENTS.map((treatment) => (
          <div
            key={treatment.id}
            className="relative bg-[var(--card-background-color)] h-60 flex flex-col justify-center items-center shadow-personalized"
          >
            <IconCard
              img={treatment.img}
              alt={treatment.alt}
              link={treatment.link}
            />
            <div className="mt-20 text-[1.125em]">
              <Link to={`./pages${treatment.link}`}>{treatment.title}</Link>
            </div>
            <div className="text-[0.9375em] mt-8 text-[var(--txt-1)]">
              <Link to={`./pages${treatment.link}`}>Más información</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default TreatmentCard;
