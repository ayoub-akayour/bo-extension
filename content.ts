
  var inputJSON
function flattenJSON(json) {
  const result = {}
  function flatten(obj, prefix = "") {
    if (typeof obj === "object" && obj !== null) {
      for (let key in obj) {
        flatten(obj[key], prefix + key + ".")
      }
    } else {
      result[prefix.slice(0, -1)] = obj
    }
  }

  flatten(json)
  return result
}

window.navigator.clipboard.readText().then((text) => {
  console.log(text)
  inputJSON = flattenJSON(JSON.parse(text))
  console.log(inputJSON)
  function generateRandomEmail(name) {
    // Extract first and last names
    const [firstName, lastName] = name.split(" ")

    // Generate a random number
    const randomNumber = Math.floor(Math.random() * 10)

    // Create the email
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${randomNumber}@gmail.com`

    return email
  }

  function orderValues(jsonData) {
    const resultArray = [];
  
    const getClientName = () => {
      const fullName = jsonData["0.client.name"];
      const [firstName, ...lastName] = fullName.split(" ");
      return {
        firstName,
        lastName: lastName.join(" "),
      };
    };
  
    const getEmail = () => {
      const email =
        jsonData["0.client.email"] === "N/A"
          ? generateRandomEmail(jsonData["0.client.name"])
          : jsonData["0.client.email"];
      return email;
    };
  
    const getMobile = () => {
      const mobile =
        jsonData["0.client.mobile"][0] === "0"
          ? jsonData["0.client.mobile"]
          : "0" + jsonData["0.client.mobile"];
      return mobile;
    };
  
    const getBankDetails = () => {
      
      if(jsonData["2.bank-details.1.account-number"] &&
      jsonData["2.bank-details.1.exp-date"] &&
      jsonData["2.bank-details.1.cv"]) {
        return {
          name: jsonData['2.bank-details.1.name'],
          accountNumber: jsonData['2.bank-details.1.account-number'],
          expMonth: jsonData["2.bank-details.1.exp-date"].split("-")[1][0] === '0' ? jsonData["2.bank-details.1.exp-date"].split("-")[1].slice(1) : jsonData["2.bank-details.1.exp-date"].split("-")[1],
          expYear: jsonData["2.bank-details.1.exp-date"].split("-")[0],
          cv: jsonData["2.bank-details.1.cv"],
        };
      }
      else {
        return {
          name: jsonData['2.bank-details.0.name'],
          accountNumber: jsonData['2.bank-details.0.account-number'],
          expMonth: jsonData["2.bank-details.0.exp-date"].split("-")[1][0] === '0' ? jsonData["2.bank-details.0.exp-date"].split("-")[1].slice(1) : jsonData["2.bank-details.0.exp-date"].split("-")[1],
          expYear: jsonData["2.bank-details.0.exp-date"].split("-")[0],
          cv: jsonData["2.bank-details.0.cv"],
        };
      }
    };
  
    resultArray.push(jsonData["4.general.reference"] );
    resultArray.push(jsonData["1.plan.total-policy-price"] );
    resultArray.push(getClientName().firstName );
    resultArray.push(getClientName().lastName );
    resultArray.push(getEmail() );
    resultArray.push(getMobile() );
    resultArray.push(jsonData["0.client.address"] );
    resultArray.push(jsonData["0.client.city"] );
    resultArray.push(jsonData["0.client.postcode"] );
    resultArray.push("united kingdom" );
  
    const bankDetails = getBankDetails();
    resultArray.push(bankDetails.name );
    resultArray.push(bankDetails.accountNumber );
    resultArray.push(bankDetails.expMonth );
    resultArray.push(bankDetails.expYear );
    resultArray.push(bankDetails.cv );
  
    return resultArray;
  }

  const test = orderValues(inputJSON)

  let currentIndex = 1 // To keep track of the current index in the array
  navigator.clipboard.writeText(test[0])
  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey) {
      // Check for CTRL + V
      if (event.key === "v") {
        pasteNextValue()
      }

      // Check for CTRL + something
      if (event.key.length === 1) {
        const shortcut = `CTRL + ${event.key.toUpperCase()}`
        setCurrentValueByShortcut(shortcut)
      }
    }
  })

  function pasteNextValue() {
    if (currentIndex < test.length) {
      const currentValue = test[currentIndex]
      navigator.clipboard
        .writeText(currentValue)
        .then(() => {
          console.log(`Value "${currentValue}" copied to clipboard`)
          currentIndex++
        })
        .catch((err) => {
          console.error("Unable to copy text to clipboard", err)
        })
    } else {
      console.log("All values pasted.")
    }
  }

  function setCurrentValueByShortcut(shortcut) {
    const item = test.find((element) => element.shortcut === shortcut)
    if (item) {
      const currentValue = item.value
      navigator.clipboard
        .writeText(currentValue)
        .then(() => {
          console.log(`Value "${currentValue}" copied to clipboard`)
        })
        .catch((err) => {
          console.error("Unable to copy text to clipboard", err)
        })
    } else {
      console.log(`No value found for shortcut: ${shortcut}`)
    }
  }
})
