// Before you implement this class, create a test case for the following scenario:

// A teenager with a GPA of 3.5 wants to attend a concert that starts at 8 PM and lasts for 3 hours. The teenager is not grounded. The system should return true, with a message explaining why permission was granted.

const canGoOut = require('./problem');

describe('PermissionChecker', () => {
    test('Teenager with GPA 3.5 attending concert at 8 PM for 3 hours', () => {
        const teenager = { grounded: false, gpa: 3.5 };
        const event = { time: 20, duration: 3, type: 'concert' };
        expect(canGoOut(teenager, event)).toBe(true);
    });
    
    // A teenager with a GPA of 2.0 wants to attend a party that starts at 9 PM and lasts for 4 hours. The teenager is not grounded. The system should return false, with a message explaining why permission was denied.
  test('Teenager with GPA 2.0 attending party at 9 PM for 4 hours', () => {
    const teenager = { grounded: false, gpa: 2.0 };
    const event = { time: 21, duration: 4, type: 'party' };
    expect(canGoOut(teenager, event)).toBe(false);
  });
  
  // A teenager with a GPA of 2.8 wants to attend a study group that starts at 7 PM and lasts for 2 hours. The teenager is not grounded. The system should return true, with a message explaining why permission was denied.
  test('Teenager with GPA 2.8 attending study group at 7 PM for 2 hours', () => {
    const teenager = { grounded: false, gpa: 2.8 };
    const event = { time: 19, duration: 2, type: 'study group' };
    expect(canGoOut(teenager, event)).toBe(true);
  });
}
);




