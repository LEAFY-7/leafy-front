import { Expose } from 'class-transformer';

export class UserDto {
    @Expose({ name: 'id' })
    public readonly id: number = 0;

    @Expose({ name: 'name' })
    public readonly name: string = '';

    @Expose({ name: 'status' })
    public readonly status: 'admin' | 'member' | 'normal' = 'admin'; // 나중에 normal로 수정
}
