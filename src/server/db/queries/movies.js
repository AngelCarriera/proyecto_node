const knex = require('../connection');

const getAllMovies = () => {
    return knex('movies').select('*')
}

const getMovie = id => {
    return knex('movies').select('*').where({ id: parseInt(id) });
}

const newMovie = movie => {
    return knex('movies').insert(movie).returning('*');
}

const udapteMovie = (id, movie) => {
    return knex('movies')
        .update(movie)
        .where({ id: parseInt(id) })
        .returning('*');
}

const deleteMovie = id => {
    return knex('movies')
    .del()
    .where({ id: parseInt(id) })
    .returning('*')
}

module.exports = {
    getAllMovies,
    getMovie,
    newMovie,
    udapteMovie,
    deleteMovie
}