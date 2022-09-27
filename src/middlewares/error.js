const error = (err, _req, res, _next) => {
  if (err.type) {
    console.log('error middleware', err);
    return res.status(err.type).json(err.message);  
  }

  return res.status(500).json(err.message);
};

module.exports = error;