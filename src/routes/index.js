const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonsRoutes = require('./pokemonsRoutes');
const typesRoutes = require('./typesRoutes.js')

const router = Router();

// Configurar los routers

router.use('/pokemons',pokemonsRoutes);

router.use('/types',typesRoutes);

module.exports = router;
