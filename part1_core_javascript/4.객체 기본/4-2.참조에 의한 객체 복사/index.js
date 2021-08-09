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

// 참조에 의한 비교
//객체 비교 시 동등 연산자 ==와 일치 연산자 ===는 동일하게 동작합니다.

let a = {};
let b = a; // 참조에 의한 복사

alert( a == b ); // true, 두 변수는 같은 객체를 참조합니다.
alert( a === b ); // true

let a = {};
let b = {}; // 독립된 두 객체

alert( a == b ); // false

// 여러 객체를 assign 메서드를 사용하여 하나로 병합시키는 방법.
let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// permissions1과 permissions2의 프로퍼티를 user로 복사합니다.
Object.assign(user, permissions1, permissions2);

// user = { name: "John", canView: true, canEdit: true }

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };;

let newUser = {}

Object.assign(user, permissions1, permissions2);
console.log(user);
console.log(permissions1);
console.log(permissions2);
Object.assign(newUser, user);
console.log(newUser);

newUser.name = "park";

//깊은 복사
let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = Object.assign({}, user);
  
  alert( user.sizes === clone.sizes ); // true, 같은 객체입니다.
  
  // user와 clone는 sizes를 공유합니다.
  user.sizes.width++;       // 한 객체에서 프로퍼티를 변경합니다.
  alert(clone.sizes.width); // 51, 다른 객체에서 변경 사항을 확인할 수 있습니다.