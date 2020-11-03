const Piece = {
  FLOWER : 'Flower',
  FEATHER: 'Feather',
  SANDS: 'Sands',
  GOBLET: 'Goblet',
  CIRCLET: 'Circlet'
}

const Set = {
  BERSERK : 'Berserk',
  BRAVE_HEART: 'Brave heart',
  SOJOURNER: 'Sojourner',
  GLADIATOR: 'Gladiator',
  MARTIAL_ARTIST: 'Martial Artist'
}

const StatType = {
  HP : 'HP',
  ATK : 'ATK',
  DEF : 'DEF',
  HP_PERCENT : 'HP %',
  ATK_PERCENT : 'ATK %',
  DEF_PERCENT : 'DEF %',
  ELEMENTAL_MAST : 'Elemental Mastery',
  ENERGY_RECHARGE : 'Energy Recharge',
  CRIT_RATE : 'CRIT Rate %',
  CRIT_DMG : 'CRIT DMG %',
  HEALING_BONUS: 'Healing Bonus %'
}

class Artifact {
  constructor(piece, set, rank, mainStat, subStats){
    this.piece = piece;
    this.set = set;
    this.rank = rank;
    this.mainStat = mainStat;
    this.subStats = subStats;
  }
};

class Stat {
  constructor(statType, value){
    this.statType = statType;
    this.value = value;
  }
};

class StatTable {
  constructor(hp, atk, def, hp_percent, atk_percent, def_percent,
    elemental_mastery, energy_recharge, crit_rate, crit_dmg, healing_bonus){
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.hp_percent = hp_percent;
    this.atk_percent = atk_percent;
    this.def_percent = def_percent;
    this.elemental_mastery = elemental_mastery;
    this.energy_recharge = energy_recharge;
    this.crit_rate = crit_rate;
    this.crit_dmg = crit_dmg;
    this.healing_bonus = healing_bonus;
  }
};

function calcStats(){
  let table = new StatTable(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
  console.log(table)
}

function printArtifact(){
  let artifact = new Artifact(Piece.FEATHER, Set.BERSERK, 1, 0, 0 )
  console.log(artifact)
}


console.log("hello world.");
