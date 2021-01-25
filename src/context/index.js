import React, { useState } from "react";

const initialState = {
  alert: {
    message: "",
    severity: "",
    show: false,
  },
};

export const StateContext = React.createContext({
  state: initialState,
  actions: { setAlert: () => {} },
});

const setAlert = (state, setState, alert) => {
  setState({ alert });
};

export const Context = ({ children }) => {
  const [state, _setState] = useState(initialState);

  const setState = (_state) => {
    _setState((state) => {
      return {
        ...state,
        ..._state,
      };
    });
  };

  const actions = {
    setAlert: setAlert.bind(null, state, setState),
  };

  return (
    <StateContext.Provider value={{ state, actions }}>
      {children}
    </StateContext.Provider>
  );
};
