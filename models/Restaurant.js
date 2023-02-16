const MemberModal = require('../schema/member.model');
const Definer = require("../lib/mistake");
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
}

module.exports = Restaurant;