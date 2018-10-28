const videos = [
            document.querySelector( '#video-1' ),
            document.querySelector( '#video-2' ),
            document.querySelector( '#video-3' ),
            document.querySelector( '#video-4' )
        ],
      brightness = [
            document.querySelector( '#video-1_brightness' ),
            document.querySelector( '#video-2_brightness' ),
            document.querySelector( '#video-3_brightness' ),
            document.querySelector( '#video-4_brightness' )
        ],
      contrast = [
            document.querySelector( '#video-1_contrast' ),
            document.querySelector( '#video-2_contrast' ),
            document.querySelector( '#video-3_contrast' ),
            document.querySelector( '#video-4_contrast' )
        ]
;

const scale = (e) => {
    const videoContainer = e.target.parentNode,
          video          = videoContainer.querySelector( '.video' ),
          volumeMeter    = videoContainer.querySelector( '.video-container__volume' );

    videoContainer.classList.add( 'video-full' );

    video.muted = false;

    // audio

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    const analyser = audioCtx.createAnalyser();
    analyser.connect(audioCtx.destination);

    const source = audioCtx.createMediaElementSource( video );
    source.connect(analyser);
    analyser.fftSize = 32;

    const streamData = new Uint8Array(analyser.frequencyBinCount);

    const getVolume = () => {
        analyser.getByteFrequencyData(streamData);
        return streamData.reduce((acc, val) => acc + val, 0) / 255 / streamData.length;
    };

    const loop = () => {
        const volume = getVolume();
        volumeMeter.style.transform = `scaleX(${ volume })`;
        requestAnimationFrame(loop);
    };

    loop();

    switch ( e.target.id.split('-')[1] ) {
        case '1': videoContainer.style.transformOrigin = 'top left';     break;
        case '2': videoContainer.style.transformOrigin = 'top right';    break;
        case '3': videoContainer.style.transformOrigin = 'bottom left';  break;
        case '4': videoContainer.style.transformOrigin = 'bottom right'; break;
        default: break;
    }
};

const scaleDown = (e) => {
    const videoContainer = e.target.closest( '.video-container' ),
          video          = videoContainer.querySelector( '.video' );

    video.muted = true;

    videoContainer.classList.remove( 'video-full' );
};

const changeBrightness = (e) => {
    const videoContainer = e.target.closest( '.video-container' ),
          video = videoContainer.querySelector( '.video' );

    video.style.filter = `brightness(${e.target.value}%)`;
};

const changeContrast = (e) => {
    const videoContainer = e.target.closest( '.video-container' ),
          video = videoContainer.querySelector( '.video' );

    video.style.filter = `contrast(${e.target.value}%)`;
};


videos.forEach(
    video => {
        video.addEventListener( 'click', scale );
        video
            .parentNode
            .querySelector( '.video-container__return' )
            .addEventListener( 'click', scaleDown );
    }
);
brightness.forEach(
    control => control.addEventListener( 'input', changeBrightness )
);
contrast.forEach(
    control => control.addEventListener( 'input', changeContrast )
);