const { create } = require("./book.service");
const {genSaltSync} = require('bcrypt');
module.exports = {
  createBook: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    create(body, (error, results) => {
      if (error) {
        return res.status(500).json({
          success: 0,
          message: "Database connection Error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
};
