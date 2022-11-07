const { nanoid } = require("nanoid");
const notes = require("./notes");

//@ addNotes
const addNoteHandler = (request, h) => {
  //? body request
  const { title, tags, body } = request.payload; //? request from client

  const id = nanoid(16); //? id request with Nanoid
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title,
    tags,
    body,
    id,
    createdAt,
    updatedAt,
  };
  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id === id).length > 0; //? checking

  if (isSuccess) {
    const response = h.response({
      status: "success",
      message: "Catatan berhasil ditambahkan",
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Catatan gagal ditambahkan",
  });

  //   response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com'); //? cors origin tertentu
  response.header("Access-Control-Allow-Origin", "*"); //? cors untuk semua origin
  response.code(500);
  return response;
};

//@ getNotes
const getAllNotesHandler = () => ({
  status: notes,
  data: {
    notes,
  },
});

//@ getNotesbyId
const getNoteByIdHandler = (request, h) => {
  const { id } = request.params; //? request parameter

  const note = notes.filter((n) => n.id === id)[0]; //? get object notes from id
  if (note !== undefined) {
    return {
      status: "success",
      data: {
        note,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: "Catatan tidak ditemukan",
  });
  response.code(404);
  return response;

};

//@ updateNotesbyId
const editNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const { title, tags, body } = request.payload; //? request from client
  const updatedAt = new Date().toISOString();

  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes[index] = {
      ...notes[index], //? Spread operator syntax 
      title,
      tags,
      body,
      updatedAt,
    };
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil diperbarui',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui catatan. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

//@ deleteNotesbyId
const deleteNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler };
