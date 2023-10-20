// config.js
module.exports = {
    module: {
        parser: {
            javascript: {
                worker: [
                    "*audioContext.audioWorklet.addModule()",
                    "*audioWorklet.addModule()",
                    "..."
                ]
            }
        }
    }
};
