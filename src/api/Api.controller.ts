import axios from "axios";
import { RejectResponse } from "../models/ResponseHttp.models";

export abstract class ApiController {

    private static BASE_URL: string  = "http://localhost/php/login_api/api/"

    get(endpoint: string) {
        return new Promise((resolve, reject) => {
            axios.get(
                ApiController.BASE_URL +
                endpoint
            ).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    }

    post(endpoint: string, body: any, header: any) {
        return new Promise((resolve, reject) => {
            axios.post(
                ApiController.BASE_URL +
                endpoint, 
                body, 
                { 
                    headers: header 
                }
            ).then(response => {
                resolve(response.data)
            }).catch( (error) => {
                reject(error.response)
            })
        })
    }

}