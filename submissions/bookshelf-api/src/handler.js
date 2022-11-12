const { nanoid } = require('nanoid');
const books = require('./books');

//@ addBooks
const addBookHandler = (request, h) => {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload; //? request from client
  
    const id = nanoid(16); //? id request with Nanoid
    const finished = pageCount === readPage; //? objservasi
    const insertedAt  = new Date().toISOString();
    const updatedAt = insertedAt;
    
    //? init obj
    const newBook = {
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        finished,
        reading,
        insertedAt,
        updatedAt,
    };
    
    //? valiation property
    if (typeof name === 'undefined') {
        const response = h.response({
          status: 'fail',
          message: 'Gagal menambahkan buku. Mohon isi nama buku',
        });
    
        response.code(400);
        return response;
    }

    if (readPage > pageCount) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        });

        response.code(400);
        return response;
    }

    //? push book
    books.push(newBook);
  
    const isSuccess = books.filter((book) => book.id === id).length > 0;

    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id,
            },
        });

        response.code(201);
        return response;
    }

    const response = h.response({
        status: 'error',
        message: 'Buku gagal ditambahkan',
    });

    response.code(500);
    return response;
};

//@ getAllBooks
const getAllBooksHandler = (request, h) => {
    const { name, reading, finished } = request.query; //? get queryParams
    
    //? if books is empty
    if (books.length === 0) {
      const response = h.response({
        status: 'success',
        data: {
          books: [],
        },
      });
  
      response.code(200);
      return response;
    }
  
    let filterBook = books;
  
    //? condition of queryparams
    if (typeof name !== 'undefined') {
      filterBook = books.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));
    }
  
    if (typeof reading !== 'undefined') {
      filterBook = books.filter((book) => Number(book.reading) === Number(reading));
    }
  
    if (typeof finished !== 'undefined') {
      filterBook = books.filter((book) => Number(book.finished) === Number(finished));
    }
    
    //? set to obj as result
    const listBook = filterBook.map((book) => ({
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    }));
  
    const response = h.response({
      status: 'success',
      data: {
        books: listBook,
      },
    });
  
    response.code(200);
    return response;
};

//@ getBooksById
const getBookByIdHandler = (request, h) => {
    const { bookId } = request.params;
  
    const book = books.filter((n) => n.id === bookId)[0];
  
    if (typeof book !== 'undefined') {
      const response = h.response({
        status: 'success',
        data: {
          book,
        },
      });
  
      response.code(200);
      return response;
    }
  
    const response = h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    });
  
    response.code(404);
    return response;
};

//@ editBooksById
const editBookByIdHandler = (request, h) => {
    const { bookId } = request.params;
  
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload; 
    const updatedAt = new Date().toISOString();
    const index = books.findIndex((book) => book.id === bookId); //? search idBook
  
    if (typeof name === 'undefined') {
      const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku',
      });
  
      response.code(400);
      return response;
    }
  
    if (readPage > pageCount) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
      });
  
      response.code(400);
      return response;
    }
  
    //? update object  
    if (index !== -1) {
      books[index] = {
        ...books[index],
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
        updatedAt,
      };
  
      const response = h.response({
        status: 'success',
        message: 'Buku berhasil diperbarui',
      });
  
      response.code(200);
      return response;
    }
  
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });
  
    response.code(404);
    return response;
};

//@ deleteBOoksById
const deleteBookByIdHandler = (request, h) => {
    const { bookId } = request.params;
  
    const index = books.findIndex((book) => book.id === bookId);
  
    if (index !== -1) {
      books.splice(index, 1);
      const response = h.response({
        status: 'success',
        message: 'Buku berhasil dihapus',
      });
  
      response.code(200);
      return response;
    }
  
    const response = h.response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    });
  
    response.code(404);
    return response;
};

//? export obj
module.exports = { addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler };