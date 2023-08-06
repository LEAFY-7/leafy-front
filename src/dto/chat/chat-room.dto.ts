import { Expose } from 'class-transformer';

export class ChatDto {
    @Expose({ name: 'host' })
    public readonly host: number = 0;

    @Expose({ name: 'hostNickName' })
    public readonly hostNickName: string = '';

    @Expose({ name: 'message' })
    public readonly message: string = '';

    @Expose({ name: 'createdAt' })
    public readonly createdAt: number = 0;

    @Expose({ name: 'updatedAt' })
    public readonly updatedAt: number = 0;
}
