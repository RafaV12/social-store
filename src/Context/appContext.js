import React, {
  useContext, useReducer, useEffect,
} from 'react';
import axios from 'axios';
import reducer from './reducer';

const initialState = {
  user: undefined,
  isLoading: false,
  showAlert: false,
};

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = () => {
    dispatch({ type: 'SET_LOADING' });
  };

  const fetchLoggedUser = async () => {
    setLoading();
    const user = JSON.parse(localStorage.getItem('user'));
    try {
      const { data } = await axios.get('http://localhost:3001/dashboard', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      dispatch({ type: 'FETCH_LOGGED_USER_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_LOGGED_USER_ERROR' });
      localStorage.removeItem('token');
    }
  };

  const register = async (userInput) => {
    setLoading();
    try {
      const { data } = await axios.post('http://localhost:3001/register', {
        ...userInput,
      });
      dispatch({ type: 'REGISTER_USER_SUCCESS', payload: data });
      localStorage.setItem(
        'user',
        JSON.stringify({
          username: data.username,
          token: data.token,
          userId: data.id,
        }),
      );
    } catch (error) {
      dispatch({ type: 'REGISTER_USER_ERROR' });
    }
  };

  const login = async (userInput) => {
    setLoading();
    try {
      const { data } = await axios.post('http://localhost:3001/login', {
        ...userInput,
      });
      dispatch({ type: 'LOGIN_USER_SUCCESS', payload: data.user });
      localStorage.setItem(
        'user',
        JSON.stringify({
          username: data.user.username,
          token: data.token,
          userId: data.id,
        }),
      );
    } catch (error) {
      dispatch({ type: 'LOGIN_USER_ERROR' });
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    window.location.reload(false);
    dispatch({ type: 'LOGOUT_USER' });
  };

  // Persist user session
  const setUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      return dispatch({ type: 'SET_USER_SUCCESS', payload: user });
    }
    return null;
  };

  useEffect(() => {
    setUser();
  }, []);

  return (
    // Some of these functions might need useMemo, check for it later!
    <AppContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        ...state,
        setLoading,
        register,
        login,
        logout,
        fetchLoggedUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => useContext(AppContext);

export { AppProvider };
