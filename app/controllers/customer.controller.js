const db = require("../models");
// const config = require('../config/db.config')
const Customer = db.customer;

exports.getCustomer = async (req, res) => {
  try {
    const response = await Customer.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.createCustomer = async (req, res) => {
  try {
    const response = await Customer.create({
      nama: req.body.nama,
      usia: req.body.usia,
      gender: req.body.gender,
      alamat: req.body.alamat,
    });
    res.status(201).json({
      status: "success",
      message: "berhasil menambahkan data customer",
      data: response,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.findCustomerById = async (req, res) => {
  try {
    const response = await Customer.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const response = await Customer.update(
      {
        nama: req.body.nama,
        usia: req.body.usia,
        gender: req.body.gender,
        alamat: req.body.alamat,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({
      status: "success",
      message: "Data berhasil diupdate",
      data: response,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const response = await Customer.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      status: "success",
      message: "Data berhasil dihapus!!",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
