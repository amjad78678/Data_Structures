// function getUserData(userId, callback) {
//   setTimeout(() => {
//     console.log("Fetching user Data");
//     callback({ id: userId, name: "amjadali", age: 18 });
//   }, 1000);
// }

// function getUserPosts(userId, callback) {
//   setTimeout(() => {
//     console.log("fetching user posts with using userId");
//     callback([
//       { id: 1, title: "Profile" },
//       { id: 1, title: "New car" },
//     ]);
//   }, 1000);
// }

// function getPostComments(postId, callback) {
//   setTimeout(() => {
//     console.log("getting post comments");
//     callback([{ commentId: 1, data: "good morning" }]);
//   }, 2000);
// }

// getUserData(123, (user) => {
//   console.log("iam user", user);
//   getUserPosts(user.id, (data) => {
//     console.log("posts", data);
//     getPostComments(data[0].id, (data) => {
//       console.log("post comments", data);
//     });
//   });
// });

//after call back is going to as pyramid of doom i dont like this so maked new thing that is promises

function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fetcing userData");
      resolve({ userId: 1, name: "amjadalai" });
    }, 1000);
  });
}
function getUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ postId: 1, title: "Profile" });
    }, 2000);
  });
}

getUserData(123)
  .then((data) => {
    console.log(data);
    return getUserPosts(data.id).then((data) => data);
  })
  .then((data) => {
    return getPostComments(postId).then(data);
  });
