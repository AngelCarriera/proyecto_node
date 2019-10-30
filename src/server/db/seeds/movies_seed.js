
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
        id: 1,
        name: 'Harry potter',
        sinopsis: '', 
        raiting: 5 ,
        cove_image:'https://image.tmdb.org/t/p//w780//6sASqcdrEHXxUhA3nFpjrRecPD2.jpg',
      },
      {
        id: 2,
        name: 'Hombre araña',
        sinopsis: '', 
        raiting: 9 ,
        cove_image:'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_.jpg',
      },
      {
        id: 3,
        name: 'Pokemon',
        sinopsis: '', 
        raiting: 7 ,
        cove_image:'https://mvpo.us/img/P805.jpg',
      }
        
      ]);
    });
};
