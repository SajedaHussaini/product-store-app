export const initialState = {
  darkMode: JSON.parse(localStorage.getItem('darkMode')) ?? false,
  gridView: JSON.parse(localStorage.getItem('gridView')) ?? true,
};

export default function settingsReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      localStorage.setItem('darkMode', JSON.stringify(!state.darkMode));
      return { ...state, darkMode: !state.darkMode };

    case "TOGGLE_GRID_VIEW":
      localStorage.setItem('gridView', JSON.stringify(!state.gridView));
      return { ...state, gridView: !state.gridView };

    default:
      return state;
  }
}
