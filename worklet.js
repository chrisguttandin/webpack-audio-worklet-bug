// worklet.js
import { TRUE } from './dependency.js';

class SomeProcessor extends AudioWorkletProcessor {
    process() {
        return TRUE;
    }
}
