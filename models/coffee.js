const mysql = require("../config/mysql");

class CoffeeModel {
    async getGroupAllCoffee(id) {
        let conn;
        try {
            conn = await mysql.getConnection();
            const sql = `
                SELECT * FROM coffee_list where coffee_group=${id}
            `;
            const result = await conn.query(sql);
            return result;
        } finally {
            if (conn) {
                conn.release();
            }
        }
    }

    async getAllCoffee() {
        let conn;
        try {
            conn = await mysql.getConnection();
            const sql = `
                SELECT * FROM coffee_list
            `;
            const result = await conn.query(sql);
            return result;
        } finally {
            if (conn) {
                conn.release();
            }
        }
    }

    async getBillList(id) {
        let conn;
        try {
            conn = await mysql.getConnection();
            const sql = `
                SELECT * FROM bill_list where user_id='${id}' order by num desc
            `;
            const result = await conn.query(sql);
            return result;
        } finally {
            if (conn) {
                conn.release();
            }
        }
    }

    async insertBillList(body) {
        let conn;
        try {
            conn = await mysql.getConnection();
            const sql = `
                INSERT INTO bill_list (user_id, order_id, order_title, order_cnt, total_price, coffee_price, shot_cnt) VALUES
                    ('${body.user_id}', '${body.order_id}', '${body.order_title}', ${body.order_cnt}, ${body.total_price}, ${body.coffee_price}, ${body.shot_cnt})
            `;
            const result = await conn.query(sql);
            return result;
        } finally {
            if (conn) {
                conn.release();
            }
        }
    }
}

module.exports = CoffeeModel;