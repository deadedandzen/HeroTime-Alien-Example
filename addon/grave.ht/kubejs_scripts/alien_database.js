function Alien(name, can_ult, can_kix, unlockable, randomizer, can_transform) {
    this.name = name;
    //global.grave_alien_0.name
    //tells you the aliens name
    this.can_ult = can_ult;
    //global.grave_alien_0.can_ult
    //tells you if the alien can go ultimate
    this.can_kix = can_kix;
    //global.grave_alien_0.can_kix
    //tells you if the alien can go omnikix
    this.unlockable = unlockable;
    //global.grave_alien_0.unlockable
    //tells you if the alien is unlockable
    this.randomizer = randomizer;
    //global.grave_alien_0.randomizer
    //tells you if the alien is on the randomizer
    this.can_transform = can_transform;
    //global.grave_alien_0.can_transform
    //tells you if the alien is able to be transformed into
};

//THIS FUNCTION MUST BE AT THE TOP OF YOUR ALIEN DATABASE


global.grave_alien_101 = new Alien("test_alien", true, false, true, true, true);
//global.grave_alien_101 = ['test_alien'] <- the old version