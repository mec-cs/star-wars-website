var galleryItemInfo = {
    "The Millennium Falcon": {
        "description": "            The story of Cal Kestis continues in Star Wars Jedi: Survivor, a third person galaxy spanning action-adventure game from Respawn Entertainment, developed in collaboration with LucasgalleryItem Games. This narratively-driven, single player title picks up five years after the events of Star Wars Jedi: Fallen Order and follows Cal's increasingly desperate fight as the galaxy descends further into darkness. Stand against the darkness.",
    },
    "Darth Vader’s TIE Fighter": {
        "description": "            Embark on an all-new Battlefront experience from the bestselling Star Wars game franchise of all time. Become the hero and play as a fearless trooper, pilot a legendary starfighter, fight as your favorite iconic Star Wars character, or forge a new path as an elite special forces soldier through an emotionally gripping new Star Wars story. A New Hero, a Story Untold - Jump into the boots of an elite special forces soldier, equally lethal on the ground and space, in an emotionally gripping new Star Wars campaign that  spans over 30 years and bridges events between the galleryItems' Star Wars: Return of the Jedi and Star Wars: The Force Awakens. The Ultimate Star Wars Battleground - A Star Wars multiplayer universe unmatched in variety and breadth where up to 40 players fight as iconic heroes, authentic-to-era troopers and  in a massive array of vehicles on land and in the air as battle rages through the galaxy. Galactic-Scale Space Combat - Space combat has been designed for Star Wars Battlefront™ II from the ground up with distinct handling, weapons and customization options. Join your squadron and weave in between asteroids fields, fly through Imperial Dock Yards and take down massive capital ships as you pilot legendary starfighters in high stakes dogfights with up to 24 players and 40 AI ships. Better Together - Team up with a friend from the comfort of your couch with two-player offline split-screen play*. Earn rewards, customize your troopers and heroes, and bring your upgrades with you on the online multiplayer battleground. Master Your Hero - Not just an iconic hero- your hero. Master your craft with customizable character progression. Equip ability modifiers, unique to each hero, trooper class, and starfighter. Use these ability modifiers to adapt and modify your character's core powers, either as lethal active effects on your opponents, helpful status boosts, or tactical assistance, to counter any opponent on the battlefront.",
    },
    "Slave I": {
        "description": "Han Solo, Darth Vader, and more, from every era then conquer your opponents in epic, RPG-style combat. Build mighty teams and craft the best strategy to win battles across iconic locations to become the most legendary hologamer in the galaxy! Collect your favorite Star Wars characters, like Luke Skywalker, Create Your Ultimate Team : Build powerful light and dark side teams with both Jedi and Sith heroes and other characters from the Star Wars universe. Make strategic choices and pick characters with complimentary abilities to construct squads and engage in RPG combat like never before! Collect Iconic Heroes : Collect characters from the original trilogy and prequel galleryItems, plus animated TV shows like Star Wars: The Clone Wars and Star Wars Rebels and more. True to the RPG genre, each new hero has multiple powerful attacks and abilities! Train Powerful Champions : Make tactical decisions and equip your characters, from Darth Vader and Boba Fett to Lando Calrissian and Leia Organa, with powerful gear to enhance their damage. Unlock special leader abilities to buff your team and unleash moves like Darth Sidious's Force Lightning, Chewbacca's Wookiee Rage, and more. Fight In Legendary Locations : Complete epic missions on Hoth, Bespin, Tatooine, Coruscant, and beyond. Unlock special characters to play through in light and dark side campaigns",
    },
    "The X-Wing": {
        "description": "From Respawn Entertainment comes a brand-new action adventure game which tells an original Star Wars story about Cal Kestis, a Padawan who survived the events of Star Wars: Revenge of the Sith. Play, and become a Jedi. Key Features: Feel The Force Master lightsaber combat forms to refine striking, parrying and dodging your enemies. Use your Jedi weapon and the Force to take on any challenge. A New Star Wars Story : As one of the last Jedi, you must do whatever it takes to survive. Complete your Jedi training before the Inquisitors discover your plan to rebuild the Jedi Order. The Galaxy Awaits - Explore ancient forests, windswept cliffs, and haunted jungles as you decide when and where you want to go next.",
    },
    "The Star Destroyer": {
        "description": " Set after the fall of the Galactic Empire, Star Wars: Hunters will bring players together in thrilling, team-based multiplayer battles. Select from a diverse cast of new characters, including daring Bounty Hunters, heroes of the Rebellion and Imperial stormtroopers. Star Wars: Hunters will be free to download for the Nintendo Switch, on the App Store and on Google Play in 2022.",
    },
    "The Ghost": {
        "description": "Experience the galaxy in the critically acclaimed LEGO Star Wars: The Skywalker Saga with even more characters! Get the Galactic Edition and play as over 400 characters from the expanded galaxy including Andor, Obi-Wan Kenobi, The Clone Wars, Rebels, The Book of Boba Fett, and more! One of the trademarks of Star Wars is that any corner of the galaxy, or ship for that matter, can be interesting in its own right. The Ghost is not beautiful, but it’s so lovingly crafted in its details that it doesn’t matter.",
    },
    "AT-ATs": {
        "description": "Join the Angry Birds in their biggest adventure yet! A long time ago in a galaxy far, far away.... a group of desperate Rebel birds faced off against a galactic menace: the Empire's evil Pigtroopers! Rebel birds, striking from a hidden base, have won their first victory against the evil Imperial Pigs. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the Pig Star, and are racing to deliver the plans to the Rebel birds. Now they need your help! Join an epic adventure with the Angry Birds in the legendary Star Wars universe! Use the Force, wield your Lightsaber, and blast away Pigtroopers on an intergalactic journey from the deserts of Tatooine to the depths of the Pig Star -- where you'll face off against the terrifying Darth Vader, Dark Lord of the Pigs! Can you become a Jedi Master and restore freedom to the galaxy? Time to grab your Lightsaber and join the adventure! May the birds be with you!",
    }
};

document.addEventListener("DOMContentLoaded", function() {
    var galleryItems = document.querySelectorAll('.galleryItem');
    galleryItems.forEach(function(galleryItem) {
      galleryItem.addEventListener('click', function() {
        var galleryItemTitle = this.querySelector('h3').textContent;
        var galleryItemDescription = galleryItemInfo[galleryItemTitle].description;
        opengalleryItemInfo(galleryItemTitle, galleryItemDescription);
      });
    });

    function opengalleryItemInfo(title, description) {
      var galleryItemInfo = document.getElementById('galleryItemInfo');
      var galleryItemTitle = document.getElementById('galleryItemTitle');
      var galleryItemDescription = document.getElementById('galleryItemDescription');

      galleryItemTitle.textContent = title;
      galleryItemDescription.textContent = description;

      galleryItemInfo.style.display = 'block';

      var otherElements = document.querySelectorAll('.gallery, .navbar, .banner');
      otherElements.forEach(function(element) {
        element.style.opacity = 0.3;
      });
    }

    var closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', function() {
      var galleryItemInfo = document.getElementById('galleryItemInfo');
      galleryItemInfo.style.display = 'none';

      var otherElements = document.querySelectorAll('.gallery, .navbar, .banner');
      otherElements.forEach(function(element) {
        element.style.opacity = 1;
      });

    });
  });