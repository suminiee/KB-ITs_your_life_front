const personalInfo = {
  name: '이효석',
  age: `Don't ask this :)`,
  email: 'xenosign@naver.com',
};

const jobInfo = {
  position: '코딩 강사',
  experience: '?년',
};

// profile 이라는 하나의 객체로 저의 정보를 합쳐 주세요
// profile 객체에 addr : '서대문구' 키와 값을 추가해 주세요
// 구조 분해 할당으로 각각 변수에 할당 해주세요
// 각 변수 콘솔에 출력

const profile = {
  ...personalInfo,
  ...jobInfo,
  addr: '서대문구',
};

const { name, age, email, position, experience, addr } = profile;

// console.log('이름:', name);
// console.log('나이:', age);
// console.log('이메일:', email);
// console.log('직책:', position);
// console.log('경력:', experience);
// console.log('지역:', addr);

const locationOne = {
  country: 'korea',
};

const locationTwo = {
  country: 'korea',
};

//저장된 주소가 다르기 때문에 false가 뜬다.
console.log(locationOne === locationTwo);

//json 형태로 변경
const jsonLocation1 = JSON.stringify(locationOne);
console.log(jsonLocation1);

const jsonLocaion2 = JSON.stringify(locationTwo);
console.log(jsonLocaion2);
