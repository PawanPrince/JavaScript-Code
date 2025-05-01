// ! STRINGS
// // // // // let str1 = "hello"; // double quote
// // // // // let str2 = "world"; // single quote

// // // // // // advantage -> multiline string & string interpolation
// // // // // let str3 = `javascript
// // // // // React js
// // // // // `; // backticks

// // // // // console.log(str1);
// // // // // console.log(str2);
// // // // // console.log(str3);

// // // // // function getFullName(firstname, lastname) {
// // // // //   return firstname + " " + lastname;
// // // // // }
// // // // // let fullname = getFullName("John", "Doe");
// // // // // console.log(fullname);// JohnDoe

// // // // // //! string interpolation using ${}
// // // // // function getEmail(firstname, lastname) {
// // // // // return `${firstname}.${lastname}@gmail.com`
// // // // // }
// // // // // let email = getEmail("John","Wick")
// // // // // console.log(email);

// // // // // console.log(getEmail("raj","kapoor"));

// // // // // // // ! Example Mutable and immutable
// // // // // // let str1 = "javascript"
// // // // // // console.log(str1[0]);// j

// // // // // // str1[0]="K"
// // // // // // console.log(str1);// javascript --> immutable

// // // // // // let arr1 = [10,20,30,40,50]
// // // // // // console.log(arr1[0]);//10

// // // // // // arr1[0] = 100
// // // // // // console.log(arr1);// [100,20,30,40,50] --> mutable

// // // // // let str = "javascript";
// // // // // //         0123456789
// // // // // //! property
// // // // // console.log(str.length); // 10

// // // // // //! string methods
// // // // // // ==>slice(start index, end index)
// // // // // // console.log(str.slice(0));//javascript
// // // // // // console.log(str.slice(0,4));//java
// // // // // // console.log(str.slice(4,0));//! no output
// // // // // // console.log(str.slice(-10,-6));//java
// // // // // // console.log(str.slice(-10,4));//java
// // // // // // console.log(str.slice(-6));// script

// // // // // // ==> subString(start index, end index)
// // // // // // console.log(str.substring(0)); //javascript
// // // // // // console.log(str.substring(0, 4)); //java
// // // // // // console.log(str.substring(4, 0)); // java due to swapping==>(0,4)
// // // // // // console.log(str.substring(-10,-6));//! no output does not accept -ve values
// // // // // // console.log(str.substring(-10,4));// java
// // // // // // console.log(str.substring(-6));// javascript

// // // // // // substr(start index, length) //! deprecated
// // // // // // console.log(str.substr(0));//javascript
// // // // // // console.log(str.substr(0,4));// java
// // // // // // console.log(str.substr(-10,4));//java
// // // // // // console.log(str.substr(4,0));//!No output

// // // // // // let str1 = "     hello    ";
// // // // // // //! trimStart()
// // // // // // console.log(str1.trimStart());

// // // // // // //! trimEnd()
// // // // // // console.log(str1.trimEnd());

// // // // // // //! trim()
// // // // // // console.log(str1.trim());

// // // // //! replace()
// // // // // let str = "Welcome Everyone, Welcome to Javacript Class";
// // // // // console.log(str.replace("Welcome", "Hello"));

// // // // // // ! replaceAll()
// // // // // console.log(str.replaceAll("Welcome", "Hello"));

// // // // // // ! toLowerCase()
// // // // // console.log(str.toLowerCase());

// // // // // //! toUpperCase()
// // // // // console.log(str.toUpperCase());

// // // // //Expected Output --> 908765XXXX
// // // // // let phoneNo = 9087654321;
// // // // // console.log(phoneNo);

// // // // // let strPhoneno = phoneNo.toString();
// // // // // // "9087654321"

// // // // // let slicedNo = strPhoneno.slice(0, 6);
// // // // // console.log(slicedNo); // "908765"

// // // // // //!padEnd(maxLength, fill String) or padStart(maxLength, fill String)
// // // // // let val = slicedNo.padEnd(10, "X"); // "908765XXXX"
// // // // // console.log(val); //908765XXXX

// // // // //! split()
// // // // let str = "Hello Javascript";
// // // // console.log(str.split()); //['Hello Javascript']

// // // // console.log(str.split(" ")); // ['Hello', 'Javascript']

// // // // console.log(str.split("")); //['H', 'e', 'l', 'l', 'o', ' ', 'J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

// // // // console.log(str.split("ll")); //['He', 'o Javascript']

// // // // // Hello Javascript
// // // // //["He","o Javascript"]
// // // // //["Hello ","avascript"]

// // // // function checkPallindrome(word) {
// // // //   let output = word.split("").reverse().join("");
// // // //   return output == word ? "Pallindrome" : "Not Pallindrome";
// // // // }
// // // // console.log(checkPallindrome("xyz"));// Not pallindrome
// // // // console.log(checkPallindrome("aba"));// Pallindrome

// // // // // ==  -> only data not datatype (loosely comparison)
// // // // // ===  -> data as well as datatype (strictly comparison)
// // // // let a = "10"
// // // // let b = 10
// // // // console.log(a == b);
// // // // console.log(a === b);

