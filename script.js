let shows = [];
let userInput;

$(".addNew").click(function() {
    userInput = $(".newShow").val();
    shows.push(userInput);
    $(".showList").append("<img src=" + shows[0] + ">");
    $(".showList").append("<img src=" + shows[1] + ">");
    $(".showList").append("<img src=" + shows[2] + ">");
$(".numShows").text(shows.length);

});