const { Admin } = require("../db/index");
const bcrypt = require("bcrypt");

async function adminMiddleware(req, res, next) {
   
    try {
        const { username, password } = req.headers;

        const admin = await Admin.findOne({ username });

        if (!admin) return res.status(401).json({ message: 'Unauthorized' });
        else {
          const passwordValidates = bcrypt.compare(
            password,
            admin.password
          );

          if (passwordValidates) next();
          else return res.status(401).json({ message: 'Unauthorized' });
        }

    }catch (e) {
        res.status(401).send();
    }

}

module.exports = adminMiddleware;