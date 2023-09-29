const mongoose = require('mongoose');

// Replace 'mydatabase' with your actual database name
const url = "mongodb+srv://Hasan:374%40Burak@cluster0.0o7a0yb.mongodb.net/";

let Data = [{
  _id: "65057374093051df8dad0ae2",
  regular: '100',
  medium: '200',
  large: '300'
}]

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

  const foodSchema = new mongoose.Schema({
    CategoryName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    options: {
      type: [
        {
          size: {
            type: String,
            enum: ['small', 'regular', 'large', 'half', 'full'], // Define the allowed sizes
            required: true,
          },
          price: String, // You can specify the price for each size
        },
      ],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  });
  
  // Create a Mongoose model based on the schema
  const Food = mongoose.model('fooditems', foodSchema);



const Dataa =  async()=>{
  try{
    const foodItems = await Food.find()
    console.log('Finding')
    //console.log(foodItems)
    for (const key in Data) {
      if (Object.hasOwnProperty.call(Data, key)) {
          const value = Data[key];
          console.log(value)
  }
}
  }

catch(error){
  console.log(error)
}
 

  return Data
}

Dataa()







