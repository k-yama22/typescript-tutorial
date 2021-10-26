export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'yama', underTwenty: false };

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

profile.name = 'yama';
profile.age = 25;
profile.nationality = 'Japan';
