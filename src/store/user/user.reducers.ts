import {UserAction, UserState} from "./user.types";

//login eh a action;
export const login = (state: UserState, action: UserAction) => {
    //esse state eh um state copiado (rascunho) que o redux passa, do objeto original, para o estado rascunho global;
    state.data = action.payload;                        //nao esta mutando o estado, e sim essa copia do estado, que acessa o data pelo stado e insere dentro o que quer persistir;

}

const reducers = {login}

export default reducers;


