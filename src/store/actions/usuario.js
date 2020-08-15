export const setUsuarioRequest = (userName) => ({
  type: 'SET_USUARIO_REQUEST',
  payload: { userName }
});


export const setUsuarioSuccess = (info, starred) => ({
  type: 'SET_USUARIO_SUCCESS',
  payload: { info, starred }
});

export const setUsuarioFailure = (error) => ({
  type: 'SET_USUARIO_FAILURE',
  payload: { error }
});
