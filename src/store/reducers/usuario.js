const INITIAL_STATE = {
  loading: false,
  hasUser: false,
  info: {},
  starred: [],
  error: null,
};

export default function usuario (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_USUARIO_REQUEST':
      return { ...state, loading: true, hasUser: false, }
    case 'SET_USUARIO_SUCCESS':
      return { ...state, info: action.payload.info, hasUser: true, error: null, starred: action.payload.starred, loading: false }
    case 'SET_USUARIO_FAILURE':
      return { ...state, loading: false, hasUser: false, error: action.payload.error }
    default:
      return state;
  }
}
