const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const mysql = require('mysql')
const cloudinary = require('cloudinary').v2;
const fileupload = require('express-fileupload')
const jwt = require('jsonwebtoken')

process.on('unhandledRejection',(ex)=>{
    console.error(ex);
    return res.status(500).send({ status: 0, message: "Internal Server Error" });
    
});

const emailTo = 'trpmachine19@gmail.com';
var transporter = nodemailer.createTransport({
    // service: 'gmail',
    host:'mail.trpmachines.com',
    port:465,
    auth: {
        user: 'admin@trpmachines.com',
        pass: 'trpmachines@2021'
    }
});

cloudinary.config({
    cloud_name: 'trp-machine-tool',
    api_key: '659175443286782',
    api_secret: 'uazxFphuss-THYF3bYhlyRx6_hc'
});

const app = express()


const port = process.env.PORT || 5000
const cors = require('cors');
app.use(cors());//TODO:change origin address to website address
app.options('*', cors());

app.use(express.urlencoded({ extended: true,limit:'100mb'}));
app.use(express.json({limit:'100mb',}));

app.use(fileupload({
    useTempFiles: true
}))

//MySQL
// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: 'trp.mysql.database.azure.com',
//     user: 'trproot@trp',
//     password: 'Password@123',
//     database: 'trp',
//     port:3306,
//     ssl:true
// })
// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'trp',
// })
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'trpmachi_root',
    password: '5O_kCn?F@WxD',
    database: 'trpmachi_trp',
})
// 5O_kCn?F@WxD
// User “trpmachi_root” was added to the database “trpmachi_trp”.

app.post('/api/login', (req, res) => {
    var userdata = {
        "user": req.body.user,
        "pass": req.body.password
    }
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`);
        connection.query('SELECT * FROM userdata WHERE user = ?', [userdata.user], (err, rows) => {
            connection.release()
            if (err) {
                res.status(400).send({ "message": "Error Ocurred" })
            } else {
                if (rows.length > 0) {
                    const comparision = userdata.pass.localeCompare(rows[0].password);
                    if (comparision == 0) {
                        const token = jwt.sign({ userdata }, '$w$h+]FdEQ.n~S?i30<`&`N!J;2i;>');
                        res.status(200).send({
                            "token": token
                        })
                    } else {
                        res.status(403).send({
                            "message": "User and Password does not match"
                        })
                    }
                } else {
                    res.status(403).send({
                        "message": "User does not exits"
                    });
                }
            }
        })
    })
})


// ! JWT Change Password
app.put('/api/changepassword', ensureToken, (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`);
        var userdata = {
            "user": req.body.user,
            "pass": req.body.password,
            "newPass": req.body.newPassword
        }
        connection.query('SELECT * FROM userdata WHERE user = ?', [userdata.user], (err, rows) => {
            // connection.release()
            if (err) {
                res.status(400).send({ "message": "Error Ocurred" })
            } else {
                if (rows.length > 0) {
                    const comparision = userdata.pass.localeCompare(rows[0].password);
                    if (comparision == 0) {
                        connection.query('UPDATE userdata SET password = ? WHERE user = ?', [userdata.newPass, userdata.user], (err, rows) => {
                            connection.release()
                            if (!err) {
                                res.status(200).send({
                                    success: true,
                                });
                            } else {
                                res.send(err);
                            }
                        })
                    } else {
                        res.status(206).send({
                            "message": "User and Password does not match"
                        })
                    }
                } else {
                    res.status(206).send({
                        "message": "User does not exits"
                    });
                }
            }
        })

    })
})


// Send Mail 
app.post('/api/resetpassword', (req, res) => {
    user = "trpadmin";
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`);
        connection.query('SELECT * FROM userdata WHERE user = ?', user, (err, rows) => {
            if (err) {
                res.status(400).send({ "message": "Error Ocurred" })
            } else {
                if (rows.length > 0) {
                    password = rows[0].password;
                    var mailOptions = {
                        from: 'admin@trpmachines.com',
                        to: emailTo,
                        subject: `Password Reset TRP Admin`,
                        text: `Your Password for ${user} is ${password}`
                    };
                    transporter.sendMail(mailOptions, (error, result) => {
                        if (!error) {
                            console.log('Email sent: ' + result);
                            res.status(200).send({
                                success: true,
                                result
                            });
                        } else {
                            console.log(error);
                        }
                    });
                }
            }
        })
    })

})


// Send Mail 
app.post('/api/sendinquiry', (req, res) => {
    const params = req.body;
    var mailOptions = {
        from: 'admin@trpmachines.com',
        to: emailTo,
        subject: `${params.subject}`,
        text: `${params.message}

Name: ${params.name}
Phone: ${params.phone}
Email: ${params.email}
        `
        // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
    };

    transporter.sendMail(mailOptions, (error, result) => {
        if (!error) {
            console.log('Email sent: ' + result);
            res.status(200).send({
                success: true,
                result
            });
        } else {
            console.log(error);
        }
    });
})

// Upload File
// ! JWT
app.post('/api/upload', ensureToken, (req, res) => {
    const file = req.files.photo;
    console.log(file);
    cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
        if (!err) {
            res.status(200).send({
                success: true,
                result
            });
        }
    });
})

// Will display all the categoris with their id
app.get('/api/distinct', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`);
        connection.query('SELECT cat_id,pro_img FROM `products` WHERE pro_id in (SELECT MIN(pro_id) from products GROUP BY cat_id ORDER by cat_id)', (err, rows) => {
            connection.release()
            if (!err) {
                // r = JSON.parse(JSON.stringify(rows))
                // console.log(Object.keys(r).length)
                res.status(200).send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

// ? Will display 3 Hot Products 
app.get('/api/hotproduct', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`);
        connection.query('SELECT * FROM products WHERE pro_hot = 1 LIMIT 3 ;', (err, rows) => {
            connection.release()
            if (!err) {
                res.status(200).send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

// ? Hot Product Change with product id
// ! JWT
app.put('/api/hotproduct/:id', ensureToken, (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`);
        const params = req.body
        connection.query('UPDATE products SET pro_hot = ? WHERE pro_id = ?', [params.pro_hot, req.params.id], (err, rows) => {
            connection.release()
            if (!err) {
                res.status(200).send({
                    success: true,
                    rows
                });
            } else {
                console.log(err)
            }
        })
    })
})

