function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accA , accB) => accA.name.last.toLowerCase() > accB.name.last.toLowerCase() ? 1 : -1)
}

function numberOfBorrows(account, books) {
  const idNumber = account.id
  let acc = 0
  for(let book in books){
    const borrows = books[book].borrows
    for(let borrow in borrows){
      if(borrows[borrow].id === idNumber) acc++ 
    }  
  }
  return acc
}

function getBooksPossessedByAccount(account, books, authors) {
  // set up array to collect result
  const result = []
  //get list of checked out books taken out by account
  const accountBooks = books.filter(({borrows}) => !borrows[0].returned && borrows[0].id === account.id)
  // embed an author in the book objects
  for(let book in accountBooks){
    const author = authors.find((author) => author.id === accountBooks[book].authorId)
    const updatedBook = {...accountBooks[book], author}
    console.log(updatedBook)
    result.push(updatedBook)
  }
  return result
}
 
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
