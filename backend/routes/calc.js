// Import the express router as shown in the lecture code
// Note: please do not forget to export the router!

import express from 'express';
//import path from 'path';
//const __dirname = new URL('.', import.meta.url).pathname;
const router = express.Router();
router
  .route('/')
  .get(async (req, res) => {
    /*res.sendFile(path.join(__dirname,'frontend', 'index.html'));
    return res.status(200);*/ //If we wanted to have website on server to make things easier, we need to figure out how to replace
    // __dirname with a working function to get file path in JS
   
    let equation = req.query;
    equation  = JSON.stringify(equation);
    equation = equation.replace("{", "");
    equation = equation.replace("}", "");
    equation = equation.slice(7);
    equation = equation.replaceAll('"', "");
    equation = equation.replaceAll("^", '**');
    //TODO: add solver for x variables
    
    let calculated = 0;
      try { 
      // Evaluate the expression 
      calculated = eval(equation); // eval converts string to evaluated equation
      console.log(`Result: ${calculated}`); //delete when frontend works
      return res.status(200).json({result: calculated});
  } catch (error) { 
    return res.status(200).json({result: "Invalid equation. Please enter a valid mathematical expression."})
  } 
  });
  

export default router;