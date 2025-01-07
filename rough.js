const mongoose = require('mongoose');
async function main() {
       await mongoose.connect('mongodb://127.0.0.1:27017/hospital');
}
main()
.then(()=>{
       console.log("succesfully setup the connection!!");
})
.catch((err)=>{
       console.log("error happened");
})

const hostpitalSchema=new mongoose.Schema({
       name:{
              type:String,
              required:true,
       },
       age:{
              type:Number,
       },
       disease:{
              type:String,
       },
       category:{
              type:String,
              enum:["heart patient","kidney patient","brain patient"],
       }
});
const Patient=new mongoose.model("Patient",hostpitalSchema);
Patient.insertMany([
       {
              name: "John Doe",
              age: 45,
              disease: "Heart Attack",
              category: "heart patient"
            },
            {
              name: "Jane Smith",
              age: 30,
              disease: "Chronic Kidney Disease",
              category: "kidney patient"
            },
            {
              name: "Albert White",
              age: 60,
              disease: "Stroke",
              category: "brain patient"
            },
            {
              name: "Emily Johnson",
              age: 25,
              disease: "Acute Myocardial Infarction",
              category: "heart patient"
            }
])
const patient1=new Patient({name:"jio",age:45,disease:"jionia",category:"loci"});
patient1.save()
.then((res)=>{
       console.log(res);
       
}).catch((err)=>{
       console.log(err.errors.category.message);
})