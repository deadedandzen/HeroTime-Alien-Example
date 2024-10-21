function Alien(name, can_ult, can_kix, unlockable, randomizer) {
    this.name = name;
    //tells you the aliens name
    this.can_ult = can_ult;
    //tells you if the alien can go ultimate
    this.can_kix = can_kix;
    //tells you if the alien can go omnikix
    this.unlockable = unlockable;
    //tells you if the alien is unlockable
    this.randomizer = randomizer;
    //tells you if the alien is on the randomizer
};



global.grave_alien_101 = new Alien("test_alien", false, false, false, false);
//global.grave_alien_101 = ['test_alien'] <- the old version