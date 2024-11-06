// Import the express router as shown in the lecture code
// Note: please do not forget to export the router!

import express from 'express';

const router = express.Router();
router
  .route('/')
  .get(async (req, res) => {
    //TODO: check request params to ensure format
      //num1 should be a float, num2 should be a float, operator should be a string
        //all of them must be present, implement these checks into all routes
    //TODO: implement here


    //example result
    const calculated = 4;
    //temp response
    return res.status(200).json({result: calculated});
  });

export default router;