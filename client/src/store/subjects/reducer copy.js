import {
  CHANGE_TEST_STATUS,
  GET_CLASS_INFO_FAILURE,
  GET_CLASS_INFO_REQUEST,
  GET_CLASS_INFO_SUCCESS,
} from "../actionTypes";

const initialState = {
  isRequesting: false,
  userId: 385,
  chemistry: [
    {
      id: 1,
      title: 7,
      subtitle: "класс",
      status: "success",
      questions: [
        {
          number: 1,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["1. Бром", "2. Хлор", "3.Цинк", "4. Кальций"],
        },
        {
          number: 2,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["1. Оксид", "2. Метал", "3.Моль", "4. Углеводород"],
        },
        {
          number: 3,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["1. CH4", "2. C2H5", "3.C2H8", "4. CuSO4"],
        },
        {
          number: 4,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["1. Натрий", "2. Хлор", "3.Водород", "4. Кальций"],
        },
        {
          number: 5,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["1. Маями", "2. Амстер", "3.Гендальф", "4. Наруто"],
        },
      ],
    },
    {
      id: 2,
      title: 8,
      subtitle: "класс",
      status: "waiting",
      questions: [
        {
          number: 1,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["1. Бром", "2. Хлор", "3.Цинк", "4. Кальций"],
        },
        {
          number: 2,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["1. Оксид", "2. Метал", "3.Моль", "4. Углеводород"],
        },
        {
          number: 3,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["1. CH4", "2. C2H5", "3.C2H8", "4. CuSO4"],
        },
        {
          number: 4,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["1. Натрий", "2. Хлор", "3.Водород", "4. Кальций"],
        },
        {
          number: 5,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["1. Маями", "2. Амстер", "3.Гендальф", "4. Наруто"],
        },
      ],
    },
    {
      id: 3,
      title: 9,
      subtitle: "класс",
      status: "active",
      questions: [
        {
          number: 1,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["Бром", "Хлор", "Цинк", "Кальций"],
        },
        {
          number: 2,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["Оксид", "Метал", "Моль", "Углеводород"],
        },
        {
          number: 3,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["CH4", "C2H5", "C2H8", "CuSO4"],
        },
        {
          number: 4,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["Натрий", "Хлор", "Водород", "Кальций"],
        },
        {
          number: 5,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["Маями", "Амстер", "Гендальф", "Наруто"],
        },
      ],
    },
    {
      id: 4,
      title: 10,
      subtitle: "класс",
      status: "active",
      questions: [
        {
          number: 1,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["Бром", "Хлор", "Цинк", "Кальций"],
        },
        {
          number: 2,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["Оксид", "Метал", "Моль", "Углеводород"],
        },
        {
          number: 3,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["CH4", "C2H5", "C2H8", "CuSO4"],
        },
        {
          number: 4,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["Натрий", "Хлор", "Водород", "Кальций"],
        },
        {
          number: 5,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["Маями", "Амстер", "Гендальф", "Наруто"],
        },
      ],
    },
    {
      id: 5,
      title: 11,
      subtitle: "класс",
      status: "disabled",
      questions: [
        {
          number: 1,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["1. Бром", "2. Хлор", "3.Цинк", "4. Кальций"],
        },
        {
          number: 2,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["1. Оксид", "2. Метал", "3.Моль", "4. Углеводород"],
        },
        {
          number: 3,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["1. CH4", "2. C2H5", "3.C2H8", "4. CuSO4"],
        },
        {
          number: 4,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["1. Натрий", "2. Хлор", "3.Водород", "4. Кальций"],
        },
        {
          number: 5,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["1. Маями", "2. Амстер", "3.Гендальф", "4. Наруто"],
        },
      ],
    },
    {
      id: 6,
      title: "ЦТ",
      subtitle: "",
      status: "disabled",
      questions: [
        {
          number: 1,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["1. Бром", "2. Хлор", "3.Цинк", "4. Кальций"],
        },
        {
          number: 2,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["1. Оксид", "2. Метал", "3.Моль", "4. Углеводород"],
        },
        {
          number: 3,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["1. CH4", "2. C2H5", "3.C2H8", "4. CuSO4"],
        },
        {
          number: 4,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["1. Натрий", "2. Хлор", "3.Водород", "4. Кальций"],
        },
        {
          number: 5,
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
          answers: ["1. Маями", "2. Амстер", "3.Гендальф", "4. Наруто"],
        },
      ],
    },
    {
      id: 7,
      title: "",
      subtitle: "Тесты по темам",
      status: "disabled",
      questions: [],
    },
    {
      id: 8,
      title: "",
      subtitle: "Контрольные работы",
      status: "disabled",
      questions: [],
    },
  ],
  message: "",
  error: "",
};

function subjectsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_CLASS_INFO_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case GET_CLASS_INFO_FAILURE:
      return {
        ...state,
        isRequesting: false,
        message: "Что-то пошло не так...",
        error: payload,
      };
    case GET_CLASS_INFO_SUCCESS:
      return {
        ...state,
      };
    case CHANGE_TEST_STATUS:
      return {
        ...state,
        chemistry: state.chemistry.map((item) => {
          return item.id === payload
            ? { ...item, status: "waiting" }
            : { ...item };
        }),
      };

    default:
      return state;
  }
}

export default subjectsReducer;
