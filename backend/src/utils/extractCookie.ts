import { Request } from "express";

const extractTokenFromCookie = (req: Request): string | null => {
  const cookie = req.cookies.token;

  if (!cookie) {
    return null;
  }

  const tokenMatch = cookie.match(/token=([^;]+)/);
  return tokenMatch ? tokenMatch[1] : null;
};

export default extractTokenFromCookie;
