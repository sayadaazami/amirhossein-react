export const data = JSON.parse(localStorage.getItem("data") || "[]");

export function dataReducer(state, action) {
  switch (action.type) {
    case "ADD":
      localStorage.setItem("data", JSON.stringify([...state, action.data]));
      return [...state, action.data];
    case "REMOVE":
      localStorage.setItem(
        "data",
        JSON.stringify(state.filter((item) => item !== action.id))
      );
      return state.filter((item) => item !== action.id);
    default:
      return state;
  }
}
