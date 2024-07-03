

export const response = await fetch("http://localhost:4000/api/drinks")
    const json = await response.json()
    const cafes = json.data 
    console.log(cafes)
