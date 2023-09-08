const books = [
    { title: 'Book 1', author: 'author 1', publicationYear: 2005 },
    { title: 'Book 2', author: 'author 2', publicationYear: 2012 },
    { title: 'Book 3', author: 'author 3', publicationYear: 2008 },
    { title: 'Book 4', author: 'author 4', publicationYear: 2015 }
  ];
  
 const filteredBook = books.filter(book => book.publicationYear < 2010).map( book => ({...book , author: book.author.toUpperCase()}));


 console.log(filteredBook);
 
