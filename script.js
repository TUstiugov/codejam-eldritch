import { activateAncient } from "./assets/js/activateAncient.js";
import { activateDifficulty } from "./assets/js/activateDifficulty.js";
import { activateShuffleButton } from "./assets/js/activateShuffleButton.js";

const globalState = {
  ancient: 'azathoth',
  difficulty: 'normal',
};

activateAncient(globalState);
activateDifficulty(globalState);
activateShuffleButton(globalState);
