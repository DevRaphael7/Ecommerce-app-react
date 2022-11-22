import { RejectResponse } from './../../models/ResponseHttp.models';
import { ApiController } from "../../api/Api.controller";

export class LoginService extends ApiController {

    constructor() { 
        super()
    }

    loginRequest(form: { nome: string, senha: string }) {
        return this.post('login', { }, { })
    }
}