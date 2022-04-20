
   
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function(knex) {
    await knex('employees').del();
    await knex('employees').insert([
      { id: 1, manager_id: 2, 'first_name': 'Benjamin', 'last_name': 'Melz', email: 'bm@gmail.com', password: 'cs320' },
      { id: 2, manager_id: 3, 'first_name': 'Heath', 'last_name': 'Brames', email: 'hb@gmail.com', password: 'cs320'}
    ]);
  };
