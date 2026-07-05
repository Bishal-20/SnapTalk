//audio setup

const keyStrokeSound = [
    new Audio ("sounds/frontend_public_sounds_keystroke1.mp3"),
    new Audio ("sounds/frontend_public_sounds_keystroke1.mp3"),
    new Audio ("sounds/frontend_public_sounds_keystroke1.mp3"),
    new Audio ("sounds/frontend_public_sounds_keystroke1.mp3"),   
];

function useKeyboardSound() {
    const playRandomKeyStrokeSound = () =>{
        const randomSound = keyStrokeSound[Math.floor(Math.random()*keyStrokeSound.length)];

        randomSound.currentTime= 0;
        randomSound.play().catch(error => console.log("Audio play failed: ",error))
    };

    return {playRandomKeyStrokeSound}
}

export default useKeyboardSound;