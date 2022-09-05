export const USERNAME_REGEX: RegExp = RegExp(
  '^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}'
);
export const EMAIL_REGEX: RegExp =
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const PASSWORD_REGEX: RegExp = RegExp('^[A-Za-z0-9]{8,}$');
export const FIRST_NAME_REGEX: RegExp = RegExp('^[a-zA-Z]+$');
export const LAST_NAME_REGEX: RegExp = RegExp('^[a-zA-Z]+$');
export const POSITION_REGEX: RegExp = RegExp('^[a-zA-Z]+$');
export const SECURITY_NUMBER_REGEX: RegExp = RegExp('^[0-9]{10}$');
