declare global {
    interface Window {
        daum: any;
    }
}

export default class DaumModule {
    private static instance: DaumModule;

    private constructor() {}

    public static getInstance(): DaumModule {
        return this.instance || (this.instance = new this());
    }

    public openPostcode(oncomplete: (data) => void) {
        new window.daum.Postcode({
            oncomplete: oncomplete,
        }).open();
    }

    public handlePostCode = () => {
        this.openPostcode(this.handleOnComplete);
    };

    private handleOnComplete = (data) => {
        const { zonecode, address, jibunAddress, roadAddress } = data;
        return {
            zoneCode: zonecode,
            address,
            jibunAddress,
            roadAddress,
        };
    };
}
