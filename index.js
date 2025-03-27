const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then((res)=>{
    console.log('connection sucessful')
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema  = new mongoose.Schema({
    name:String,
    email: String,
    age:Number,
});


const User = mongoose.model('User', userSchema);

const user1 = new User({
    name:"Adil",
    email:"adil@Gmail.com",
    age:30,
})
user1.save();

const user2 = new User({
    name:"snady",
    email:"sandy@gmail.com",
    age:75,
})

user2.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

User.insertMany([
{name:"bruce", email:"bruce@gmail.com", age:78},
{name:"vicky",email:"vicky@gmail.com",age:56}
])

User.findById({_id:"67e296634f083e6a7de01ca9"})
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

User.updateMany({age:{$gte:40}}, {age:100}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

User.findOneAndUpdate({name:"bruce"}, {age:12},{new:true}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

User.findByIdAndUpdate({_id:"67e293b44c61f32291a8f2ee"}, {age:12},{new:true}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

User.deleteMany({age:{$lt:40}}).then((res)=>{
    console.log(res)
})


User.findByIdAndDelete({_id:'67e296634f083e6a7de01caa'}).then((res)=>{
    console.log(res)
})