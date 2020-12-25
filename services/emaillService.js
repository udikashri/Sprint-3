import { utilService } from './utilService.js';
import { storageService } from './storageService.js';

const KEY = 'emailDB';
export const emailService = {
    query,
    deleteEmail,
    saveEmail
}
function saveEmail(newEmail) {
    console.log('before', newEmail);
    const newEmailItem = {
        subject: newEmail.subject,
        body: newEmail.body, isRead: false,
        sentAt: {
            date: newEmail.date,
            time: newEmail.time
        },
        id: utilService.makeId()
    }
    console.log('after', newEmailItem);
    gEmails.unshift(newEmailItem)
    _saveEmailsToStorage()

}
function deleteEmail(emailId) {

    gEmails = gEmails.filter(email => {
        return email.id !== emailId
    })
    _saveEmailsToStorage()
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
        _saveEmailsToStorage();
    }
}

function _saveEmailsToStorage() {
    storageService.save(KEY, gEmails)
}

function _getDemoEmails() {
    const emails = [
        {
            subject: 'Wassap?', body: 'Pick up!', isRead: false,
            sentAt: {
                date: '12-5',
                time: '17:24'
            }, id: utilService.makeId()
        },
        {
            subject: 'Kill it', body: 'he can done on', isRead: false,
            sentAt: {
                date: '11-5',
                time: '6:00'
            }, id: utilService.makeId()
        },
        {
            subject: 'hey bro', body: 'i can`t be anymore', isRead: false, sentAt: {
                date: '10-13',
                time: '15:24'
            }, id: utilService.makeId()
        },
        {
            subject: 'it`s alive!', body: 'she must', isRead: false,
            sentAt: {
                date: '10-10',
                time: '15:90'
            }, id: utilService.makeId()
        }
    ];
    return emails;
}