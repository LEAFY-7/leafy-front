export const krRule = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,16}/;

export const emailRule =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //이메일 정규식

export const passwordRule =
  /^.*(?=^.{6,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
