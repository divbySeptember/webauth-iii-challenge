const db = require("../config/knexConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findByDept
};

function find() {
  return db("users").select("id", "username", "password", "department");
}

function findBy(column) {
  return db("users").where(column);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function findByDept(dept) {
  return db("users").where({ department: dept });
}

async function add(user) {
  const [id] = await db("users").insert(user);

  return findById(id);
}
