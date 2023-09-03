import { Expose } from 'class-transformer';
import SearchDto from './search.dto';

export default class SearchListDto {
    @Expose({ name: 'body' })
    public readonly data: SearchDto[] = [];

    @Expose({ name: 'totalPage' })
    public readonly totalPage: 0;

    @Expose({ name: 'first' })
    public readonly first: true;

    @Expose({ name: 'last' })
    public readonly last: true;
}
