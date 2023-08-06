import { MouseEventHandler, ReactElement } from "react";


interface Props {
    length: number;
    limit: number;
}

//페이지네이션 계산해주기..?
export const handlePageList = ({ length, limit }: Props) => {
    const perPageList = Math.ceil(length / limit);
}