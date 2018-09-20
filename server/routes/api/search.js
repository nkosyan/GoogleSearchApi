var request = require('request');

const Keyword = require('../../models/Keyword');

module.exports = (app) => {
  app.get('/search', (req, res) => {
    const { query } = req;
    const { q } = query;

    if (!q) {
      return res.send({
        success: false,
        message: 'Error: keyword cannot be blank.'
      });
    }
    request(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAs6UqcpqdTixW-YpeljehSklsR9BCkQnU&q=${q}&cx=004705573269109674221:itjmkjn6hb4`,
      function (error, resource, body) {
       //ToDo Add try...catch for JSON.parse
       let searchResult = JSON.parse(body).items;
       Keyword.find({
         keyword: q
       }, (err, previousSearches) => {
         if (err) {
           return res.send({
             success: false,
             message: 'Error: Server error',
             items: searchResult
           });
         } else if (previousSearches.length > 0) {
           //ToDo Update table: increment searchedTimes count
           return res.send({
             success: true,
             message: 'Keyword already exist.',
             items: searchResult
           });
         } else {
           const newKeyword = new Keyword();
           newKeyword.keyword = q;
           newKeyword.save((err, keyword) => {
             if (err) {
               return res.send({
                 success: false,
                 message: 'Error: Server error - Cannot add new keyword.',
                 items: searchResult
               });
             }
             return res.send({
               success: true,
               message: 'Keyword successfully added!',
               items: searchResult
             });
           });
         }
       });
   });
  });
};
