import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().required("Поле обязательное для заполенения"),
  subtitle: yup.string().required("Поле обязательное для заполенения"),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
});

export default schema;
