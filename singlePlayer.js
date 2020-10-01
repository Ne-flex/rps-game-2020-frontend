import { callSingleEndpoint } from "./callSingleEndpoint.js";

function handleSubmitSingle(event) {
    const PlayerAnswer = $("#playerAnswer").val();
    callSingleEndpoint(PlayerAnswer);
}

$(document).ready(function() {
    $("#SubmitBtn").click(handleSubmitSingle);
});