const {
    getAllPersons,
    createPerson,
    updatePerson,
    deletePerson,
  } = require('../models/personModel');
  
  const resolvers = {
    getPersons: async () => {
      return await getAllPersons();
    },
    createPerson: async ({ input }) => {
      await createPerson(input);
      return input;
    },
    updatePerson: async ({ id, input }) => {
      await updatePerson(id, input);
      return input;
    },
    deletePerson: async ({ id }) => {
      await deletePerson(id);
      return `Persona con ID ${id} eliminada.`;
    },
  };
  
  module.exports = resolvers;
  