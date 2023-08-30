
const xstem = require('./xstem')

const content = require('./content')

const fs = require('fs');


function writePage(filename,template){

    let xcontent = xstem(template,content[filename],true)

    //let filecontent = webpage(content[filename].pgtitle,xhead,htcontent)

    return fs.writeFile(`${filename}.jsx`, xcontent, function (err) {

        if (err) throw err;
        console.log(`${filename}.jsx file created!`);
    });
}

writePage('demo','nocolumn-simple-multirow')


