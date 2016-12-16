/**
 * Created by Administrator on 2016/12/16.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodejs');
exports.mongoose = mongoose;