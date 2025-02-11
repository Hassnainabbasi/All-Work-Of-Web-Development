"use server"
export async function addRequest(data) {
    let add = await fetch(`http://localhost:3000/api/request`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    add = add.json();
  
    return add;
  }
  export async function getRequest(data) {
    try {
      let response = await fetch(`http://localhost:3000/api/request`, {
        method: "GET", // Ensure that your GET request is correct
      });
  
      // Wait for the response to be parsed into JSON
      let result = await response.json();

  
      return result; // Return the result, which will be awaited in the DoctorSection component
    } catch (error) {
      console.error("Error fetching requests:", error);
      return []; // In case of error, return an empty array
    }
  }
  export async function getSingleRequest(id) {
    try {
      let response = await fetch(`http://localhost:3000/api/request/${id}`);
      let result = await response.json();  // Directly get parsed JSON here
        console.log("requestId", result);  // Log the parsed response
        return result;  // Return the parsed request object
      
    } catch (error) {
      console.error("Error fetching request:", error);
      return null;  // Return null or handle errors as needed
    }
  }