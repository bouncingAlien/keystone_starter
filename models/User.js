const keystone = require('keystone');
const Types = keystone.Field.Types;

const User = new keystone.List('User');

User.add({
    displayName: {type: String, required: true, index: true, initial: true },
    email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// add access to keystone
User.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});

User.defaultColumns = 'displayName, email, isAdmin';
User.register();