const videos = [
    document.querySelector( '#video-1' ),
    document.querySelector( '#video-2' ),
    document.querySelector( '#video-3' ),
    document.querySelector( '#video-4' )
];

const scale = (e) => {
    const videoContainer = e.target.parentNode,
          button         = videoContainer.querySelector( '.video-container__return' );

    videoContainer.classList.add( 'video-full' );
    button.style.display = 'block';

    switch ( e.target.id.split('-')[1] ) {
        case '1': videoContainer.style.transformOrigin = 'top left';     break;
        case '2': videoContainer.style.transformOrigin = 'top right';    break;
        case '3': videoContainer.style.transformOrigin = 'bottom left';  break;
        case '4': videoContainer.style.transformOrigin = 'bottom right'; break;
        default: break;
    }
};

const scaleDown = (e) => {
    const videoContainer = e.target.parentNode,
          button         = e.target;

    videoContainer.classList.remove( 'video-full' );
    button.style.display = 'none';
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