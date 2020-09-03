var mongoose = require('mongoose')

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect('mongodb+srv://admin:mymoviz@cluster0.acv1h.mongodb.net/mymovizapp?retryWrites=true&w=majority',
    options,
    function(err){
        console.log(err)
    }
)

module.exports = mongoose