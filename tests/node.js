var LessPass = require('../index');
var assert = require('assert');

var site = 'lesspass.com';
var login = 'contact@lesspass.com';
var masterPassword = 'password';
var options = {
    counter: 1,
    length: 12,
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
    template: 'vcVCns'
};

LessPass.encryptLogin(login, masterPassword)
    .then(function(encryptedLogin) {
        LessPass.renderPassword(encryptedLogin, site, options).then(function(generatedPassword) {
            assert.equal(generatedPassword, 'azYS7,olOL2]');
            console.log('generated password ok');
        });
    })
    .catch(function(e) {
        console.log(e);
    });