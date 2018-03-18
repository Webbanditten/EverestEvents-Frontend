/*eslint no-cond-assign: [0, "except-parens"]*/
import delay from './delay';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const events = [
  {
    id: 1,
    title: "Breakfast",
    description: "blabla bla bla bla bla bla ",
    time: new Date("03/25/2018 07:00"),
    city: "Billund", 
    postalCode: "7190", 
    address: "Kløvervej 1",
    image: "https://loremflickr.com/300/225/breakfast",
    imageLarge: "https://loremflickr.com/700/300/breakfast",
    category: 1
  },
  {
    id: 3,
    title: "BACON AND EGG",
    description: "BACON AND EGG!!! DELICIOUS!",
    time: new Date("03/28/2018 11:00"),
    city: "Vejle", 
    postalCode: "7100", 
    address: "Fjordvej 1",
    image: "https://loremflickr.com/300/225/baconandegg",
    imageLarge: "https://loremflickr.com/700/300/baconandegg",
    category: 1
  },
  {
    id: 2,
    title: "Dinner",
    description: "I dont even know how to cook...",
    time: new Date("03/27/2018 13:10"),
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

        for (let event, i = 0; event = events[i++];) {
          const name = event.city;

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
        let filteredEvents = [...events];

        if(category !== "" && category != null) {
          [...filteredEvents].forEach(event => {
            if(event.category != category) {
              const indexOfEvent = filteredEvents.indexOf(event);
              filteredEvents.splice(indexOfEvent, 1);
            }
          });
        }

        if(location !== "" && location != null) {
          [...filteredEvents].forEach(event => {
            if(event.city.toLowerCase() != location.toLowerCase()) {
              const indexOfEvent = filteredEvents.indexOf(event);
              filteredEvents.splice(indexOfEvent, 1);
            }
          });
        }
        
        if(!isNaN(new Date(fromDate)) && !isNaN(new Date(toDate))) {
          [...filteredEvents].forEach(event => {
            let before = moment(event.time).isSameOrAfter(fromDate, 'day');
            let after = moment(event.time).isSameOrBefore(toDate, 'day');
            if(!(before === true && after === true)) {
              const indexOfEvent = filteredEvents.indexOf(event);
              filteredEvents.splice(indexOfEvent, 1);
            }
          });
        }
        
        resolve(filteredEvents);
      }, 1600);
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