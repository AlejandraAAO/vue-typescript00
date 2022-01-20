import app from "./app"
import {startConection} from "./database"

startConection()
app.listen(3000)
console.log('server port 3000')