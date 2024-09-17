const { User } = require('../db/index');
const bcrypt = require('bcrypt');

async function userMiddleware(req, res, next) {
 
  try {
    const { username, password } = req.headers;

    const user = await User.findOne({ username });

    if (!user) return res.status(401).json({ message: 'Unauthorized' });
    else {
      const passwordValidates = bcrypt.compare(password, user.password);

      if (passwordValidates) next();
      else return res.status(401).json({ message: 'Unauthorized' });
    }
  } catch (e) {
    res.status(401).send();
  }
}

module.exports = userMiddleware;
