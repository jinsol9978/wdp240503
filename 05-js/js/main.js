// js구문
// 함수란 특정 작업을 수행하는 코드 블록
function myF() {
    const demo = document.querySelector('.demo');

    // document.getElementById('demo').innerHTML = 'Hello javascript!';
    demo.innerHTML = 'Hello javascript!';
    demo.style.color = 'red';
    demo.fontsize = '30px';
    demo.style.backgroundColor = 'yellow';
    demo.style.transform = 'translateX(100px, 100px) rotate(45deg) scale(1.5)';
}

// 변수
// 변수란 데이터를 저장하는 공간
// 변수 선언
let a = 20;
a = 10;
console.log(a);

const b = 30;
// b = 40
console.log(b);

// 데이터 타입
// 숫자(number)
let num1 = 1;
let num2 = 2;
console.log(num1 + num2); //3

// 문자역 (string)
let str1 = '1';
let str2 = '2';
console.log(str1 + str2); //12

//불린(boolean)
const isTrue = true;
const isFalse = false;
console.log(isTrue, isFalse);

// 객체(object)
const post = {
    img: 'https://adcr.shopping.naver.com/adclk.nhn?x=uFZyZLzDvic2MEddiYAL%2BP%2F%2F%2Fw%3D%3Dsmd8zBqMJQLjellaiFGSaxX%2F38UQVCT4dP8NnFC0WCzvt6yxuE90alRtFYpp%2BuYPqzM2CmU%2FJAmh2ByzkbR3Ae4XpYeG8am3dcLdd%2F2qMblc7mtMvTqgmBdhs%2F2kPePey0DZX40V%2BuJ%2FWk8GA08jSUdoP6dS0LtDI43OTWkMcd2SQBEs4rau9M0CtCgJIF9T1ZylTOmOllmJxeQakdH%2F%2BkVU3y13KrEuAaLqkc4yBYuWMHnypgMYOj%2BppYy8krfLQlSa6ZoX%2F4DOrnkM8TJEQtf7NRxJhj7peoLXgd3%2FDPC0aZqz8iUS3PJtIadahAoWfPMWHqCIRJj5ZsPcBncPzr58w5UpaWWwXPFQMFZRO6Vq9BwsJc4HUJ9TGWpU5y%2BDIRLEHylokeW75AC3lnHbUoVa9OLYhKJUcHaPIGbHu3lj42AcVjdhAdkMBvwZM21o18%2Fc2EOD%2FgsgOlYXIrY0X%2FDd54JeKSPBE8uLVRYSjakcLtXrut8feI21UDGUaa4gz98ghQSDuIFQbb3mBrjvKyw%3D%3D',
    title: '독보적인 예쁨 인생원피스 45%',
};
console.log(post);
console.log(post.img);
console.log(post.title);

// 배열(array)
// 순서가 있는 리스트
const arr = [1, 2, 3, 4, 5];
console.log(arr[0]); //1

const users = [
    { name: '홍길동', age: 20 },
    { name: '김철수', age: 30 },
    { name: '이영희', age: 40 },
];

console.log(users[1]); //{name: '김철수', age: '20'}
console.log(`${users[1].name}님 안녕하세요.`); //김철수

//함수
// 기명 함수
function 함수이름() {}
함수이름();
// 익명 함수
const fun1 = function () {
    console.log('fun1');
};
const fun2 = () => {
    console.log('fun2');
};
fun2();

// 조건문
const aa = 1;

// if (조건) {조건이 참일 때 실행되는 코드}
if (a === 1) {
    console.log('aa는 1입니다');
} else if (a === 1) {
    ㅇㄹㅇ;
} else {
    // 조건이 거짓일 때 실행되는 코드
    console.log('aa는 1이 아닙니다.');
}
// if else문

// slide
let current = 0;
const lstSlide = document.querySelector('.slide ul');
const slideCount = document.querySelectorAll('.slide li');

console.log(slideCount); //3
// console.log(lstSlide)
// lstSlide.style.border = '1px solid purple'

// 3초마다 슬라이드가 넘어가도록
setInterval(function () {
    slide(); //슬라이드 함수 호출
}, 3000);

// 슬라이드 함수 정의
function slide() {
    // current 0,1,2
    // 0 * -100% = 0 (left: 0)
    // 1 * -100% = -100% (left: -100%)
    // 2 * -100% = -200% (left:-200%)
    current = (current + 1) % 3;

    lstSlide.style.left = current * -100 + '%';
}
