const Site = require("../model/Site");

const router = require("express").Router();


router.get("/", async (req, res) => {
    try {
        const site = await Site.findOne();
        return res.render("index", { pageTitle: "Welcome", site, req, res });
    }
    catch (err) {
        return res.redirect("/");
    }
});

router.get("/about", async (req, res) => {
    try {
        const site = await Site.findOne();
        return res.render("about-us", { pageTitle: "Welcome", site, req, res });
    }
    catch (err) {
        return res.redirect("/");
    }
});

router.get("/contact", async (req, res) => {
    try {
        const site = await Site.findOne();
        return res.render("contact", { pageTitle: "Welcome", site, req, res });
    }
    catch (err) {
        return res.redirect("/");
    }
});

router.get("/terms", async (req, res) => {
    try {
        const site = await Site.findOne();
        return res.render("terms", { pageTitle: "Welcome", site, req, res });
    }
    catch (err) {
        return res.redirect("/");
    }
});

router.get("/aff", async (req, res) => {
    try {
        const site = await Site.findOne();
        return res.render("affiliate", { pageTitle: "Welcome", site, req, res });
    }
    catch (err) {
        return res.redirect("/");
    }
});

router.get("/faq", async (req, res) => {
    try {
        const site = await Site.findOne();
        return res.render("faq", { pageTitle: "Welcome", site, req, res });
    }
    catch (err) {
        return res.redirect("/");
    }
});


module.exports = router;