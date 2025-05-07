const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SADIYA-MD=vd8EjIIb#CdLPf9sd4r5o45uINrBy_NDsUB2l8Jt85uCDNXiQgh0", //Put Session-id Here
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME || "ChethminaKavishan", //Put Your Gitub Username
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || "QYUJOfdo5SZMf98Uq4xRS1B6OVYoVM3Jothf", //Put Your Github Auth Token
DATABASE_REPO_NAME: process.env.DATABASE_REPO_NAME || "SADIYA-MD-DATABASE", //Bot Database Repo Name
SESSION_NAME: process.env.SESSION_NAME || "session"
};
