// Run like this: 
// > cd "C:\Path\To\Example\"
// > dat init
// > type data.csv | dat import --csv
// > node scriptDat.js

console.log("Loading dat library");
var dat = require('dat');
//console.log("Loading LevelDB library");
//var leveldb = require('level');
// LevelDB on windows requires setting up a full Node+python+windows c++ development environment
var location = ".";//"C:\Path\To\Example\";


console.log("connecting to "+location);
var db = dat(location,{},function(err){
	console.log("connection status: "+err);
	console.log("Attempting to list contents: ");
	db.createReadStream()
	.on('data', function (data) {
	    db.get(data.key,{},function(err,val){
		console.log(data.key, '=', val)
	    });
	    //console.log(data.key, '=', data.value)
	  })
	  .on('error', function (err) {
	    console.log('Oh my!', err)
	  })
	  .on('close', function () {
	    console.log('Stream closed')
	  })
	  .on('end', function () {
	  
	//console.log("\n\nRAW DUMP: ");
	//console.log(db.dump());
	  
	    console.log("Done.");
	  });
	  
});

