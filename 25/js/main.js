// Assignment Link ==> https://elzero.org/javascript-bootcamp-assignments-lesson-from-094-to-100/
const app = () => {
  const inputFields = document.querySelectorAll("input");
  const currentElement = document.querySelector(".assign > div:frist-of-type");
  const allClasses = document.querySelector(".classes-list > div");
  // A function for show all of the avaliable classes on the current element.
  function showClasses() {
    if (currentElement.classList.value !== "") {
      allClasses.innerHTML = "";
      currentElement.classList.value
        .split(" ")
        .sort()
        .forEach((cls) => {
          curClass = document.createElement("span");
          curText = document.createTextNode(cls);
          curClass.append(curText);
          allClasses.append(curClass);
        });
    } else {
      allClasses.innerHTML = "No Classes To Show";
    }
  }
  showClasses();
  inputFields.forEach((input) => {
    input.addEventListener("blur", function () {
      if (this.value.split(" ") !== "") {
        this.value
          .trim()
          .split(" ")
          .forEach((cls) => {
            this.className === "classes-to-add"
              ? currentElement.classList.add(cls.toLowerCase())
              : currentElement.classList.remove(cls.toLowerCase());
          });
        this.value = "";
        showClasses();
      }
    });
  });
  // Call the showClasses function to make classes visiable at first.
};
app();
/* // Assignment Link ==> https://elzero.org/javascript-bootcamp-assignments-lesson-from-094-to-100/

const app = () => {
  const inputFields = document.querySelectorAll("input");
  const currentElement = document.querySelector(".assign > div:first-of-type");
  const allClases = document.querySelector(".classes-list > div");

  // A function for show all of the avaliable classes on the current element.
  function showClasses() {
    if (currentElement.classList.value !== "") {
      allClases.innerHTML = "";
      currentElement.classList.value
        .split(" ")
        .sort()
        .forEach((cls) => {
          let curClass = document.createElement("span");
          let curText = document.createTextNode(cls);
          curClass.append(curText);
          allClases.append(curClass);
        });
    } else {
      allClases.innerHTML = "No Classes To Show";
    }
  }
  // Call the showClasses function to make classes visiable at first.
  showClasses();

  inputFields.forEach((input) => {
    input.addEventListener("blur", function () {
      if (this.value.trim() !== "") {
        this.value
          .trim()
          .split(" ")
          .forEach((cls) => {
            this.className === "classes-to-add"
              ? currentElement.classList.add(cls.toLowerCase())
              : currentElement.classList.remove(cls.toLowerCase());
          });
        this.value = "";
        showClasses();
      }
    });
  });
};

app();
 */
