const loader = document.getElementById('loading');
const loadingFrame = document.getElementById('loading-frame');
const ul = document.getElementById('fighters');
const list = document.createDocumentFragment();
const bgMusic = document.getElementById('bgMusic');

// Street Fighter character data
const fighters = [
  {
    id: 'Bruno Mars',
    name: 'Bruno Mars',
    smallImg: 'image/player1.jpg',
    largeImg: 'image/bm-player1.png',
    height: '5"9',
    birth: 'Cebu',
    fighting: 'N/A',
    skills: 'Singing and Dancing',
    alignment: 'Lawful Good',
    alignmentType: 'good',
    active: true,
    location: { x: 64.8, y: 59.4 } // Cebu
  },
  {
    id: 'Justine Tate',
    name: 'Justine Tate',
    smallImg: 'image/player2.jpg',
    largeImg: 'image/jt-player2.png',
    height: 'N/A',
    birth: 'Manila',
    fighting: 'N/A',
    skills: 'Fishing and Welding',
    alignment: 'Lawful Good',
    alignmentType: 'good',
    active: false,
    location: { x: 60.5, y: 42.3 } // Manila
  },
  {
    id: 'King Kaikon',
    name: 'King Kaikon',
    smallImg: 'image/player3.jpg',
    largeImg: 'image/kk-player3.png',
    height: 'N/A',
    birth: 'Davao',
    fighting: 'N/A',
    skills: 'Fixing Cars and Betting',
    alignment: 'Good',
    alignmentType: 'good',
    active: false,
    location: { x: 70.2, y: 75.6 } // Davao
  },
  {
    id: 'Emman DeGuzman',
    name: 'Emman DeGuzman',
    smallImg: 'image/player4.jpg',
    largeImg: 'image/eg-player4.png',
    height: 'N/A',
    birth: 'Cebu',
    fighting: 'Boxing',
    skills: 'Comedian',
    alignment: 'Good',
    alignmentType: 'good',
    active: false,
    location: { x: 64.8, y: 59.4 } // Cebu
  },
  {
    id: 'Cedrick Garces',
    name: 'Cedrick Garces',
    smallImg: 'image/player5.jpg',
    largeImg: 'image/cg-player5.png',
    height: '5"10',
    birth: 'Davao',
    fighting: 'N/A',
    skills: 'Basketball and Fixing Cars',
    alignment: 'Good/Lawful Neutral',
    alignmentType: 'good',
    active: false,
    location: { x: 70.2, y: 75.6 } // Davao
  },
  {
    id: 'PlayBoy Daim',
    name: 'PlayBoy Daim',
    smallImg: 'image/player6.jpg',
    largeImg: 'image/ds-player6.png',
    height: 'N/A',
    birth: 'Cebu',
    fighting: 'N/A',
    skills: 'Touching',
    alignment: 'Evil/Lawful Neutral',
    alignmentType: 'evil',
    active: false,
    location: { x: 64.8, y: 59.4 } // Cebu
  },
  {
    id: 'Beatrix',
    name: 'Beatrix',
    smallImg: 'image/player7.jpg',
    largeImg: 'image/bs-player7.png',
    height: 'N/A',
    birth: 'Manila',
    fighting: 'N/A',
    skills: 'Love',
    alignment: 'Neutral',
    alignmentType: 'neutral',
    active: false,
    location: { x: 60.5, y: 42.3 } // Manila
  },
  {
    id: 'Kryn Kent',
    name: 'Kryn Kent',
    smallImg: 'image/player8.jpg',
    largeImg: 'image/kr-player8.png',
    height: 'N/A',
    birth: 'Manila',
    fighting: 'N/A',
    skills: 'Video Editing and Dancing',
    alignment: 'Good',
    alignmentType: 'good',
    active: false,
    location: { x: 60.5, y: 42.3 } // Manila
  },
  {
    id: 'LyndonJT',
    name: 'LyndonJT',
    smallImg: 'image/player9.jpg',
    largeImg: 'image/ljt-player9.png',
    height: '6"1',
    birth: 'Manila',
    fighting: 'Boxing',
    skills: 'Martial Arts and Lifting',
    alignment: 'Lawful Good',
    alignmentType: 'good',
    active: false,
    location: { x: 60.5, y: 42.3 } // Manila
  },
  {
    id: 'Vann Damme',
    name: 'Vann Damme',
    smallImg: 'image/player10.png',
    largeImg: 'image/vd-player10.png',
    height: '5"9',
    birth: 'Cebu',
    fighting: 'Shotokan Karate',
    skills: 'Martial Arts',
    alignment: 'Neutral',
    alignmentType: 'neutral',
    active: false,
    location: { x: 64.8, y: 59.4 } // Cebu
  },

  {
    id: 'Super Dan',
    name: 'Super Dan',
    smallImg: 'image/player11.jpg',
    largeImg: 'image/ds-player11.png',
    height: 'N/A',
    birth: 'Cebu',
    fighting: 'N/A',
    skills: 'Happy and Sad',
    alignment: 'Good',
    alignmentType: 'good',
    active: false,
    location: { x: 64.8, y: 59.4 } // Cebu
  },
  {
    id: 'Dherrian',
    name: 'Dherrian',
    smallImg: 'image/player12.jpg',
    largeImg: 'image/dd-player12.png',
    height: 'N/A',
    birth: 'Manila',
    fighting: 'N/A',
    skills: 'Fising and Hunting',
    alignment: 'Good',
    alignmentType: 'good',
    active: false,
    location: { x: 60.5, y: 42.3 } // Manila
  },
  {
    id: 'Kizzia',
    name: 'Kizzia',
    smallImg: 'image/player13.jpg',
    largeImg: 'image/kd-player13.png',
    height: 'N/A',
    birth: 'Manila',
    fighting: 'N/A',
    skills: 'Drawing, Playing Instruments, Valorant',
    alignment: 'Good',
    alignmentType: 'good',
    active: false,
    location: { x: 60.5, y: 42.3 } // Manila
  },
    {
    id: 'Sjjayee',
    name: 'Sjjayee',
    smallImg: 'image/player14.jpg',
    largeImg: 'image/sb-player14.png',
    height: '5"9',
    birth: 'Manila',
    fighting: 'N/A',
    skills: 'Gaming',
    alignment: 'Good',
    alignmentType: 'good',
    active: false,
    location: { x: 60.5, y: 42.3 } // Manila
  },
];

