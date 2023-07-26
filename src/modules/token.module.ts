enum ErrorMessage {
    SAVE = '로컬 스토리지에 저장하는 도중 에러가 발생했습니다.',
    GET = '로컬 스토리지에서 가져오는 도중 에러가 발생했습니다.',
    REMOVE = '로컬 스토리지에서 삭제하는 도중 에러가 발생했습니다.',
}

export default class TokenModule {
    private static instance: TokenModule;
    private storageKey: string;
    private saveErrorMessage: string;
    private getErrorMessage: string;
    private removeErrorMessage: string;

    constructor(storageKey: string) {
        this.storageKey = storageKey;
        this.saveErrorMessage = ErrorMessage.SAVE;
        this.getErrorMessage = ErrorMessage.GET;
        this.removeErrorMessage = ErrorMessage.REMOVE;
    }

    private static instancesMap: Map<string, TokenModule> = new Map();

    public static getInstance(storageKey: string): TokenModule {
        if (this.instancesMap.has(storageKey)) {
            return this.instancesMap.get(storageKey)!;
        } else {
            const newInstance = new this(storageKey);
            this.instancesMap.set(storageKey, newInstance);
            return newInstance;
        }
    }

    public saveToken = (token) => {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(token));
            return true;
        } catch (error) {
            this.handleError(this.saveErrorMessage, error);
            throw error;
        }
    };

    public getToken = () => {
        try {
            const tokenString = localStorage.getItem(this.storageKey);
            return JSON.parse(tokenString);
        } catch (error) {
            this.handleError(this.getErrorMessage, error);
            throw error;
        }
    };

    public removeToken() {
        try {
            localStorage.removeItem(this.storageKey);
            return true;
        } catch (error) {
            this.handleError(this.removeErrorMessage, error);
            throw error;
        }
    }

    private handleError = (message, error) => {
        console.error(message, error);
    };
}
