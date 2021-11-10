let ourElement = document.querySelector(".our-element");
document.querySelector("p").remove();
// Make Function For Make Element.
function createElementAndAttrAndValue(
  tagName,
  cls,
  title,
  customAttrbiute,
  customAttrbiuteValue,
  content
) {
  let element = document.createElement(tagName);
  element.classList.add(cls);
  element.title = title;
  element.setAttribute(customAttrbiute, customAttrbiuteValue);
  element.innerHTML = content;
  return element;
}
// </>

ourElement.before(
  createElementAndAttrAndValue(
    "div",
    "start",
    "Start Element",
    "data-value",
    "start",
    "Start"
  )
);
ourElement.after(
  createElementAndAttrAndValue(
    "div",
    "start",
    "End Element",
    "data-value",
    "Start",
    "End"
  )
);

// ourElement.previousElementSibling.remove();
