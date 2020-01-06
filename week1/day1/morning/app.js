$(document).ready(function() {
  console.log("document ready")

  $("button").click(function() {
    const randomNum = Math.floor(Math.random() * 800 + 1)
    console.log(randomNum)

    console.log($("#sprite"))

    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/900/`,
      success: function(pokemon) {
        console.log(pokemon)
        console.log(pokemon.name)
        $("#name").text("Name: " + pokemon.name)
        // $("#name").append(pokemon.name)
        console.log(pokemon.sprites.front_default)
        $("#sprite")
          .attr("src", pokemon.sprites.front_default)
          .css("height", "100px")
          .css("width", "100px")
      },
      error: function(error) {
        console.log(error)
        alert(`it's them not us!`)
      }
    })
  })
})
