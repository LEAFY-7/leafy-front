import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { plainToInstance } from 'class-transformer';
import { serialize } from 'object-to-formdata';
const isServer = typeof window === 'undefined';

export class ApiModule {
    private static instance: ApiModule;
    private isFile: boolean = false;
    private axios: AxiosInstance;
    private tokenType: string = 'Bearer';
    private token: string = '';
    private commonHeader;
    private baseUrl = process.env.REACT_APP_BASE_URL;
    private constructor(props?) {
        this.commonHeader = {
            'Content-Type': 'application/json',
        };
    }

    private setToken(): void {
        this.token = isServer ? '' : `${this.tokenType} ${window.localStorage.getItem('token')}`;
        this.commonHeader.Authorization = this.token;
    }

    private setAxiosInstance(forKakao?: boolean) {
        this.setToken();
        this.axios = axios.create({
            baseURL: forKakao ? process.env.REACT_APP_KAKAO_URL : this.baseUrl,
            headers: this.commonHeader,
            responseType: 'json',
        });
    }

    public static getInstance(): ApiModule {
        return this.instance || (this.instance = new this());
    }

    async get<T>(url: string, params?: T) {
        const isForKakao = url.includes('/kakao');
        const apiPath = isForKakao ? url.split('/kakao')[1] : url;

        this.commonHeader['Content-Type'] = 'application/json';
        this.setAxiosInstance(isForKakao);
        return await this.axios
            .get(apiPath, {
                params: params,
            })
            .then(this.handleSuccess)
            .catch(this.handleError);
    }

    async post<T>(url: string, params?: T, config?: AxiosRequestConfig) {
        let data;
        data = params;

        // 대상이 파일이라면 콘텐츠타입을 변경해주는 로직
        if (this.isFileParams(params)) {
            data = serialize(params);
        } else {
            this.commonHeader['Content-Type'] = 'application/json';
        }

        this.setAxiosInstance();
        return await this.axios.post(url, data, config).then(this.handleSuccess).catch(this.handleError);
    }

    async put<T>(url: string, params?: T) {
        this.commonHeader['Content-Type'] = 'application/json';
        this.setAxiosInstance();
        return await this.axios.put(url, params).then(this.handleSuccess).catch(this.handleError);
    }

    async patch<T>(url: string, params?: T) {
        this.commonHeader['Content-Type'] = 'application/json';
        this.setAxiosInstance();
        return await this.axios.patch(url, params).then(this.handleSuccess).catch(this.handleError);
    }

    async delete(url: string) {
        this.commonHeader['Content-Type'] = 'application/json';
        this.setAxiosInstance();
        return await this.axios.delete(url).then(this.handleSuccess).catch(this.handleError);
    }

    isFileParams(params): boolean {
        // params가 단순 변수일때 파일인지 구분해서 true 리턴
        if (params instanceof File) {
            return true;
        }

        // params가 배열일때
        if (Array.isArray(params)) {
            // 배열 내 file이 존재하면 true 리턴
            for (let i = 0; i < params.length; i++) {
                if (this.isFileParams(params[i])) {
                    return true;
                }
                // 배열 내 배열 또는 객체 존재하는지 확인
                if (Array.isArray(params[i]) || typeof params[i] === 'object') {
                    const keys = Object.keys(params[i]);
                    // 배열 내 배열 또는 객체 하나씩 재확인 file이라면 true 리턴
                    for (let j = 0; j < keys.length; j++) {
                        if (this.isFileParams(params[i][keys[j]])) {
                            return true;
                        }
                    }
                }
            }
            // params가 객체일때
        } else if (typeof params === 'object' && params !== null) {
            // 객체 내 file이 존재하면 true 리턴
            const keys = Object.keys(params);
            for (let i = 0; i < keys.length; i++) {
                if (this.isFileParams(params[keys[i]])) {
                    return true;
                }
                // 객체 내 배열 또는 객체가 존재하는지 확인
                if (Array.isArray(params[keys[i]]) || typeof params[keys[i]] === 'object') {
                    if (!params[keys[i]]) {
                        continue;
                    }
                    const subKeys = Object.keys(params[keys[i]]);
                    // 객체 내 배열 또는 객체 하나씩 재확인 file이라면 true 리턴
                    for (let j = 0; j < subKeys.length; j++) {
                        if (this.isFileParams(params[keys[i]][subKeys[j]])) {
                            return true;
                        }
                    }
                }
            }
        }

        //모든 조건에 실패하면 false 리턴
        return false;
    }

    private handleSuccess = <T>(response: AxiosResponse<T>): AxiosResponse<T> => {
        return response;
    };

    private handleError = (error): AxiosError => {
        const { data } = error.response;
        const errorDto = plainToInstance(AxiosError, data);

        throw errorDto;
        throw '';
    };
}
