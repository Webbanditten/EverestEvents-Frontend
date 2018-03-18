import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const events = [
  {
    id: 1,
    title: "Breakfast",
    description: "blabla bla bla bla bla bla ",
    time: new Date("03/25/2018 10:10"),
    city: "Billund", 
    postalCode: "7190", 
    address: "Kløvervej 1",
    image: "https://loremflickr.com/300/225/breakfast",
    imageLarge: "https://loremflickr.com/700/300/breakfast",
    category: 1
  },
  {
    id: 2,
    title: "Dinner",
    description: "I dont even know how to cook...",
    time: new Date("03/25/2018 10:10"),
    city: "Billund", 
    postalCode: "7190", 
    address: "Kløvervej 2",
    image: "https://loremflickr.com/300/225/dinner",
    imageLarge: "https://loremflickr.com/700/300/dinner",
    category: 2
  }
];

const categories = [
  {
    id: 1,
    name:"Breakfast"
  },
  {
    id: 2,
    name: "Dinner"
  }
];

const signups = [
  {
    eventId: 1, 
    name: "Patrick",
    address: "Kløvevej 22E",
    email: "noreply@wohlk.com",
    phonenumber: "12345678"
  }
];

class EventsApi {
  static getCategories() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], categories));
      }, delay);
    });
  }
  static getLocations() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let lookup = {};
        let result = [];

        for (let event, i = 0; event === events[i++];) {
          const name = event.location.city;

          if (!(name in lookup)) {
            lookup[name] = 1;
            result.push(name);
          }
        }
        resolve(Object.assign([], result));
      }, delay);
    });
  }
  static getEvents(category, location, fromDate, toDate) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], events));
      }, 1200);
    });
  }
  static getEvent(eventId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfEvent = events.findIndex(event => {
          return event.id == eventId;
        });
        if(indexOfEvent !== -1) {
          resolve(Object.assign({}, events[indexOfEvent]));
        }else{
          reject(`No event with id`);
        }
      }, delay);
    });
  }
  static signup(signupForm) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minLength = 1;
        if (signupForm.name.length < minLength) {
          reject(`Name must be at least ${minLength} character.`);
        }else if (signupForm.email.length < minLength) {
          reject(`Email address must be at least ${minLength} character.`);
        }else if (signupForm.phonenumber.length < minLength) {
          reject(`Phone number be at least ${minLength} character.`);
        }

        if (signupForm.eventId) {
          const existingSignup = signups.findIndex(a => a.email == signupForm.email && a.eventId == signupForm.eventId);
          if(existingSignup === -1) {
            signups.push(signupForm);
            resolve(Object.assign({}, signupForm));
          }else{
            signupForm.signedUp = true;
            reject(Object.assign({}, signupForm));
          }
        }
      }, delay);
    });
  }
  static cancelSignup(signupForm) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const existingSignup = signups.findIndex(a => a.email == signupForm.email && a.eventId == signupForm.eventId);
        signups.splice(existingSignup, 1);
        resolve();
      }, delay);
    });
  }
}

export default EventsApi;