const contentDisposition = require("content-disposition");
const chats = [];

module.exports = {
    createMessage: (req, res) => {
        const {pin, message} = req.body;
        
        for(let i = 0; i < chats.length; i++) {
            const existingPin = bcryptjs
        }

        if(existingPin){
            chats[i].message.push(message);

            let securedMessages = {...chats[i]}

            delete securedMessage.pinHash;
            
            return res.status(200).send(securedMessage)
        }

        const salt = bcryptjs.genSaltSync(5);
        const pinHash = bcrypt.hashSync(pin, salt);
        
        
        chats.push(msgObj);

        let secureMessage = {...msgObj};
        delete securedMessage.pinhash;
        res.status(200).send(securedMessage);

    }
}
//download bcryptjs
