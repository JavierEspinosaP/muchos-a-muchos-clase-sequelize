const { GenreBook} = require('../models'); 

const books_seed = require('./books_seed');
const genres_seed = require('./genres_seed');
const genrebooks_seed = require('./genresbooks_seed');

// Book.findAll()
//   .then(books => {
//     console.log('Existent books:', books);
//   })
//   .catch((err) => console.error(err));
  
GenreBook.bulkCreate(genrebooks_seed)
  .then(() => console.log("genresbooks seeded successfully."))
  .catch((err) => console.error(err));

// Genre.bulkCreate(genres_seed)
//   .then(() => console.log("Genres seeded successfully."))
//   .catch((err) => console.error(err));

