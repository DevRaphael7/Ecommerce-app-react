import Crypto from 'crypto-js';
import Base64 from 'crypto-js/enc-base64';

export class CryptoService {

    toBase64 = (value: any) => {
        return btoa(JSON.stringify(value))
    }
}