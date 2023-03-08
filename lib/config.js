const mongoose = require("mongoose");


exports.member_type_enums = ["USER", "ADMIN", "PEDAL", "RESTAURANT"];
exports.member_status_enums = ["ONPAUSE", "ACTIVE", "DELETED"];
exports.ordernary_enums = ["Y", "N"];
exports.product_collection_enams = ["dish", "salad", "dessert", "drink", "etc"]
exports.product_status_enams = ["PAUSED", "PROCESS", "DELETED"];
exports.product_size_enams = ["small", "normal", "large", "set"];
exports.product_volume_enams = [0.5, 1, 1.2, 1.5, 2];

exports.like_view_group_list = ['product', 'member', 'community']
exports.board_id_enam_list = ['celebrity', 'evaluation', 'stroy']


/***************************************** 
*      MONGODB RELATED COMMANDS          *
 *****************************************/

 exports.shapeIntoMongooseObjectId = (target) => {
     if(typeof target === "string") {
        return new mongoose.Types.ObjectId(target)
     } else return target;
 }