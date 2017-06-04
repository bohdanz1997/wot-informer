$(function () {

  $('#btnCreate').click(function() {
    $('#formCreate').submit()
  })

  $('#btnEdit').click(function() {
    $('#formEdit').submit()
  })
  $("#menu-toggle").click(function (e) {
    e.preventDefault()
    $("#wrapper").toggleClass("toggled")
  })

  $('input').click( function(e) {
    $(this).select();
  });

  var url = window.location.href;

  $(".sidebar-nav a").each(function() {
    if(url == (this.href)) {
      $(this).closest("li").addClass("active");
    }
  });

  $("#modalCreate").on("submit", "#formCreate", function(e) {
    e.preventDefault()
    validateData($(this), "#modalCreate")
  });

  $("#modalEdit").on("submit", "#formEdit", function(e) {
    e.preventDefault()
    validateData($(this), "#modalEdit")
  });
})

function validateData(form, modalName) {
  modal = $(modalName)
  $.ajax({
    url: form.attr("action"),
    method: form.attr("method"),
    data: form.serialize(),
    success: function(data) {
      if (data === "success") {
        modal.modal('toggle')
        location.reload()
        return
      }

      var errorDiv = $(modalName + ' #error-messages')
      errorDiv.removeClass('display-none')

      var string = ''
      for (var i = 0; i < data.length; i++) {
        string += '<li>' + data[i].message + '</li>'
      }
      errorDiv.html(string)
    }
  })
}

function editModel(id, model, ignore = []) {

  /*fetch('/admin/' + model + '/get/' + id, { method: 'POST' })
    .then(function(data) {
      console.log(data)
    })*/

  $.ajax({
    type: 'POST',
    url: '/admin/' + model + '/get/' + id,
    success: function(data) {
      $('#formEdit').attr('action', '/admin/' + model + '/'+ data.id
        + '?_method=PUT')
      fillInputs(data, ignore)
    }
  })
}

function fillInputs(data, ignore = []) {
  var ignoreList = ['id', 'created_at', 'updated_at'].concat(ignore);
  for (var i in data) {
    if (data.hasOwnProperty(i) && data[i] && !ignoreList.includes(i)) {
      var type = typeof(data[i]);
      if (type === 'string' || type === 'number')
        $('#formEdit :input[id=' + i + ']').val(data[i]);
      else if (type === 'object')
        $('#formEdit :input[id=' + i + ']').val(getIdsFromData(data[i]));
    }
  }
}

function getIdsFromData(data) {
  var ids = []
  for (var i = 0; i < data.length; i++) {
    ids.push(data[i].id)
  }
  return ids
}
