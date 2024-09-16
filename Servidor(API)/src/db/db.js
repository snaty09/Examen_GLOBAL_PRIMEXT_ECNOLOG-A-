const sql = require('mssql');

// Configuración de la base de datos
const dbConfig = {
  user: 'sa',
  password: '123456789',
  server: 'DESKTOP-BK15OQD',
  database: 'PersonManagementDB',
  options: {
    encrypt: true, // Para Azure
    trustServerCertificate: true, // Para SQL Server local
  },
};

// Conexión a la base de datos
const connectDB = async () => {
  try {
    await sql.connect(dbConfig);
    console.log("Conectado a la base de datos.");
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
};

module.exports = {
  connectDB,
  sql,
};
