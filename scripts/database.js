
var mongojs = require('mongojs')
var db = mongojs('mongodb+srv://nikolasAleksandrKarinja:Q9rPDr8sDBobYof4@cwserver-hjqbw.mongodb.net/test?retryWrites=true&w=majority', ['account','progress'])

Database = {}
Database.passwordValidCheck = function(data, cb) {
    cb(true)
    // db.account.find({username:data.username, password:data.password}, function(err, res) {
    //     if(res.length > 0) {
    //         cb(true)
    //     } else {
    //         cb(false)
    //     }
    // })
}

Database.usernameAvailabilityCheck = function(data, cb) {
    cb(false)
    // db.account.find({username:data.username}, function(err, res) {
    //     if(res.length > 0) {
    //         cb(true)
    //     } else {
    //         cb(false)
    //     }
    // })
}

Database.addUser = function(data, cb) {
    cb()
    // db.account.insert({username:data.username, password:data.password}, function(err) {
    //     Database.savePlayerStats({username:data.username}, function(){
    //         cb()
    //     })
    // })
}
// Database.loadPlayerStats = function(username, cb) {
//     db.progress.findOne({username:username}, function(err, res) {
//         cb({repPoints:res.repPoints})
//     })
// }
// Database.savePlayerStats = function(data, cb) {
//     db.progress.update({username:data.username, repPoints:data.repPoints}, data, {upsert:true}, cb)
// }
