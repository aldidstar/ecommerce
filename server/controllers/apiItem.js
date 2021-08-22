const Item = require("../models/Item");
// var multer =  require('multer');
// var multerS3 = require('multer-s3');
var AWS = require('aws-sdk');

module.exports = {
  itemRead: async (req, res) => {
    try {
      const item = await Item.find();
      res.status(200).json(item);
    } catch (err) {
      res.status(201).json({
        success: false,
        message: "something wrong",
        err,
      });
    }
  },
 itemCreate: async (req, res) => {
const image = req.files.image;
  let files = `${Date.now()}-${req.files.image.name}`;
  let s3 = new AWS.S3({
    bucket: process.env.BUCKET_NAME,
    accessKeyId:process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_KEY_ID
});
  s3.createBucket(function () {
    var params = {
      Bucket: process.env.BUCKET_NAME,
    Key: files,
    Body: image.data,
    ACL: 'public-read'
    };
    s3.upload(params, function(err, data){
      if (err) {
        console.log(err)
      }
      console.log(data)
    })
  })


   const {title, rate, description, price, brand, detail} = req.body
 
   try {
      const item = await Item.create({
        title, rate, description, price, brand, detail, image: files
      });
      res.status(201).json({
        success: true,
        message: "item have been added",
        item,
      });
    } catch (err) {
      res.status(201).json({
        success: false,
        message: "something wrong",
        err,
      });
    }
  },
  itemUpdate: async (req, res) => {
    try {
      const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(201).json({
        success: true,
        message: "item have been updated",
        item,
      });
    } catch (err) {
      res.status(201).json({
        success: false,
        message: "something wrong",
        err,
      });
    }
  },
  itemDelete: async (req, res) => {
    try {
      const item = await Item.findByIdAndRemove(req.params.id);
      res.status(201).json({
        success: true,
        message: "item have been deleted",
        item,
      });
    } catch (err) {
      res.status(201).json({
        success: false,
        message: "something wrong",
        err,
      });
    }
  },
  itemFind: async (req, res) => {
    try {
      const item = await Item.findById(req.params.id);
      res.status(201).json({
        success: true,
        message: "item found",
        item,
      });
    } catch (err) {
      res.status(201).json({
        success: false,
        message: "something wrong",
        err,
      });
    }
  },
  itemBrowse: async (req, res) => {
    try {
      const item = await Item.find(req.body);
      res.status(200).json(item);
    } catch (err) {
      res.status(201).json({
        success: false,
        message: "something wrong",
        err,
      });
    }
  },

  

};