// Add character descriptions to each fighter
fighters.forEach(fighter => {
  switch(fighter.id) {
    case 'Bruno Mars':
      fighter.description = {
        background: "Born and raised in Cebu, Bruno Mars developed his extraordinary singing and dancing skills from a young age. While not a traditional fighter, his rhythm and stage presence make him a formidable opponent in any battle of entertainment.",
        personality: "Charismatic, energetic, and always ready to put on a show. Bruno brings joy to everyone around him and approaches challenges with unwavering positivity.",
        specialMoves: [
          { name: "Uptown Funk", description: "A dazzling dance move that confuses opponents with its rhythm and style." },
          { name: "24K Magic", description: "Creates a blinding golden aura that temporarily blinds opponents while boosting Bruno's charisma." },
          { name: "Versace Finisher", description: "An unstoppable vocal performance that stuns opponents and rallies allies." }
        ]
      };
      break;
    case 'Justine Tate':
      fighter.description = {
        background: "Hailing from Manila, Justine Tate mastered the unlikely combination of fishing and welding. He turned these practical skills into a unique combat style, using fishing lines to ensnare opponents and precisely welded weapons for defense.",
        personality: "Patient and methodical, just like a seasoned fisher. Justine can wait for the perfect opportunity to strike, but acts with surgical precision when the moment comes.",
        specialMoves: [
          { name: "Master Angler", description: "Uses a specialized fishing line to pull opponents toward him or to swing across the battlefield." },
          { name: "Molten Forge", description: "Quickly welds improvised weapons from nearby metal objects." },
          { name: "Net Capture", description: "Deploys a reinforced net to temporarily immobilize opponents." }
        ]
      };
      break;
    case 'King Kaikon':
      fighter.description = {
        background: "The self-proclaimed king of Davao's underground circuit, Kaikon built his reputation through car racing and high-stakes gambling. His mechanical knowledge and risk-taking personality translate perfectly to his unorthodox fighting style.",
        personality: "Bold, calculating, and always willing to take chances. Kaikon approaches fights like betting - analyzing odds and knowing exactly when to go all-in.",
        specialMoves: [
          { name: "Nitro Boost", description: "Channels the spirit of racing to dramatically increase speed for short bursts." },
          { name: "All-In Gambit", description: "A risky attack that either deals massive damage or leaves Kaikon vulnerable." },
          { name: "Mechanical Mastery", description: "Uses automotive knowledge to disable mechanical devices or create impromptu weapons from machinery." }
        ]
      };
      break;
    case 'Emman DeGuzman':
      fighter.description = {
        background: "Cebu's beloved comedy boxer, Emman combined his natural humor with formal boxing training to create a fighting style that both entertains and devastates. His unpredictable movements and psychological warfare through comedy give him a unique edge.",
        personality: "Lighthearted, quick-witted, and surprisingly strategic. Emman uses humor to mask his calculating mind and to throw opponents off their game.",
        specialMoves: [
          { name: "Punchline", description: "A devastatingly fast combo that always ends with an unexpected twist." },
          { name: "Stand-Up Defense", description: "Taunts and jokes that distract opponents while setting up counter-attacks." },
          { name: "Slapstick Special", description: "A series of seemingly clumsy but precisely targeted strikes that confuse opponents' defenses." }
        ]
      };
      break;
    case 'Cedrick Garces':
      fighter.description = {
        background: "From the streets of Davao, Cedrick rose to prominence through his basketball prowess and mechanical skills. His height and reach give him advantages in combat, while his knowledge of automotive mechanics lets him understand the weaknesses in any opponent's stance.",
        personality: "Disciplined, analytical, and fair-minded. Cedrick approaches fights like a basketball game - with strategy, teamwork when needed, and an eye for the perfect shot.",
        specialMoves: [
          { name: "Three-Point Strike", description: "A long-range attack that's nearly impossible to block when properly executed." },
          { name: "Pivot Counter", description: "Uses basketball footwork to quickly pivot around opponents and attack from unexpected angles." },
          { name: "Mechanical Breakdown", description: "Analyzes and targets structural weaknesses in opponents or environments." }
        ]
      };
      break;
    case 'PlayBoy Daim':
      fighter.description = {
        background: "The notorious charmer from Cebu, Daim developed his unique 'touching' style that combines elements of pressure points, distraction techniques, and psychological manipulation. His reputation precedes him in both social and combat circles.",
        personality: "Flirtatious, unpredictable, and morally flexible. Daim uses charm as both a weapon and a shield, keeping opponents guessing about his true intentions.",
        specialMoves: [
          { name: "Charm Offensive", description: "Temporarily lowers opponent's guard through distraction and misdirection." },
          { name: "Pressure Point Caress", description: "A series of precise touches that can temporarily paralyze limbs or cause disorientation." },
          { name: "Heartbreaker", description: "Ultimate technique that builds up emotional connection before delivering a devastating betrayal attack." }
        ]
      };
      break;
    case 'Beatrix':
      fighter.description = {
        background: "Manila's mysterious love expert, Beatrix has studied the emotional and physical aspects of love to develop a fighting style based on connection and harmony. She can read opponents' emotional states and exploit them in battle.",
        personality: "Empathetic, balanced, and insightful. Beatrix maintains emotional neutrality in combat, allowing her to adapt to any situation without being clouded by passion.",
        specialMoves: [
          { name: "Emotional Resonance", description: "Senses and mirrors opponent's emotional state to predict their next moves." },
          { name: "Harmony Strike", description: "A perfectly balanced attack that's difficult to defend against due to its natural flow." },
          { name: "Heartbound", description: "Creates a temporary emotional connection that makes opponents hesitant to cause harm." }
        ]
      };
      break;
    case 'Kryn Kent':
      fighter.description = {
        background: "Born with an artist's eye and a dancer's grace in Manila, Kryn Kent merged her video editing precision with dance choreography to create a visually stunning combat style that's as beautiful as it is deadly.",
        personality: "Creative, detail-oriented, and expressive. Kryn approaches fights like a performance, with each movement flowing into the next in a carefully edited sequence.",
        specialMoves: [
          { name: "Frame Perfect", description: "Executes attacks with such precise timing that they're nearly impossible to counter." },
          { name: "Choreographed Combo", description: "A dance-inspired sequence of attacks that becomes more powerful with each successful hit." },
          { name: "Final Cut", description: "Analyzes previous exchanges to create a perfect counter-strategy, like editing together the perfect response." }
        ]
      };
      break;
    case 'LyndonJT':
      fighter.description = {
        background: "Manila's premier martial artist, LyndonJT combines traditional boxing with modern strength training to create a balanced fighting style. Standing at 6'1\", his reach advantage and physical conditioning make him a formidable opponent for anyone.",
        personality: "Disciplined, honorable, and protective. LyndonJT fights with a strict moral code and uses his strength to defend rather than dominate.",
        specialMoves: [
          { name: "Perfect Form", description: "A devastatingly powerful punch executed with flawless technique for maximum impact." },
          { name: "Endurance Rush", description: "Increases attack speed and power as the fight progresses, making him more dangerous over time." },
          { name: "Guardian Counter", description: "A defensive technique that absorbs an opponent's attack and returns the energy two-fold." }
        ]
      };
      break;
    case 'Vann Damme':
      fighter.description = {
        background: "A Shotokan Karate master from Cebu, Vann Damme has dedicated his life to martial arts. His training under various masters across Asia has given him a comprehensive understanding of combat philosophy and technique.",
        personality: "Contemplative, balanced, and resilient. Vann approaches combat as a form of communication rather than domination, seeking to understand opponents through exchange of techniques.",
        specialMoves: [
          { name: "Shotokan Spirit", description: "Channels the essence of karate fundamentals for a perfect balance of speed, power, and technique." },
          { name: "Meditation Counter", description: "Enters a brief meditative state that allows for perfect reaction timing to incoming attacks." },
          { name: "Dragon's Path", description: "A series of precisely calculated strikes that target pressure points and vital areas." }
        ]
      };
      break;
    case 'Super Dan':
      fighter.description = {
        background: "Known throughout Cebu for his extreme emotional range, Super Dan has harnessed the power of happiness and sadness into a unique fighting style that's unpredictable and psychologically intimidating.",
        personality: "Emotionally volatile but strategically sound. Dan's apparent mood swings are often calculated to confuse opponents and create openings.",
        specialMoves: [
          { name: "Mood Swing", description: "Rapidly shifts between aggressive and defensive stances, making patterns difficult to predict." },
          { name: "Euphoric Rush", description: "Channels pure happiness into a burst of speed and power that overwhelms defenses." },
          { name: "Melancholy Barrier", description: "Creates a protective aura of sadness that absorbs incoming damage and converts it to strength." }
        ]
      };
      break;
    case 'Dherrian':
      fighter.description = {
        background: "Raised in the fishing communities of Manila, Dherrian developed remarkable patience and precision from fishing, combined with the raw strength required for hunting. These seemingly simple skills translate into a surprisingly effective combat approach.",
        personality: "Patient, observant, and decisive. Like a skilled fisher, Dherrian waits for the perfect moment to strike, but shows the hunter's instinct when pursuing advantage.",
        specialMoves: [
          { name: "Perfect Cast", description: "A precisely targeted attack that can snare opponents from unexpected angles." },
          { name: "Hunter's Mark", description: "Identifies an opponent's weakness and enhances damage against that vulnerability." },
          { name: "Fisherman's Endurance", description: "Channels the patience of fishing into enhanced stamina and recovery abilities." }
        ]
      };
      break;
    case 'Kizzia':
      fighter.description = {
        background: "A Manila prodigy with diverse talents, Kizzia combines artistic precision from drawing, rhythmic timing from musical instruments, and strategic thinking from Valorant into a unique and unpredictable fighting style.",
        personality: "Creative, adaptable, and strategically minded. Kizzia approaches combat like a complex art form, with each technique flowing into the next.",
        specialMoves: [
          { name: "Artistic Vision", description: "Predicts and counters opponent movements by visualizing attack patterns like drawings." },
          { name: "Rhythmic Combo", description: "A series of attacks performed with perfect musical timing that's difficult to interrupt." },
          { name: "Tactical Reload", description: "Quickly adapts strategy mid-fight based on opponent patterns, like changing tactics in Valorant." }
        ]
      };
      break;
    case 'Sjjayee':
      fighter.description = {
        background: "A gaming prodigy from Manila, Sjjayee has translated thousands of hours of competitive gaming into real-world combat reflexes and strategic thinking. His understanding of patterns, timing, and resource management gives him a unique edge.",
        personality: "Focused, analytical, and quick-thinking. Sjjayee approaches fights like a game, constantly calculating optimal moves and counter-strategies.",
        specialMoves: [
          { name: "Frame Perfect", description: "Executes attacks with the precise timing of a pro gamer, exploiting small windows of opportunity." },
          { name: "Resource Management", description: "Carefully conserves energy throughout a fight for maximum efficiency and endurance." },
          { name: "Meta Counter", description: "Quickly identifies and adapts to opponent patterns, like countering the current 'meta' in competitive games." }
        ]
      };
      break;
  }
});

