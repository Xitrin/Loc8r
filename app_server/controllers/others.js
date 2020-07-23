/* GET 'about' page  */

const about = (req, res) => {
    res.render('generic-text', {
        title: 'About Loc8r',
        content: 'Loc8r was created to help people find places to sit down\n' +
            'and get a bit of work done.<br/><br/>Lorem ipsum dolor sit\n' +
            'amet, consectetur adipiscing elit. Nunc sed lorem ac nisi digni\n' +
            'ssim accumsan. Nullam sit amet interdum magna. Morbi quis\n' +
            'faucibus nisi. Vestibulum mollis purus quis eros adipiscing\n' +
            'tristique. Proin posuere semper tellus, id placerat augue dapibus\n' +
            'ornare. Aenean leo metus, tempus in nisl eget, accumsan interdum\n' +
            'dui. Pellentesque sollicitudin volutpat ullamcorper.'
    });
};

module.exports = {
    about
};