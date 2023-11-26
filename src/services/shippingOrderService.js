const connection = require("../databases/mysql");

var ShippingOrder = function (shippingOrder = {}) {
  let { shippingOrderId, shippingOrderName } = shippingOrder;
  if (shippingOrderId) {
    this.CategoryId = shippingOrderId;
  }
  if (shippingOrderName) {
    this.CategoryName = shippingOrderName;
  }
};

const shippingOrderService = {
  getShippingOrders: () =>
    new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM Shipping_Order`,
        (error, results) => {
          if (error) {
            return reject(error);
          }
          return resolve(results);
        }
      );
    }),
  createShippingOrder: (newShippingOrder, callback) => {
    connection.query(
      `INSERT INTO Shipping_Order set ?`,
      newShippingOrder,
      callback
    );
  },
  updateProductCategory: (id, updateProductCategory, callback) => {
    connection.query(
      `UPDATE Category set ? WHERE CategoryId = ${id}`,
      updateProductCategory,
      callback
    );
  },
  deleteCategory: (id, callback) => {
    connection.query(`DELETE FROM Category WHERE CategoryId = ${id}`, callback);
  },
  checkCategoryIdExists: (id) =>
    new Promise((resolve, reject) => {
      connection.query(
        `
      SELECT EXISTS(select * from Category
      where CategoryId = '${id}') as isExisted
    `,
        (error, results) => {
          if (error) {
            return reject(error);
          }
          return resolve(Boolean(results[0]?.isExisted));
        }
      );
    }),
};

module.exports = {
  shippingOrderService,
  ShippingOrder,
};