return rejectWithRandomDelay(new AbusiveClientError());
}

if (this.values[text] && this.values[text][0]) {
  return resolveWithRandomDelay(this.values[text][0]);
}

if (this.values[text]) {
  return rejectWithRandomDelay(new NotAvailable(text));
}

return rejectWithRandomDelay(new Untranslatable());
}

/**
* @param {string} text
* @param {(err?: Error) => void} callback
*/
request(text, callback) {
if (typeof text !== 'string') {
  throw new BadRequest(
    `Expected string text when calling request(text, callback), actual ${typeof text}.`
  );
}

if (typeof callback !== 'function') {
  throw new BadRequest(
    `Expected callback function when calling fetch(text, callback), actual ${typeof callback}.`
  );
}

if (this.values[text] && this.values[text][0]) {
  mutex.current = true;
  callback(new AbusiveClientError());
  return;
}

if (this.values[text]) {
  this.values[text].shift();

  // If it's now available, yay, otherwise, nay
  setTimeout(
    () => callback(this.values[text][0] ? undefined : makeRandomError()),
    1
  );
  return;
}

callback(new Untranslatable());
}
}

function resolveWithRandomDelay(value) {
const timeout = Math.random() * 100;
return new Promise((resolve) => {
setTimeout(() => resolve(value), timeout);
});
}

function rejectWithRandomDelay(value) {
const timeout = Math.random() * 100;
return new Promise((_, reject) => {
setTimeout(() => reject(value), timeout);
});
}

function makeRandomError() {
return new Error(`Error code ${Math.ceil(Math.random() * 10000)}`);
}

class BadRequest extends Error {
constructor(message) {
super(message);
}
}
