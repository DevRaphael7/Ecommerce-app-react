import { RejectResponse } from './../../models/ResponseHttp.models';
import { ApiController } from "../../api/Api.controller";
import { CryptoService } from '../../services/Crypto.service';

export class LoginService extends ApiController {

    private cryptoService: CryptoService;

    constructor() { 
        super()
        this.cryptoService = new CryptoService();
    }

    loginRequest(form: { login: string, senha: string }) {
        const base64Data = this.cryptoService.toBase64(form);

        return this.post('login', { }, { 
            'Authorization': 'Bearer ' + base64Data
        })
    }
}