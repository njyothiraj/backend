
   
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function(knex) {
  await knex('pto').del();
  //await knex('training').del();

  // await knex('company').insert([
  //   //INSERT into company values(1, 'UKG');
  //   //INSERT into company values(2, 'InboxInventors');
  // ]);
  await knex('employees').del();
  await knex('employees').insert([
    { id: 1, manager_id: 2, 'first_name': 'Benjamin', 'last_name': 'Melz', company_id: 1, email: 'bm@gmail.com', password: 'cs320' },
    { id: 2, manager_id: 3, 'first_name': 'Heath', 'last_name': 'Brames', company_id: 1, email: 'hb@gmail.com', password: 'cs320'},
    { id: 3, manager_id: 4, 'first_name': 'Heath', 'last_name': 'Brames', company_id: 2, email: 'hb@gmail.com', password: 'cs320'}
  
  ]);
  // await knex('training').insert([
  //   //INSERT into pto values(1, 1, 3, 'somelink.com', 'training for something', '2000-12-01', '2000-12-14', 1);
  // ]);
  // await knex('pto').insert([
  //   //INSERT into pto values(1, 1, 3, 'vacation', 'going to Cancun', '2000-12-01', '2000-12-14', 1);
  //   { id: 1, emp_id: 1, manager_id: 3, 'type': 'vacation', 'additional_info': 'going to Cancun', start_date: '2000-12-01', end_date: '2000-12-14', 1},
  //   { id: 2, emp_id: 2, manager_id: 4, 'type': 'medical', 'additional_info': 'doctors appt', start_date: '2000-01-04', end_date: '2000-01-06', 2}
  // ]);
};