const multer = require("multer");

const userpicUpload = multer({
    limits:200000,
    storage: multer.diskStorage({

        destination:(req, file, cb)=>{ // cb refers to callback.
            cb(null,"uploads/userpic");
        },
        
        filename: (req, file,cb) =>{ 
            cb(
                null,
                `${req.body.name}-${Math.trunc(
                    Math.random() * 100)}.${file.mimetype.split("/")[1]
                }`
            );
        },
    }),
});

module.exports=userpicUpload;