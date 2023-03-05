const MemberModal = require('../schema/member.model');
const Definer = require("../lib/mistake");
const {shapeIntoMongooseObjectId} = require("../lib/config")
const assert = require('assert');

class Restaurant {
    constructor() {
        this.memberModal = MemberModal;
    }

    async getAllRestaurantsDara() {
        try {
            const result = await this.memberModal.find({
                mb_type: 'RESTAURANT'
            }).exec();

            assert(result, Definer.general_err1);
            return result;
        } 
        catch (err) {
            throw err;
        }
    }

    async updateRestaurantByAdminData(update_data) {
        try {
            const id = shapeIntoMongooseObjectId(update_data?.id);
            const result = await this.memberModal.findByIdAndUpdate(
                {_id: id},
                update_data,
                {runValidators: true, lean: true, returnDocument: 'after'}
                ).exec();
                
                
                assert.ok(result, Definer.general_err1);
                return result;
        } 
        catch (err) {
            throw err;
        }
    }
}

module.exports = Restaurant;