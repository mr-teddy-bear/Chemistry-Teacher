import * as yup from "yup";

const schema = yup.object().shape({
  number: yup.string().required("Поле обязательное для заполенения"),
  descr: yup.string().required("Поле обязательное для заполенения"),
  testId: yup.string().required("Поле обязательное для заполенения"),
  answer: yup.string().required("Поле обязательное для заполенения"),

  createdOn: yup.date().default(function () {
    return new Date();
  }),
});

export default schema;
