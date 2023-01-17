import { uid } from 'uid';

describe('AUTH | Registration', () => {
	it('User should be able to register, QFU-2 ', () => {
		const username = `username${uid(5)}`;
		const email = `${username}@gmail.com`;
		const password = uid(10);

		cy.visit('https://demo.realworld.io/');
		cy.contains('Sign up').click();
		cy.get('[placeholder="Username"]').type(username);
		cy.get('[placeholder="Email"]').type(email);
		cy.get('[placeholder="Password"]').type(password);
		cy.get('.btn').click();
		cy.get('.nav-link').contains(username).click();
		cy.get('h4.ng-binding').contains(username);
	});
});
