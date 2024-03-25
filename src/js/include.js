// Simple JavaScript Processer for include tags (simple bad version of vue)

// Recursive function to process includes
function processIncludes(element) {
    const includeLocation = element.getAttribute("at");
    const includeHtmlContent = element.getAttribute("html");
  
    fetch(includeHtmlContent)
      .then(response => response.text())
      .then(data => {
        if (includeLocation !== null) {
          // If 'at' attribute is present, replace the content of the target element
          const locationElement = document.getElementById(includeLocation);
          console.log("Processing include: " + locationElement);
          locationElement.innerHTML = data;
  
          element.remove();
          // Process any sub-includes in the fetched HTML
          Array.from(locationElement.getElementsByTagName("include")).forEach(processIncludes);
        } else {
          // If 'at' attribute is not present, replace the <include> element itself
          //Remove tempDiv?
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = data;
          element.replaceWith(...tempDiv.childNodes);
  
          // Process any sub-includes in the new HTML
          Array.from(tempDiv.getElementsByTagName("include")).forEach(processIncludes);
        }
      });
  }
  
  // Get all <include> tags
  const includeElements = document.getElementsByTagName("include");
  
  // Iterate over all <include> tags
  Array.from(includeElements).forEach(processIncludes);
  