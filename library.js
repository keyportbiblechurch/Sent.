/*
  Sent: an evangelism ministry of Keyport Bible Church
  ====================================================
  This file holds the church's settings and its approved tract library.
  People using Sent can choose a tract and add a personal touch (their first
  name, a short note, a phone number for text-back buttons), but they can't
  change a tract's wording. Only the church edits this file.

  To add a tract: copy an existing entry, change the text, give it a new "id",
  and commit on GitHub. The id becomes its short link: .../Sent./#its-id
  Don't rename or delete an id after its link has been shared.
  "topic" groups tracts in the list: The Gospel, Hard times, Big questions, Seasons.
  "months" (optional, 1-12) marks a seasonal tract "In season" during those months.
  Scripture: Berean Standard Bible (BSB), public domain. Quote it exactly.
*/

window.SENT_SETTINGS = {
  church:      "Keyport Bible Church",
  place:       "Keyport, WA",
  tagline:     "Where Christ is center and people are family",
  website:     "https://www.keyportbible.org",
  // "Read the Bible" button: the Gospel of John in the BSB on Bible.com (opens the YouVersion app if installed)
  bibleLink:   "https://www.bible.com/bible/3034/JHN.1.BSB",
  // "Find a church near you" opens a short page with the checklist below and a map search button.
  // Optional: list vetted church directories here, e.g. { name: "...", note: "...", url: "https://..." }
  churchFinders: [],
  // The "Search for churches near me" button: opens a map search on the reader's own phone (Sent never sees their location).
  churchMapSearch: "https://www.google.com/maps/search/?api=1&query=churches+near+me",
  // "What to look for in a church" checklist shown on that page.
  churchLookFor: [
    "The Bible is taught as God's Word, and the preaching explains what it actually says.",
    "Jesus is clearly proclaimed: His death for our sins and His resurrection.",
    "Salvation is taught as God's free gift, received by grace through faith, not earned.",
    "People are called to turn from sin, trust Jesus, and follow Him.",
    "The leaders are humble and accountable, and the people love one another."
  ]
};

