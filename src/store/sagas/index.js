import { all, takeLatest } from 'redux-saga/effects';

import { setUsuario } from './usuario';

export default function* rootSaga () {
  yield all([
    takeLatest('SET_USUARIO_REQUEST', setUsuario),
  ]);
}
