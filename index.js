
const xstem = require('./xstem')

//const xhead = require('./xhead')

const content = require('./content')

//const { webpage } = require('htwrite')

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

//writePage('dynalgo','page-simple-twocol-multirow')