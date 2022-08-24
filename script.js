import { activateAncient } from "./assets/js/activateAncient.js";
import { activateDifficulty } from "./assets/js/activateDifficulty.js";

const globalState = {
  ancient: 'azathoth',
  difficulty: 'normal',
};

activateAncient(globalState);
activateDifficulty(globalState);
