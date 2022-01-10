import {SetErrorAction, SetSettingsAction, UserAction, UserState} from "./user.types";

//login eh a action;
const login = (state: UserState, action: UserAction) => {}

const setData = (state: UserState, action: UserAction) => {
    //esse state eh um state copiado (rascunho) que o redux passa do objeto original, para o estado rascunho global;
    state.data = { ...state.data, ...action.payload }    //nao esta mutando o estado, e sim essa copia do estado, que acessa o data pelo stado e insere dentro o que quer persistir;
}

const setError = (state: UserState, action: SetErrorAction) => {
    state.error = action.payload
}

const setSettings = (state: UserState, action: SetSettingsAction) => {
    state.settings = action.payload
}

const reducers = { login, setData, setError, setSettings }

export default reducers


 
 