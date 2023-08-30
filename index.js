
const xstem = require('./xstem')

const content = require('./content')

const fs = require('fs');


function writePage(filename='output',template='',wrap=true){

    let xcontent = xstem(template,content[filename],wrap)

    //let filecontent = webpage(content[filename].pgtitle,xhead,htcontent)

    return fs.writeFile(`${filename}.jsx`, xcontent, function (err) {

        if (err) throw err;
        console.log(`${filename}.jsx file created!`);
    });
}

writePage('demo','nocolumn-simple-multirow')


