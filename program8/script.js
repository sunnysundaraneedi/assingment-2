const user = {
  userID: 1234,
  firstName: "Sheldon",
  lastname: "Cooper",
  password: "amycooper",
  country: "USA",
  continent: "North America",
};

console.log(user);
delete user.country;
delete user.continent;
console.log(user);

for (let prop in user) {
  console.log(`${prop} : ${user[prop]}`);
}
