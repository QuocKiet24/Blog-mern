import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.cookie("token", token, {
    httpOnly: true, // XSS
    secure: "none",
    sameSite: "none", //csrf
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  return token;
};

export default generateTokenAndSetCookie;
