const express = require("express")
const dotEnv = require("dotenv")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const buyerRoutes = require("./routes/buyerRoutes")
const sellerRoutes = require("./routes/sellerRoutes")
const productItemRoutes = require("./routes/productItemRoutes")
const buyerItemRoutes = require("./routes/buyerItemRoutes")
const sellerItemRoutes = require("./routes/sellerItemRoutes")


const app = express()

const PORT = process.env.PORT || 3001

dotEnv.config()

app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:1841', // Replace with your frontend's actual URL and port
    credentials: true,
}));

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected Successfully!!")
    })
    .catch((error) => {
        console.log("Error: ", error)
    })

app.use('/buyers', buyerRoutes)
app.use('/sellers', sellerRoutes)
app.use('/productItems', productItemRoutes)
app.use('/buyerItems', buyerItemRoutes)
app.use('/sellerItems', sellerItemRoutes)

app.listen(PORT, () => {
    console.log(`Server started and running at ${PORT}`)
})