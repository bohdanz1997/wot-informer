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
})

function editModel(id, model, ignore = []) {
  $.ajax({
    type: 'POST',
    url: '/admin/' + model + '/get/' + id,
    success: function(data) {
      $('#formEdit').attr('action', '/admin/' + model + '/'+ data.id + '?_method=PUT')
      fillInputs(data, ignore)
    }
  })
}

function fillInputs(data, ignore = []) {
  var ignoreList = ['id', 'created_at', 'updated_at'].concat(ignore);
  for(var i in data) {
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
  for(var i = 0; i < data.length; i++) {
    ids.push(data[i].id)
  }
  return ids
}
