const reducer = (state, action) => {
  if (action.type === 'SET_LOADING') {
    return { ...state, isLoading: true, showAlert: false };
  }

  if (action.type === 'SET_USER_SUCCESS') {
    return { ...state, user: action.payload, showAlert: false };
  }

  if (action.type === 'SET_USER_SUCCESS') {
    return { ...state, user: null, showAlert: false };
  }

  if (action.type === 'FETCH_LOGGED_USER_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      showAlert: false,
      user: action.payload,
    };
  }

  if (action.type === 'FETCH_LOGGED_USER_ERROR') {
    return {
      ...state,
      isLoading: false,
      user: null,
      showAlert: true,
    };
  }

  if (action.type === 'REGISTER_USER_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      showAlert: false,
      user: action.payload,
    };
  }

  if (action.type === 'REGISTER_USER_ERROR') {
    return {
      ...state,
      isLoading: false,
      user: null,
      showAlert: true,
    };
  }

  if (action.type === 'LOGIN_USER_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      showAlert: false,
      user: action.payload,
    };
  }

  if (action.type === 'LOGIN_USER_ERROR') {
    return {
      ...state,
      isLoading: false,
      user: null,
      showAlert: true,
    };
  }

  if (action.type === 'LOGOUT_USER') {
    return {
      ...state,
      user: undefined,
      isLoading: false,
      showAlert: false,
    };
  }

  throw new Error(`no such action : ${action}`);
};

export default reducer;
