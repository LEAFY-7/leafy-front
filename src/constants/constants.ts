export const ServerType = {
    API: process.env.REACT_APP_BASE_URL,
    CHAT: process.env.REACT_APP_CHAT_URL,
} as const;
export type ServerType = (typeof ServerType)[keyof typeof ServerType];

/**
 * 임시 접근 URL
 * 회의때 환경변수로 바꿀 예정
 */

export const OauthType = {
    GOOGLE: `http://www.leafyer.com:8080/oauth2/authorization/google`,
    KAKAO: `http://www.leafyer.com:8080/oauth2/authorization/kakao`,
};

/**
 * 페이지네이션 갯수
 */
export const PageNationCount = {
    NOTICE: 10
} as const;
export type PageNationCount = (typeof PageNationCount)[keyof typeof PageNationCount];
