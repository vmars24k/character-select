const loader = document.getElementById('loading');
const loadingFrame = document.getElementById('loading-frame');
const ul = document.getElementById('fighters');
const list = document.createDocumentFragment();

// Street Fighter character data
const fighters = [
  {
    id: 'Bruno Mars',
    name: 'Bruno Mars',
    smallImg: 'image/player1.jpg',
    largeImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/ryu_compressed.png',
    height: '5"9',
    birth: 'Cebu',
    fighting: 'Ansatsuken',
    skills: 'Sleeping anywhere',
    alignment: 'Good',
    alignmentType: 'good',
    active: true,
    location: { x: 64.8, y: 59.4 } // Cebu
  },
  {
    id: 'Justine Tate',
    name: 'Justine Tate',
    smallImg: 'image/player2.jpg',
    largeImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/ken-compressed.png',
    height: '5"9',
    birth: 'Manila',
    fighting: 'Ansatsuken',
    skills: 'Cooking pasta',
    alignment: 'Good',
    alignmentType: 'good',
    active: false,
    location: { x: 60.5, y: 42.3 } // Manila
  },
  {
    id: 'King Kaikon',
    name: 'King Kaikon',
    smallImg: 'image/player3.jpg',
    largeImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/chun_li-compressed.png',
    height: '5"6',
    birth: 'Davao',
    fighting: 'Chinese martial arts',
    skills: 'Shooting',
    alignment: 'Lawful Good',
    alignmentType: 'good',
    active: false,
    location: { x: 70.2, y: 75.6 } // Davao
  },
  {
    id: 'Emman DeGuzman',
    name: 'Emman DeGuzman',
    smallImg: 'image/player4.jpg',
    largeImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/dj-compressed.png',
    height: '6"1',
    birth: 'Cebu',
    fighting: 'Kickboxing',
    skills: 'Bamboo dancing',
    alignment: 'Good',
    alignmentType: 'good',
    active: false,
    location: { x: 64.8, y: 59.4 } // Cebu
  },
  {
    id: 'Cedrick Garces',
    name: 'Cedrick Garces',
    smallImg: 'image/player5.jpg',
    largeImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/cammie-compressor.png',
    height: '5"5',
    birth: 'Davao',
    fighting: 'Shadaloo/Special Forces Training',
    skills: 'Knife throwing',
    alignment: 'Good/Lawful Neutral',
    alignmentType: 'good',
    active: false,
    location: { x: 70.2, y: 75.6 } // Davao
  },
  {
    id: 'PlayBoy Daim',
    name: 'PlayBoy Daim',
    smallImg: 'image/player6.jpg',
    largeImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/sagat-compressed.png',
    height: '7"5',
    birth: 'Cebu',
    fighting: 'Muay Thai',
    skills: 'Breathing underwater',
    alignment: 'Neutral',
    alignmentType: 'neutral',
    active: false,
    location: { x: 64.8, y: 59.4 } // Cebu
  },
  {
    id: 'Beatrix',
    name: 'Beatrix',
    smallImg: 'image/player7.jpg',
    largeImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/zangief-compressed.png',
    height: '7"0',
    birth: 'Manila',
    fighting: 'Russian/American Pro Wrestling',
    skills: 'Resistance to cold',
    alignment: 'Evil',
    alignmentType: 'evil',
    active: false,
    location: { x: 60.5, y: 42.3 } // Manila
  },
  {
    id: 'Kryn Kent',
    name: 'Kryn Kent',
    smallImg: 'image/player8.jpg',
    largeImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/akuma_compressed.jpg',
    height: '5"10',
    birth: 'Manila',
    fighting: 'Satsui no Hado/Ansatsuken',
    skills: 'Martial Arts',
    alignment: 'Neutral Evil',
    alignmentType: 'evil',
    active: false,
    location: { x: 60.5, y: 42.3 } // Manila
  },
  {
    id: 'LyndonJT',
    name: 'LyndonJT',
    smallImg: 'image/player9.jpg',
    largeImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/bison-compressor.png',
    height: '6"0',
    birth: 'Manila',
    fighting: 'Psycho Power',
    skills: 'Hypnosis',
    alignment: 'Evil',
    alignmentType: 'evil',
    active: false,
    location: { x: 60.5, y: 42.3 } // Manila
  },
  {
    id: 'Vann Damme',
    name: 'Vann Damme',
    smallImg: 'image/player10.png',
    largeImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/blanka_compressed.png',
    height: '6"4',
    birth: 'Cebu',
    fighting: 'Feral movement, electric attacks',
    skills: 'Hunting',
    alignment: 'Good',
    alignmentType: 'good',
    active: false,
    location: { x: 64.8, y: 59.4 } // Cebu
  },

  {
    id: 'Super Dan',
    name: 'Super Dan',
    smallImg: 'image/player11.jpg',
    largeImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/bison-compressor.png',
    height: '6"0',
    birth: 'Cebu',
    fighting: 'Psycho Power',
    skills: 'Hypnosis',
    alignment: 'Evil',
    alignmentType: 'evil',
    active: false,
    location: { x: 64.8, y: 59.4 } // Cebu
  },
  {
    id: 'Dherrian',
    name: 'Dherrian',
    smallImg: 'image/player12.jpg',
    largeImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/blanka_compressed.png',
    height: '6"4',
    birth: 'Manila',
    fighting: 'Feral movement, electric attacks',
    skills: 'Hunting',
    alignment: 'Good',
    alignmentType: 'good',
    active: false,
    location: { x: 60.5, y: 42.3 } // Manila
  },
  {
    id: 'Kizzia',
    name: 'Kizzia',
    smallImg: 'image/player13.jpg',
    largeImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/blanka_compressed.png',
    height: '6"4',
    birth: 'Manila',
    fighting: 'Feral movement, electric attacks',
    skills: 'Hunting',
    alignment: 'Good',
    alignmentType: 'good',
    active: false,
    location: { x: 60.5, y: 42.3 } // Manila
  },
    {
    id: 'Sjjayee',
    name: 'Sjjayee',
    smallImg: 'image/player14.jpg',
    largeImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/blanka_compressed.png',
    height: '6"4',
    birth: 'Manila',
    fighting: 'Feral movement, electric attacks',
    skills: 'Hunting',
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
        background: "A wandering warrior who travels the world to perfect his skills. Ryu's devotion to martial arts and seeking worthy opponents is unmatched.",
        personality: "Stoic, focused, and always seeking to improve. Ryu values honor and the journey of self-improvement above all else.",
        specialMoves: [
          { name: "Hadoken", description: "A surge of energy projected from the palms that can hit opponents at a distance." },
          { name: "Shoryuken", description: "A rising dragon punch with invincible properties, perfect for countering aerial attacks." },
          { name: "Tatsumaki Senpukyaku", description: "A spinning kick that propels Ryu forward, hitting multiple times." }
        ]
      };
      break;
    case 'Justine Tate':
      fighter.description = {
        background: "An American martial artist who trained alongside Ryu under Master Gouken. Ken is now a family man who balances his fighting career with his responsibilities.",
        personality: "Confident, flashy, and charismatic. Ken enjoys the spotlight and showcasing his abilities with flair.",
        specialMoves: [
          { name: "Hadoken", description: "Ken's version is faster but slightly weaker than Ryu's." },
          { name: "Shoryuken", description: "Ken's dragon punch has more aggressive properties, with potential for multiple hits and fire effects." },
          { name: "Tatsumaki Senpukyaku", description: "A spinning kick with less range but more damage potential than Ryu's version." }
        ]
      };
      break;
    case 'King Kaikon':
      fighter.description = {
        background: "An Interpol officer seeking to avenge her father's death at the hands of M. Bison. Chun-Li is known as 'The Strongest Woman in the World'.",
        personality: "Strong-willed, determined, and just. She fights for what she believes in and to protect the innocent.",
        specialMoves: [
          { name: "Hyakuretsu Kyaku", description: "Lightning-fast kicks that hit multiple times, commonly known as the 'Lightning Kick'." },
          { name: "Kikoken", description: "A chi-based projectile similar to the Hadoken, but fired from one hand." },
          { name: "Spinning Bird Kick", description: "An upside-down spinning kick that hits multiple times while Chun-Li rotates in the air." }
        ]
      };
      break;
    case 'Emman DeGuzman':
      fighter.description = {
        background: "A Jamaican kickboxer and musician who combines his love of music with his fighting style. Dee Jay entered the World Warrior tournament to promote his music globally.",
        personality: "Upbeat, positive, and energetic. He approaches both fighting and life with rhythm and enthusiasm.",
        specialMoves: [
          { name: "Air Slasher", description: "A sound wave projectile created by the power of his music." },
          { name: "Double Dread Kick", description: "A pair of kicks aimed high then low, perfect for mix-up opportunities." },
          { name: "Machine Gun Upper", description: "A series of rapid upward punches that can juggle opponents in the air." }
        ]
      };
      break;
    case 'Cedrick Garces':
      fighter.description = {
        background: "A former assassin for Shadaloo who was brainwashed by M. Bison. After breaking free, she joined Delta Red, a special forces team in the UK.",
        personality: "Determined, direct, and focused. Despite her troubled past, Cammy fights to protect others and redeem herself.",
        specialMoves: [
          { name: "Spiral Arrow", description: "A drilling forward kick that covers distance quickly, known as 'Cannon Drill'." },
          { name: "Cannon Spike", description: "A powerful upward kick that launches both Cammy and her opponent into the air." },
          { name: "Quick Spin Knuckle", description: "A spinning backfist that can be used to evade projectiles and counter-attack." }
        ]
      };
      break;
    case 'PlayBoy Daim':
      fighter.description = {
        background: "The 'Emperor of Muay Thai' and former champion who bears a scar on his chest from his defeat by Ryu. Initially driven by revenge, Sagat has learned to temper his anger.",
        personality: "Proud, disciplined, and honorable. Despite his intimidating appearance, Sagat values the true spirit of combat.",
        specialMoves: [
          { name: "Tiger Shot", description: "A projectile thrown at both high and low angles to control space." },
          { name: "Tiger Uppercut", description: "A powerful rising uppercut similar to the Shoryuken." },
          { name: "Tiger Knee Crush", description: "A flying knee attack that closes distance and deals significant damage." }
        ]
      };
      break;
    case 'Kryn Kent':
      fighter.description = {
        background: "A professional wrestler from Russia who trained in the Siberian wilderness, wrestling bears to increase his strength. He fights to prove the superiority of Russian wrestling.",
        personality: "Passionate, patriotic, and surprisingly gentle outside of combat. Zangief fights for the pride of his country.",
        specialMoves: [
          { name: "Spinning Piledriver", description: "A devastating grab that spins opponents into the ground." },
          { name: "Double Lariat", description: "Zangief spins with arms extended, hitting opponents multiple times and deflecting projectiles." },
          { name: "Banishing Flat", description: "A charging punch that can be used to close distance and counter attacks." }
        ]
      };
      break;
    case 'LyndonJT':
      fighter.description = {
        background: "The master of the dark 'Satsui no Hado' fighting style and brother to Ryu and Ken's master Gouken. Akuma embraces the killing power that Ryu rejects.",
        personality: "Cold, ruthless, and obsessed with power. Akuma seeks only worthy opponents to test his deadly abilities.",
        specialMoves: [
          { name: "Gohadoken", description: "A more powerful version of the Hadoken that can be fired in midair." },
          { name: "Goshoryuken", description: "A dragon punch with multiple hits and enhanced damage." },
          { name: "Raging Demon", description: "His ultimate technique that attacks an opponent's soul, dealing damage based on their past sins." }
        ]
      };
      break;
    case 'Dherrian':
      fighter.description = {
        background: "The leader of the criminal organization Shadaloo and master of Psycho Power. Bison's original body was destroyed, but his consciousness can transfer to new bodies.",
        personality: "Megalomaniacal, power-hungry, and utterly ruthless. Bison cares only for domination and the expansion of his power.",
        specialMoves: [
          { name: "Psycho Crusher", description: "Bison charges forward surrounded by Psycho Power, hitting multiple times." },
          { name: "Double Knee Press", description: "A sliding kick that can hit opponents from a distance, also known as 'Scissor Kick'." },
          { name: "Head Stomp", description: "Bison leaps into the air and stomps down on the opponent's head." }
        ]
      };
      break;
    case 'Vann Damme':
      fighter.description = {
        background: "Originally named Jimmy, Blanka was a plane crash survivor in the Amazon rainforest who developed beastly characteristics while living in the wild.",
        personality: "Wild but gentle-hearted. Despite his fearsome appearance, Blanka is kindhearted and protective of his friends and mother.",
        specialMoves: [
          { name: "Electric Thunder", description: "Blanka charges his body with electricity, shocking anyone who makes contact." },
          { name: "Rolling Attack", description: "Curls into a ball and rolls forward at high speed to strike opponents." },
          { name: "Amazon River Run", description: "A low sliding attack that can trip opponents and evade certain attacks." }
        ]
      };
      break;
    case 'Super Dan':
      fighter.description = {
        background: "The leader of the criminal organization Shadaloo and master of Psycho Power. Bison's original body was destroyed, but his consciousness can transfer to new bodies.",
        personality: "Megalomaniacal, power-hungry, and utterly ruthless. Bison cares only for domination and the expansion of his power.",
        specialMoves: [
          { name: "Psycho Crusher", description: "Bison charges forward surrounded by Psycho Power, hitting multiple times." },
          { name: "Double Knee Press", description: "A sliding kick that can hit opponents from a distance, also known as 'Scissor Kick'." },
          { name: "Head Stomp", description: "Bison leaps into the air and stomps down on the opponent's head." }
        ]
      };
      break;
    case 'Dherrian':
      fighter.description = {
        background: "The leader of the criminal organization Shadaloo and master of Psycho Power. Bison's original body was destroyed, but his consciousness can transfer to new bodies.",
        personality: "Megalomaniacal, power-hungry, and utterly ruthless. Bison cares only for domination and the expansion of his power.",
        specialMoves: [
          { name: "Psycho Crusher", description: "Bison charges forward surrounded by Psycho Power, hitting multiple times." },
          { name: "Double Knee Press", description: "A sliding kick that can hit opponents from a distance, also known as 'Scissor Kick'." },
          { name: "Head Stomp", description: "Bison leaps into the air and stomps down on the opponent's head." }
        ]
      };
      break;
    case 'Kizzia':
      fighter.description = {
        background: "The leader of the criminal organization Shadaloo and master of Psycho Power. Bison's original body was destroyed, but his consciousness can transfer to new bodies.",
        personality: "Megalomaniacal, power-hungry, and utterly ruthless. Bison cares only for domination and the expansion of his power.",
        specialMoves: [
          { name: "Psycho Crusher", description: "Bison charges forward surrounded by Psycho Power, hitting multiple times." },
          { name: "Double Knee Press", description: "A sliding kick that can hit opponents from a distance, also known as 'Scissor Kick'." },
          { name: "Head Stomp", description: "Bison leaps into the air and stomps down on the opponent's head." }
        ]
      };
      break;
    case 'Sjjayee':
      fighter.description = {
        background: "The leader of the criminal organization Shadaloo and master of Psycho Power. Bison's original body was destroyed, but his consciousness can transfer to new bodies.",
        personality: "Megalomaniacal, power-hungry, and utterly ruthless. Bison cares only for domination and the expansion of his power.",
        specialMoves: [
          { name: "Psycho Crusher", description: "Bison charges forward surrounded by Psycho Power, hitting multiple times." },
          { name: "Double Knee Press", description: "A sliding kick that can hit opponents from a distance, also known as 'Scissor Kick'." },
          { name: "Head Stomp", description: "Bison leaps into the air and stomps down on the opponent's head." }
        ]
      };
      break;

  }
});

function initFighters() {
  // Hide the loading screen
  setTimeout(() => {
    loader.style.display = 'none';
    
    // Display the fighters
    listFighters();
    
    // Show the first fighter by default
    viewFighterDetail(fighters[0]);

    // Start animations
    animateElements();
  }, 1000); // Simulate a loading delay for better user experience
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
  selectSound.volume = 0.5;
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