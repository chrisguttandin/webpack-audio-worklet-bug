// index.js
let audioContext = null;

if (audioContext === null) {
    audioContext = new AudioContext();
}

audioContext.audioWorklet.addModule(new URL("./worklet.js", import.meta.url));
