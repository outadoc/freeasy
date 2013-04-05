var rawVideoUrl;

function getLinkFromFlash() {
    var playerConfig = ($('#FlowPlayer').attr('flashvars')).replace("id=FlowPlayer&config=", "").replace(/'/g, '"');
    playerConfig = JSON.parse(playerConfig);
    return decodeURIComponent(playerConfig.clip.url);
}

function addLinksToPage() {
    $("#watch7-headline").prepend('<b>Other player: </b><a href="javascript:void(0);" id="freeasy-link-html5">HTML5 Player</a>&nbsp;\
        <a href="' + rawVideoUrl + '" id="freeasy-link-raw">Raw video</a> (will only work for 720p and up)<br />');
    $("#watch7-headline").prepend('<b>Player size: </b><a href="javascript:void(0);" id="freeasy-link-size-normal">Normal</a>&nbsp;\
        <a href="javascript:void(0);" id="freeasy-link-size-wide">Wide</a><br /><br />');
    
    $("#freeasy-link-html5").click(replacePlayerWithHTML5);
    $("#freeasy-link-size-wide").click(function() {
        $("#watch7-main-container").addClass('watch-wide');
        $("#player-api").css({'width': 854, 'height': 510});
    });
    $("#freeasy-link-size-normal").click(function() {
        $("#watch7-main-container").removeClass('watch-wide');
        $("#player-api").css({'width': 640, 'height': 390});
    });
}

function replacePlayerWithHTML5() {
    $('#player-api').html('<video id="freeasy-html5-player" width="100%" height="100%" controls><source src="' + rawVideoUrl + '" type="video/mp4"></video>');
    document.getElementById('freeasy-html5-player').play();
}

if($('#FlowPlayer') != undefined) {
    rawVideoUrl = getLinkFromFlash();
    addLinksToPage();
}