// ? Will display all the categoris with their id
app.get('/api/category-name/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`);
        connection.query('SELECT cat_name from categories where id=?', [req.params.id], (err, rows) => {
            connection.release()
            if (!err) {
                r = JSON.parse(JSON.stringify(rows))
                console.log(Object.keys(r).length)
                res.status(200).send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

// ? Will display all the categoris with their id
app.get('/api/categories', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`);
        connection.query('SELECT * from categories', (err, rows) => {
            connection.release()
            if (!err) {
                r = JSON.parse(JSON.stringify(rows))
                console.log(Object.keys(r).length)
                res.status(200).send(rows)
            } else {
                console.log(err)
            }
        })
    })
})


// ? Will display all the products of particular category by id
app.get('/api/category/:cat_id', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`);
        connection.query('SELECT * from products WHERE cat_id = ?', [req.params.cat_id], (err, rows) => {
            connection.release()
            if (!err) {
                r = JSON.parse(JSON.stringify(rows))
                console.log(Object.keys(r).length)
                res.status(200).send(rows)
            } else {
                console.log(err)
            }
        })
    })
})
// SELECT * FROM products INNER JOIN categories ON products.cat_id=categories.id ORDER BY products.cat_id

// ? Will display particular products by its id
app.get('/api/product/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`);
        connection.query('SELECT * from products WHERE pro_id = ?', [req.params.id], (err, rows) => {
            connection.release()
            if (!err) {
                r = JSON.parse(JSON.stringify(rows))
                console.log(Object.keys(r).length)
                if (Object.keys(r).length == 0) {
                    res.status(400).send("Bad Request");
                } else {
                    res.status(200).send(rows[0]);
                }
            } else {
                console.log(err)
            }
        })
    })
})


// Will Add product 
// ! JWT
app.post('/api/product', ensureToken, (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`);

        const params = req.body

        connection.query('INSERT INTO products SET ?', params, (err, rows) => {
            connection.release()
            if (!err) {
                res.status(200).send({
                    success: true,
                    rows
                });
            } else {
                console.log(err)
            }
        })
    })
})

// Will Update particular product 
// ! JWT
app.put('/api/product/:id', ensureToken, (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`);

        const params = req.body

        connection.query('UPDATE products SET ? WHERE pro_id = ?', [params, req.params.id], (err, rows) => {
            connection.release()
            if (!err) {
                res.status(200).send({
                    success: true,
                    rows
                });
            } else {
                console.log(err)
            }
        })
    })
})

// Will Delete particular products by its id
// ! JWT
app.delete('/api/product/:id', ensureToken, (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`);
        connection.query('DELETE from products WHERE pro_id = ?', [req.params.id], (err, rows) => {
            connection.release()
            if (!err) {
                res.status(200).send({
                    success: true,
                    rows
                });
            } else {
                console.log(err)
            }
        })
    })
})


// Will Add category 
// ! JWT
app.post('/api/categories', ensureToken, (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`);

        const params = req.body

        connection.query('INSERT INTO categories SET ?', params, (err, rows) => {
            connection.release()
            if (!err) {
                res.status(200).send({
                    success: true,
                    rows
                });
            } else {
                console.log(err)
            }
        })
    })
})

// Will Update particular product 
// ! JWT
app.put('/api/categories', ensureToken, (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`);

        const params = req.body

        connection.query('UPDATE categories SET ? WHERE id = ?', [params, params.id], (err, rows) => {
            connection.release()
            if (!err) {
                res.status(200).send({
                    success: true,
                    rows
                });
            } else {
                console.log(err)
            }
        })
    })
})


// Will Delete particular products by its id
// ! JWT
app.delete('/api/categories/:id', ensureToken, (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`);
        connection.query('DELETE from categories WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release()
            if (!err) {
                res.status(200).send({
                    success: true,
                    rows
                });
            } else {
                console.log(err)
            }
        })
    })
})



// Will display all products category wise sorted
app.get('/api/all_cat_product', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`);
        connection.query('SELECT * FROM products INNER JOIN categories ON products.cat_id=categories.id ORDER BY products.cat_id', (err, rows) => {
            connection.release()
            if (!err) {
                r = JSON.parse(JSON.stringify(rows))
                console.log(Object.keys(r).length)
                if (Object.keys(r).length == 0) {
                    res.status(400).send("Bad Request");
                } else {
                    res.status(200).send(rows);
                }
            } else {
                console.log(err)
            }
        })
    })
})

function ensureToken(req, res, next) {
    const bearerHeader = req.header("Authorization");
    if (typeof bearerHeader !== 'undefined') {
        const decode = jwt.verify(bearerHeader, '$w$h+]FdEQ.n~S?i30<`&`N!J;2i;>', (err, data) => {
            if (err) {
                res.sendStatus(403);
            } else {
                next();
            }
        })
    }
    else {
        res.sendStatus(403);
    }
}

//Listen on environment port or 5000
app.listen(port, () => console.log(`Listen on Port ${port}`))
// app.listen()