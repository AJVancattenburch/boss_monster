const heroes = [
  {
      name: 'Boba Fett',
      type: 'mercenary',
      damage: 10,
      health: 100
  },
  {
      name: 'Darth Maul',
      type: 'dark lord',
      damage: 10,
      health: 100
  }
]


const boss = {
  name: 'Darth Tater',
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1
}





function attackBoss() {

  if(boss.health > 0) {
    console.log(boss)
    boss.health -= 10
    console.log("doing boss damage", boss.health)
    // We need to re-draw/update our page with the bosses new health --> call to draw function
  } else if(boss.health = 0){
    window.alert('this boss do be ded')
  }
  rechargeBoss()
}

function heroDamage(){
  let foundHero= heroes[0]
  foundHero.health -=5
  
  document.getElementById('hero-damage').innerText=`${foundHero.health}`
  heroDamageTwo()
}

function heroDamageTwo(){
  let foundHero= heroes[1]
  foundHero.health -=5
  
  document.getElementById('hero-damage-two').innerText=`${foundHero.health}`
}



function drinkPotion(){
  
  heroes.forEach(h => h.health <= 100 ? h.health += 50 : h.health = 100)
  heroHealth()
  
}

function heroHealth() {
  heroes.forEach(h => {
    h.health -=10
    if(h.health >= 100)
    h.health = 100
  })
}


function rechargeBoss(){
  if(boss.health == 0){
    boss.health = 100
  }
  document.getElementById('bossHealth').innerText = `${boss.health}`
}
// NOTE this is really good idea for a bossLevelUp function
// if(boss.health <= 1) {
  //   boss.health = boss.health *3
  //   console.log(`${boss}`);
  // }
  
  setInterval(heroDamage,1000)