function initFighters() {
  // Hide the loading screen
  setTimeout(() => {
    loader.style.display = 'none';
    
    // Play background music
    playBackgroundMusic();
    
    // Setup music controls
    setupMusicControls();
    
    // Display the fighters
    listFighters();
    
    // Show the first fighter by default
    viewFighterDetail(fighters[0]);

    // Start animations
    animateElements();
  }, 1000); // Simulate a loading delay for better user experience
}

// Function to play background music
function playBackgroundMusic() {
  bgMusic.volume = 0.4; // Set initial volume
  
  // Many browsers require user interaction before playing audio
  // We'll try to play and handle any errors
  const playPromise = bgMusic.play();
  
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      // Auto-play was prevented
      console.log("Audio playback was prevented. Waiting for user interaction.");
      
      // Add a click listener to the document to play music on first interaction
      const playMusicOnInteraction = () => {
        bgMusic.play().catch(e => console.log("Could not play audio: ", e));
        document.removeEventListener('click', playMusicOnInteraction);
      };
      
      document.addEventListener('click', playMusicOnInteraction);
    });
  }
}

// Music control functionality with Font Awesome
function setupMusicControls() {
  const musicControl = document.getElementById('musicControl');
  const icon = musicControl.querySelector('i');
  
  // Initial state based on whether music is playing
  if (bgMusic.paused) {
    icon.className = 'fa-solid fa-volume-xmark'; // Muted icon
  } else {
    icon.className = 'fa-solid fa-volume-high'; // Unmuted icon
  }
  
  // Toggle mute/unmute when clicked
  musicControl.addEventListener('click', function() {
    if (bgMusic.paused) {
      bgMusic.play();
      icon.className = 'fa-solid fa-volume-high'; // Change to unmuted icon
    } else {
      bgMusic.pause();
      icon.className = 'fa-solid fa-volume-xmark'; // Change to muted icon
    }
  });
}

