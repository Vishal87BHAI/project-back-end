const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://vishal:${encodeURIComponent('vishalbhai@87')}@cluster0.vrshglg.mongodb.net/?retryWrites=true&w=majority/school`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})