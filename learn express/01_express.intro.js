const express = require('express')
const { version } = require('react')

function block_1_basicServer(){
    return new Promise((resolve) => {
    const app = express()
    app.use(express.json())



    app.get("/menu", (req,res)=>{
           res.json({
            items : [
                'thali',
                'biryani'
            ]
           })
    })


    app.get("/search", (req, res)=>{
        const {q, limit} = req.query
        res.json({
            query : q,
            limit :limit || '10'
        })
    })

    app.get("/menu/:id", (req, res)=>{
        const {id} =req.params
        res.json ({
            items :id,
            price:149
        })
    })


    app.post("/order", (req,res)=>{
        const order = req.body
        res.status(202).json({
            status: 'created',
            order
        })
    })


    const server = app.listen(0,async ()=>{
        const port= server.address().port
        const base = `http://127.0.0.1:${port}`;


        try {
            const menuRes = await fetch(`${base}/menu`)
        const menuData = await menuRes.json()
        console.log('GET/menu', JSON.stringify(menuData))

       console.log("+++++++++++++++++++++++++++++++++++")

      const searchRes = await fetch(`${base}/search`)
const searchData = await searchRes.json()
console.log('GET/search', JSON.stringify(searchData))

console.log("+++++++++++++++++++++++++++++++++++")

const menuItemRes = await fetch(`${base}/menu/42`)
const menuItemData = await menuItemRes.json()
console.log('GET/menu/42', JSON.stringify(menuItemData))

console.log("+++++++++++++++++++++++++++++++++++")

    const orderRes = await fetch(`${base}/order`,{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        dish:'biryani',
        quantity:2
    })
      })

        const orderData = await orderRes.json()
        console.log('POST/order', JSON.stringify(orderData)) 

        console.log('+++++++++++++++++++++++++++++++++++++')

        } catch (error) {
            console.log(error)
        }
       server.close(()=>{
            console.log("Block 1 serverd...")
            resolve()
        })
    
    })
  })
}


function block_2_response(){
    return new Promise((resolve)=>{
        const app = express()


        app.get('/text',(req,res)=>{
            res.send("hello from chaicode")

        })
        app.get('/JSON', (req,res)=>{
            res.json({
                framework:'Express',
                version:'6.1.1'
            })
         })

        app.get('/not-found',(req,res)=>{
            res.status(404).json({
                error:"Page not found"
            })

        })

        app.get('/health',(req,res)=>{
            res.sendStatus(200)
        })

        app.get('/old-menu',(req,res)=>{
            //add entry in DB to see how many users are still visiting old route
            res.redirect(301,'/new-menu')
        })

        app.get('/xml', (req,res)=>{
             res.type('application/xml').send('<dish> <name>Biryani</name></dish>')
        })
        //   for  fast dat use in leetcode fast excution ofr perimiuim

        app.get('/custom-headers',(req,res)=>{
            res.set('x-powered-By', 'chaicode');
            res.set('x-requested-Id', '123456');
            res.json({
            message:'Custom header set'
        })

       })
        app.get('/no-content',(req,res)=>{
            res.status(204).end()
        })

        const server =app.listen(0,async()=>{
            const port =server.address().port
            const base =`http://127.0.0.1:${port}`;
            try {
                //TODO

            const textRes = await fetch (`${base}/text`)
            const textData = await textRes.text()
            console.log('GET/text', JSON.stringify(textData))

            console.log("++++++++++++++++++++++++++++++++++++++")

            const JSONTest = await fetch(`${base}/JSON`)
            const JSONData = await JSONTest.json()
            console.log('GET/JSON', JSON.stringify(JSONData))

            console.log("+++++++++++++++++++++++++++++++++++++++++++") 
            


            const notFoundRes = await fetch (`${base}/not-found`)
            const notFoundData = notFoundRes.json()

            console.log('GET/not-found', JSON.stringify(notFoundData))

            console.log("++++++++++++++++++++++++++++++++++++++++++++")


            const healthRes = await fetch(`${base}/health`)
            const healthData = healthRes.json()
            console.log('GET/health', JSON.stringify(healthData))

            console.log("+++++++++++++++++++++++++++++++++++++++++++++")


            const oldMenuRes = await fetch(`${base}/old-menu`)
            const oldMenudata = oldMenuRes.json()

            console.log('GET/old-menu', JSON.stringify(oldMenudata))

            console.log("+++++++++++++++++++++++++++++++++++++++++++++++++")

            const  xmlRes = await fetch(`${base}/xml`)
            const xmldata = await xmlRes.text()

            console.log('GET/xml',JSON.stringify(xmldata))

            console.log("++++++++++++++++++++++++++++++++++++++++++++++")

            const  customHeadRes = await fetch(`${base}/custom-headers`)
            const customHeadata = customHeadRes.json()

            console.log('GET/custom-headers',JSON.stringify(custom-Headers))

            console.log("++++++++++++++++++++++++++++++++++++++++++++++") 

              const  nocontentRes = await fetch(`${base}/no-content`)
            const nocontentdata = nocontentRes.json()

            console.log('GET/no-content',JSON.stringify(nocontentdata))

            console.log("++++++++++++++++++++++++++++++++++++++++++++++")
            

            } catch (error) {
                console.log(error)
            }
        })

        

        })
   
    

    async function main(){
        await block_1_basicServer()
        await block_2_response()

        process.exit(0)
        
    }


        
}