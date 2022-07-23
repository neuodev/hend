const { lookup } = require("geoip-lite");
const { sendEmail } = require("../email");
const fs = require("fs");

const template = fs.readFileSync("./email.html").toString();
module.exports.emailMiddleware = (req, res, next) => {
  if (req.method === "GET" && req.url === "/") {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const location = lookup(ip);
    const html = template
      .replace("$country", location?.country || "--")
      .replace("$city", location?.city || "--")
      .replace("$region", location?.region || "--")
      .replace("$timezone", location?.timezone || "--");

    sendEmail({
      from: process.env.USER_EMAIL,
      to: process.env.TO_EMAIL,
      subject: "Someone is checking your website!",
      html,
    });
  }

  next();
};
