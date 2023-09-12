const db = require('./config');
const { User } = require('../models');

db.once('open', async () => {
    await User.create({
        first: 'Eric',
        last: 'Graves',
        email: 'egravesboy@testmail.com',
        password: 'password12345',
    });
});