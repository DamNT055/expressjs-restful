"use strict";

const util = require("util");
const mysql = require("mysql");
const db = require("../db");

module.exports = {
  get: (req, res) => {
    let sql = "SELECT * FROM products";
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  detail: (req, res) => {
    let sql = "SELECT * FROM products WHERE id = ?";
    db.query(sql, [req.params.productId], (err, response) => {
      if (err) throw err;
      res.json(response[0]);
    });
  },
  update: (req, res) => {
    let sql = "UPDATE products SET ? WHERE id = ?";
    db.query(sql, [data, productId], (err, response) => {
      if (err) throw err;
      res.json({ message: "Product updated successfully" });
    });
  },
  store: (req, res) => {
    let data = req.body;
    let sql = "INSERT INTO products SET ?";
    db.query(sql, [data], (err, response) => {
      if (err) throw err;
      res.json({ message: "Insert suceess" });
    });
  },
  delete: (req, res) => {
    let sql = "DELETE FROM products WHERE id = ?";
    db.query(sql, [req.params.productId], (err, response) => {
      if (err) throw err;
      res.json({ message: "Delete success" });
    });
  },
};
