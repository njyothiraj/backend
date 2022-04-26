
   
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function(knex) {
    await knex('company').del();
    await knex('company').insert([
      { id: 1, 'company_name':'UKG'},
      { id: 2, 'company_name':'InboxInventors'}
      ]);
    await knex('employees').del();
    await knex('employees').insert([
      { id: 1, company_id: 1, manager_id: 2, 'first_name': 'Benjamin', 'last_name': 'Melz', email: 'bm@gmail.com', password: 'cs320' },
      { id: 2, company_id: 2, manager_id: 3, 'first_name': 'Heath', 'last_name': 'Brames', email: 'hb@gmail.com', password: 'cs320'}
    ]);
    await knex('pto').del();
    await knex('pto').insert([
      { id: 1, emp_id:1, manager_id: 2, 'type': 'pto', 'additional_info': 'yes', start_date: '2000-08-30', end_date: '2000-08-31', approved: 1},
    ]);
    await knex('performance').del();
    await knex('performance').insert([
      { id: 1, from_employee:1, to_employee: 2, 'comments': 'good job', growth: 10, kindness: 10, delivery: 10},
    ]);
    await knex('training').del();
    await knex('training').insert([
      { id: 1, manager_id:1, emp_id: 2, 'training_link':'link', 'additional_info':'none', start_date:'2000-08-30', end_date: '2000-08-31', completed: 1},
    ]);
    
  };
