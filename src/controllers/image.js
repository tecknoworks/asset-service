const path =require('path')

module.exports = {
    uploadImage: function (req, res) {
        if (Object.keys(req.files).length == 0) {
            return res.status(400).send('No files were uploaded.');
        }

        let fileName = req.body.name;
        let image= req.files.image;

        let folder=`${__dirname}/../../assets/images/`;
        let newFileName = `${fileName}.jpg`;
        
        let imagePath = path.resolve(folder, newFileName);
        
        image.mv(imagePath, function (err) {
            if (err)
                return res.status(500).send(err);
            res.send('File uploaded!');
        });
    }
}