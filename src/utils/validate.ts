/**
 * @description 한글 정규 표현식 - 한글만 가능 최소 2자리 최대 16자리
 * @description 이메일 정규 표현식 - 이메일 형식 최소 7자리
 * @description 비밀번호 정규 표현식 - 대문자, 소문자, 특수문자, 숫자 포함 최소 6자리 최대 16자리
 */
export const krRule = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,16}/; // 한글 정규 표현식

export const emailRule =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //이메일 정규 표현식

export const passwordRule =
  /^.*(?=^.{6,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/; // 비밀번호 정규 표현식
