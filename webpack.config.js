module.exports = {
 entry: "./src/index.jsx",
 output: {
   path: __dirname + "/build",
   filename: "bundle.js"
 },
 module : {
   loaders : [
     {
       test : /\.jsx?/,
       loader : 'babel'
     }
   ]
  }
};
