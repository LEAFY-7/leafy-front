import dayjs from 'dayjs';

export function YMDHM(dateString) {
    const date = dayjs(dateString);
    const year = date.year();
    const month = date.month() + 1;
    const day = date.date();
    const hours = date.hour();
    const minutes = date.minute();

    return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
}

export function HM(dateString) {
    const date = dayjs(dateString);
    const hours = date.hour();
    const minutes = date.minute();

    return `${hours} : ${minutes}`;
}

export function AMPMHM(dateString) {
    const date = dayjs(dateString);
    let hours = date.hour();
    const minutes = date.minute();
    let period = '오전';

    if (hours >= 12) {
        period = '오후';
        if (hours > 12) {
            hours -= 12;
        }
    }

    return `${period} ${hours}시 ${minutes}분`;
}

export default { YMDHM, HM, AMPMHM };
