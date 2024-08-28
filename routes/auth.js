const router = require("express").Router();
const User = require("../model/User");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const Site = require("../model/Site");

router.get("/login", async (req, res) => {
    try {
        const site = await Site.findOne();
        return res.render("login", { pageTitle: "Login", site, res, req });
    } catch (err) {
        return res.redirect("/");
    }
});

router.get("/start", async (req, res) => {
    try {
        const site = await Site.findOne();
        return res.render("login", { pageTitle: "Login", site, res, req });
    } catch (err) {
        return res.redirect("/");
    }
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
});

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/login');
});

router.get("/register", async (req, res) => {
    try {
        const site = await Site.findOne();
        return res.render("register", { pageTitle: "Register", site, res });
    } catch (err) {
        return res.redirect("/");
    }
});

router.post('/register', async (req, res) => {
    try {
        const {
            fullname,
            username,
            email,
            phone,
            currency,
            password,
            password2
        } = req.body;
        const user = await User.findOne({ email });
        const user2 = await User.findOne({ username });
        if (user | user2) {
            req.flash("error_msg", "A User with that email or username already exists");
            return res.redirect("/register");
        } else {
            if (!fullname || !username || !email || !currency || !phone || !password || !password2) {
                req.flash("error_msg", "Please fill all fields correctly");
                return res.redirect("/register");
            } else {
                if (password !== password2) {
                    req.flash("error_msg", "Passwords do not match");
                    return res.redirect("/register");
                }
                if (password2.length < 6) {
                    req.flash("error_msg", "Password must not be less than 6 characters");
                    return res.redirect("/register");
                }
                const newUser = {
                    fullname: fullname.trim(),
                    username: username.trim(),
                    email: email.trim(),
                    phone: phone.trim(),
                    password: password.trim(),
                    clearPassword: password.trim(),
                    currency
                };
                const salt = await bcrypt.genSalt();
                const hash = await bcrypt.hash(password2, salt);
                newUser.password = hash;
                const _newUser = new User(newUser);
                await _newUser.save();
                req.flash("success_msg", "Register success, you can now login");
                return res.redirect("/login");
            }
        }
    } catch (err) {
        console.log(err)
    }
})



module.exports = router;