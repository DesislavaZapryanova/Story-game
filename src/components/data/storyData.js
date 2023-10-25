// storyData.js

export const textNodes = [
  {
    id: 1,
    h1: 'The Arrival',
    img: '../../public/images/arrival-1.jpg',
    text: 'As your boat approaches Ember Isle, you see two possible landing spots...',
    options: [
      {
        text: 'Secluded Cove',
        setState: { choseSecludedCove: true },
        nextText: '2a',
      },
      {
        text: 'Bustling Port',
        setState: { choseSecludedCove: false },
        nextText: '2b',
      },
    ],
  },
  {
    id: '2a',
    h1: 'The Secluded Cove',
    img: 'cove.jpg',
    text: 'You choose the secluded cove, finding tranquility in its peaceful surroundings. Exploring the island, you come across a fork in the path. One leads through a dense jungle, and the other winds along a cliffside. Which way will you go?',
    options: [
      {
        text: 'Through the Jungle',
        setState: { choseJunglePath: true },
        nextText: '3a',
      },
      {
        text: 'Cliffside Path',
        setState: { choseJunglePath: false },
        nextText: '3b',
      },
    ],
  },
  {
    id: '2b',
    h1: 'The Bustling Port',
    img: 'arrival.jpg',
    text: "Opting for the bustling port, you embrace the vibrant energy of traders and adventurers. You hear rumors of a wise old sailor who knows the island's secrets. Do you:",
    options: [
      {
        text: 'Seek out the Wise Sailor',
        setState: { seekWiseSailor: true },
        nextText: '3c',
      },
      {
        text: 'Explore the Market',
        setState: { seekWiseSailor: false },
        nextText: '3d',
      },
    ],
  },
  {
    id: '3a',
    h1: 'The Jungle',
    img: 'jungle.jpg',
    text: 'The jungle is dense and disorienting. You hear mysterious sounds around you. Suddenly, you encounter a fork in the path with two ancient statues. One points left, and the other points right. Which way do you choose?',
    options: [
      {
        text: 'Left Path',
        setState: { choseLeftPath: true },
        nextText: '4a',
      },
      {
        text: 'Right Path',
        setState: { choseLeftPath: false },
        nextText: '4b',
      },
    ],
  },

  {
    id: '3b',
    h1: 'The Cliffside Path',
    text: 'Deciding against the rickety bridge, you cautiously make your way downhill. The cliffside path offers breathtaking views of the ocean. As you proceed, you encounter a rickety bridge. Do you:',
    options: [
      {
        text: 'Cross the Bridge',
        setState: { crossedBridge: true },
        nextText: '4c',
      },
      {
        text: 'Go Downhill',
        setState: { crossedBridge: false },
        nextText: '4d',
      },
    ],
  },

  {
    id: '3c',
    h1: 'The Wise Sailor',
    text: "The wise sailor shares a piece of advice: 'Beware the guardian of the caves.' You can either:",
    options: [
      {
        text: 'Enter the Caves',
        setState: { enterCaves: true },
        nextText: '4e',
      },
      {
        text: 'Thank the Sailor and Set Sail',
        setState: { enterCaves: false },
        nextText: '4f',
      },
    ],
  },

  {
    id: '3d',
    h1: 'Explore the Market',
    text: 'Intrigued by the treasure map seller, you decide to purchase the detailed map. In the market, you find a treasure map seller. He claims to have a detailed map of the island. Do you:',
    options: [
      {
        text: 'Buy the Map',
        setState: { buyTreasureMap: true },
        nextText: '4g',
      },
      {
        text: 'Decline and Explore on Your Own',
        setState: { buyTreasureMap: false },
        nextText: '4h',
      },
    ],
  },

  {
    id: '4a',
    h1: 'Left Path',
    text: "You stumble upon a hidden temple. Inside, there are traps and puzzles. Solving them, you reach the treasure room. Congratulations! You've Found the Lost Treasure of Ember Isle!",
    options: [
      {
        text: 'Continue your journey',
        setState: { foundTreasure: true },
        nextText: 'ending1',
      },
      {
        text: 'Reflect on your adventure',
        setState: { foundTreasure: false },
        nextText: 'ending2',
      },
    ],
  },

  {
    id: '4b',
    h1: 'Right Path',
    text: "The path leads you to quicksand, and you get stuck. With no help in sight, you become another tale lost to the island's mysteries.",
    options: [
      {
        text: 'Accept your fate',
        setState: { quicksandGrasp: true },
        nextText: 'ending2',
      },
      {
        text: 'Fight against the quicksand',
        setState: { quicksandGrasp: false },
        nextText: 'ending2',
      },
    ],
  },

  {
    id: '4c',
    h1: 'Cross the Bridge',
    text: "The bridge collapses under your weight, and you fall into a cavern. It's dark, but you hear distant growls.",
    options: [
      {
        text: 'Light a Torch ',
        setState: { lightTorch: true },
        nextText: '5a',
      },
      {
        text: 'Explore in Darkness  ',
        setState: { lightTorch: false },
        nextText: '5b',
      },
    ],
  },

  {
    id: '4d',
    h1: 'Go Downhill',
    text: 'You discover an ancient temple entrance. As you approach, you hear chanting from within.',
    options: [
      {
        text: 'Enter the Temple  ',
        setState: { enterTemple: true },
        nextText: '5c',
      },
      {
        text: 'Bypass the Temple',
        setState: { enterTemple: false },
        nextText: '5d',
      },
    ],
  },

  {
    id: '4e',
    h1: 'Enter the Caves',
    text: 'The caves lead you to a massive chamber guarded by a mythical creature. You can:',
    options: [
      {
        text: 'Face the Guardian  ',
        setState: { faceGuardian: true },
        nextText: '5e',
      },
      {
        text: 'Retreat from the Caves ',
        setState: { faceGuardian: false },
        nextText: '5f',
      },
    ],
  },

  {
    id: '4f',
    h1: 'Thank the Sailor and Set Sail',
    text: 'Expressing gratitude to the wise sailor, you set sail, avoiding the potential dangers of the island.',
    options: [
      {
        text: 'Continue your journey',
        setState: { continueJourney: true },
        nextText: 'ending1',
      },
      {
        text: 'Reflect on your adventure',
        setState: { continueJourney: false },
        nextText: 'ending2',
      },
    ],
  },

  {
    id: '4g',
    h1: 'Buy the Map',
    text: 'Following the map through treacherous terrain, you encounter a hidden cave.',
    options: [
      {
        text: 'Enter the Cave',
        setState: { enterCaveTreasure: true },
        nextText: '5g',
      },
      {
        text: 'Continue Without Entering',
        setState: { enterCaveTreasure: false },
        nextText: '5h',
      },
    ],
  },

  {
    id: '4h',
    h1: 'Decline and Explore on Your Own',
    text: 'Relying on your instincts, you find a hidden passage.',
    options: [
      {
        text: 'Enter the Passage',
        setState: { enterHiddenPassage: true },
        nextText: '5i',
      },
      {
        text: 'Continue Without Entering',
        setState: { enterHiddenPassage: false },
        nextText: '5j',
      },
    ],
  },

  {
    id: '5a',
    h1: 'Light a Torch',
    text: 'The light reveals a friendly creature that guides you to the treasure.',
    options: [
      {
        text: 'Follow the friendly creature',
        setState: { followFriendlyCreature: true },
        nextText: 'ending1',
      },
      {
        text: 'Proceed cautiously on your own',
        setState: { followFriendlyCreature: false },
        nextText: 'ending2',
      },
    ],
  },

  {
    id: '5b',
    h1: 'Explore in Darkness',
    text: 'Choosing to explore in darkness, you traverse cautiously, guided only by the echoes of mysterious growls.',
    options: [
      {
        text: 'Face the guardian',
        setState: { faceGuardianDarkness: false },
        nextText: 'ending2',
      },
      {
        text: 'Attempt to escape the caverns',
        setState: { faceGuardianDarkness: true },
        nextText: 'ending2',
      },
    ],
  },

  {
    id: '5c',
    h1: 'Enter the Temple',
    text: "Entering the ancient temple, you're greeted by eerie chants echoing through its mysterious chambers.",
    options: [
      {
        text: 'Try to escape the trap',
        setState: { escapeTempleTrap: false },
        nextText: 'ending2',
      },
      {
        text: 'Call for help',
        setState: { escapeTempleTrap: true },
        nextText: 'ending2',
      },
    ],
  },

  {
    id: '5d',
    h1: 'Bypass the Temple',
    text: 'You find the treasure hidden in a secret alcove.',
    options: [
      {
        text: 'Celebrate your discovery',
        setState: { celebrateDiscovery: true },
        nextText: 'ending1',
      },
      {
        text: 'Continue exploring the area',
        setState: { celebrateDiscovery: false },
        nextText: 'ending1',
      },
    ],
  },

  {
    id: '5e',
    h1: 'Face the Guardian',
    text: 'A fierce battle ensues, and you emerge victorious.',
    options: [
      {
        text: 'Celebrate your triumph',
        setState: { celebrateVictory: true },
        nextText: 'ending1',
      },
      {
        text: 'Reflect on the battle',
        setState: { celebrateVictory: false },
        nextText: 'ending1',
      },
    ],
  },

  {
    id: '5f',
    h1: 'Retreat from the Caves',
    text: 'You escape the caves but never find the treasure.',
    options: [
      {
        text: 'Search for the treasure elsewhere',
        setState: { searchElsewhere: false },
        nextText: 'ending2',
      },
      {
        text: 'Leave the island without the treasure',
        setState: { searchElsewhere: true },
        nextText: 'ending2',
      },
    ],
  },

  {
    id: '5g',
    h1: 'Enter the Cave',
    text: 'The cave leads to the treasure room.',
    options: [
      {
        text: 'Claim the treasure',
        setState: { claimTreasure: true },
        nextText: 'ending1',
      },
      {
        text: 'Examine the surroundings first',
        setState: { claimTreasure: false },
        nextText: 'ending1',
      },
    ],
  },

  {
    id: '5h',
    h1: 'Continue Without Entering',
    text: 'You follow the map to a dead end.',
    options: [
      {
        text: 'Double-check the map',
        setState: { doubleCheckMap: false },
        nextText: 'ending2',
      },
      {
        text: 'Explore other areas',
        setState: { doubleCheckMap: true },
        nextText: 'ending2',
      },
    ],
  },

  {
    id: '5i',
    h1: 'Enter the Passage',
    text: 'Relying on your instincts, you find a hidden passage.',
    options: [
      {
        text: 'Take the shortcut to the treasure',
        setState: { shortcutToTreasure: true },
        nextText: 'ending1',
      },
      {
        text: 'Explore other paths',
        setState: { shortcutToTreasure: false },
        nextText: 'ending1',
      },
    ],
  },

  {
    id: '5j',
    h1: 'Continue Without Entering',
    text: 'You get lost, wandering the island endlessly.',
    options: [
      {
        text: 'Keep wandering in search of clues',
        setState: { keepWandering: true },
        nextText: 'ending2',
      },
      {
        text: 'Try to find a way back',
        setState: { keepWandering: false },
        nextText: 'ending2',
      },
    ],
  },
  {
    id: 'ending1',
    h1: 'Triumphant Explorer',
    text: "Congratulations! You have successfully navigated the challenges of Ember Isle and claimed the Lost Treasure. Your name will be forever etched in the island's history as the triumphant adventurer who outwitted its mysteries.",
    options: [
      {
        text: 'Embark on a new adventure',
        nextText: 1, // Return to the beginning for a new game
      },
    ],
  },

  {
    id: 'ending2',
    h1: 'Legacy of the Unfound Treasure',
    text: 'Your journey on Ember Isle has come to an end, and although the Lost Treasure remains elusive, the tales of your bravery and choices will be told for generations. Perhaps another daring adventurer will continue the quest.',
    options: [
      {
        text: 'Start anew and explore again',
        nextText: 1, // Return to the beginning for a new game
      },
    ],
  },
];
