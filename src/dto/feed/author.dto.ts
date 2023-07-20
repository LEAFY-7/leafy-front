import { Expose } from 'class-transformer';

export class AuthorDto {
    @Expose({ name: 'id' })
    public readonly id: number = 0;

    @Expose({ name: 'profile' })
    public readonly profile: string = '';

    @Expose({ name: 'displayName' })
    public readonly displayName: string = '';
}
