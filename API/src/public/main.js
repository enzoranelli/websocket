import { loadNotes } from "./socket-client.js";
import { onHandleSubmit } from "./ui.js";
loadNotes();

const noteForm = document.querySelector('#noteForm');

noteForm.addEventListener('submit', onHandleSubmit)