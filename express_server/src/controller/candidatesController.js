const db = require("../db/database");
const { Auth } = require('../logic/authorization')

const getCandidates = async (req, res) => {
    try {

        try {
            await Auth(req?.headers)

        } catch (error) {
            return res.status(400).json({ success: false, msg: error.message });
        }
        const getCandidatesQuery = "SELECT * FROM candidate";

        db.all(getCandidatesQuery, (err, candidates) => {
            if (err) {
                return res.status(500).json({ success: false, msg: "Internal server error" });
            }

            return res.status(200).json({ success: true, candidates });
        });

    } catch (error) {
        throw error;
    } 
};
module.exports = { getCandidates };