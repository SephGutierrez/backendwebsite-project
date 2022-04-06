const models = require('./server.js').models;

// const toSave = [
//   {name: 'Sef', email: 'sef@gmail.com'},
//   {name: 'Sefi', email: 'sefi@gmail.com'},
//   {name: 'Sefii', email: 'sefii@gmail.com'},
//   {name: 'Sefiikun', email: 'sefiikun@gmail.com'},
//   {name: 'Sefiikun1', email: 'sefiikun1@gmail.com'},
//   {name: 'Nan', email: 'nan@gmail.com'},
//   {name: 'Nani', email: 'nani@gmail.com'},
//   {name: 'Nanikun', email: 'nanikun@gmail.com'},
// ];

// toSave.map(obj => {
//   models.Profile.create(obj, (err, created) => {
//     console.log("Created?", created);
//   });
// })

// models.Profile.findOrCreate({name: 'Sefii1'}, (err, profile) => {
//   if(err){
//     console.log("There was an error", err);
//   }else if(profile){
//       profile.email = 'sefiikun1@gmail.com';
//       profile.save((ue, updated) => {
//         console.log("Updated", updated);
//       });
//   }
// })

const filter = {
  where: {
      email: {like: 'sefii'}
  }, //where clause mysql
  order: 'id ASC', //order by: field
  limit: 10,
  skip: 0,
  fields: {
    email: true
  }
}


models.Profile.findById("6247d4f21a856010001da0b0", {include: 'Posts'}, (err, found) => {
  console.log("Found?", err, found);
})