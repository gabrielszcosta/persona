const bcrypt = require("bcryptjs");
const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const users = await connection("users").select("*");

    return res.json(users);
  },
  async create(req, res) {
    const data = req.body;
	
	const user = await connection('users').where('cpf', data.cpf).orWhere('email', data.email).select('id');
	
	if(user.length > 0) {
		return res.status(400).json({ msg: "CPF or email already in use" });
	}

    data.password = await bcrypt.hash(data.password, 8);

    await connection("users").insert({ ...data });

    return res.status(201).json({ msg: "Account has been created successfully" });
  }
};
