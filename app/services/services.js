var services = {
    getAllUsers: async(req, res) => {
        return res.status(200).send({
            "status": "success",
            "response": "Connections available",
            "dataList": []
        })
    }
}


module.exports = services;