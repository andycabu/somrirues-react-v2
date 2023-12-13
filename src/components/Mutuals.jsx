import axa from "../assets/images/axa_logo_solid_rgb.svg";
import cigna from "../assets/images/cigna.svg";
import generali from "../assets/images/generali.svg";
const Mutuals = () => {
  const MUTUALS = [
    {
      id: 1,
      img: axa,
      alt: "axa-logo",
    },
    {
      id: 2,
      img: cigna,
      alt: "logo-cigna",
    },
    {
      id: 3,
      img: generali,
      alt: "logo-generali",
    },
  ];

  return (
    <div className="container-mutuas__logos">
      {MUTUALS.map((mutua) => (
        <div key={mutua.id}>
          <img src={mutua.img} alt={mutua.alt} />
        </div>
      ))}
    </div>
  );
};

export default Mutuals;
