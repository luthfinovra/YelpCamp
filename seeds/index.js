const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelpCamp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) +10;
        const camp = new Campground({
            author: '64ccff772e22814535da0c10',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [
                {
                    url: "https://res.cloudinary.com/ddalmtvjc/image/upload/v1691203913/YelpCamp/jfkimchzdorlc80tnpr0.jpg",
                    filename: "YelpCamp/jfkimchzdorlc80tnpr0"
                },
                {                  
                    url: "https://res.cloudinary.com/ddalmtvjc/image/upload/v1691201826/YelpCamp/qoy6ocbkd1cbfhbfdorg.jpg",
                    filename: "YelpCamp/qoy6ocbkd1cbfhbfdorg"
                },
                {
                    url: "https://res.cloudinary.com/ddalmtvjc/image/upload/v1691201829/YelpCamp/sjt1itdneypndn0icmks.jpg",
                    filename: "YelpCamp/sjt1itdneypndn0icmks"
                }
            ],
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur totam perspiciatis inventore odio magnam ratione quis molestias labore repudiandae vel.',
            price: price,
            geometry: { 
                type: 'Point',
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})