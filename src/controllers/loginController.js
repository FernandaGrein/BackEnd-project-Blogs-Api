const loginService = require('../services/loginServices');

const loginUser = async (req, res) => {
  const loginBody = req.body;

  const logon = await loginService.validadeLogin(loginBody); 

  if (logon.type) {
    return res.status(logon.type).json({ message: logon.message });
  }
  return res.status(200).json({ token: logon.message });
};

module.exports = {
  loginUser,   
};