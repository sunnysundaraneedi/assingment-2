const user = function (
  userID,
  firstName,
  lastName,
  email,
  password,
  gender,
  age,
  accountCreated
) {
  console.log(
    `userID : ${userID}, First Name : ${firstName}, Last Name : ${lastName}, Email : ${email}, Password : ${password}, Gender : ${gender}, Age : ${age}, accountCreated : ${accountCreated}`
  );
};

const userID = 12345;
const firstName = "Sheldon";
const lastName = "Cooper";
const email = "sheldoncooper@gmail.com";
const password = "amycooper";
const gender = "Male";
const age = 24;
const accountCreated = "Yes";

let result = user(
  userID,
  firstName,
  lastName,
  email,
  password,
  gender,
  age,
  accountCreated
);
