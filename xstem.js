
const TOP_LEFT_TEXT = 'amirlogic';

function wrapContent(core){

    return `<>
                <Head>
                    <title>Demo | ---</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>

                <div className="w-full pt-4 px-6 md:flex md:flex-wrap md:items-stretch md:h-28">

                            <div className="text-xl text-stone-600 mx-auto md:h-28 md:flex-none md:w-2/5">
                                
                                <Image alt="logo" className="inline" src="/logo.svg" width="200" height="180" /> 
                                <span className="text-xl font-sans text-slate-700">ebike4.me</span>
                                
                            </div>

                            <div className="md:flex-1 text-right text-slate-300 md:h-28 md:w-3/5"></div>

                </div>

                ${core}
                
                <footer className="w-full py-16 mt-6 min-h-32 bg-gray-200 mx-auto text-slate-500 md:py-28">
        
                    <div className="text-center">
                        
                        Copyright 2023
                        
                    </div>
                    
                </footer>
            </>`
}

module.exports = (ndl='',hdata={},wrap=false)=>{

    if(ndl == 'nocolumn-simple-multirow'){

        let jsxcont = `<main className="container mx-auto min-h-screen">

                <div className="my-8 px-6">

                    <p>${hdata?.toptext}</p>

                    ${hdata?.rows.map((r)=>{

                        return `<div className="p-4">${r}</div>`
    
                    }).join('')}

                </div>

            </main>`
      
		
            //<span class="navbar-brand mx-4" href="#">${TOP_LEFT_TEXT}</span>
                

        return (wrap) ? wrapContent(jsxcont) : jsxcont
    }
}

