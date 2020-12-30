const { findAccountById } = require("./accounts")

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const borrowed = books.filter((book) => !book.borrows[0].returned)
  const returned = books.filter((book) => book.borrows[0].returned)
  return [borrowed, returned]
}

function getBorrowersForBook(book, accounts) {
  let transactions = book.borrows
    for(let trans in transactions){
      const account = findAccountById(accounts, transactions[trans].id)
      transactions[trans] = {...transactions[trans], ...account}
    }
  return transactions.slice(0,10)
}
 
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
