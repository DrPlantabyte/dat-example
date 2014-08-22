dat-example
===========

A simple example for using MaxOgden's **dat** data management software (see https://github.com/maxogden/dat). This code is public domain.

After installing **dat**, you would use this example by running the following in the (windows) command line:
```
cd "C:\Path\To\Example\"
dat init
type data.csv | dat import --csv
node scriptDat.js
```
If successful, this will create a **dat** storage repository, add some data, then print back teh stored data in JSON format.

Note: on *nix computers, you would use the cat command in the place of the type command.