function listFighters() {
  fighters.forEach(function (fighter, index) {
    const fighterItem = `
      <img src="${fighter.smallImg}" alt="${fighter.name}"/>
      <span class="fighter-name">${fighter.name}</span>
    `;

    const item = document.createElement('li');
    item.innerHTML = fighterItem;
    item.dataset.id = fighter.id;
    
    if (index === 0) {
      item.classList.add('active');
    }
    
    item.addEventListener('click', function () {
      // Update active state in UI
      document.querySelectorAll('#fighters li').forEach(el => {
        el.classList.remove('active');
      });
      item.classList.add('active');
      
      // Update active state in data
      fighters.forEach(f => {
        f.active = f.id === fighter.id;
      });
      
      // Show fighter detail
      viewFighterDetail(fighter);
      
      // Play a selection sound effect
      playSelectionSound();
    });
    
    list.appendChild(item);
  });
  
  ul.appendChild(list);
}

// Play a selection sound when a fighter is clicked
function playSelectionSound() {
  const selectSound = new Audio('sound/video-game-select.wav');
  selectSound.volume = 1.0;
  selectSound.play();
}

// Create and display modal with fighter description
function createDescriptionModal(fighter) {
  // Remove any existing modals first
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }
  
  const modal = document.createElement('div');
  modal.className = 'modal';
  
  const description = fighter.description;
  
  let specialMovesHTML = '';
  if (description.specialMoves) {
    description.specialMoves.forEach(move => {
      specialMovesHTML += `
        <div class="special-move">
          <span class="special-move-name">${move.name}</span>
          ${move.description}
        </div>
      `;
    });
  }
  
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      
      <div class="modal-header">
        <img src="${fighter.smallImg}" alt="${fighter.name}">
        <h2>${fighter.name}</h2>
      </div>
      
      <div class="modal-body">
        <div class="bio-section">
          <h3>Background</h3>
          <p>${description.background || 'No background information available.'}</p>
        </div>
        
        <div class="bio-section">
          <h3>Personality</h3>
          <p>${description.personality || 'No personality information available.'}</p>
        </div>
        
        <div class="bio-section">
          <h3>Special Moves</h3>
          ${specialMovesHTML || '<p>No special moves information available.</p>'}
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Add event listener to close button
  const closeBtn = modal.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.remove();
    }, 300);
  });
  
  // Close modal when clicking outside the content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.remove();
      }, 300);
    }
  });
  
  // Show modal with animation
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
}

