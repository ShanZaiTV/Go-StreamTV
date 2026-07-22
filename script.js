const video = document.getElementById("video");

function playVideo(url){

    if(Hls.isSupported()){

        const hls = new Hls();

        hls.loadSource(url);

        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED,function(){

            video.play();

        });

    }

    else if(video.canPlayType('application/vnd.apple.mpegurl')){

        video.src = url;

        video.play();

    }

}

// Auto play
playVideo("https://duriantvph.itunerworldwide.workers.dev/master.live.m3u8");