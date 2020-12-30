function totalBooksCount(books) {
  return books.length
}

function totalAccountsCount(accounts) {
  return accounts.length
}

function booksBorrowedCount(books) {
  const borrowed = books.filter((book) => !book.borrows[0].returned)
  return borrowed.length
}

function getMostCommonGenres(books) {
  // // set up array to collect genres
  const genres = books.map((book) => book.genre)
  const uniqueGenre = genres.filter((gen, index) => genres.indexOf(gen) === index )
  const mostPopular = []
  for (let g in uniqueGenre){
    const genre = uniqueGenre[g]
    const count = genres.reduce((acc, gen) => {
      if (gen === genre) {acc++}
      return acc}, 0)
    const objectVersion = {name: genre, count: count}
    mostPopular.push(objectVersion)
  }
  return mostPopular.sort((genA, genB) => genA.count < genB.count ? 1 : -1).slice(0,5)
}


function getMostPopularBooks(books) {
  const mostPopular = []
  for (let book in books){
    const popBook = {name: books[book].title, count: counts(books[book])}
    mostPopular.push(popBook)
  }

  return mostPopular.sort((bookA, bookB) => bookA.count < bookB.count ? 1 : -1).slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  const mostPopular = []
  for (let author in authors){
    const writer = authors[author]
    const authName = writer.name.first + ' ' + writer.name.last
    const authorsBooks = books.filter((book) => book.authorId === writer.id)
    const numberReads = authorsBooks.reduce((acc, book) => acc + counts(book), accumulator = 0)
    mostPopular.push({name: authName, count: numberReads})
  }
  
  return mostPopular.sort((authA, authB) => authA.count < authB.count ? 1 : -1).slice(0,5)
}

function counts (book){
  return book.borrows.length
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
