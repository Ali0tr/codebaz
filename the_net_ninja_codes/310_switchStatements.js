// switch statements
// uses strict equality
const grade = "D";

switch (grade) {
  case "A":
    console.log("you got an A!");
    break; // don't foreget to write break; other wise it runs the rest of the code untill it get another break;
  case "B":
    console.log("you got an B!");
    break;
  case "C":
    console.log("you got an C!");
    break;
  case "D":
    console.log("you got an D!");
    break;
  case "E":
    console.log("you got an E!");
    break;
  default:  // if non of those cases were true it runs the default;
    console.log("not a valid grade");
}
