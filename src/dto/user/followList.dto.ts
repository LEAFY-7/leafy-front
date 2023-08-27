import { Type } from 'class-transformer';
import FollowDto from './follow.dto';

export default class FollowListDto {
    public readonly totalPages: number = 0;

    public readonly totalElements: number = 0;

    public readonly first: boolean = false;

    public readonly last: boolean = false;

    @Type(() => FollowDto)
    public readonly content: FollowDto[] = [];
}
