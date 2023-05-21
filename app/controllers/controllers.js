const service = require('../services/services.js');
var controllers = {
    getAllUsers: async (req, res, next) => {
        try {
            const users = await service.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}


module.exports = controllers;