const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const { connectDB } = require('./src/db/db');
const schema = require('./src/graphql/schema');
const resolvers = require('./src/graphql/resolvers');

const app = express();
app.use(cors());

// Conectar a la base de datos
connectDB();

// Configurar GraphQL
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true, // Interfaz para pruebas
  })
);

// Iniciar el servidor
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
