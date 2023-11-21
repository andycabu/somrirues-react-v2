import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Icons({ icons }) {
  return (
    <div className="hidden max-[1154px]:flex max-[1154px]:justify-center max-[1154px]:items-center mt-28 gap-4 ">
      {icons.map((icon) => (
        <Link href={icon.URL} key={icon.id}>
          <FontAwesomeIcon
            className="transition duration-300 scale-[1.2] h-6 cursor-pointer hover:text-primary"
            icon={icon.icon}
          />
        </Link>
      ))}
    </div>
  );
}

export default Icons;
