exports.up = function(knex) {
  return knex.schema.createTable("users", function(table) {
    table.increments();
    table.string("name").notNullable();
    table.string("email").notNullable();
	table.string("cpf").notNullable();
    table.string("password").notNullable();
    table.string("phone").notNullable();
    table.string("zip").notNullable();
    table.string("street").notNullable();
    table.integer("number").notNullable();
    table.string("neighborhood").notNullable();
    table.string("complement");
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
