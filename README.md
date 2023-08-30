# JSX Writer for Next.js

JSX generator for Next.js apps

Tailwind CSS must be installed

You need a `content.js` file:

```javascript

module.exports = {

    'demo':{
        
        title:`JSX Write Demo`,

        toptext:"Lorem ipsum odor amet, consectetuer adipiscing elit. Cras torquent mollis adipiscing himenaeos; litora amet fusce. Class augue nibh interdum feugiat ligula sollicitudin hac interdum! In condimentum efficitur vestibulum placerat diam per.",

        rows:[

                `<strong>Folding bikes:</strong> Can be folded for easier transport and storage. The main benefit is to avoid parking your bike outside`,

                `<strong>Roadbikes:</strong> Made for longer, race-style rides. These bikes are engineered to be as light as possible and to offer as low resistance as possible.`

        ]
     },
}

```

`xstem.js` Templates for JSX generation

`index.js` For each file you want to generate: `writePage('filename','template')`

When you're ready: `npm start`


## Available templates


`nocolumn-simple-multirow`




