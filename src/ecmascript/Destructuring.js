//Destructured assignment
let user = {
  userId: 31,
  userName: vamsi31,
  userContact: 12345
};

function getUserId({userId}) {
  return userId;
}

//The curly braces unpacks the object attributes.
getUserId(user); // 31

