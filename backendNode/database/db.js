const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/react-database',
  {
    useNewUrlParser: true,
   
    useUnifiedTopology: true
  }
)
.then(
    ()=>{
        console.log('Mongodb connected successfully')
    }
)
.catch(
    (err)=>{
        console.log(err)
    }
)