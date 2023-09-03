export const ServerType = {
    API: process.env.REACT_APP_BASE_URL,
    CHAT: process.env.REACT_APP_CHAT_URL,
} as const;
export type ServerType = (typeof ServerType)[keyof typeof ServerType];
