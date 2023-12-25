const mongoose = require('mongoose');
const User = require('./User');

mongoose.connect(`mongodb+srv://vishal:${encodeURIComponent('vishalbhai@87')}@cluster0.vrshglg.mongodb.net/school?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
