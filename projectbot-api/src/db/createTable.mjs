const createTable = (tableName, knex, fn) => {
  return knex.schema.createTable(tableName, (table) => {
    table.increments("id")
    fn(table)
    table.datetime("created_at").notNullable().defaultTo(knex.fn.now())
    table.datetime("updated_at").notNullable().defaultTo(knex.fn.now())
  })
}

export default createTable
