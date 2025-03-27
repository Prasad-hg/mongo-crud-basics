const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then((res)=>{
    console.log('connection sucessful')
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

const bookSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:20
        },
        author:{
            type: String
        },
        price:{
            type:Number,
            min:[100,'price is too low for amazon selling'],
        },
        discount:{
            type:Number,
            default:0,
        },
    }
)


const book = mongoose.model("book", bookSchema);
// let book1 = new book({
//     title:'alan walker',
//     author:"vicky kaushal",
//     price:1200
// })

// let book2 = new book({
//     title:'mathematics ',
//     author:"aryabhata",
//     price:2000
// })
// book2.save();

let book3 = new book({
    title:'english ',
    author:"ananda",
    price:60
})
book3.save();

book.findByIdAndUpdate('67e2c3142f72a92a31f3057e',{price:3500},{new:true},{runvalidators:true}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
})