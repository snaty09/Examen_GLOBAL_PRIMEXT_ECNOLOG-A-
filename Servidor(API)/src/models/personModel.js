const { sql } = require("../db/db");

// Obtener todas las personas
const getAllPersons = async () => {
  const result = await sql.query`SELECT * FROM Persons`; // Consulta SQL para obtener todas las personas
  return result.recordset; // Retorna los resultados de la consulta
};

// Insertar una nueva persona
const createPerson = async (person) => {
  const { FirstName, LastNameP, LastNameM, Address, Phone } = person;
  await sql.query`
    INSERT INTO Persons (FirstName, LastNameP, LastNameM, Address, Phone)
    VALUES (${FirstName}, ${LastNameP}, ${LastNameM}, ${Address}, ${Phone})`; // Consulta SQL para insertar una nueva persona
};

// Actualizar una persona existente
const updatePerson = async (id, person) => {
  const { FirstName, LastNameP, LastNameM, Address, Phone } = person;
  await sql.query`
    UPDATE Persons
    SET FirstName = ${FirstName}, LastNameP = ${LastNameP}, LastNameM = ${LastNameM},
        Address = ${Address}, Phone = ${Phone}
    WHERE PersonID = ${id}`; // Consulta SQL para actualizar una persona por ID
};

// Eliminar una persona
const deletePerson = async (id) => {
  await sql.query`DELETE FROM Persons WHERE PersonID = ${id}`; // Consulta SQL para eliminar una persona por ID
};

module.exports = {
  getAllPersons,
  createPerson,
  updatePerson,
  deletePerson,
};
