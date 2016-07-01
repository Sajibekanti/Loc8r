// GET Home page

module.exports.index = function (req, res) {
    res.render('generic-text', {title:'About'});
};
