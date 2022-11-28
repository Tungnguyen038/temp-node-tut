const os = require('os')
const user = os.userInfo()
console.log(user);
console.log(`The system Uptime is ${os.uptime()} seconds`);
