// function audioPlayer(){
//     //alert("hi");
//     // sets currentSong equal to index 0 automatically
//     var currentSong = 0; 
//     $("audioPlayer")[0].src = $("playlist li a")[0];
//     $("audioPlayer")[0].play();//will play on start
//     //when song name is clicked, should play song.
//     $("#playlist li a ") .click(function (e) {
//         e.preventDefault();
//         $("audioPlayer")[0].src = this;
//         $("audioPlayer")[0].play();
//         //previous song no longer has id = current-song
//         $("playlist li").removeClass("current-song"); 
//         currentSong = $(this).parent().index();
//         $(this).parent().addClass("current-song");
//     });
//     //when current song ends, plays next song in array
//     $("audioPlayer")[0].addEventListener("ended", function() {
//         currentSong ++
//         if(currentSong == $("playlist li a").length)
//         currentSong = 0;
//     $("#playlist li").removeClass("current-song");
//     $("#playlist li:eq("+currentSong+")").addClass("current-song")
//     $("#audioPlayer")[0].src = $("playlist li a")[currentSong].href;
//     $("#audioPlayer")[0].play();
//     })

// };