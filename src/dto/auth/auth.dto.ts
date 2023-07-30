import { Expose } from 'class-transformer';

export class AuthDto {
    @Expose({ name: 'token' })
    public readonly token: string = '';

    @Expose({ name: 'userAuth' })
    public readonly userAuth: string = '';

    @Expose({ name: 'userId' })
    public readonly userId: number = 0;
}
