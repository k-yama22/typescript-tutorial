export {};

let name: any = 'Yama';

name = 'taro';

let nickname = 'yama' as const;
nickname = 'yama';


let profile = {
  name: 'yama',
  height: 165
} as const;

// profile.name = 'taro';
// profile.height = 180;