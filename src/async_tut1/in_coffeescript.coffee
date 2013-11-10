$( () ->
  $('#search-form').on('submit', ()->
    $.ajax({
      url: "https://api.angel.co/1/search?query=" + $('#search').val()
      method: 'GET'
      success: (result) ->
        list = $('<ul>')
        $('#results').html(list)
        for result in results
          list.append($('<li>'))
          for key in result
            list.append(key + ": " + result[key])
  )
)