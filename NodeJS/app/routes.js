 // app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');
var User = require('./models/User');
var Product = require('./models/product');
var Purchase = require('./models/Purchase')

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/nerds', function(req, res) {
            // use mongoose to get all nerds in the database
            Nerd.find(function(err, nerds) {

                // if there is an error retrieving, send the error.
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(nerds); // return all nerds in JSON format
            });
        });

        app.post('/api/register', function(req, res) {
          // Get our form values. These rely on the "name" attributes
          var newUser = new User();

          newUser.userid = req.body.userid;
          newUser.firstname = req.body.firstname;
          newUser.lastname = req.body.lastname;
          newUser.email = req.body.email;
          newUser.password = req.body.password;
          newUser.addressL1 = req.body.addressL1;
          newUser.addressL2 = req.body.addressL2;
          newUser.phone = req.body.phone;
          newUser.comments = req.body.comments;
          // Save the data
          newUser.save(function(err) {
            if (err) {
              res.send(err);
            }

            res.json({ message: 'User created!' });
          });
        });

        app.post('/api/user', function(req, res) {
          // Get our form values. These rely on the "name" attributes
          var newUser = {
            userid: req.body.userid,
            password: req.body.password
          };

          // Save the data
          User.find(newUser, function(err, user) {
            if (err)
                res.send(err);

            res.json(user);
          });
        });

        // sample api route
        app.get('/api/products', function(req, res) {
            // use mongoose to get all products in the database
            Product.find({},function(err, products) {

                // if there is an error retrieving, send the error.
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(products); // return all products in JSON format
            });
        });

        app.post('/api/addproduct', function(req, res) {
            var newProduct = new Product();
            newProduct.productname = req.body.productname;
            newProduct.productid = req.body.productid;
            newProduct.productdescription = req.body.productdescription;
            newProduct.price = req.body.price;
            newProduct.effectivedate = req.body.effectivedate;
            newProduct.expirydate = req.body.expirydate;
            newProduct.ownerid = req.body.ownerid;
            newProduct.paymentinstruction = req.body.paymentinstruction;
            newProduct.image = req.body.image;
            // Save the data
            newProduct.save(function(err) {
              if (err) {
                  res.send(err);
              }
              res.json({ message: 'Product created!' });
            });
        });

        app.post('/api/addpurchase', function(req, res) {
            var newPurchase = new Purchase();
            newPurchase.userid = req.body.userid;
            newPurchase.quantity = req.body.quantity;
            newPurchase.cost = req.body.cost;
            newPurchase.ownerid = req.body.ownerid;
            newPurchase.productid = req.body.productid;
            newPurchase.datepurch = req.body.datepurch;
            newPurchase.pmttype = req.body.pmttype;
            newPurchase.comments = req.body.comments;
            newPurchase.paid = req.body.paid;
            newPurchase.pmtdate = req.body.pmtdate;
            newPurchase.delivered = req.body.delivered;
            newPurchase.delivdate = req.body.delivdate;

            // Save the data
            newPurchase.save(function(err) {
              if (err) {
                  res.send(err);
              }
              res.json({ message: 'Purchase created!' });
            });
        });

        app.post('/api/myPurchases', function(req, res) {
            // use mongoose to get all products in the database
            Purchase.find({userid:req.body.userid},function(err, purchases) {

                // if there is an error retrieving, send the error.
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(purchases); // return all products in JSON format
            });
        });


        app.put('/api/updateproduct', function(req, res) {

          var reqProdid = req.body.productid;
          //aUser.password = req.body.password;

          // Save the data
          Product.find({_id: reqProdid}, function(err, theProduct) {
            if (err)
                res.send(err);

            //res.send(theProduct);

                //theProduct.productname = req.body.productname;
                //theProduct.productid = req.body.productid;
                //theProduct.productdescription = req.body.productdescription;
                //theProduct.price = req.body.price;
                //theProduct.effectivedate = req.body.effectivedate;
                //theProduct.expirydate = req.body.expirydate;
                //theProduct.ownerid = req.body.ownerid;
                //theProduct.paymentinstruction = req.body.paymentinstruction;
                theProduct.image = req.body.image;

                // Save the data
                theProduct.save(function(err) {
                  if (err) {
                      res.send("There was a problem adding the information to the database. " + err);
                  } else {
                      res.send("Product registration was completed successfully.");
                      // Or forward to success page
                      //res.redirect("userlist"); // to the userlist page... if necessory!
                  }
                  res.json({ message: 'Product created!' });
                });

          });

        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        /*app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });*/

    };
