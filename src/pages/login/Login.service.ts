export class LoginService {

    constructor() { }

    loginRequest(form: { nome: string, senha: string }) {
        console.log(form)
    }
}