fetch("/json.json")
.then(response => response.json())
.then(data => {
  const x = JSON.stringify(data)
  console.log(x)
})
