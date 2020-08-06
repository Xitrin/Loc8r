const mongoose = require('mongoose');
const openingTimeSchema = new mongoose.Schema({
    days: {
        type: String,
        required: true
    },
    opening: String,
    closing: String,
    closed: {
        type: Boolean,
        required: true
    }
});

const reviewSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        'default': Date.now
    }
});

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    rating: {
        type: Number,
        'default': 0,
        min: 0,
        max: 5
    },
    facilities: [String],
    coords: {
        type: {
            type: String
        },
        coordinates: [Number]
    },
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema]
});
locationSchema.index({
    coords: '2dsphere'
});
mongoose.model('Location', locationSchema);

// db.locations.save({
//     name: 'Momeyes',
//     address: '23 Seasaw Avenue, Reading, IO8 6HJ',
//     rating: 2,
//     facilities: ['Chicken nuggets', 'Chicken burgers', 'Chicken chickens'],
//     coords: [-0.9698433, 51.465990],
//     openingTimes: [{
//         days: 'Monday - Friday',
//         opening: '9:00am',
//         closing: '12:00am',
//         closed: false
//     }, {
//         days: 'Saturday',
//         opening: '9:00am',
//         closing: '11:00pm',
//         closed: false
//     }, {
//         days: 'Sunday',
//         closed: true
//     }]
// })

//lng then lat 
// db.locations.update({
//     name: 'Momeyes'
// }, {
//     address: '23 Seasaw Avenue, Reading, IO8 6HJ',
//     rating: 2,
//     facilities: ["Chicken nuggets", "Chicken burgers", "Chicken chickens"],
//     coords: [{
//         type: 'Point',
//         coordinates: [-79.4687342, 43.9795442]
//     }],
//     openingTimes: [{
//         days: 'Monday - Friday',
//         opening: '9:00am',
//         closing: '12:00am',
//         closed: false
//     }, {
//         days: 'Saturday',
//         opening: '9:00am',
//         closing: '11:00pm',
//         closed: false
//     }, {
//         days: 'Sunday',
//         closed: true
//     }],
//     reviews: [{
//         author: 'Sandy Myers',
//         _id: ObjectId("5f17a9755111cfd9c72e8cb5"),
//         rating: 1,
//         timestamp: ISODate("2017-02-08T05:00:00Z"),
//         reviewText: 'Chicken here is something outrageously bad! I found a roach in my nugget.'
//     }]
// })

// db.locations.update({name: 'Costicy'}, {$set: {coords: [-79.4788622, 43.9413626]}})
// db.locations.update({name: 'Starcups'}, {$set: {coords: [-79.4134592, 44.0130102]}})
// db.locations.update({name: 'Tim Bertons'}, {$set: {coords: [-79.4754290, 44.0373260]}})

// USING HEROKU mLab ADDON
// mongodb://heroku_92kk9l5v:ov4gljqddo1miamberbtkndaen@ds157571.mlab.com:57571/heroku_92kk9l5v
// mongorestore -h ds157571.mlab.com:57571 -d heroku_92kk9l5v -u heroku_92kk9l5v -p ov4gljqddo1miamberbtkndaen dump/
// mongo ds157571.mlab.com:57571/heroku_92kk9l5v -u heroku_92kk9l5v -p ov4gljqddo1miamberbtkndaen
// SET NODE_ENV=production MONGODB_URI=mongodb://heroku_92kk9l5v:ov4gljqddo1miamberbtkndaen@ds157571.mlab.com:57571/heroku_92kk9l5v nodemon


// USING MONGODB ATLAS
// mongo "mongodb+srv://locator.f1ezo.gcp.mongodb.net/Loc8r" --username userMaster
// mongodump --host atlas-loa6di-shard-0/locator-shard-00-00.f1ezo.gcp.mongodb.net:27017,locator-shard-00-01.f1ezo.gcp.mongodb.net:27017,locator-shard-00-02.f1ezo.gcp.mongodb.net:27017 --ssl --username userMaster --password masterUser123 --authenticationDatabase admin --db Locator
// mongorestore --host atlas-loa6di-shard-0/locator-shard-00-00.f1ezo.gcp.mongodb.net:27017,locator-shard-00-01.f1ezo.gcp.mongodb.net:27017,locator-shard-00-02.f1ezo.gcp.mongodb.net:27017 --ssl --username userMaster --password masterUser123 --authenticationDatabase admin -- archive \ -- nsExclude 'admin.system.*'