export {};

let profile1: object = { name: 'Yama' };
profile1 = { birthyear: 1996 };

let profile2: {} = { name: 'Yama' };
profile2 = { birthyear: 1996 };

let profile3: {name: string} = { name: 'Yama' };
// profile3 = { birthyear: 1996 };
profile3 = { name: 'Taro' };