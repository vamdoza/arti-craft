const Piece = {
  FLOWER: 'Flower',
  FEATHER: 'Feather',
  SANDS: 'Sands',
  GOBLET: 'Goblet',
  CIRCLET: 'Circlet'
}

const Set = {
  BERSERK: 'Berserk',
  BRAVE_HEART: 'Brave heart',
  SOJOURNER: 'Sojourner',
  GLADIATOR: 'Gladiator',
  MARTIAL_ARTIST: 'Martial Artist'
}

const StatType = {
  HP: 'HP',
  ATK: 'ATK',
  DEF: 'DEF',
  HP_PERCENT: 'HP %',
  ATK_PERCENT: 'ATK %',
  DEF_PERCENT: 'DEF %',
  ELEMENTAL_MAST: 'Elemental Mastery',
  ENERGY_RECHARGE: 'Energy Recharge',
  CRIT_RATE: 'CRIT Rate %',
  CRIT_DMG: 'CRIT DMG %',
  HEALING_BONUS: 'Healing Bonus %'
}

class Artifact {
  constructor (piece, set, rank, mainStat, subStats) {
    this.piece = piece;
    this.set = set;
    this.rank = rank;
    this.mainStat = mainStat;
    this.subStats = subStats;
  }
};

class Stat {
  constructor (statType, value) {
    this.statType = statType;
    this.value = value;
  }
};

class Stats {
  artifacts = [];
  constructor (hp, atk, def, hp_percent, atk_percent, def_percent,
    elemental_mastery, energy_recharge, crit_rate, crit_dmg, healing_bonus) {
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
  static create() {
    return new Stats(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }

  addArtifact(artifact) {
    // console.log(`adding ${artifact.piece} to list`)
    this.artifacts.push(artifact);
  }

  calculateStats() {
    for (const art of this.artifacts) {
      this.add_(art.mainStat);
      for (const sub of art.subStats) {
        this.add_(sub)
      }
    }
  }

  add_(stat) {
    switch (stat.statType) {
      case StatType.HP:
        this.hp += stat.value;
        break;
      case StatType.ATK:
        this.atk += stat.value;
        break;
      case StatType.DEF:
        this.def += stat.value;
        break;
      case StatType.HP_PERCENT:
        this.hp_percent += stat.value;
        break;
      case StatType.ATK_PERCENT:
        this.atk_percent += stat.value;
        break;
      case StatType.DEF_PERCENT:
        this.def_percent += stat.value;
        break;
      case StatType.ELEMENTAL_MAST:
        this.elemental_mastery += stat.value;
        break;
      case StatType.ENERGY_RECHARGE:
        this.energy_recharge += stat.value;
        break;
      case StatType.CRIT_RATE:
        this.crit_rate += stat.value;
        break;
      case StatType.CRIT_DMG:
        this.crit_dmg += stat.value;
        break;
      case StatType.HEALING_BONUS:
        this.healing_bonus += stat.value;
        break;

      default:
        console.log("Could not add " + stat.statType);
        break;
    }
  }
};

export { Piece, Set, StatType, Artifact, Stat, Stats };

// function buildTable() {
//   let table = Stats.create();
//   let artifact = buildArtifact();

//   table.addArtifact(artifact);
//   table.addArtifact(artifact);
//   table.calculateStats();

//   return table;
// }

// function buildArtifact() {
//   let artifact = new Artifact(Piece.FEATHER, Set.BERSERK, 1,
//     { statType: "ATK", value: 4 },
//     [
//       { statType: "HP", value: 120 },
//       { statType: "HP %", value: 0.045 }
//     ])
//   return artifact
// }
