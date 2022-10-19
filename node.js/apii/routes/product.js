const express = require("express");
const app = require("../../app");

const router = express.Router();

const logWelcomeMessage = (req,res,next)=> {
  console.log('New Request has been arrived');
  next();
}

const logPostMessage =(req,res,next)=>{
  console.log('Request sented for Post Request');
  next();
}

router.use(logWelcomeMessage);

//emrah1
router.get('/',(req,res)=>{
  res.status(200).json({
      message:'Hello You just sent a Get Request'
  })
})

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: " Get Request worked in Products Screen. ",
  });
});

router.post("/",logPostMessage, (req, res) => {
  res.status(200).json({
    message: " Post Request worked in Products Screen.",
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id == "ensar") {
    res.status(200).json({
      message: "Hellooo My King !",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "Wrong Id, Get the f** out here !",
    });
  }
});
router.put(':/',(req,res,next)=>{
  res.status(200).json({
    message:'Hello You just sent a Put request.'
  })
})

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: " Product has been updated. ",
  });
});

router.delete('/:productId',(req,res,next)=>{
  res.status(200).json({
    message:'Product has been deleted.'
  })
})

module.exports = router;
