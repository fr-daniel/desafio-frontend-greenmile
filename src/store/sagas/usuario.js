import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { setUsuarioSuccess, setUsuarioFailure } from '../actions/usuario';

export function* setUsuario (action) {
  try {
    const { data: dataInfo } = yield call(api.get, `/users/${action.payload.userName}`);
    const { data: dataStarred } = yield call(api.get, `/users/${action.payload.userName}/starred`);

    yield put(setUsuarioSuccess(dataInfo, dataStarred));
  } catch (err) {
    yield put(setUsuarioFailure('Erro: Usuário não localizado'));
  }
}
