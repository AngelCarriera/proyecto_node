
exports.up = function(knex) {
    return knex.schema.createTable('movies', table =>{
        table.increments();
        table.string('name').notNullable().unique();
        table.string('sinopsis');
        table.integer('raiting').notNullable();
        table.string('cove_image').notNullable().defaultTo('https://www.elespectador.com/sites/default/files/losfierros_poster.jpg')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('movies');
};
