const Router = require('koa-router');
const queries = require('../server/db/queries/movies');
const router = new Router();

router.get('/movies', async ctx => {
    try {
        const movies = await queries.getAllMovies();
        ctx.body = {
            status: 'success',
            data: movies
        }
    } catch (error) {
        ctx.status = 404;
        ctx.body = {
            status: 'not found',
            error
        }
    }
})

router.get('/movies/:id', async ctx => {
    ctx.type = 'application/json';

    try {
        const movie = await queries.getMovie(ctx.params.id)
        if (!movie.length) {
            ctx.status = 404;
            ctx.body = {
                status: 'Error',
                message: 'La pelicula no existe'
            }
            return
        }
        ctx.status = 200;
        ctx.body = {
            status: 'success',
            data: movie
        }
    } catch (error) {
        ctx.status = 404;
        ctx.body = {
            status: 'Error',
            message: 'La pelicula no fue encontrada'
        }
    }
})


router.post('/', async ctx => {
    ctx.type = 'application/json';
    ctx.state = 201;
    ctx.body = {
        status: 'success',
        message: 'esto es un POST'
    }
})

router.post('/movies', async ctx => {
    ctx.type = 'application/json';
    try {
        const movie = await queries.newMovie(ctx.request.body);
        if (movie.length) {
            ctx.status = 201;
            ctx.body = {
                status: 'success',
                message: 'La pelicula fue creada correctamente',
                data: movie
            }
        } else {
            ctx.status = 422;
            ctx.body = {
                status: 'Error',
                message: 'La pelicula no fue creada'
            }
        }
    } catch (error) {
        ctx.status = 422;
        ctx.body = {
            status: 'Error',
            message: 'La pelicula no fue creada'
        }
    }
})

router.put('/udapte/miregistro', async ctx => {
    ctx.type = 'application/json';
    ctx.state = 201;
    ctx.body = {
        status: 'success',
        message: 'Esta es una actualizacion',
        data: movie
    }
})

router.put('/movies/:id', async ctx => {
    ctx.type = 'application/json';
    try {
        const { id } = ctx.params.id
        const { body } = ctx.request.body
        const udapteMovie = await queries.udapteMovie(id, body);

        if (udapteMovie.length) {
            ctx.status = 201;
            ctx.body = {
                status: 'success',
                message: 'La pelicula fue actualizada',
                data: udapteMovie
            }
        }
    }
    catch (error) {
        ctx.status = 404;
        ctx.body = {
            status: 'error',
            message: 'La pelicula no fue actualizada',
            data: error
        }
    }
})


router.delete('/delete/miregistro', async ctx => {
    ctx.type = 'application/json';
    ctx.state = 201;
    ctx.body = {
        status: 'success',
        message: 'esto es una elimicacion'
    }
})

router.delete('/movies/:id', async ctx =>{
    ctx.type = 'application/json';
    try {
        const { id } = ctx.params
        console.log(id)
        const deleteMovie = await queries.deleteMovie(id)
        console.log(deleteMovie)
        if (deleteMovie.length) {
            ctx.status = 201;
            ctx.body = {
                status: 'success',
                message: 'La pelicula fue eliminada correctamente',
                data: deleteMovie
            }
        }
    } catch (error) {
        ctx.status = 404;
        ctx.body = {
            status: 'error',
            message: 'La pelicula no fue eliminada',
            data: error
        }
    }
})

module.exports = router;
