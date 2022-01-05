import { put, takeEvery, all } from "redux-saga/effects";
import { userActions } from "./user.slice";

//* identifica ela como funcao generator, que eh uma funcao asyncrona e interavel, toda a funcao retorna um dado e termina, na generator ela pode gerar varios tipos de dados;
export function* login(props: any)
{
    yield put(userActions.setData(props.payload));
}

function* watchLogin()
{
    yield takeEvery("user/login", login);           //takeEvery = pega todas as funcoes 
}

export default function* userSaga()
{
     yield all([
         watchLogin(),
     ])
}