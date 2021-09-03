
const quotes = [
    {
        text: "But that was life: Nobody got a guided tour to their own theme park. You had to hop on the rides as they presented themselves, never knowing whether you would like the one you were in line for...or if the bastard was going to make you throw up your corn dog and your cotton candy all over the place.", 
        source: "J.R. Ward, Crave",
        id: 1,
        length: 59
    },
    {
        text: "A musician must make music, an artist must paint, a poet must write, if he is to be ultimately at peace with himself. What a man can be, he must be", 
        source: "Abraham Maslow",
        id: 2,
        length: 32
    },
    {
        text: "After a long moment I closed the freezer door. I wanted to lie down and press my cheek against the cool linoleum. Instead I reached out with my little finger and flipped the Barbie's head. It went thack thack against the door. I flipped it again. Thack thack. Whee. I had a new hobby.", 
        source: "Jeff Lindsay, Darkly Dreaming Dexter",
        id: 3,
        length: 54
    },
    {
        text: "Why is it that when you wipe up dust its called dusting but when you wipe up a spill its not called spilling? Just something to think about.", 
        source: "Ellen Degeneres",
        id: 4,
        length: 28
    },
    {
        text: "Don't be indifferent about any random idea that occurs to you, because each and every idea is for a particular purpose. It may not be beneficial to you, but can be what others are craving for", 
        source: "Michael Bassey Johnson",
        id: 5,
        length: 36
    },
    {
        text: "If you take some words at random and put them together, it becomes gibberish, and everyone who knows the meaning of words knows it as such. But if you take unrelated moving images and string them together, there will always be some people who will hold that the resultant strip of celluloid aims at some profundity.", 
        source: "Satyajit Ray, Satyajit Ray on Cinema",
        id: 6,
        length: 56
    },
    {
        text: "I learned to write because I am one of those people who somehow cannot manage the common communications of smiles and gestures, but must use words to get across things that other people would never need to say.", 
        source: "Moneyball",
        id: 7,
        length: 38
    },
    {
        text: "I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It's when you know you're licked before you begin but you begin anyway and you see it through no matter what. You rarely win, but sometimes you do.", 
        source: "To Kill a Mockingbird, Harper Lee",
        id: 8,
        length: 53
    },
    {
        text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        source: "Maya Angelou",
        id: 9,
        length: 58
    },
    {
        text: "A semitrailer is legally defined as a vehicle designed so that a portion of its weight rests on a towing vehicle. This distinguishes it from a full trailer on which the entire load, except for a drawbar, rests on its own wheels.",
        source: "Why Do Clocks Run Clockwise?: Mysteries of Everyday Life Explained",
        id: 10,
        length: 42
    },
    {
        text: "I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.", 
        source: "Pablo Neruda, 100 Love Sonnets",
        id: 11,
        length: 66
    },
    {
        text: "One, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and don't throw it away.", 
        source: "Steven Hawking",
        id: 12,
        length: 49
    },
    {
        text: "The important thing is not to stop questioning. Curiosity has its own reason for existence. One cannot help but be in awe when he contemplates the mysteries of eternity, of life, of the marvelous structure of reality. It is enough if one tries merely to comprehend a little of this mystery each day.", 
        source: "Albert Einstein, Old Man's Advcie to Youth: LIFE Magazine",
        id: 13,
        length: 49
    },
    {
        text: "The important thing is not to stop questioning. Curiosity has its own reason for existence. One cannot help but be in awe when he contemplates the mysteries of eternity, of life, of the marvelous structure of reality. It is enough if one tries merely to comprehend a little of this mystery each day.", 
        source: "Albert Einstein, Old Man's Advcie to Youth: LIFE Magazine",
        id: 14,
        length: 53
    },
    {
        text: "The fact that we live at the bottom of a deep gravity well, on the surface of a gas covered planet going around a nuclear fireball 90 million miles away and think this to be normal is obviously some indication of how skewed our perspective tends to be.", 
        source: "Douglas Adams, The Salmon of Doubt: Hitchhiking the Galaxy One Last Time",
        id: 15,
        length: 48
    },
    {
        text: "Time is a drug. Too much of it kills you.", 
        source: "Terry Pratchett, Small Gods",
        id: 16,
        length: 10
    },
    {
        text: "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.", 
        source: "Jane Austen, Northanger Abbey",
        id: 17,
        length: 19
    },
    {
        tex: "A day without sunshine is like, you know, night.", 
        source: "Steve Martin",
        id: 18,
        length: 9
    },
    {
        text: "Never put off till tomorrow what may be done day after tomorrow just as well.", 
        source: "Mark Twain",
        id: 19,
        length: 15
    },
    {
        text: "Jun Simons made the best typing test of all time!  All the other typing tests just cannot compete with how exquisite this one is.  Since I am typing this right now, I must agree.", 
        source: "Not Jun Simons",
        id: 20,
        length: 34
    },
    {
        text: "I love deadlines. I love the whooshing noise they make as they go by.", 
        source: "Douglas Adams, The Salmon of Doubt",
        id: 21,
        length: 14
    },
    {
        text: "Vanity and pride are different things, though the words are often used synonymously. A person may be proud without being vain. Pride relates more to our opinion of ourselves, vanity to what we would have others think of us.", 
        source: "Jane Austen, Pride and Prejudice",
        id: 22,
        length: 39
    },
    {
        text: "Thousands of groups exist to influence government. Among the major types of interest groups are those that represent the main sectors of the economy. In addition, many public-interest organizations have been formed to represent the needs of the general citizenry, including some single-issue groups.",
        source: "American Government and Politics Today: The Essentials",
        id: 23,
        length: 44
    },
    {
        text: "I am the happiest creature in the world. Perhaps other people have said so before, but not one with such justice. I am happier even than Jane; she only smiles, I laugh.",
        source: "Jane Austen, Pride and Prejudice",
        id: 24,
        length: 44
    },
    {
        text: "It is a curious thing, Harry, but perhaps those who are best suited to power are those who have never sought it. Those who, like you, have leadership thrust upon them, and take up the mantle because they must, and find to their own surprise that they wear it well.",
        source: "J.K.Rowling, Harry Potter and The Chamber of Secrets",
        id: 25,
        length: 50
    },
    {
        text: "There comes a time when one must take a position that is neither safe, nor politic, nor popular, but he must take it because conscience tells him it is right.",
        source: "Martin Luther King Jr.",
        id: 26,
        length: 30
    },
    {
        text: "What difference does it make to the dead, the orphans and the homeless, whether the mad destruction is wrought under the name of totalitarianism or in the holy name of liberty or democracy?",
        source: "Mahatma Gandhi",
        id: 27,
        length: 50
    },
    {
        text: "The oppressed are allowed once every few years to decide which particular representatives of the oppressing class are to represent and repress them.",
        source: "Karl Marx",
        id: 28,
        length: 23
    },
    {
        text: "No, I thought not. You have not asked me for instance, what is my favorite jam, to check that I am not an impostor. For future reference, Harry, it is raspberry... although of course, if I were a Death Eater, I would have been sure to find out my own jam preferences before impersonating myself.",
        source: "Harry Potter and the Half-Blood Prince",
        id: 29,
        length: 55
    },
    {
        text: "You know, Marty, I'm gonna be very sad to see you go. You've really made a difference in my life. You've given me something to shoot for. Just knowing that I'm going to be around to see 1985. That I'm gonna succeed in this! That I'm gonna have a chance to travel through time!",
        source: "Back to the Future",
        id: 30,
        length: 54
    },
    {
        text: "All right, I'll go in there for Dorothy. Wicked Witch or no Wicked Witch, guards or no guards, I'll tear them apart. I may not come out alive, but I'm going in there. There's only one thing I want you fellows to do. Talk me out of it!",
        source: "The Wizard of Oz",
        id: 31,
        length: 48
    },
    {
        text: "As in consumer theory, the firm’s input decision has a dual nature. The optimum choice of K and L can be analyzed not only as the problem of choosing the lowest isocost line tangent to the production isoquant, but also as the problem of choosing the highest production isoquant tangent to a given isocost line.",
        source: "Pearson Microeconomics",
        id: 32,
        length: 55
    },
    {
        text: "Many countries use import quotas and tariffs to keep the domestic price of a product above world levels and thereby enable the domestic industry to enjoy higher profits than it would under free trade",
        source: "Pearson Microeconomics",
        id: 33,
        length: 34
    },
    {
        text: "Under pressure from domestic automobile producers, the Reagan administration negotiated “voluntary” import restraints, under which the Japanese agreed to restrict shipments of cars to the United States. The Japanese could therefore sell those cars that were shipped at a price higher than the world level and capture a higher profit margin on each one. ",
        source: "Pearson Microeconomics",
        id: 34,
        length: 54
    },
    {
        text: "With a subsidy, the sellers' price exceeds the buyers' price, and the difference between the two is the amount of the subsidy",
        source: "Pearson Microeconomics",
        id: 35,
        length: 22
    },
    {
        text: "A monopoly is a market that has only one seller but many buyers. A monopsony is just the opposite: a market with many sellers but only one buyer.",
        source: "Pearson Microeconomics",
        id: 36,
        length: 28
    },
    {
        text: "In general, the monopolist’s quantity will be lower and its price higher than the competitive quantity and price. This imposes a cost on society because fewer consumers buy the product, and those who do pay more for it.",
        source: "Pearson Microeconomics",
        id: 37,
        length: 38
    },
    {
        text: "a good example of monopsony power in manufacturing is the market for automobile parts and components, such as brakes and radiators. Each major car producer in the United States typically buys an individual part from at least three, and often as many as a dozen, suppliers.",
        source: "Pearson Microeconomics",
        id: 38,
        length: 46
    },
    {
        text: "In the dawn of computing, programmers thought about programming in terms of statements. Throughout the 1970s and 1980s, programmers began thinking about programs in terms of routines. In the twenty-first century, programmers think about programming in terms of classes.",
        source: "Steve McConnel, Code Complete",
        id: 39,
        length: 39
    },
    {
        text: "Doors come in amazing variety. Some open only if a button is pushed, and some don’t indicate how to open at all, having neither buttons, nor hardware, nor any other sign of their operation",
        source: "Don Norman, The Design of Everyday Things",
        id: 40,
        length: 34
    },
    {
        text: "People are not machines. Machines don’t have to deal with continual interruptions. People are subjected to continual interruptions. As a result, we are often bouncing back and forth between tasks, having to recover our place, what we were doing, and what we were thinking when we return to a previous task.",
        source: "Don Norman, The Design of Everyday Things",
        id: 41,
        length: 51
    },
    {
        text: "It is relatively easy to design for the situation where everything goes well, where people use the device in the way that was intended, and no unforeseen events occur. The tricky part is to design for when things go wrong.",
        source: "Don Norman, The Design of Everyday Things",
        id: 42,
        length: 40
    },
    {
        text: "Sometimes life is like this tunnel. You can't always see the light at the end of the tunnel, but if you keep moving, you will come to a better place.",
        source: "Avatar: The last Airbender",
        id: 43,
        length: 30
    },
    {
        text: "From there to here, from here to there, funny things are everywhere.",
        source: "One Fish Two Fish Red Fish Blue Fish",
        id: 44,
        length: 12
    },
    {
        text: "I came to realize that I had more to offer this world than just making things that blow up.",
        source: "Iron Man",
        id: 45,
        length: 9
    },
    {
        text: "It's funny how cucumber water can taste so much better than pickle juice, even though they come from the same source.",
        source: "Ellen DeGeneres",
        id: 46,
        length: 21
    },
    {
        text: "The important question is, what will your wear for a wedding dress, Alexia? You look horrible in white.",
        source: "Gail Carriger, Soulless",
        id: 47,
        length: 18
    },
    {
        text: "Heady and languid fragrances wafted through the window in gentle waves, breaths of vanilla, frankincense and bitter almond, sweet and bitter, ecstatic and sad, like some joyous funereal mysterium.",
        source: "Valery Bryusov, The Poison Garden",
        id: 48,
        length: 29
    },
    {
        text: "For although I feel that I know a tremendous lot, I am not yet aware how much there is in the world to find out about. It will take me a little time to discover whether I am very wise or very foolish.",
        source: "Jack Pumpkinhead - The Marvellous Land Of Oz by L. Frank Baum ",
        id: 49,
        length: 43
    },
    {
        text: "\"That proves you are unusual,\" returned the Scarecrow. \"and I am convinced that the only people worthy of consideration in this world are the unusual ones. For the common folks are like the leaves of a tree, and live and die unnoticed.\"",
        source: "The Marvellous Land Of Oz, L. Frank Baum ",
        id: 50,
        length: 42
    },
    {
        text: "There is some love that will not go away. You're here, there's nothing I fear and I know that my heart will go on. We'll stay forever this way, you are safe in my heart.",
        source: "Celine Dion, My Heart Will Go On",
        id: 51,
        length: 35
    },
    {
        text: "Artichoke Dip! This is a delightful way to get more artichokes into your body. Personally, I don't even dip anything in there. I just guzzle the sauce down like it's a milkshake. Delicious.",
        source: "Eric Barone, Stardew Valley",
        id: 52,
        length: 33
    },
    {
        text: "Ever had the urge to dig around in your neighbor's trash? Ew! Hey, if that's your thing, just don't do it when anyone's around. If they notice you, they'll be seriously grossed out, and it'll harm your friendship. Well, unless they're into the same thing.",
        source: "Eric Barone, Stardew Valley",
        id: 53,
        length: 45
    },
    {
        text: "For a moment the last sunshine fell with romantic affection upon her glowing face; her voice compelled me forward breathlessly as I listened - then the glow faded, each light deserting her with lingering regret, like children leaving a pleasant street at dusk.",
        source: "The Great Gatsby, F. Scott Fitzgerald",
        id: 54,
        length: 42
    },
    {
        text: "Do you ever wait for the longest day of the year and then miss it? I always wait for the longest day of the year and then miss it!",
        source: "The Great Gatsby, F. Scott Fitzgerald",
        id: 55,
        length: 29
    },
    {
        text: "For a transitory enchanted moment man must have held his breath in the presence of this continent, compelled into an aesthetic contemplation he neither understood nor desired, face to face for the last time in history with something commensurate to his capacity for wonder.",
        source: "The Great Gatsby, F. Scott Fitzgerald",
        id: 56,
        length: 44
    },
    {
        text: "This is a valley of ashes; a fantastic farm where ashes grow like wheat into ridges and hills and grotesque gardens; where ashes take the forms of houses and chimneys and rising smoke and, finally, with a transcendent effort, of men who move dimly and already crumbling through the powdery air.",
        source: "The Great Gatsby, F. Scott Fitzgerald",
        id: 57,
        length: 44
    },
]
