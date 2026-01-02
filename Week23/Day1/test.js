import jwt from "jsonwebtoken";

/**
 * payload
 * token secret code
 * {expire time}
 */
/**
('2 days')  // 172800000
('1d')   // 86400000
('10h')  // 36000000
('2.5 hrs') // 9000000
('2h')      // 7200000
('1m')      // 60000
('5s')      // 5000
('1y')      // 31557600000
('-3 days') // -259200000
('-1h')     // -3600000
*/
const token = jwt.sign({ userid: 123, email: "john@gamil.com" }, "123456", {
  expiresIn: "60s",
});

// console.log(token);

const oldToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEyMywiZW1haWwiOiJqb2huQGdhbWlsLmNvbSIsImlhdCI6MTc2NjkzOTA2MSwiZXhwIjoxNzY2OTM5MTIxfQ.0VjBbR-agIq4frSYy1QyxcOdq9ALMY9prEtdPXMitJU";

jwt.verify(token, "12345", (err, decoded) => {
  if (err) {
    console.log('error=>', err.message);
    return;
  }
  console.log("decoded=>", decoded);
});
