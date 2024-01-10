const mongoose = require("mongoose");
const express = require("express");
//const food_items = require('./models/food_items')
const app = express();
app.use(express.json());
mongoose.set("strictQuery", false);
const mongoUrl =
  "mongodb+srv://Aditya02:Aditya02@cluster0.le7uya1.mongodb.net/test?retryWrites=true&w=majority";
//const fs = require("fs");

const mongoDB = async () => {
  await mongoose.connect(
    mongoUrl,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("---", err);
      else {
        console.log("connected");
        const fetched_data = mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(async function (err, data) {
          const foodCategory =
            mongoose.connection.db.collection("foodcategory");
          foodCategory.find({}).toArray(function (err, catData) {
            if (err) console.log(err);
            else {
              global.food_items = data;
              global.foodCategory = catData;
            }
          });

          // if(err) console.log(err);
          // else {S

          //   global.food_items = data;
          //   // Showing data stored in the database
          //   // console.log(global.food_items);

          // }
        });
        //         const data =  food_items.find();
        //         console.log("------");
        //         console.log(data);

        // console.log("----");
      }
    }
  );
};
module.exports = mongoDB;

// fs.readFile("../foodData2.json", "utf8", (err, jsonString) => {
//   if (err) {
//     console.log("File read failed:", err);
//     return;
//   }
//   console.log("File data:", jsonString);
// });
//     });
// }
