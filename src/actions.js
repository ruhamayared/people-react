import { redirect } from "react-router-dom"

const URL = "http://localhost:4001"

export const createAction = async ({ request }) => {
  //Get data from form
  const formData = await request.formData()
  //Set up our new person to match schema
  const newPerson = {
    name: formData.get("name"),
    image: formData.get("image"),
    title: formData.get("title"),
  }
  //Send new person to our API
  await fetch(URL + "/people", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPerson),
  })
  //Redirect to index
  return redirect("/")
}
