import { Expose, Type } from 'class-transformer';
import UserResponseDataDto from './userResponseData.dto';

export class UserDto {
    @Expose({ name: 'alarmCount' })
    public readonly alarmCount: number = 0;

    @Expose({ name: 'userResponse' })
    @Type(() => UserResponseDataDto)
    public readonly user: UserResponseDataDto = new UserResponseDataDto();
}
