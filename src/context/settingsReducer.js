export const initialState = {
  darkMode: JSON.parse(localStorage.getItem("darkMode")) ?? false,
  gridView: JSON.parse(localStorage.getItem("gridView")) ?? true,
};

export default function settingsReducer(state, action) {
  switch (action.type) {

    case "TOGGLE_DARK_MODE": {
      const newValue = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(newValue));
      return { ...state, darkMode: newValue };
    }

    case "TOGGLE_GRID_VIEW": {
      const newValue = !state.gridView;
      localStorage.setItem("gridView", JSON.stringify(newValue));
      return { ...state, gridView: newValue };
    }

    case "SET_GRID_VIEW": {
      localStorage.setItem("gridView", JSON.stringify(action.payload));
      return { ...state, gridView: action.payload };
    }

    default:
      return state;
  }
}
