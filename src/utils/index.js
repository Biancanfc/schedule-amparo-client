import validateCpf from "./validators/cpf";

const formatDate = (dateTime) => {
  const [date, _] = dateTime.split("T");
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
};

export { validateCpf, formatDate };
