const db = require('./config');
const { User } = require('../models');

db.once('open', async () => {
    await User.create({
        first: 'Eric',
        last: 'Graves',
        email: 'thegraveyboy@testmail.com',
        password: 'password12345',
    });

    await User.create({
        first: 'Samuel',
        last: 'Cordova',
        email: 'cordovanova@testmail.com',
        password: 'password12345',
    });

    await User.create({
        first: 'Brittani',
        last: 'Court',
        email: 'crittanibourt@testmail.com',
        password: 'password12345',
    });

    console.log('users seeded');

    process.exit();
});