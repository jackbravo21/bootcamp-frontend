import React, {useCallback, useEffect, useState} from "react";
import InputText from "../../../components/inputs/input-text/input-text-component";
import Button from "../../../components/buttons/button.component";
import * as yup from 'yup';
import {ErrorMessage} from "./form.types";
import {ErrorDescription} from "./form.styled";
import {userActions} from "../../../../store/user/user.slice";
import {useDispatch, useSelector} from "react-redux";
import { isAuthenticated } from "../../../../store/user/user.selectors";
import { useLocation, useNavigate } from "react-router-dom";
import {HomePath} from "../../../home/home.types";

const errorInitial = ''

export default function Form() {
    const [data, setData] = useState({ email: '', password: '' })
    const [error, setError] = useState(errorInitial)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const isUserAuthenticated = useSelector(isAuthenticated);

    useEffect(
        () => {
            if(isUserAuthenticated)
            {
                const to = location.state?.from?.pathname || HomePath 
                navigate(to)
            }

        },
    [isUserAuthenticated])

    const resetError = useCallback(
        () => setError(errorInitial),
        []
    )

    const handleChange = useCallback(
        (event: any) => setData(prevState => ({
            //copio todos os dados do state com spreedOperator;
            ...prevState,
            [event.target.name]: event.target.value,
            //agora ele estara retornando nosso objeto, com o original e as copias, devido o spreed;

        })),
        [setData]
    )

    //hook callback;
    const validation = useCallback(
        //definindo funcao como asyncrona, permite que promessas sejam resolvidas, impede o codigo de continuar antes de resolver;
        async () => {
            const schema = yup.object().shape({
                email: yup.string().required(ErrorMessage.Required).email(ErrorMessage.EmailBadFormat),
                password: yup.string().required(ErrorMessage.Required),
            })

            try {
                await schema.validate(data)
                resetError()

                return true
            } catch (error) {
                // @ts-ignore
                setError(error.errors[0])

                return false
            }

        },
        [data, setError]
    )

    const onSubmit = useCallback(
        async () => {
            if(await validation()) {
                dispatch(userActions.login(data))
            }
        },
        [validation, data]
    )

    return (
        <>
            <InputText type='text' placeholder={'E-mail'} name={'email'} onChange={handleChange}/>
            <InputText type={'password'} placeholder={'Senha'} name={'password'} onChange={handleChange}/>
            <ErrorDescription>{error}</ErrorDescription>
            <Button primary onClick={onSubmit}>Entrar</Button>
        </>
    )
}