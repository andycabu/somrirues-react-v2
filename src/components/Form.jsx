import PropTypes from "prop-types";
import Button from "./Button";
import { Link } from "react-router-dom";

const Form = ({ form }) => {
  return (
    <div className="items-center bg-[var(--card-background-color)] p-12">
      <form>
        <div className="field ">
          {form.map((item) => (
            <div key={item.id}>
              <input
                className="w-full bg-[var(--background-color)] py-6 px-6 mb-12 font-medium"
                required
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                autoComplete={item.name}
              />
            </div>
          ))}
          <textarea
            className="w-full bg-[var(--background-color)] py-6 px-6 font-medium resize-none"
            id="message"
            placeholder="Escribe aquí tu consulta"
            name="mensaje"
            cols="20"
            rows="5"
          ></textarea>
        </div>
        <div className="mt-4">
          <input required className="max-[475px]:w-[0.7rem]" type="checkbox" />
          <Link
            className="pl-1 text-[var(--color-primary)] max-[475px]:text-[var(0.7em)]"
            to="/privacidad"
          >
            Acepto las condiciones de privacidad.
          </Link>
        </div>
        <div className="mt-4">
          <Button />
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  form: PropTypes.array.isRequired,
};
export default Form;
