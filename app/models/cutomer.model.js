module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customers", {
    nama: {
      type: Sequelize.STRING,
    },
    usia: {
      type: Sequelize.INTEGER,
    },
    gender: {
      type: Sequelize.STRING,
    },
    alamat: {
      type: Sequelize.TEXT,
    },
  });
  return Customer;
};