function createWorldMap(fighter) {
  // Only create map if there's a location
  if (!fighter.location) {
    return `
      <div class="stat">
        <span class="tag">Birthplace</span> ${fighter.birth} (Location unknown)
      </div>
    `;
  }
  
  return `
    <div class="stat">
      <span class="tag">Birthplace</span> ${fighter.birth}
    </div>
    <div class="world-map-container">
      <img src="image/mapofph.png" class="world-map" alt="World Map">
      <div class="location-marker" style="left: ${fighter.location.x}%; top: ${fighter.location.y}%;"></div>
    </div>
  `;
}

function viewFighterDetail(fighter) {
  const fighterElement = document.getElementById('fighter');
  
  // Create fighter details HTML
  let result = `
    <div class="fighter-details">
      <div class="fighter-profile">
        <img src="${fighter.largeImg}" alt="${fighter.name}"/>
      </div>
      <div class="fighter-stats">
        <div class="name">
          ${fighter.name}
          <span class="info-btn" title="View ${fighter.name}'s details"></span>
        </div>
        <div class="stat">
          <span class="tag">Height</span> ${fighter.height}
        </div>
        ${createWorldMap(fighter)}
        <div class="stat">
          <span class="tag">Fighting Style</span> ${fighter.fighting}
        </div>
        <div class="stat">
          <span class="tag">Skills</span> ${fighter.skills}
        </div>
        <div class="stat final">
          <span class="tag">Alignment</span>
          <span class="alignment ${fighter.alignmentType}">${fighter.alignment}</span>
        </div>
      </div>
    </div>
  `;
  
  // Set the HTML content
  fighterElement.innerHTML = result;
  
  // Add click event to the info button
  const infoBtn = fighterElement.querySelector('.info-btn');
  infoBtn.addEventListener('click', () => {
    createDescriptionModal(fighter);
  });
}

function animateElements() {
  // Use a simple timeline animation like in the original Apex code
  const tl = gsap.timeline();
  tl.to("#fighters", { y: 0, duration: 0.6, opacity: 1 });
  tl.to("#fighter", { y: 0, duration: 0.6, opacity: 1, stagger: 0.2 });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
  initFighters();
});