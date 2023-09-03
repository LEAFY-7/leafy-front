import { Expose } from 'class-transformer';
import type { AllowedRole } from 'components/organisms/routes/index.types';

export class AuthDto {
    @Expose({ name: 'token' })
    public readonly token: string = '';

    @Expose({ name: 'userAuth' })
    public readonly userAuth: AllowedRole = 'NORMAL';

    @Expose({ name: 'userId' })
    public readonly userId: number = 0;
}
