export interface Question {
  id: string;
  text: string;
  options?: string[];
  correctAnswer: string | string[];
  type: 'multiple-choice' | 'fill-in-the-blank' | 'odd-one-out' | 'matching';
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export const exercises: Exercise[] = [
  {
    id: 'vocab-text',
    title: '3b Vocabulary from the text',
    description: 'Choose the correct word to complete the sentences.',
    questions: [
      {
        id: 'v1',
        text: 'There will be a massive trip/leap forward in education with virtual reality apps.',
        options: ['trip', 'leap'],
        correctAnswer: 'leap',
        type: 'multiple-choice'
      },
      {
        id: 'v2',
        text: 'Virtual reality will completely change the gaming industry/environment.',
        options: ['industry', 'environment'],
        correctAnswer: 'industry',
        type: 'multiple-choice'
      },
      {
        id: 'v3',
        text: 'Imagine transforming/spending a day in a castle back in the 14th century.',
        options: ['transforming', 'spending'],
        correctAnswer: 'spending',
        type: 'multiple-choice'
      },
      {
        id: 'v4',
        text: 'It seems there\'s no limit/space to what we will be able to do with virtual reality.',
        options: ['limit', 'space'],
        correctAnswer: 'limit',
        type: 'multiple-choice'
      },
      {
        id: 'v5',
        text: 'When we shop online, we\'ll be able to touch/book the products we want to buy!',
        options: ['touch', 'book'],
        correctAnswer: 'touch',
        type: 'multiple-choice'
      },
      {
        id: 'v6',
        text: 'How easy can it be to explore/recreate reality?',
        options: ['explore', 'recreate'],
        correctAnswer: 'recreate',
        type: 'multiple-choice'
      }
    ]
  },
  {
    id: 'collocations',
    title: 'Complete the collocations',
    description: 'Use: educational, golf, online, brain, virtual, digital.',
    questions: [
      { id: 'c1', text: '1. .................... surgery', correctAnswer: 'brain', type: 'fill-in-the-blank' },
      { id: 'c2', text: '2. .................... revolution', correctAnswer: 'digital', type: 'fill-in-the-blank' },
      { id: 'c3', text: '3. .................... course', correctAnswer: 'educational', type: 'fill-in-the-blank' },
      { id: 'c4', text: '4. .................... apps', correctAnswer: 'online', type: 'fill-in-the-blank' },
      { id: 'c5', text: '5. .................... shopping', correctAnswer: 'virtual', type: 'fill-in-the-blank' },
      { id: 'c6', text: '6. .................... tour', correctAnswer: 'virtual', type: 'fill-in-the-blank' }
    ]
  },
  {
    id: 'prepositions-1',
    title: 'Choose the correct preposition',
    description: 'Select the correct preposition for each sentence.',
    questions: [
      {
        id: 'p1-1',
        text: 'The app allows users to get a complete experience in/of the environment.',
        options: ['in', 'of'],
        correctAnswer: 'of',
        type: 'multiple-choice'
      },
      {
        id: 'p1-2',
        text: 'Virtual reality is not only with/for fun.',
        options: ['with', 'for'],
        correctAnswer: 'for',
        type: 'multiple-choice'
      },
      {
        id: 'p1-3',
        text: 'How about seeing space from/through the eyes of an astronaut?',
        options: ['from', 'through'],
        correctAnswer: 'through',
        type: 'multiple-choice'
      },
      {
        id: 'p1-4',
        text: 'He is interested in/on the new app.',
        options: ['in', 'on'],
        correctAnswer: 'in',
        type: 'multiple-choice'
      },
      {
        id: 'p1-5',
        text: 'Will it be easy to control reality to/for our own benefit?',
        options: ['to', 'for'],
        correctAnswer: 'for',
        type: 'multiple-choice'
      }
    ]
  },
  {
    id: 'odd-one-out',
    title: 'Odd word out: Transport',
    description: 'Choose the word that does not belong in the group.',
    questions: [
      { id: 'o1', text: '1. bike/motorbike/scooter: tyre - handlebars - brakes - mast', options: ['tyre', 'handlebars', 'brakes', 'mast'], correctAnswer: 'mast', type: 'odd-one-out' },
      { id: 'o2', text: '2. bus/coach: mirror - wheel - windscreen - nose', options: ['mirror', 'wheel', 'windscreen', 'nose'], correctAnswer: 'nose', type: 'odd-one-out' },
      { id: 'o3', text: '3. car/taxi: boot - bonnet - bell - aerial', options: ['boot', 'bonnet', 'bell', 'aerial'], correctAnswer: 'bell', type: 'odd-one-out' },
      { id: 'o4', text: '4. lorry: window - headlights - exhaust pipe - saddle', options: ['window', 'headlights', 'exhaust pipe', 'saddle'], correctAnswer: 'saddle', type: 'odd-one-out' },
      { id: 'o5', text: '5. plane: licence plate - wing - cockpit - cabin', options: ['licence plate', 'wing', 'cockpit', 'cabin'], correctAnswer: 'licence plate', type: 'odd-one-out' },
      { id: 'o6', text: '6. ship/ferry: harbour - cabin - deck - pedal', options: ['harbour', 'cabin', 'deck', 'pedal'], correctAnswer: 'pedal', type: 'odd-one-out' },
      { id: 'o7', text: '7. train: platform - carriage - engine - steering wheel', options: ['platform', 'carriage', 'engine', 'steering wheel'], correctAnswer: 'steering wheel', type: 'odd-one-out' },
      { id: 'o8', text: '8. tram: rear light - rails - dashboard - anchor', options: ['rear light', 'rails', 'dashboard', 'anchor'], correctAnswer: 'anchor', type: 'odd-one-out' }
    ]
  },
  {
    id: 'announcements',
    title: 'Complete the announcements',
    description: 'Use: baggage, port, deck, belongings, stop, passengers, rail, seatbelt, crew, compartments, flight, carriage.',
    questions: [
      { id: 'a1', text: 'A: Ladies and gentlemen, welcome on board 1) .................... BT331 from London to Paris.', correctAnswer: 'flight', type: 'fill-in-the-blank' },
      { id: 'a2', text: 'A: Before we take off, we ask that you fasten your 2) ....................', correctAnswer: 'seatbelt', type: 'fill-in-the-blank' },
      { id: 'a3', text: 'A: and secure your 3) .................... in the overhead 4) ....................', correctAnswer: ['baggage', 'compartments'], type: 'fill-in-the-blank' },
      { id: 'a4', text: 'B: This is the 7:30 5) .................... service from Cardiff to Oxford.', correctAnswer: 'rail', type: 'fill-in-the-blank' },
      { id: 'a5', text: 'B: Please take care of your 6) .................... throughout the journey.', correctAnswer: 'belongings', type: 'fill-in-the-blank' },
      { id: 'a6', text: 'B: There is a restaurant in the front 7) .................... which will open shortly.', correctAnswer: 'carriage', type: 'fill-in-the-blank' },
      { id: 'a7', text: 'B: Next 8) .................... is Newport.', correctAnswer: 'stop', type: 'fill-in-the-blank' },
      { id: 'a8', text: 'C: Good afternoon, 9) .................... . We are now approaching Piraeus 10) ....................', correctAnswer: ['passengers', 'port'], type: 'fill-in-the-blank' },
      { id: 'a9', text: 'C: Those with vehicles should go below 11) .................... and await instructions from the 12) ....................', correctAnswer: ['deck', 'crew'], type: 'fill-in-the-blank' }
    ]
  },
  {
    id: 'food-trends',
    title: 'Food Trends',
    description: 'Choose the correct word to complete the text.',
    questions: [
      { id: 'ft1', text: 'Life in the future will be much easier for people 1) following/attending/eating a diet.', options: ['following', 'attending', 'eating'], correctAnswer: 'following', type: 'multiple-choice' },
      { id: 'ft2', text: 'There is a pill coming onto the market that will make you feel like you\'ve eaten a 2) light/heavy/full meal after just a sandwich.', options: ['light', 'heavy', 'full'], correctAnswer: 'full', type: 'multiple-choice' },
      { id: 'ft3', text: 'You can already buy 3) strong/soft/refreshment drinks like cola and lemonade...', options: ['strong', 'soft', 'refreshment'], correctAnswer: 'refreshment', type: 'multiple-choice' },
      { id: 'ft4', text: 'Just one drop will make a 4) salty/sour/bitter coffee taste good.', options: ['salty', 'sour', 'bitter'], correctAnswer: 'salty', type: 'multiple-choice' },
      { id: 'ft5', text: 'They\'ll also have 5) boiled/fried/roast potatoes on your plate!', options: ['boiled', 'fried', 'roast'], correctAnswer: 'boiled', type: 'multiple-choice' },
      { id: 'ft6', text: 'So lovers of 6) sweet/spicy/creamy food can eat it without the pain.', options: ['sweet', 'spicy', 'creamy'], correctAnswer: 'spicy', type: 'multiple-choice' }
    ]
  },
  {
    id: 'housing',
    title: 'Housing',
    description: 'Complete with: balcony, share, flat, spacious, rent, noisy, heating, shower.',
    questions: [
      { id: 'h1', text: '1. Do you live in a(n) .................... or in a house?', correctAnswer: 'flat', type: 'fill-in-the-blank' },
      { id: 'h2', text: '2. Do you .................... or own it?', correctAnswer: 'rent', type: 'fill-in-the-blank' },
      { id: 'h3', text: '3. Is it .................... and modern?', correctAnswer: 'spacious', type: 'fill-in-the-blank' },
      { id: 'h4', text: '4. Is it in a quiet or .................... area?', correctAnswer: 'noisy', type: 'fill-in-the-blank' },
      { id: 'h5', text: '5. Is there central ....................?', correctAnswer: 'heating', type: 'fill-in-the-blank' },
      { id: 'h6', text: '6. Is there a bath or a .................... in the bathroom?', correctAnswer: 'shower', type: 'fill-in-the-blank' },
      { id: 'h7', text: '7. Has it got a garden and/or a ....................?', correctAnswer: 'balcony', type: 'fill-in-the-blank' },
      { id: 'h8', text: '8. Do you .................... your room with your siblings?', correctAnswer: 'share', type: 'fill-in-the-blank' }
    ]
  },
  {
    id: 'confused-words',
    title: 'Words Often Confused: pass - spend',
    description: 'Complete the gaps with the correct word.',
    questions: [
      { id: 'cw1', text: '1. .................... the evening', correctAnswer: 'spend', type: 'fill-in-the-blank' },
      { id: 'cw2', text: '2. .................... the sugar', correctAnswer: 'pass', type: 'fill-in-the-blank' },
      { id: 'cw3', text: '3. .................... all his life', correctAnswer: 'spend', type: 'fill-in-the-blank' },
      { id: 'cw4', text: '4. .................... a test', correctAnswer: 'pass', type: 'fill-in-the-blank' },
      { id: 'cw5', text: '5. .................... a law', correctAnswer: 'pass', type: 'fill-in-the-blank' },
      { id: 'cw6', text: '6. .................... years', correctAnswer: 'spend', type: 'fill-in-the-blank' }
    ]
  },
  {
    id: 'phrasal-verbs',
    title: 'Phrasal Verbs: GET',
    description: 'Choose the correct particle.',
    questions: [
      { id: 'pv1', text: '1. The flight from London gets in/around at 7:00 exactly.', options: ['in', 'around'], correctAnswer: 'in', type: 'multiple-choice' },
      { id: 'pv2', text: '2. Jane gets on/over well with the other waiters in the restaurant.', options: ['on', 'over'], correctAnswer: 'on', type: 'multiple-choice' },
      { id: 'pv3', text: '3. Ned got in/off the bus at the wrong stop...', options: ['in', 'off'], correctAnswer: 'off', type: 'multiple-choice' },
      { id: 'pv4', text: '4. It took Phil a long time to get off/over the car accident.', options: ['off', 'over'], correctAnswer: 'over', type: 'multiple-choice' }
    ]
  },
  {
    id: 'word-formation',
    title: 'Word Formation (forming adjectives from nouns)',
    description: 'Complete the gaps with the correct adjective derived from the words in bold.',
    questions: [
      { id: 'wf1', text: '1. Helen was .................... when she read her exam results. (SPEECH)', correctAnswer: 'speechless', type: 'fill-in-the-blank' },
      { id: 'wf2', text: '2. The dishes at the Mexican restaurant are really .................... . (TASTE)', correctAnswer: 'tasty', type: 'fill-in-the-blank' },
      { id: 'wf3', text: '3. Ted prefers to watch .................... documentaries instead of comedy films. (EDUCATION)', correctAnswer: 'educational', type: 'fill-in-the-blank' },
      { id: 'wf4', text: '4. Jack always cooks .................... meals for his children. (NUTRITION)', correctAnswer: 'nutritious', type: 'fill-in-the-blank' },
      { id: 'wf5', text: '5. The chairs in the restaurant weren\'t very .................... . (COMFORT)', correctAnswer: 'comfortable', type: 'fill-in-the-blank' },
      { id: 'wf6', text: '6. Andy is a very .................... chef who has won many awards. (SUCCESS)', correctAnswer: 'successful', type: 'fill-in-the-blank' }
    ]
  },
  {
    id: 'prepositions-2',
    title: 'Prepositions',
    description: 'Complete with: from, on (x2), with (x2).',
    questions: [
      { id: 'p2-1', text: '1. Will technology be able to deal .................... our environmental problems?', correctAnswer: 'with', type: 'fill-in-the-blank' },
      { id: 'p2-2', text: '2. In just 50 years, life will be very different .................... now.', correctAnswer: 'from', type: 'fill-in-the-blank' },
      { id: 'p2-3', text: '3. Tomorrow\'s school-leavers will have to be familiar .................... information technology.', correctAnswer: 'with', type: 'fill-in-the-blank' },
      { id: 'p2-4', text: '4. Our ability to feed a growing population depends .................... scientific advances.', correctAnswer: 'on', type: 'fill-in-the-blank' },
      { id: 'p2-5', text: '5. If we insist .................... good public transport, the air quality in this city will improve.', correctAnswer: 'on', type: 'fill-in-the-blank' }
    ]
  }
];
