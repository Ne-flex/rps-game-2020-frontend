function callSingleEndpoint(PlayerAnswer){
    event.preventDefault();
    var x = document.getElementById("singlePlayerResult");

    const apiUrl =
    "https://vast-wildwood-04775.herokuapp.com/rps/?" +
    "&decisionPlayer1=" +
    PlayerAnswer;

    $.get({
        url: apiUrl,
        success: function (data, status) {
          console.log("Data: " + data + "\nStatus: " + status);
          var obj = JSON.parse(data);
          x.innerHTML = "  The Winner is:   " + "   " + obj.Winner;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          alert(textStatus, errorThrown);
        },
      });
}

export { callSingleEndpoint };