window.SENT_LIBRARY = [
  {
    "id": "one-minute",
    "topic": "The Gospel",
    "name": "The Gospel in One Minute",
    "title": "The Gospel in One Minute",
    "subtitle": "The most important news in the world, short enough to read right now.",
    "pages": [
      {
        "heading": "Sin separates us from God",
        "message": "God made you and loves you. But all of us have turned away from Him, and our sin cuts us off from the life He intended.",
        "ref": "Romans 6:23",
        "verse": "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord."
      },
      {
        "heading": "Jesus came to bring you home",
        "message": "Jesus died for our sins and rose again, so that anyone who trusts Him is forgiven and given eternal life.",
        "ref": "John 3:16",
        "verse": "For God so loved the world that He gave His one and only Son, that everyone who believes in Him shall not perish but have eternal life."
      }
    ],
    "response": {
      "heading": "Will you trust Him?",
      "message": "You can respond to God right now, wherever you are.",
      "ref": "Romans 10:9",
      "verse": "that if you confess with your mouth, “Jesus is Lord,” and believe in your heart that God raised Him from the dead, you will be saved.",
      "prayer": "Jesus, I believe You died for my sins and rose again. I turn from my sin and trust You as my Lord. Amen."
    }
  },
  {
    "id": "good-news",
    "topic": "The Gospel",
    "name": "The Best News You'll Hear Today",
    "title": "The Best News You'll Hear Today",
    "subtitle": "Five short truths about God, about you, and about a gift that's yours to receive.",
    "pages": [
      {
        "heading": "God made you, and He loves you",
        "message": "You are not an accident. The God who made the stars knows your name, and He wants you to know Him.",
        "ref": "John 3:16",
        "verse": "For God so loved the world that He gave His one and only Son, that everyone who believes in Him shall not perish but have eternal life."
      },
      {
        "heading": "Something is broken",
        "message": "We can all feel that the world isn't the way it should be. If we're honest, neither are we. The Bible calls this sin: going our own way instead of God's.",
        "ref": "Romans 3:23",
        "verse": "for all have sinned and fall short of the glory of God,"
      },
      {
        "heading": "Sin has a cost",
        "message": "Sin isn't just a few bad choices. It separates us from God, the source of life, and we can't fix that on our own.",
        "ref": "Romans 6:23",
        "verse": "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord."
      },
      {
        "heading": "God paid it Himself",
        "message": "Jesus, God's Son, lived the life we couldn't, died in our place, and rose from the dead. He didn't wait for us to get our act together first.",
        "ref": "Romans 5:8",
        "verse": "But God proves His love for us in this: While we were still sinners, Christ died for us."
      },
      {
        "heading": "A gift to receive",
        "message": "You can't earn it and you don't have to. A gift is simply received. You receive this one by trusting Jesus.",
        "ref": "Ephesians 2:8–9",
        "verse": "For it is by grace you have been saved through faith, and this not from yourselves; it is the gift of God, not by works, so that no one can boast."
      }
    ],
    "response": {
      "heading": "What now?",
      "message": "If you're ready, you can talk to God right now. There are no magic words. He looks at the heart.",
      "ref": "Romans 10:13",
      "verse": "for, “Everyone who calls on the name of the Lord will be saved.”",
      "prayer": "Jesus, I know I've gone my own way. Thank You for dying for my sins and rising again. I turn from my sin and trust You as my Lord and Savior. Make me new. Amen."
    }
  },
  {
    "id": "who-is-jesus",
    "topic": "The Gospel",
    "name": "Who Is Jesus?",
    "title": "Who Is Jesus?",
    "subtitle": "The most important question you'll ever answer, in four short pages.",
    "pages": [
      {
        "heading": "He claimed to be the way",
        "message": "Jesus didn't present Himself as one good teacher among many. He made a claim no one else has made.",
        "ref": "John 14:6",
        "verse": "Jesus answered, “I am the way and the truth and the life. No one comes to the Father except through Me.”"
      },
      {
        "heading": "He died and rose again",
        "message": "The heart of the Christian faith is an event in history: Jesus died for our sins, and on the third day He rose from the dead.",
        "ref": "1 Corinthians 15:3–4",
        "verse": "For what I received I passed on to you as of first importance: that Christ died for our sins according to the Scriptures, that He was buried, that He was raised on the third day according to the Scriptures,"
      },
      {
        "heading": "He makes us family",
        "message": "Jesus doesn't just forgive. He brings everyone who trusts Him into God's family, as a son or daughter.",
        "ref": "John 1:12",
        "verse": "But to all who did receive Him, to those who believed in His name, He gave the right to become children of God—"
      },
      {
        "heading": "He came for people like us",
        "message": "Jesus spent His time with people others had written off. He still does.",
        "ref": "Luke 19:10",
        "verse": "For the Son of Man came to seek and to save the lost."
      }
    ],
    "response": {
      "heading": "What will you do with Jesus?",
      "message": "Everyone eventually answers this question, one way or another. You can answer it today.",
      "ref": "Romans 10:9",
      "verse": "that if you confess with your mouth, “Jesus is Lord,” and believe in your heart that God raised Him from the dead, you will be saved.",
      "prayer": "Jesus, I believe You are who You said You are. I believe You died for my sins and rose again. I confess You as my Lord. Amen."
    }
  },
  {
    "id": "whole-story",
    "topic": "The Gospel",
    "name": "The Whole Story",
    "title": "The Whole Story",
    "subtitle": "From the first page of the Bible to the last, one story runs through it all, and there's a place in it for you.",
    "pages": [
      {
        "heading": "In the beginning, God",
        "message": "Everything starts with God. The world isn't an accident. It was made on purpose, by Someone.",
        "ref": "Genesis 1:1",
        "verse": "In the beginning God created the heavens and the earth."
      },
      {
        "heading": "Made for Him",
        "message": "God made people in His own image, to know Him, reflect Him, and enjoy life with Him. That includes you.",
        "ref": "Genesis 1:27",
        "verse": "So God created man in His own image; in the image of God He created him; male and female He created them."
      },
      {
        "heading": "Everything broke",
        "message": "The first people chose their own way over God's, and sin and death entered the world. We've all followed in their steps.",
        "ref": "Romans 5:12",
        "verse": "Therefore, just as sin entered the world through one man, and death through sin, so also death was passed on to all men, because all sinned."
      },
      {
        "heading": "We all went astray",
        "message": "Every one of us has turned to our own way. But even here, the Bible points to Someone who would carry what we deserved.",
        "ref": "Isaiah 53:6",
        "verse": "We all like sheep have gone astray, each one has turned to his own way; and the LORD has laid upon Him the iniquity of us all."
      },
      {
        "heading": "God came near",
        "message": "God didn't leave us lost. He came Himself, in Jesus, and lived among us.",
        "ref": "John 1:14",
        "verse": "The Word became flesh and made His dwelling among us. We have seen His glory, the glory of the one and only Son from the Father, full of grace and truth."
      },
      {
        "heading": "Jesus brings us back",
        "message": "Jesus, the only one who never sinned, died for sinners and rose again, to bring us back to God.",
        "ref": "1 Peter 3:18",
        "verse": "For Christ also suffered for sins once for all, the righteous for the unrighteous, to bring you to God. He was put to death in the body but made alive in the Spirit,"
      },
      {
        "heading": "All things new",
        "message": "The story ends with God making everything right: no more tears, no more death, and His people with Him forever.",
        "ref": "Revelation 21:5",
        "verse": "And the One seated on the throne said, “Behold, I make all things new.”"
      }
    ],
    "response": {
      "heading": "Your place in the story",
      "message": "God invites you into His story, not as a spectator, but as His child.",
      "ref": "John 1:12",
      "verse": "But to all who did receive Him, to those who believed in His name, He gave the right to become children of God—",
      "prayer": "Jesus, I know I've gone my own way. Thank You for dying for my sins and rising again. I turn from my sin and trust You as my Lord and Savior. Make me new. Amen."
    }
  },
  {
    "id": "new-start",
    "topic": "The Gospel",
    "name": "A New Start",
    "title": "A New Start",
    "subtitle": "No matter where you've been, it's not too late to begin again.",
    "pages": [
      {
        "heading": "Everyone wants a fresh start",
        "message": "Most of us carry things we wish we could undo. The good news is that God doesn't just patch up the past. He makes people new.",
        "ref": "2 Corinthians 5:17",
        "verse": "Therefore if anyone is in Christ, he is a new creation. The old has passed away. Behold, the new has come!"
      },
      {
        "heading": "Honesty is where it begins",
        "message": "You don't have to clean yourself up first. God asks you to come to Him honestly, and He promises to forgive.",
        "ref": "1 John 1:9",
        "verse": "If we confess our sins, He is faithful and just to forgive us our sins and to cleanse us from all unrighteousness."
      },
      {
        "heading": "It's a gift, not a grade",
        "message": "A new start with God isn't earned by trying harder. Jesus already paid for it. It's received by trusting Him.",
        "ref": "Titus 3:5",
        "verse": "He saved us, not by the righteous deeds we had done, but according to His mercy, through the washing of new birth and renewal by the Holy Spirit."
      }
    ],
    "response": {
      "heading": "Welcome to the family",
      "message": "Everyone who receives Jesus is welcomed into God's family. That can be you, today.",
      "ref": "John 1:12",
      "verse": "But to all who did receive Him, to those who believed in His name, He gave the right to become children of God—",
      "prayer": "God, I want a new start. I'm sorry for the wrong I've done. Thank You that Jesus died and rose again for me. I trust Him and receive Your forgiveness. Amen."
    }
  },
  {
    "id": "hope",
    "topic": "Hard times",
    "name": "When Life Is Heavy",
    "title": "When Life Is Heavy",
    "subtitle": "A few words of hope, for whatever you're carrying right now.",
    "pages": [
      {
        "heading": "You're not alone in this",
        "message": "Pain has a way of making us feel invisible. But God sees you, right here, right now, and He draws close to people who are hurting.",
        "ref": "Psalm 34:18",
        "verse": "The LORD is near to the brokenhearted; He saves the contrite in spirit."
      },
      {
        "heading": "An open invitation",
        "message": "Jesus never told tired people to try harder. He invited them to come to Him, just as they were.",
        "ref": "Matthew 11:28",
        "verse": "Come to Me, all you who are weary and burdened, and I will give you rest."
      },
      {
        "heading": "Loved at your lowest",
        "message": "God's love doesn't depend on you having it all together. He loved us at our worst and proved it on the cross.",
        "ref": "Romans 5:8",
        "verse": "But God proves His love for us in this: While we were still sinners, Christ died for us."
      },
      {
        "heading": "A new beginning is possible",
        "message": "Whatever has happened, it doesn't have to be the end of your story. In Jesus, God makes people new.",
        "ref": "2 Corinthians 5:17",
        "verse": "Therefore if anyone is in Christ, he is a new creation. The old has passed away. Behold, the new has come!"
      }
    ],
    "response": {
      "heading": "He's knocking",
      "message": "Jesus doesn't force His way in. He offers Himself and waits for you to open the door.",
      "ref": "Revelation 3:20",
      "verse": "Behold, I stand at the door and knock. If anyone hears My voice and opens the door, I will come in and dine with him, and he with Me.",
      "prayer": "Jesus, I'm tired and I need You. Thank You for loving me and dying for me. I open the door. Come into my life and be my Lord. Amen."
    }
  },
  {
    "id": "grief",
    "topic": "Hard times",
    "name": "When You've Lost Someone",
    "title": "When You've Lost Someone",
    "subtitle": "There are no easy words for grief. But there is real hope.",
    "pages": [
      {
        "heading": "God is close to the grieving",
        "message": "If you're hurting, you don't have to pretend you're fine. God draws near to broken hearts.",
        "ref": "Psalm 34:18",
        "verse": "The LORD is near to the brokenhearted; He saves the contrite in spirit."
      },
      {
        "heading": "He heals what's broken",
        "message": "Grief can feel like it will never lift. God doesn't rush you, but He does promise to bind up your wounds.",
        "ref": "Psalm 147:3",
        "verse": "He heals the brokenhearted and binds up their wounds."
      },
      {
        "heading": "Death doesn't have the last word",
        "message": "Jesus spoke these words to a grieving sister, and then He raised her brother from the dead.",
        "ref": "John 11:25–26",
        "verse": "“I am the resurrection and the life. Whoever believes in Me will live, even though he dies. And everyone who lives and believes in Me will never die. Do you believe this?”"
      },
      {
        "heading": "A day without tears",
        "message": "For everyone who belongs to Jesus, a day is coming when God Himself will wipe away every tear.",
        "ref": "Revelation 21:4",
        "verse": "He will wipe away every tear from their eyes, and there will be no more death or mourning or crying or pain, for the former things have passed away."
      }
    ],
    "response": {
      "heading": "Rest for the weary",
      "message": "Jesus invites you to bring your sorrow to Him, and to trust Him with your life and your eternity.",
      "ref": "Matthew 11:28",
      "verse": "Come to Me, all you who are weary and burdened, and I will give you rest.",
      "prayer": "Jesus, I'm hurting. Thank You for being near. I believe You died and rose again, and that You are the resurrection and the life. I trust You with my grief and with my life. Amen."
    }
  },
  {
    "id": "anxiety",
    "topic": "Hard times",
    "name": "When Worry Won't Let Go",
    "title": "When Worry Won't Let Go",
    "subtitle": "For the racing thoughts and sleepless nights: a different kind of peace.",
    "pages": [
      {
        "heading": "You can hand it over",
        "message": "Worry tells you everything depends on you. God invites you to give your fears to Him, because He actually cares.",
        "ref": "1 Peter 5:7",
        "verse": "Cast all your anxiety on Him, because He cares for you."
      },
      {
        "heading": "Peace that doesn't make sense",
        "message": "God doesn't promise a life without trouble. He offers a peace that holds even when nothing else does.",
        "ref": "Philippians 4:6–7",
        "verse": "Be anxious for nothing, but in everything, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus."
      },
      {
        "heading": "You're not facing it alone",
        "message": "Whatever tomorrow holds, God promises to be with His people in it.",
        "ref": "Isaiah 41:10",
        "verse": "Do not fear, for I am with you; do not be afraid, for I am your God. I will strengthen you; I will surely help you; I will uphold you with My righteous right hand."
      },
      {
        "heading": "A peace the world can't give",
        "message": "Jesus offers a peace deeper than circumstances: the peace of being right with God.",
        "ref": "John 14:27",
        "verse": "Peace I leave with you; My peace I give to you. I do not give to you as the world gives. Do not let your hearts be troubled; do not be afraid."
      }
    ],
    "response": {
      "heading": "Start with peace with God",
      "message": "The deepest anxiety is the question underneath it all: am I okay with God? Through Jesus, you can be.",
      "ref": "Romans 5:8",
      "verse": "But God proves His love for us in this: While we were still sinners, Christ died for us.",
      "prayer": "God, I'm anxious and I can't carry this alone. Thank You that Jesus died for me while I was still a sinner. I trust Him as my Lord and Savior. Give me Your peace. Amen."
    }
  },
  {
    "id": "lonely",
    "topic": "Hard times",
    "name": "You Are Not Alone",
    "title": "You Are Not Alone",
    "subtitle": "Even when it feels like no one notices, Someone does.",
    "pages": [
      {
        "heading": "Seen everywhere you go",
        "message": "There's no place so far, and no night so dark, that God isn't already there.",
        "ref": "Psalm 139:7",
        "verse": "Where can I go to escape Your Spirit? Where can I flee from Your presence?"
      },
      {
        "heading": "A promise that holds",
        "message": "People may let us down or leave. God makes a promise to His people that He never breaks.",
        "ref": "Hebrews 13:5",
        "verse": "For God has said: “Never will I leave you, never will I forsake you.”"
      },
      {
        "heading": "Nothing can separate us",
        "message": "For those who belong to Jesus, nothing, not even death, can cut them off from God's love.",
        "ref": "Romans 8:38–39",
        "verse": "For I am convinced that neither death nor life, neither angels nor principalities, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord."
      }
    ],
    "response": {
      "heading": "Come in from the cold",
      "message": "Jesus is offering more than company. He's offering Himself, and a place in God's family.",
      "ref": "Revelation 3:20",
      "verse": "Behold, I stand at the door and knock. If anyone hears My voice and opens the door, I will come in and dine with him, and he with Me.",
      "prayer": "Jesus, I feel alone, but I believe You see me. Thank You for dying for me and rising again. I open the door to You. Be my Savior and my Lord. Amen."
    }
  },
  {
    "id": "guilt",
    "topic": "Hard times",
    "name": "When You Can't Let It Go",
    "title": "When You Can't Let It Go",
    "subtitle": "For the things you can't stop replaying: there is real forgiveness.",
    "pages": [
      {
        "heading": "Come and talk",
        "message": "God doesn't avoid hard conversations. He invites you to come to Him with even your worst.",
        "ref": "Isaiah 1:18",
        "verse": "“Come now, let us reason together,” says the LORD. “Though your sins are like scarlet, they will be as white as snow; though they are as red as crimson, they will become like wool.”"
      },
      {
        "heading": "Gone, not just hidden",
        "message": "When God forgives, He doesn't keep a record to bring up later. He removes it.",
        "ref": "Psalm 103:12",
        "verse": "As far as the east is from the west, so far has He removed our transgressions from us."
      },
      {
        "heading": "He runs toward you",
        "message": "Jesus told a story about a son who wasted everything. When the son came home, the father ran to meet him.",
        "ref": "Luke 15:20",
        "verse": "So he got up and went to his father. But while he was still in the distance, his father saw him and was filled with compassion. He ran to his son, embraced him, and kissed him."
      },
      {
        "heading": "No condemnation",
        "message": "For everyone who is in Christ, the verdict is already in: forgiven.",
        "ref": "Romans 8:1",
        "verse": "Therefore, there is now no condemnation for those who are in Christ Jesus."
      }
    ],
    "response": {
      "heading": "Bring it into the light",
      "message": "Forgiveness begins with honesty. God isn't waiting to shame you. He's waiting to forgive you.",
      "ref": "1 John 1:9",
      "verse": "If we confess our sins, He is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.",
      "prayer": "God, You know what I've done. I'm sorry, and I can't fix it. Thank You that Jesus died for my sins and rose again. I trust Him, and I receive Your forgiveness. Amen."
    }
  },
  {
    "id": "is-god-real",
    "topic": "Big questions",
    "name": "Is God Really There?",
    "title": "Is God Really There?",
    "subtitle": "Honest questions deserve honest answers. Here are a few places to start.",
    "pages": [
      {
        "heading": "Look up",
        "message": "The sheer size and order of the universe has made people wonder about its Maker for thousands of years.",
        "ref": "Psalm 19:1",
        "verse": "The heavens declare the glory of God; the skies proclaim the work of His hands."
      },
      {
        "heading": "Look around",
        "message": "The Bible says creation itself points to a Creator: His power and His nature are on display in what He made.",
        "ref": "Romans 1:20",
        "verse": "For since the creation of the world God’s invisible qualities, His eternal power and divine nature, have been clearly seen, being understood from His workmanship, so that men are without excuse."
      },
      {
        "heading": "Look within",
        "message": "Most of us sense there must be more than this life. The Bible says that longing was put there on purpose.",
        "ref": "Ecclesiastes 3:11",
        "verse": "He has made everything beautiful in its time. He has also set eternity in the hearts of men, yet they cannot fathom the work that God has done from beginning to end."
      },
      {
        "heading": "He isn't hiding",
        "message": "God isn't playing hard to get. He wants to be found, and He is closer than you might think.",
        "ref": "Acts 17:27",
        "verse": "God intended that they would seek Him and perhaps reach out for Him and find Him, though He is not far from each one of us."
      },
      {
        "heading": "He showed up",
        "message": "Christianity's boldest claim is that God didn't just leave clues. He came in person, in Jesus.",
        "ref": "John 1:14",
        "verse": "The Word became flesh and made His dwelling among us. We have seen His glory, the glory of the one and only Son from the Father, full of grace and truth."
      }
    ],
    "response": {
      "heading": "Seek Him for yourself",
      "message": "You don't have to have every answer to take an honest step. God promises to be found by those who truly seek Him.",
      "ref": "Jeremiah 29:13",
      "verse": "You will seek Me and find Me when you search for Me with all your heart.",
      "prayer": "God, if You are there, I want to know You. Show me who Jesus is. If He is who He said, I want to follow Him. Amen."
    }
  },
  {
    "id": "purpose",
    "topic": "Big questions",
    "name": "What Am I Here For?",
    "title": "What Am I Here For?",
    "subtitle": "Everyone asks it eventually. The Bible gives a surprising answer.",
    "pages": [
      {
        "heading": "Made by Him and for Him",
        "message": "You weren't made by accident or for no reason. Everything, including you, was made through Jesus and for Him.",
        "ref": "Colossians 1:16",
        "verse": "For in Him all things were created, things in heaven and on earth, visible and invisible, whether thrones or dominions or rulers or authorities. All things were created through Him and for Him."
      },
      {
        "heading": "Life to the full",
        "message": "Jesus didn't come to make life smaller. He came to give real, full life, the kind we were made for.",
        "ref": "John 10:10",
        "verse": "The thief comes only to steal and kill and destroy. I have come that they may have life, and have it in all its fullness."
      },
      {
        "heading": "We've missed the mark",
        "message": "Something gets in the way. We've lived for ourselves instead of for God, and we fall short of what we were made for.",
        "ref": "Romans 3:23",
        "verse": "for all have sinned and fall short of the glory of God,"
      },
      {
        "heading": "Made new on purpose",
        "message": "Through Jesus, God restores us to the life He designed, with good work He prepared ahead of time.",
        "ref": "Ephesians 2:10",
        "verse": "For we are God’s workmanship, created in Christ Jesus to do good works, which God prepared in advance as our way of life."
      }
    ],
    "response": {
      "heading": "Start here",
      "message": "Your purpose begins with a relationship: knowing the One who made you, through Jesus.",
      "ref": "2 Corinthians 5:17",
      "verse": "Therefore if anyone is in Christ, he is a new creation. The old has passed away. Behold, the new has come!",
      "prayer": "Jesus, I know I've gone my own way. Thank You for dying for my sins and rising again. I turn from my sin and trust You as my Lord and Savior. Make me new. Amen."
    }
  },
  {
    "id": "after-death",
    "topic": "Big questions",
    "name": "What Happens When We Die?",
    "title": "What Happens When We Die?",
    "subtitle": "It's the question we'd rather not think about. But it's worth an honest look.",
    "pages": [
      {
        "heading": "Everyone faces it",
        "message": "Death is the one appointment none of us can cancel, and the Bible says it isn't the end.",
        "ref": "Hebrews 9:27",
        "verse": "Just as man is appointed to die once, and after that to face judgment,"
      },
      {
        "heading": "Jesus is preparing a place",
        "message": "Jesus told His friends that He was going ahead of them to prepare a home, and that He would come back for them.",
        "ref": "John 14:2–3",
        "verse": "In My Father’s house are many rooms. If it were not so, would I have told you that I am going there to prepare a place for you? And if I go and prepare a place for you, I will come back and welcome you into My presence, so that you also may be where I am."
      },
      {
        "heading": "Crossing over",
        "message": "Eternal life doesn't start after death. Jesus says whoever trusts Him has already crossed from death to life.",
        "ref": "John 5:24",
        "verse": "Truly, truly, I tell you, whoever hears My word and believes Him who sent Me has eternal life and will not come under judgment. Indeed, he has crossed over from death to life."
      },
      {
        "heading": "You can know",
        "message": "You don't have to wonder or hope you've done enough. God wants you to know for sure.",
        "ref": "1 John 5:13",
        "verse": "I have written these things to you who believe in the name of the Son of God, so that you may know that you have eternal life."
      }
    ],
    "response": {
      "heading": "Settle it today",
      "message": "The question isn't how good you've been, but whether you've trusted the One who conquered death.",
      "ref": "Romans 10:13",
      "verse": "for, “Everyone who calls on the name of the Lord will be saved.”",
      "prayer": "Jesus, I know I've gone my own way. Thank You for dying for my sins and rising again. I turn from my sin and trust You as my Lord and Savior. Make me new. Amen."
    }
  },
  {
    "id": "new-year",
    "topic": "Seasons",
    "months": [
      12,
      1
    ],
    "name": "A New Year, A New Heart",
    "title": "A New Year, A New Heart",
    "subtitle": "Resolutions come and go. Here's a fresh start that lasts.",
    "pages": [
      {
        "heading": "Mercy for every morning",
        "message": "Before you've kept a single resolution or broken one, God offers something better: mercy that's new every day.",
        "ref": "Lamentations 3:22–23",
        "verse": "Because of the loving devotion of the LORD we are not consumed, for His mercies never fail. They are new every morning; great is Your faithfulness!"
      },
      {
        "heading": "More than a resolution",
        "message": "Most resolutions try to change our habits. God promises to change our hearts.",
        "ref": "Ezekiel 36:26",
        "verse": "I will give you a new heart and put a new spirit within you; I will remove your heart of stone and give you a heart of flesh."
      },
      {
        "heading": "Something new is coming",
        "message": "God is in the business of new beginnings, even in places that feel like a wilderness.",
        "ref": "Isaiah 43:19",
        "verse": "Behold, I am about to do something new; even now it is coming. Do you not see it? Indeed, I will make a way in the wilderness and streams in the desert."
      }
    ],
    "response": {
      "heading": "Begin the year with Him",
      "message": "The best way to start a new year is to start a new life with Jesus.",
      "ref": "2 Corinthians 5:17",
      "verse": "Therefore if anyone is in Christ, he is a new creation. The old has passed away. Behold, the new has come!",
      "prayer": "God, I want more than a new year. I want a new heart. I'm sorry for my sin. Thank You that Jesus died and rose again for me. I trust Him as my Lord. Make me new. Amen."
    }
  },
  {
    "id": "good-friday",
    "topic": "Seasons",
    "months": [
      3,
      4
    ],
    "name": "Why Call It Good Friday?",
    "title": "Why Call It Good Friday?",
    "subtitle": "The darkest day in history, and why Christians call it good.",
    "pages": [
      {
        "heading": "A day of suffering",
        "message": "On the first Good Friday, Jesus was beaten, mocked, and nailed to a cross. Centuries earlier, the prophet Isaiah described why.",
        "ref": "Isaiah 53:5",
        "verse": "But He was pierced for our transgressions, He was crushed for our iniquities; the punishment that brought us peace was upon Him, and by His stripes we are healed."
      },
      {
        "heading": "He carried what we couldn't",
        "message": "Jesus wasn't dying for His own wrongs. He had none. He was carrying ours.",
        "ref": "1 Peter 2:24",
        "verse": "He Himself bore our sins in His body on the tree, so that we might die to sin and live to righteousness. “By His stripes you are healed.”"
      },
      {
        "heading": "It is finished",
        "message": "Jesus' last words weren't a cry of defeat. They were the announcement of a debt paid in full.",
        "ref": "John 19:30",
        "verse": "When Jesus had received the sour wine, He said, “It is finished.” And bowing His head, He yielded up His spirit."
      }
    ],
    "response": {
      "heading": "That's why it's good",
      "message": "It was the worst day for Jesus, and the best news for us: God's love was shown in full.",
      "ref": "Romans 5:8",
      "verse": "But God proves His love for us in this: While we were still sinners, Christ died for us.",
      "prayer": "Jesus, thank You for going to the cross for me. I believe You carried my sins and rose again. I trust You as my Savior and Lord. Amen."
    }
  },
  {
    "id": "easter",
    "topic": "Seasons",
    "months": [
      3,
      4
    ],
    "name": "Why Easter Matters",
    "title": "Why Easter Matters",
    "subtitle": "More than eggs and spring flowers: the event that changed everything.",
    "pages": [
      {
        "heading": "It really happened",
        "message": "The first Christians didn't claim a nice idea. They claimed an event: Jesus died, was buried, and rose again.",
        "ref": "1 Corinthians 15:3–4",
        "verse": "For what I received I passed on to you as of first importance: that Christ died for our sins according to the Scriptures, that He was buried, that He was raised on the third day according to the Scriptures,"
      },
      {
        "heading": "The empty tomb",
        "message": "On the first Easter morning, women came to the tomb expecting a body. They heard this instead.",
        "ref": "Luke 24:6",
        "verse": "He is not here; He has risen!"
      },
      {
        "heading": "Everything hangs on it",
        "message": "The Bible itself says that if Jesus didn't rise, Christianity falls apart. But if He did, everything changes.",
        "ref": "1 Corinthians 15:17",
        "verse": "And if Christ has not been raised, your faith is futile; you are still in your sins."
      },
      {
        "heading": "Life beyond death",
        "message": "Because Jesus lives, everyone who trusts Him will live too.",
        "ref": "John 11:25–26",
        "verse": "“I am the resurrection and the life. Whoever believes in Me will live, even though he dies. And everyone who lives and believes in Me will never die. Do you believe this?”"
      }
    ],
    "response": {
      "heading": "Believe and live",
      "message": "Easter is an invitation to trust the risen Jesus with your life.",
      "ref": "Romans 10:9",
      "verse": "that if you confess with your mouth, “Jesus is Lord,” and believe in your heart that God raised Him from the dead, you will be saved.",
      "prayer": "Jesus, I believe You died for my sins and that God raised You from the dead. I confess You as my Lord. Thank You for new life. Amen."
    }
  },
  {
    "id": "fathers-day",
    "topic": "Seasons",
    "months": [
      6
    ],
    "name": "A Father Who Runs to You",
    "title": "A Father Who Runs to You",
    "subtitle": "Whatever your story with your own father, there is a Father who loves you completely.",
    "pages": [
      {
        "heading": "The Father we all need",
        "message": "Some of us had wonderful fathers. Some had absent or hurtful ones. God is the Father none of us could earn.",
        "ref": "Psalm 68:5",
        "verse": "A father of the fatherless and a defender of widows is God in His holy habitation."
      },
      {
        "heading": "Compassion, not condemnation",
        "message": "God isn't a distant, disappointed father. He is full of compassion toward His children.",
        "ref": "Psalm 103:13",
        "verse": "As a father has compassion on his children, so the LORD has compassion on those who fear Him."
      },
      {
        "heading": "He runs to meet you",
        "message": "Jesus told of a son who wasted everything. When he finally came home, his father didn't wait. He ran.",
        "ref": "Luke 15:20",
        "verse": "So he got up and went to his father. But while he was still in the distance, his father saw him and was filled with compassion. He ran to his son, embraced him, and kissed him."
      },
      {
        "heading": "Called His children",
        "message": "Through Jesus, God doesn't just forgive us. He adopts us as His own.",
        "ref": "1 John 3:1",
        "verse": "Behold what manner of love the Father has given to us, that we should be called children of God. And that is what we are! The reason the world does not know us is that it did not know Him."
      }
    ],
    "response": {
      "heading": "Come home",
      "message": "The Father is waiting with open arms. You can come to Him through Jesus today.",
      "ref": "John 1:12",
      "verse": "But to all who did receive Him, to those who believed in His name, He gave the right to become children of God—",
      "prayer": "Father, I want to come home. I'm sorry for going my own way. Thank You for sending Jesus to die for my sins and rise again. I receive Him and trust Him as my Lord. Amen."
    }
  },
  {
    "id": "thanksgiving",
    "topic": "Seasons",
    "months": [
      11
    ],
    "name": "A Reason to Give Thanks",
    "title": "A Reason to Give Thanks",
    "subtitle": "Beyond the turkey and the table: the gift that gives every other gift its meaning.",
    "pages": [
      {
        "heading": "Every good thing has a Giver",
        "message": "The food on the table, the people around it, the breath in our lungs: every good gift comes from God.",
        "ref": "James 1:17",
        "verse": "Every good and perfect gift is from above, coming down from the Father of the heavenly lights, with whom there is no change or shifting shadow."
      },
      {
        "heading": "A love that never runs out",
        "message": "Seasons change and circumstances shift, but God's love doesn't.",
        "ref": "Psalm 107:1",
        "verse": "Give thanks to the LORD, for He is good; His loving devotion endures forever."
      },
      {
        "heading": "Thankful in every season",
        "message": "Even in a hard year, Christians can give thanks, not for everything that happens, but for the God who holds them through it.",
        "ref": "1 Thessalonians 5:18",
        "verse": "Give thanks in every circumstance, for this is God’s will for you in Christ Jesus."
      },
      {
        "heading": "The greatest gift",
        "message": "Of all God's gifts, one is beyond words: His Son, Jesus, who came to bring us back to Him.",
        "ref": "2 Corinthians 9:15",
        "verse": "Thanks be to God for His indescribable gift!"
      }
    ],
    "response": {
      "heading": "Receive the gift",
      "message": "God's greatest gift isn't earned. It's received with open hands.",
      "ref": "John 3:16",
      "verse": "For God so loved the world that He gave His one and only Son, that everyone who believes in Him shall not perish but have eternal life.",
      "prayer": "God, thank You for every good gift, and most of all for Jesus. I believe He died for my sins and rose again. I receive Him as my Savior and Lord. Amen."
    }
  },
  {
    "id": "christmas",
    "topic": "Seasons",
    "months": [
      11,
      12
    ],
    "name": "The Real Gift of Christmas",
    "title": "The Real Gift of Christmas",
    "subtitle": "Behind the lights and wrapping paper is the best news ever announced.",
    "pages": [
      {
        "heading": "Good news of great joy",
        "message": "The first Christmas announcement wasn't made to kings, but to ordinary shepherds working the night shift.",
        "ref": "Luke 2:10–11",
        "verse": "“Do not be afraid! For behold, I bring you good news of great joy that will be for all the people: Today in the city of David a Savior has been born to you. He is Christ the Lord!”"
      },
      {
        "heading": "A child, and so much more",
        "message": "Centuries earlier, God promised a child who would be called Mighty God and Prince of Peace.",
        "ref": "Isaiah 9:6",
        "verse": "For unto us a child is born, unto us a son is given, and the government will be upon His shoulders. And He will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace."
      },
      {
        "heading": "God moved into the neighborhood",
        "message": "At Christmas, the eternal God became a human being and lived among us.",
        "ref": "John 1:14",
        "verse": "The Word became flesh and made His dwelling among us. We have seen His glory, the glory of the one and only Son from the Father, full of grace and truth."
      },
      {
        "heading": "He came on a rescue mission",
        "message": "Jesus didn't come just to be admired. He came to find and save people who were lost.",
        "ref": "Luke 19:10",
        "verse": "For the Son of Man came to seek and to save the lost."
      }
    ],
    "response": {
      "heading": "Receive the gift",
      "message": "The best gift of Christmas isn't under a tree. It's offered to you by God Himself.",
      "ref": "Romans 6:23",
      "verse": "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.",
      "prayer": "God, thank You for sending Jesus. I believe He came to save me, died for my sins, and rose again. I receive Your gift of eternal life and trust Him as my Lord. Amen."
    }
  }
];
