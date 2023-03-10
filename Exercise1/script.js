function ChangeName() {
    let person = prompt("Please enter your name");
    let text;
    if (person == null || person == "") {
      text = "Hello";
    } else {
      text = `Hello ${person}`;
    }
    document.getElementById("inputName").innerHTML = text;
    console.log("The button has been clicked");
}