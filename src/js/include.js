// Simple JavaScript Processer for include tags (simple bad version of vue)

// Recursive function to process includes
function processIncludes(element) {
  const includeLocation = element.getAttribute("at");
  const includeHtmlContent = element.getAttribute("html");

  fetch(includeHtmlContent)
    .then((response) => response.text())
    .then((data) => {
      let locationElement;
      if (includeLocation !== null) {
        locationElement = document.getElementById(includeLocation);
        console.log("Processing include: " + locationElement);
        locationElement.innerHTML = data;
        element.remove();
      } else {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = data;
        element.replaceWith(...tempDiv.childNodes);
        locationElement = tempDiv;
      }

      // Process any sub-includes in the fetched HTML
      Array.from(locationElement.getElementsByTagName("include")).forEach(
        processIncludes
      );

      // Execute any scripts in the fetched HTML
      Array.from(locationElement.getElementsByTagName("script")).forEach(
        (oldScript) => {
          const newScript = document.createElement("script");
          Array.from(oldScript.attributes).forEach((attr) =>
            newScript.setAttribute(attr.name, attr.value)
          );
          if (oldScript.src) {
            newScript.src = oldScript.src;
          } else {
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
          }
          oldScript.parentNode.replaceChild(newScript, oldScript);
        }
      );
    });
}

// Get all <include> tags
const includeElements = document.getElementsByTagName("include");

// Iterate over all <include> tags
Array.from(includeElements).forEach(processIncludes);

