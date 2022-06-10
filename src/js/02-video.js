import Player from '@vimeo/player';
import lodash from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const key = 'videoplayer-current-time';
const playTime = localStorage.getItem(key);

const onPlay = function (event) {
    const currenttime = event.seconds;
    // console.log(currenttime)
    localStorage.setItem(key, currenttime)
    // console.log(onPlay)
};

if (playTime) {
    player.setCurrentTime(playTime);
}

player.on('timeupdate', lodash(onPlay, 1000));


