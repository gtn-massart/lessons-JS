/* 
    On peut intégrer de la musique et des vidéos à l'aide des éléments <audio> et <video>.
    Ces élèments peuvent réagir à énormement d'évènements en rapport avec ces éléments.

    Découvrons ensemble : pause, play, loadeddata, playing, progress, etc...
*/

    const video = document.querySelector('video');

    video.addEventListener('loadeddata', () => console.log("Data loaded"));
    video.addEventListener('play', () => console.log("Play"));
    video.addEventListener('pause', () => console.log("Pause"));
    video.addEventListener('timeupdate', () => console.log("time update"));
    video.addEventListener('volumechange', () => console.log("Volume changed"));

/* 
    Même combat pour l'élément <audio>.
*/

    const audio = document.querySelector('audio');

    audio.addEventListener('loadeddata', () => console.log("Data loaded"));
    audio.addEventListener('play', () => console.log("Play"));
    audio.addEventListener('pause', () => console.log("Pause"));
    audio.addEventListener('timeupdate', () => console.log("time update"));
    audio.addEventListener('volumechange', () => console.log("Volume changed"));