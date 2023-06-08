var galleryItemInfo = {
    "Dagobah": {
        "description": "When Luke Skywalker first lands there in The Empire Strikes Back, Dagobah appears to be nothing more than a hostile swamp teeming with dangerous wildlife and other inhospitable conditions. In reality, it's the perfect training ground for a Jedi-in-training looking to hone their skills with the force.",
    },
    "Geonosis": {
        "description": "In Attack of the Clones, Obi-Wan Kenobi follows the famed bounty hunter Jango Fett to the desert planet Geonosis during his investigation. This arid, rocky world is home to the insectoid Geonosians and holds a major battle droid foundry. Kenobi's capture on Geonosis leads to the first battle of the Clone Wars. This initial conflict begins in the Petranaki Arena, where Obi-Wan Kenobi, Anakin Skywalker, and Padme Amidala are all sentenced to death for the entertainment of a stadium full of Geonosians.",
    },
    "Lothal": {
        "description": "On its surface, Lothal appears to be just a simple farming planet. In reality, the world holds a secret that made it one of the Empire's greatest desires. In Star Wars: Rebels, the protagonists discover there's a Jedi temple hidden on the planet. Additionally, they find this temple holds a portal with the potential to make a massive impact on the entire galaxy.",
    },
    "Bespin": {
        "description": "Bespin is a gas giant that can only house a few specific lifeforms. But mining companies built Cloud City to access its rich deposits of rare tibanna gas. The settlement floats in Bespin's upper level where there's a thin layer of breathable atmosphere. Cloud City is home to many key events in the Star Wars galaxy's history despite its small size.",
    },
    "Kamino": {
        "description": "Kamino, a stormy water planet, is another critical location for the Clone Wars. The mysterious and elegant Kaminoans are widely known for their advanced cloning technology. They used this technology to create the Grand Army of the Republic, using Jango Fett as the genetic blueprint.",
    },
    "Mustafar": {
        "description": "Mustafar wasn't always the lava-fille landscape most Star Wars fans know it as. Long before the events of Episode III: Revenge of the Sith, Mustafar was a world teeming with life. Then, a force-sensitive woman, Lady Corvax, attempted to use the ancient artifact that kept the planet stable to revive her husband. Meddling with this artifact turned Mustafar into the volcanic planet audiences recognize today.",
    },
    "Naboo": {
        "description": "Naboo is an essential Star Wars planet for its history and people. Regarding history, Naboo is notable as the world where Obi-Wan Kenobi and Qui-Gon Jinn squared off against the Sith assassin Darth Maul. Similarly, Naboo is the home planet of the Gungans and Queen Amidala, the eventual mother of Luke and Leia Skywalker.",
    },
    "Coruscant": {
        "description": "Home to the Galactic Senate and the Jedi Council, Coruscant plays a significant role in the origins of the Empire. During the prequel trilogy, especially Attack of the Clones and Revenge of the Sith, it's Coruscant where Sheev Palpatine schemes his ascent to Emperor. Subsequently, during the reign of the Empire, the planet becomes known as the Imperial Center.",
    },
    "Alderaan": {
        "description": "Known as \"the planet of beauty\", Alderaan is a mountainous world covered with woods and vast bodies of water. This natural beauty exemplifies Alderaan's propensity toward peace in all facets of its existence. Alderaan took on a slightly more active role during the Clone Wars thanks to its Senator, Bail Organa, being so close with Senator and later Chancellor Palpatine. But even then, it never actively took up arms.",
    },
    "Ilum": {
        "description": "Ilum, a small, snow-covered world, was long held as a sacred place by the Jedi Order. Because of its kyber crystalline core, countless generations of Jedi would make a pilgrimage to Ilum for the Gathering. The Gathering was a rite of passage for Jedi Younglings that required them to venture into a cave and find a crystal that resonated with them via the Force.",
    },
    "Endor": {
        "description": "      Han Solo, Darth Vader, and more, from every era then conquer your opponents in epic, RPG-style combat. Build mighty teams and craft the best strategy to win battles across iconic locations to become the most legendary hologamer in the galaxy! Collect your favorite Star Wars characters, like Luke Skywalker, Create Your Ultimate Team : Build powerful light and dark side teams with both Jedi and Sith heroes and other characters from the Star Wars universe. Make strategic choices and pick characters with complimentary abilities to construct squads and engage in RPG combat like never before! Collect Iconic Heroes : Collect characters from the original trilogy and prequel galleryItems, plus animated TV shows like Star Wars: The Clone Wars and Star Wars Rebels and more. True to the RPG genre, each new hero has multiple powerful attacks and abilities! Train Powerful Champions : Make tactical decisions and equip your characters, from Darth Vader and Boba Fett to Lando Calrissian and Leia Organa, with powerful gear to enhance their damage. Unlock special leader abilities to buff your team and unleash moves like Darth Sidious's Force Lightning, Chewbacca's Wookiee Rage, and more. Fight In Legendary Locations : Complete epic missions on Hoth, Bespin, Tatooine, Coruscant, and beyond. Unlock special characters to play through in light and dark side campaigns",
    },
    "Scarif": {
        "description": "From the dense woods covering it, fans might know Endor by its common name, the Forest Moon of Endor. It's far more than just the home of the adorable, if divisive, Ewoks. Endor played a huge role in the last original trilogy entry, Return of the Jedi, where the Empire and the Rebel Alliance wage their final battle.",
    },
    "Tatooine": {
        "description": "As a sparsely populated desert world, few would believe Tatooine would become one of the most crucial settings in the entire Star Wars saga. But as the birthplace of Anakin Skywalker and the childhood home of his son Luke, this planet is the primary stage for the events that kick-started the series fans know today.",
    },
    "Mandalore": {
        "description": "Like Lothal, Mandalore has yet to appear in a Star Wars galleryItem. Still, that doesn't mean it isn't anything but fundamental to the history of Star Wars, specifically the TV series The Mandalorian. Mandalore has been the setting for a handful of Star Wars stories, but its influence looms much larger.",
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