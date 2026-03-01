// // Immediatally showcased
// const showcase = Promise.resolve("Robot present at Summit");
// showcase.then(msg=> console.log(msg))


// ///with async behavior
// const fetchRobot = new Promise((resolve, reject)=>{
//     setTimeout(()=>resolve("Robot present at summit"), 2000);

//  });
//   fetchRobot.then(msg => console.log(msg));

// //after verification phase .then()

// function verifyOwnership(){
//     return new Promise((resolve) =>{
//         setTimeout(()=> resolve("verified: Built by Galgotias Team"),
//     1500);
//     })
// }
// function announceIfVerified(result) {
//   console.log("Announcement:", result);
// }
// // Chained verification
// showcase
//   .then(() => verifyOwnership())
//   .then(result => announceIfVerified(result));
// // Output after 1.5s:
// // Announcement: Verified: Built by Galgotias Team


// // Ownership check fails instantly
// const ownershipCheck = Promise.reject("Ownership Mismatch Detected");

// ownershipCheck
//   .then(msg => console.log("All good:", msg))
//   .catch(err => console.error("Verification Error:", err));

//   //////////.catch()/////////////
//  ownershipCheck
//   .catch(error => {
//     console.error("Backlash Alert:", error);
//     issueClarification(error); // Respond to the problem
//   });

//   //////.finally()//////
// ownershipCheck
//   .finally(() => {
//     releaseOfficialStatement(); // Always communicate the outcome
//   });


//   /////promises.all()//////
//   Promise.all([
//   verifyHardware(),
//   verifyDocumentation(),
//   verifyProcurement()
// ])
// .then(() => announceInnovation())   // All checks passed
// .catch(error => handleCrisis(error)); // Any failure triggers crisis handling

// ///////allSettled/////////
// Promise.allSettled([
//   verifyHardware(),
//   verifyDocumentation(),
//   verifyProcurement()
// ])
// .then(results => {
//   console.log(results); // See success and failure of every check
// });

// ////////.race()///////////
// Promise.race([
//   viralExposure(),
//   officialClarification()
// ])
// .then(result => controlNarrative(result));


// //////promise.any////////
// Promise.any([
//   pressConference(),
//   publicStatement(),
//   socialMediaCampaign()
// ])
// .then(success => restoreTrust(success))
// .catch(() => escalateCrisis());


// 1--))
// The robotic dog is showcased instantly at the event
const showcase = Promise.resolve("Robot is present at the Summit");

// Log the event immediately
showcase.then(msg => console.log(msg));

/* Output:
Robot is present at the Summit
*/

// 2)
// Function to verify if the robot was built in-house
function verifyOwnership() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Verified: Built by Galgotias Team"), 1500);
  });
}

// Function to announce the verified result
function announce(result) {
  console.log("Announcement:", result);
}

// Chain verification after showcase
showcase
  .then(() => verifyOwnership())
  .then(result => announce(result));

/* Output after 1.5s:
Announcement: Verified: Built by Galgotias Team
*/

// 3)

// Ownership check fails instantly
const ownershipCheck = Promise.reject("Ownership mismatch detected");

ownershipCheck
  .then(msg => console.log("All good:", msg))
  .catch(err => console.error("Verification Error:", err));

/* Output:
Verification Error: Ownership mismatch detected
*/


// 4)

ownershipCheck
  .catch(error => {
    console.error("Backlash Alert:", error);
    // Respond to issue
    console.log("Issuing clarification to public...");
  });

/* Output:
Backlash Alert: Ownership mismatch detected
Issuing clarification to public...
*/

// 5)

ownershipCheck
  .finally(() => {
    console.log("Releasing official statement regardless of verification outcome.");
  });

/* Output:
Releasing official statement regardless of verification outcome.
*/

// 6)

function verifyHardware() { return Promise.resolve("Hardware OK"); }
function verifyDocumentation() { return Promise.resolve("Documentation OK"); }
function verifyProcurement() { return Promise.resolve("Procurement OK"); }

Promise.all([verifyHardware(), verifyDocumentation(), verifyProcurement()])
  .then(() => console.log("All verifications passed. Robot launch approved!"))
  .catch(error => console.error("Verification failed:", error));

/* Output:
All verifications passed. Robot launch approved!
*/

// 7)

const checkHardware = Promise.resolve("Hardware OK");
const checkDocumentation = Promise.reject("Docs missing");
const checkProcurement = Promise.resolve("Procurement OK");

Promise.allSettled([checkHardware, checkDocumentation, checkProcurement])
  .then(results => console.log("Audit Results:", results));

/* Output:
Audit Results: [
  { status: 'fulfilled', value: 'Hardware OK' },
  { status: 'rejected', reason: 'Docs missing' },
  { status: 'fulfilled', value: 'Procurement OK' }
]
*/

// 8)

const viralVideo = new Promise(res => setTimeout(() => res("Video went viral!"), 1000));
const officialClarification = new Promise(res => setTimeout(() => res("Official statement released"), 2000));

Promise.race([viralVideo, officialClarification])
  .then(result => console.log("First update:", result));

/* Output after 1s:
First update: Video went viral!
*/

// 9)

const pressConference = Promise.reject("Speaker unavailable");
const socialMediaCampaign = Promise.resolve("Campaign launched successfully");

Promise.any([pressConference, socialMediaCampaign])
  .then(result => console.log("Recovery success:", result))
  .catch(() => console.log("All recovery attempts failed"));

/* Output:
Recovery success: Campaign launched successfully
*/

// 10)

async function verifyRobot() {
  try {
    const result = await verifyOwnership();
    console.log("Async Verification Result:", result);
  } catch (err) {
    console.error("Async Error:", err);
  } finally {
    console.log("Async: Official statement released.");
  }
}

verifyRobot();

/* Output after 1.5s:
Async Verification Result: Verified: Built by Galgotias Team
Async: Official statement released.
*/

///////async-await////////
async function handleVerification() {
  try {
    const result = await verifyOwnership();
    announceIfVerified(result);
  } catch (error) {
    handleCrisis(error);
  }
}

handleVerification();
///asyn -await///////
function handleCrisis(error) {
  console.error("Crisis handled:", error);
}

async function handleVerification() {
  try {
    const result = await verifyOwnership();
    announceIfVerified(result);
  } catch (error) {
    handleCrisis(error);
  }
}

handleVerification();
const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Operation Successful");
    } else {
        reject("Operation Failed");
    }
});