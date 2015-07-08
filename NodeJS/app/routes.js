 // app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');
var User = require('./models/User');

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
                res.send("There was a problem adding the information to the database. " + err);
            } else {
                res.send("Registration was completed successfully.");
                // Or forward to success page
                //res.redirect("userlist"); // to the userlist page... if necessory!
            }
            res.json({ message: 'User created!' });
          });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };
