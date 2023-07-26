class TokenModule {
    public save(token: string, userAuth: string) {
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('userAuth', userAuth);
    }

    public get() {
        return {
            token: window.localStorage.getItem('token'),
            userAuth: window.localStorage.getItem('userAuth'),
        };
    }

    public destroy() {}
}

export default new TokenModule();
