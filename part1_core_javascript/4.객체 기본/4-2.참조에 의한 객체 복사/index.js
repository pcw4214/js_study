// 참조에 의한 객체 복사
//객체와 원시 타입의 근본적인 차이 중 하나는 객체는 ‘참조에 의해(by reference)’ 저장되고 복사된다는 것입니다.
//원시값(문자열, 숫자, 불린 값)은 ‘값 그대로’ 저장·할당되고 복사되는 반면에 말이죠.

let message = "Hello!";
let phrase = message;
// 같은 값을 공유하지 않는다. 실제로는 다른 박스에 담겨 잇는거와 다름이 없다

console.log()
// 하지만 객체는 다르다.
let user = { name: "John" };
let admin = user; // 참조값을 복사함
console.log(user);
console.log(admin);
// 그래서 실제로 admin으로 값을 바꾸면 user 객체가 바뀌게된다.
admin.name = "pete";
console.log(user.name);
// 개인적인 생각 만약 user를 바꾸면 adim이 바뀔까 ?
user.name = "aa";
console.log(admin.name); // 바뀐다.

