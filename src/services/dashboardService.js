const host = "http://localhost:8000/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5MDBiMDM0ZmRjZDQxYmI4YmYwODlkIn0sImlhdCI6MTY4NzE3OTcxOX0.szIvoxGomyetvi98vS0dDaKKCVD1at_PiziaEJ2kU3U";

export const dashboardService = async () => {
  try {
    const response = await fetch(`${host}/api/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
        "Access-Control-Allow-Origin": "http://localhost:8000"
      }
    });
    // const data=await response.json()
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
