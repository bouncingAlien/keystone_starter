// model for contatc form api
const keystone = require('keystone');
const Types = keystone.Field.Types;

const Contact = new keystone.List('Contact');

Contact.add({
    name: { type: Types.Name, required: true },
    email: { type: Types.Email, required: true, initial: false },
    message: { type: Types.Textarea, required: true, initial: false }
});

Contact.track = true;
Contact.defaultSort = '-createdAt';
Contact.defaultColumns = 'name, email, createdAt';
Contact.register();