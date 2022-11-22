export interface Data {
    message: string;
}

export interface Transitional {
    silentJSONParsing: boolean;
    forcedJSONParsing: boolean;
    clarifyTimeoutError: boolean;
}

export interface Config {
    transitional: Transitional;
    transformRequest: any[];
    transformResponse: any[];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    method: string;
    url: string;
    data: string;
}

export interface RejectResponse {
    data: Data;
    status: number;
    statusText: string;
    headers: Headers;
    config: Config;
}