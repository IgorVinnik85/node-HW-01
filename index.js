import contactsService from "./contacts.js";
import yargs from "yargs";

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      console.table(allContacts);
      break;

    case "get":
      const contactById = await contactsService.getContactById(id);
      console.log(contactById);
      break;

    case "add":
      const newContacts = await contactsService.addContact(name, email, phone);
      console.log(newContacts);
      break;

    case "remove":
      const deletedContact = await contactsService.removeContact(id);
      console.log(deletedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);

// invokeAction({
//   action: "list",
// });
