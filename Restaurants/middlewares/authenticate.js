/*eslint no-constant-condition: "off"*/
const authenticate = (req, res, next) => {
  if (false) { // test à remplacer par la vérification d'un token
    res.statusCode = 401;
    return res.json({
      msg: 'Unauthorized',
    });
  }

  next();
};

module.exports = authenticate;
