import PropTypes from "prop-types";

export default function InputText({
  label,
  id,
  type,
  register,
  isRequired,
  children,
}) {
  return (
    <div className="flex flex-col items-center">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={label}
        required={isRequired}
        className="min-w-max rounded border border-gray-300 p-2"
        {...register(id)}
      />
      {children}
    </div>
  );
}

InputText.defaultProps = {
  isRequired: false,
  register: () => {},
  type: "text",
};

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  register: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node,
};
