import SHA256 from "crypto-js/sha256";

export const hashPassword = (password: string, salt: string): string => {
  const firstHash = SHA256(password).toString().toUpperCase();
  const finalHash = SHA256(firstHash + salt).toString().toUpperCase();
  return finalHash;
};
