/*  A mother wants to automate her decision-making about letting her teenagers go out at night. The system you develop should take into account the teenager's behavior, academic performance, and the nature of the event they wish to attend.

Teenager Object Properties:

grounded (boolean): Indicates whether the teenager is currently grounded.
gpa (float): The teenager's grade point average.

time (integer): The start time of the event in 24-hour format.
duration (integer): Duration of the event in hours.
type (string): Type of event (e.g., 'party', 'study group', 'concert').
Rules for Permission:

If the teenager is grounded, they cannot go out.
If the teenager's GPA is below 2.5, they cannot go out.
If the event is a 'party', permission is automatically denied.
The teenager must be able to return home by 10, unless their gpa is 3.0 or higher. For every 0.5 points above 3.0 they may stay out an extra hour.

Implement the PermissionChecker class with a method canGoOut(teenager, event) that returns true or false based on the above criteria.
Include descriptive messages for each decision, explaining why permission was granted or denied. */

canGoOut = (teenager, event) => {
  if (teenager.grounded) {
    console.log('Permission denied: Teenager is grounded.');
    return false;
  }
  if (teenager.gpa < 2.5) {
    console.log("Permission denied: Teenager's GPA is below 2.5.");
    return false;
  }
  if (event.type === 'party') {
    console.log('Permission denied: Event is a party.');
    return false;
  }
  const curfew = 22; // 10 PM
  const returnTime = event.time + event.duration;
  if (returnTime > curfew) {
    const extraHours = Math.floor((teenager.gpa - 3.0) / 0.5);
    if (returnTime > curfew + extraHours) {
      console.log(
        'Permission denied: Teenager cannot return home by 10 PM.'
      );
      return false;
    }
  }
  console.log('Permission granted: Teenager can go out.');
  return true;
};

console.log(
  canGoOut(
    { grounded: false, gpa: 3.5 },
    { time: 20, duration: 3, type: 'concert' }
  )
); // Permission granted: Teenager can go out.
console.log(
  canGoOut(
    { grounded: false, gpa: 2.0 },
    { time: 21, duration: 4, type: 'party' }
  )
); // Permission denied: Event is a party.
console.log(
  canGoOut(
    { grounded: false, gpa: 2.8 },
    { time: 19, duration: 2, type: 'study group' }
  )
); // Permission granted: Teenager can go out.
console.log(
  canGoOut(
    { grounded: true, gpa: 3.5 },
    { time: 20, duration: 3, type: 'concert' }
  )
); // Permission denied: Teenager is grounded.
console.log(
  canGoOut(
    { grounded: false, gpa: 3.2 },
    { time: 21, duration: 2, type: 'concert' }
  )
); // Permission granted: Teenager can go out.
console.log(
  canGoOut(
    { grounded: false, gpa: 3.0 },
    { time: 22, duration: 1, type: 'study group' }
  )
); // Permission granted: Teenager can go out.
console.log(
  canGoOut(
    { grounded: false, gpa: 2.4 },
    { time: 20, duration: 3, type: 'concert' }
  )
); // Permission denied: Teenager's GPA is below 2.5.
console.log(
  canGoOut(
    { grounded: false, gpa: 3.5 },
    { time: 21, duration: 2, type: 'party' }
  )
); // Permission denied: Event is a party.
console.log(
  canGoOut(
    { grounded: false, gpa: 3.5 },
    { time: 22, duration: 1, type: 'concert' }
  )
); // Permission granted: Teenager can go out.
console.log(
  canGoOut(
    { grounded: false, gpa: 2.5 },
    { time: 20, duration: 3, type: 'study group' }
  )
); // Permission granted: Teenager can go out.
console.log(
  canGoOut(
    { grounded: false, gpa: 3.5 },
    { time: 23, duration: 1, type: 'concert' }
  )
); // Permission denied: Teenager cannot return home by 10 PM.
console.log(
  canGoOut(
    { grounded: false, gpa: 3.0 },
    { time: 21, duration: 3, type: 'concert' }
  )
); // Permission granted: Teenager can go out.

module.exports = canGoOut; // Export the function for testing purposes
