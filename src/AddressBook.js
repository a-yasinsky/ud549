class AddressBook {
	constructor(contacts = []) {
		this.contacts = contacts;
		this.initialComplete = false;
	}
	
	getInitialContacts(cb) {
		let self = this;
		
		setTimeout(function(){
			self.initialComplete = true;
			if (cb) {
				return cb();
			}
		}, 3);
	}
	
	addContact(newContact) {
		this.contacts.push(newContact);
	}
	
	getContact(position) {
		return this.contacts[position];
	}
	
	deleteContact(position) {
		return this.contacts.splice(position, 1);
	}
}