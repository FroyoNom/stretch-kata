const organizeInstructors = function(instructors) {
  let result = {};
  instructors.forEach(function(el) {
    if (!result[el.course]) {
      result[el.course] = [];
      result[el.course].push(el.name);
    } else {
      result[el.course].push(el.name);
    }
  });
  return result;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" }
  ])
);

console.log("---");

console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" }
  ])
);
