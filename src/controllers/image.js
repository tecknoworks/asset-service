const path =require('path');
const fs = require('fs');
const uuid = require('uuid/v4');
const imagesFolder=`${__dirname}/../../assets/images/`;

module.exports = {
    uploadImage: function (req, res) {
        if (Object.keys(req.files).length == 0) {
            return res.status(400).send('No files were uploaded.');
        }
        var fileName = req.files.image.name;
        
        if (!fileName.match(/.(jpg|jpeg|png|gif)$/i))
            res.status(400).send('File uploaded is not an image.')
        else{
            let image= req.files.image;
            
            let extension = fileName.split('.')[1];
            let newFileName = `${uuid()}.${extension}`;
            
            let imagePath = path.resolve(imagesFolder, newFileName);
            
            image.mv(imagePath, function (err) {
                if (err)
                    return res.status(500).send(err);
                res.send({imageFileName: newFileName});
            });
        }
        
    },
    deleteImage: function(req, res){
        let imageFileName = req.query.imageFileName;
        if(imageFileName){
            let imagePath = path.resolve(imagesFolder, imageFileName);
            fs.unlink(imagePath, (err)=>{
                if(err){
                    console.log(err.message);
                    return res.status(400).send('Error occured during deleting')
                }
                return res.status(204).send()                    
            })
        }else{

        }
    }
}