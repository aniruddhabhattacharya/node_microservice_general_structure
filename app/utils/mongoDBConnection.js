const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose
            .connect('mongodb+srv://AniruddhaBhattacharya:%5BAniruddha%5D__xx2023P@cluster0.jba1hky.mongodb.net/', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log('[MongoDB] Database Connected!!!');
            })
            .catch((error) => {
                console.error('[MongoDB] Connection Error :=:', error);
            });
    } catch (error) {
        console.error('[MongoDB] Connection Error [Catch] :=:', error);
    }
};

module.exports = connectDB;