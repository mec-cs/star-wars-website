var galleryItemInfo = {
    "Episode I: The Phantom Menace (1999)": {
        "description": "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory. IMDB.",
    },
    "Episode II: Attack of the Clones (2002)": {
        "description": "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi discovers a secret clone army crafted for the Jedi. IMDB.",
    },
    "Star Wars: The Clone Wars (2008)": {
        "description": "After the Republic's victory on Christophsis, Anakin and his new apprentice, Ahsoka Tano, must rescue the kidnapped son of Jabba the Hutt. Political intrigue complicates their mission. IMDB.",
    },
    "Episode III: Revenge of the Sith (2005)": {
        "description": "Three years into the Clone Wars, Obi-Wan pursues a new threat, while Anakin is lured by Chancellor Palpatine into a sinister plot to rule the galaxy. IMDB.",
    },
    "Solo: A Star Wars Story (2018)": {
        "description": "Board the Millennium Falcon and journey to a galaxy far, far away in an epic action-adventure that will set the course of one of the Star Wars saga's most unlikely heroes. IMDB.",
    },
    "Rogue One: A Star Wars Story (2016)": {
        "description": "In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire's ultimate weapon of destruction. IMDB.",
    },
    "Episode IV: A New Hope (1977)": {
        "description": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader. IMDB.",
    },
    "Episode V: The Empire Strikes Back (1980)": {
        "description": "After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett. IMDB.",
    },
    "Episode VI: Return of the Jedi (1983)": {
        "description": "After rescuing Han Solo from Jabba the Hutt, the Rebels attempt to destroy the second Death Star, while Luke struggles to help Darth Vader back from the dark side. IMDB.",
    },
    "Episode VII: The Force Awakens (2015)": {
        "description": "As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace. IMDB.",
    },
    "Episode VIII: The Last Jedi (2017)": {
        "description": "The Star Wars saga continues as new heroes and galactic legends go on an epic adventure, unlocking mysteries of the Force and shocking revelations of the past. IMDB.",
    },
    "Episode IX: The Rise of Skywalker (2019)": {
        "description": "In the riveting conclusion of the landmark Skywalker saga, new legends will be born-and the final battle for freedom is yet to come. IMDB.",
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

