import { utilService } from './utilService.js';
import { storageService } from './storageService.js';

const KEY = 'emailDB';
export const emailService = {
    query,
    deleteEmail,
    saveEmail
}

function saveEmail(newEmail) {

    const newEmailItem = {
        subject: newEmail.subject,
        body: newEmail.body,
        isRead: false,
        sentAt: 1551133930594,
        id: utilService.makeId()
    }

    gEmails.unshift(newEmailItem)

}

function deleteEmail(emailId) {

    gEmails = gEmails.filter(email => {
        return email.id !== emailId
    })
    _savePetsToStorage()
    return gEmails
}

function query() {
    return Promise.resolve(gEmails);
}

var gEmails;
_createEmails();

function _createEmails() {
    // Try loading from localStorage
    gEmails = storageService.load(KEY);
    if (!gEmails || !gEmails.length) {
        // Nothing in localStorage, use demo data
        gEmails = _getDemoEmails()
        _savePetsToStorage();
    }
}

function _savePetsToStorage() {
    storageService.save(KEY, gEmails)
}

function _getDemoEmails() {
    const emails = [
        { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594, id: utilService.makeId() },
        { subject: 'Kill it', body: 'he can done on', isRead: false, sentAt: 1551133930594, id: utilService.makeId() },
        { subject: 'hey bro', body: 'i can`t be anymore', isRead: false, sentAt: 1551133930594, id: utilService.makeId() },
        { subject: 'it`s alive!', body: 'she must', isRead: false, sentAt: 1551133930594, id: utilService.makeId() }
    ];
    return emails;
}