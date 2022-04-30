const moongose = require('mongoose');

const uri = process.env.ATLAS_URI;
moongose.connect(uri, { useNewUrlParser: true }
);
moongose.connection.once('open', () => {
    console.log('MongoDB database connection establish succesfully');
})