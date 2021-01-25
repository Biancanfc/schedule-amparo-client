import * as yup from "yup";
import { validateCpf } from "../utils";

yup.addMethod(yup.string, "cpf", function (message) {
  return this.test("cpf", message, function (value) {
    return validateCpf(value);
  });
});
