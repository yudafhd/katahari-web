const animeMangaQuotes = [
    {
        code: "OP001",
        content: "I'm gonna be the King of the Pirates!",
        content_id: "Aku akan menjadi Raja Bajak Laut!",
        credit: "Monkey D. Luffy, One Piece",
    },
    {
        code: "NRT002",
        content: "I never go back on my word! That's my nindÅ!",
        content_id: "Aku tidak pernah menarik kata-kataku! Itulah jalan ninjaku!",
        credit: "Naruto Uzumaki, Naruto",
    },
    {
        code: "AOT003",
        content:
            "If you win, you live. If you lose, you die. If you don't fight, you can't win!",
        content_id:
            "Jika kau menang, kau hidup. Jika kalah, kau mati. Jika tidak bertarung, kau tidak bisa menang!",
        credit: "Eren Yeager, Attack on Titan",
    },
    {
        code: "FMA004",
        content: "A lesson without pain is meaningless.",
        content_id: "Pelajaran tanpa rasa sakit itu tidak ada artinya.",
        credit: "Edward Elric, Fullmetal Alchemist: Brotherhood",
    },
    {
        code: "DBZ005",
        content: "Power comes in response to a need, not a desire.",
        content_id: "Kekuatan muncul sebagai jawaban atas kebutuhan, bukan keinginan.",
        credit: "Goku, Dragon Ball Z",
    },
    {
        code: "DE006",
        content: "I am justice! I protect the innocent and those who fear evil.",
        content_id:
            "Akulah keadilan! Aku melindungi yang tak bersalah dan mereka yang takut akan kejahatan.",
        credit: "Light Yagami, Death Note",
    },
    {
        code: "HNK007",
        content: "You are already dead.",
        content_id: "Kau sudah mati.",
        credit: "Kenshiro, Fist of the North Star (Hokuto no Ken)",
    },
    {
        code: "BC008",
        content: "Surpass your limits. Right here, right now!",
        content_id: "Lampaui batasmu. Di sini, saat ini juga!",
        credit: "Yami Sukehiro, Black Clover",
    },
    {
        code: "TTGL009",
        content: "Believe in the me that believes in you!",
        content_id: "Percayalah pada diriku yang percaya padamu!",
        credit: "Kamina, Tengen Toppa Gurren Lagann",
    },
    {
        code: "HxH010",
        content: "When I say it doesn't hurt, that means I can bear it.",
        content_id: "Saat aku bilang tidak sakit, itu berarti aku bisa menahannya.",
        credit: "Killua Zoldyck, Hunter x Hunter",
    },
    {
        code: "FMAB011",
        content:
            "A lesson without pain is meaningless. That's because you can't gain something without sacrificing something else.",
        content_id:
            "Pelajaran tanpa rasa sakit tidak ada artinya. Karena kau tidak bisa mendapatkan sesuatu tanpa mengorbankan hal lain.",
        credit: "Edward Elric, Fullmetal Alchemist: Brotherhood",
    },
    {
        code: "NRT012",
        content:
            "A person grows up when he's able to overcome hardships. Protection is important, but there are some things a person must learn on his own.",
        content_id:
            "Seseorang tumbuh ketika ia mampu mengatasi kesulitan. Perlindungan itu penting, tapi ada hal-hal yang harus dipelajari sendiri.",
        credit: "Jiraiya, Naruto",
    },
    {
        code: "OP013",
        content:
            "When do you think people die? When they are shot with a bullet? No! It's when they are forgotten.",
        content_id:
            "Kapan menurutmu orang mati? Saat mereka ditembak? Tidak! Saat mereka dilupakan.",
        credit: "Dr. Hiluluk, One Piece",
    },
    {
        code: "AOT014",
        content: "The world is merciless, but it's also very beautiful.",
        content_id: "Dunia ini kejam, tapi juga sangat indah.",
        credit: "Mikasa Ackerman, Attack on Titan",
    },
    {
        code: "DGM015",
        content: "A lesson without chaos brings no change.",
        content_id: "Pelajaran tanpa kekacauan tidak membawa perubahan.",
        credit: "Allen Walker, D.Gray-man",
    },
    {
        code: "TR016",
        content: "I don't care if I die, as long as I can change the future.",
        content_id:
            "Aku tak peduli jika harus mati, selama aku bisa mengubah masa depan.",
        credit: "Takemichi Hanagaki, Tokyo Revengers",
    },
    {
        code: "BLE017",
        content:
            "We are all like fireworks. We climb, shine, and always go our separate ways and become further apart.",
        content_id:
            "Kita semua seperti kembang api. Kita naik, bersinar, lalu berpencar dan saling menjauh.",
        credit: "Hitsugaya Toshiro, Bleach",
    },
    {
        code: "CL018",
        content:
            "The world isn't perfect. But it's there for us, doing the best it can... that's what makes it so damn beautiful.",
        content_id:
            "Dunia ini tidak sempurna. Tapi ia tetap ada untuk kita, melakukan yang terbaik... itulah yang membuatnya begitu indah.",
        credit: "Roy Mustang, Fullmetal Alchemist: Brotherhood",
    },
    {
        code: "CF019",
        content:
            "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger.",
        content_id:
            "Rasa takut bukanlah kejahatan. Itu memberitahumu apa kelemahanmu. Dan setelah kamu tahu, kamu bisa menjadi lebih kuat.",
        credit: "Gildarts Clive, Fairy Tail",
    },
    {
        code: "HXH020",
        content:
            "An apology is a promise to do things differently next time, and to keep that promise.",
        content_id:
            "Permintaan maaf adalah janji untuk bertindak berbeda di lain waktu, dan menepatinya.",
        credit: "Gon Freecss, Hunter x Hunter",
    },
    {
        code: "KNK021",
        content: "The world is not beautiful, therefore it is.",
        content_id: "Dunia ini tidak indah, dan karena itu justru indah.",
        credit: "Kino, Kino no Tabi",
    },
    {
        code: "NG022",
        content: "The world is full of hope, but also filled with despair.",
        content_id: "Dunia ini penuh harapan, tapi juga penuh keputusasaan.",
        credit: "Makoto Naegi, Danganronpa",
    },
    {
        code: "SAO023",
        content: "I'd rather trust and regret than doubt and regret.",
        content_id:
            "Aku lebih memilih percaya lalu menyesal, daripada ragu lalu menyesal.",
        credit: "Kirito, Sword Art Online",
    },
    {
        code: "YLI024",
        content: "Living is anxiety and pain. But you have to endure it.",
        content_id:
            "Hidup itu penuh kecemasan dan rasa sakit. Tapi kamu harus menjalaninya.",
        credit: "Yuki Sohma, Fruits Basket",
    },
    {
        code: "DN025",
        content:
            "You can't ever win if you're always on the defensive. To win, you have to attack!",
        content_id:
            "Kau tidak akan pernah menang jika terus bertahan. Untuk menang, kau harus menyerang!",
        credit: "L, Death Note",
    },
    {
        code: "KN026",
        content: "The world isn't just black and white.",
        content_id: "Dunia ini tidak hanya hitam dan putih.",
        credit: "Kaname Kuran, Vampire Knight",
    },
    {
        code: "BRS027",
        content: "Even if it hurts, even if it's painful, don't stop.",
        content_id: "Meski sakit, meski menyakitkan, jangan berhenti.",
        credit: "Black★Rock Shooter",
    },
    {
        code: "REZ028",
        content: "I hate myself. But I want to change.",
        content_id: "Aku membenci diriku sendiri. Tapi aku ingin berubah.",
        credit: "Subaru Natsuki, Re:Zero",
    },
    {
        code: "JJ029",
        content: "A lesson you don't understand will be repeated until you do.",
        content_id:
            "Pelajaran yang tak kamu pahami akan diulang sampai kamu mengerti.",
        credit: "Satoru Gojo, Jujutsu Kaisen",
    },
    {
        code: "BSD030",
        content: "A lesson learned through pain is remembered forever.",
        content_id:
            "Pelajaran yang didapat lewat rasa sakit akan diingat selamanya.",
        credit: "Dazai Osamu, Bungou Stray Dogs",
    },
    {
        code: "OP031",
        content:
            "Power isn't determined by your size, but the size of your heart and dreams!",
        content_id:
            "Kekuatan tidak ditentukan oleh ukuran tubuhmu, tapi oleh besar hati dan impianmu!",
        credit: "Monkey D. Luffy, One Piece",
    },
    {
        code: "NRT032",
        content:
            "Hard work is worthless for those that don't believe in themselves.",
        content_id:
            "Kerja keras tidak ada artinya bagi mereka yang tidak percaya pada diri sendiri.",
        credit: "Naruto Uzumaki, Naruto",
    },
    {
        code: "DBZ033",
        content:
            "Power comes in response to a need, not a desire. You have to create that need.",
        content_id:
            "Kekuatan datang karena kebutuhan, bukan karena keinginan. Kamu harus menciptakan kebutuhan itu.",
        credit: "Goku, Dragon Ball Z",
    },
    {
        code: "BC034",
        content: "Surpassing yourself is the strongest thing there is.",
        content_id:
            "Mengalahkan dirimu sendiri adalah hal terkuat yang bisa dilakukan.",
        credit: "Yami Sukehiro, Black Clover",
    },
    {
        code: "AOT035",
        content:
            "If you win, you live. If you lose, you die. If you don't fight, you can't win!",
        content_id:
            "Jika kau menang, kau hidup. Jika kau kalah, kau mati. Jika kau tidak bertarung, kau tidak bisa menang!",
        credit: "Eren Yeager, Attack on Titan",
    },
    {
        code: "KN036",
        content:
            "No matter how deep the night, it always turns to day, eventually.",
        content_id:
            "Tak peduli seberapa gelap malam, akhirnya selalu datang siang.",
        credit: "Brook, One Piece",
    },
    {
        code: "DN037",
        content:
            "In this world, there are very few people who actually trust each other.",
        content_id:
            "Di dunia ini, sangat sedikit orang yang benar-benar saling percaya.",
        credit: "Light Yagami, Death Note",
    },
    {
        code: "FT038",
        content: "We don't die for our friends, we live for them.",
        content_id: "Kita tidak mati demi teman-teman kita, kita hidup untuk mereka.",
        credit: "Erza Scarlet, Fairy Tail",
    },
    {
        code: "TR039",
        content: "You can't change the past, but you can learn from it.",
        content_id:
            "Kamu tidak bisa mengubah masa lalu, tapi kamu bisa belajar darinya.",
        credit: "Naoto Tachibana, Tokyo Revengers",
    },
    {
        code: "SAO040",
        content:
            "Real strength is not just about physical power. It's about willpower.",
        content_id:
            "Kekuatan sejati bukan hanya tentang kekuatan fisik. Ini tentang kekuatan kehendak.",
        credit: "Asuna Yuuki, Sword Art Online",
    },
    {
        code: "HXH041",
        content:
            "You should enjoy the little detours. Because that's where you'll find the things more important than what you want.",
        content_id:
            "Nikmatilah jalan memutar. Di sanalah kamu akan menemukan hal yang lebih penting dari yang kamu cari.",
        credit: "Ging Freecss, Hunter x Hunter",
    },
    {
        code: "JJ042",
        content: "When you die, you'll be alone. So live for yourself.",
        content_id:
            "Ketika kamu mati, kamu akan sendiri. Jadi hiduplah untuk dirimu sendiri.",
        credit: "Toji Fushiguro, Jujutsu Kaisen",
    },
    {
        code: "BSD043",
        content: "The darkness suits me better than the light.",
        content_id: "Kegelapan lebih cocok untukku dibandingkan cahaya.",
        credit: "Chuuya Nakahara, Bungou Stray Dogs",
    },
    {
        code: "OP044",
        content: "I want to live! Take me out to sea with you!",
        content_id: "Aku ingin hidup! Bawa aku pergi ke laut bersamamu!",
        credit: "Nico Robin, One Piece",
    },
    {
        code: "NRT045",
        content: "A smile is the easiest way out of a difficult situation.",
        content_id: "Senyum adalah cara termudah keluar dari situasi sulit.",
        credit: "Sakura Haruno, Naruto",
    },
    {
        code: "BLE046",
        content:
            "We fear because we value life. We should enjoy it while we can.",
        content_id:
            "Kita takut karena kita menghargai hidup. Kita harus menikmatinya selagi bisa.",
        credit: "Kisuke Urahara, Bleach",
    },
    {
        code: "CF047",
        content:
            "You don't die for your friends, you live so that you can protect them.",
        content_id:
            "Kau tidak mati untuk teman-temanmu, kau hidup agar bisa melindungi mereka.",
        credit: "Natsu Dragneel, Fairy Tail",
    },
    {
        code: "RZ048",
        content:
            "Even if you're weak, there are miracles you can seize with your hands if you fight on to the very end.",
        content_id:
            "Meski kau lemah, ada keajaiban yang bisa kau raih jika terus bertarung sampai akhir.",
        credit: "Rem, Re:Zero",
    },
    {
        code: "JJ049",
        content: "Dying to win and risking death to win are completely different.",
        content_id:
            "Mati demi menang dan mempertaruhkan nyawa untuk menang adalah dua hal yang sangat berbeda.",
        credit: "Kento Nanami, Jujutsu Kaisen",
    },
    {
        code: "CL050",
        content:
            "You should enjoy the little things in life because one day you'll look back and realize they were the big things.",
        content_id:
            "Nikmatilah hal-hal kecil dalam hidup, karena suatu hari kamu akan sadar bahwa itu adalah hal besar.",
        credit: "Tomoya Okazaki, Clannad",
    },

    // ---- Q variants ----
    {
        code: "OP-Q001",
        content:
            "Power isn't determined by your size, but the size of your heart and dreams.",
        content_id:
            "Kekuatan tidak ditentukan oleh ukuran tubuhmu, tetapi oleh besarnya hati dan impianmu.",
        credit: "Monkey D. Luffy, One Piece",
    },
    {
        code: "NT-Q002",
        content:
            "Hard work is worthless for those that don't believe in themselves.",
        content_id:
            "Kerja keras tidak berarti bagi mereka yang tidak percaya pada diri sendiri.",
        credit: "Naruto Uzumaki, Naruto",
    },
    {
        code: "AOT-Q003",
        content:
            "If you win, you live. If you lose, you die. If you don't fight, you can't win!",
        content_id:
            "Jika kamu menang, kamu hidup. Jika kamu kalah, kamu mati. Jika kamu tidak bertarung, kamu tidak akan menang!",
        credit: "Eren Yeager, Attack on Titan",
    },
    {
        code: "FMAB-Q004",
        content: "A lesson without pain is meaningless.",
        content_id: "Pelajaran tanpa rasa sakit itu tidak berarti.",
        credit: "Edward Elric, Fullmetal Alchemist: Brotherhood",
    },
    {
        code: "DS-Q005",
        content: "Feelings are nothing without power.",
        content_id: "Perasaan tidak berarti tanpa kekuatan.",
        credit: "Giyu Tomioka, Demon Slayer",
    },
    {
        code: "OP-Q006",
        content: "Dying is not repaying a debt.",
        content_id: "Mati bukanlah cara membayar utang.",
        credit: "Monkey D. Luffy, One Piece",
    },
    {
        code: "BC-Q007",
        content: "Surpass your limits. Right here, right now!",
        content_id: "Lampaui batasmu. Di sini, saat ini juga!",
        credit: "Yami Sukehiro, Black Clover",
    },
    {
        code: "HXH-Q008",
        content: "An apology is a promise to do things differently next time.",
        content_id: "Permintaan maaf adalah janji untuk berbuat berbeda di lain waktu.",
        credit: "Killua Zoldyck, Hunter x Hunter",
    },
    {
        code: "OP-Q009",
        content:
            "I don't want to conquer anything. I just think the guy with the most freedom in this whole ocean is the Pirate King!",
        content_id:
            "Aku tidak ingin menaklukkan apa pun. Aku hanya berpikir orang yang paling bebas di seluruh lautan ini adalah Raja Bajak Laut!",
        credit: "Monkey D. Luffy, One Piece",
    },
    {
        code: "NT-Q010",
        content: "A person grows up when he's able to overcome hardships.",
        content_id:
            "Seseorang tumbuh dewasa ketika dia mampu mengatasi kesulitan.",
        credit: "Jiraiya, Naruto",
    },
    {
        code: "TR-Q011",
        content: "Even if I could start over, I'd make all the same mistakes.",
        content_id:
            "Bahkan jika aku bisa memulai dari awal, aku akan melakukan semua kesalahan yang sama.",
        credit: "Takemichi Hanagaki, Tokyo Revengers",
    },
    {
        code: "OP-Q012",
        content: "Being alone is more painful than getting hurt.",
        content_id: "Kesepian lebih menyakitkan daripada terluka.",
        credit: "Luffy, One Piece",
    },
    {
        code: "NT-Q013",
        content: "A smile is the easiest way out of a difficult situation.",
        content_id: "Senyuman adalah jalan keluar termudah dari situasi sulit.",
        credit: "Sakura Haruno, Naruto",
    },
    {
        code: "FMAB-Q014",
        content:
            "It's not wrong to dream. But you have to work hard to make it come true.",
        content_id:
            "Tidak salah untuk bermimpi. Tapi kamu harus bekerja keras untuk mewujudkannya.",
        credit: "Winry Rockbell, Fullmetal Alchemist: Brotherhood",
    },
    {
        code: "OP-Q015",
        content:
            "You can't bring back what you've lost, think about what you have now!",
        content_id:
            "Kamu tidak bisa mengembalikan apa yang sudah hilang, pikirkan apa yang kamu miliki sekarang!",
        credit: "Brook, One Piece",
    },
    {
        code: "DS-Q016",
        content:
            "Those who regret their actions are better than those who do nothing.",
        content_id:
            "Mereka yang menyesali perbuatannya lebih baik daripada yang tidak melakukan apa-apa.",
        credit: "Tanjiro Kamado, Demon Slayer",
    },
    {
        code: "OP-Q017",
        content:
            "Sometimes the best way to make people listen is to punch them in the face.",
        content_id:
            "Terkadang cara terbaik membuat orang mendengarkan adalah meninju wajah mereka.",
        credit: "Monkey D. Luffy, One Piece",
    },
    {
        code: "HXH-Q018",
        content: "When I say it doesn't hurt, that means I can bear it.",
        content_id: "Saat aku bilang tidak sakit, itu berarti aku bisa menahannya.",
        credit: "Kurapika, Hunter x Hunter",
    },
    {
        code: "NT-Q019",
        content:
            "In this world, wherever there is light — there are also shadows.",
        content_id: "Di dunia ini, di mana ada cahaya — selalu ada bayangan.",
        credit: "Itachi Uchiha, Naruto",
    },
    {
        code: "FMAB-Q020",
        content:
            "Nothing's perfect, the world's not perfect. But it's there for us, trying the best it can.",
        content_id:
            "Tidak ada yang sempurna, dunia juga tidak. Tapi dunia ada untuk kita, melakukan yang terbaik yang bisa ia lakukan.",
        credit: "Roy Mustang, Fullmetal Alchemist: Brotherhood",
    },
    {
        code: "OP-Q021",
        content: "If you don't take risks, you can't create a future.",
        content_id: "Jika kamu tidak mengambil risiko, kamu tidak bisa menciptakan masa depan.",
        credit: "Monkey D. Luffy, One Piece",
    },
    {
        code: "DBZ-Q022",
        content: "Push through the pain. Giving up hurts more.",
        content_id: "Terobos rasa sakit. Menyerah lebih menyakitkan.",
        credit: "Vegeta, Dragon Ball Z",
    },
    {
        code: "OPM-Q023",
        content: "Human strength lies in the ability to change yourself.",
        content_id: "Kekuatan manusia terletak pada kemampuan mengubah diri sendiri.",
        credit: "Saitama, One Punch Man",
    },
    {
        code: "BLE-Q024",
        content:
            "To know sorrow is not terrifying. What is terrifying is to know you can't go back to the happiness you could have.",
        content_id:
            "Mengetahui kesedihan bukanlah hal yang menakutkan. Yang menakutkan adalah mengetahui bahwa kamu tidak bisa kembali ke kebahagiaan yang pernah kamu miliki.",
        credit: "Rangiku Matsumoto, Bleach",
    },
    {
        code: "JJBA-Q025",
        content: "It was me, Dio!",
        content_id: "Itu aku, Dio!",
        credit: "Dio Brando, JoJo's Bizarre Adventure",
    },
    {
        code: "SAIK-Q026",
        content: "Good grief.",
        content_id: "Aduh, merepotkan.",
        credit: "Kusuo Saiki, The Disastrous Life of Saiki K.",
    },
    {
        code: "NT-Q027",
        content: "A lesson without pain is meaningless.",
        content_id: "Pelajaran tanpa rasa sakit itu tidak berarti.",
        credit: "Edward Elric, Fullmetal Alchemist: Brotherhood",
    },
    {
        code: "HXH-Q028",
        content: "A person grows up when he's able to overcome hardships.",
        content_id:
            "Seseorang tumbuh dewasa ketika dia mampu mengatasi kesulitan.",
        credit: "Jiraiya, Naruto",
    },
    {
        code: "TR-Q029",
        content: "Even if I could start over, I'd make all the same mistakes.",
        content_id:
            "Bahkan jika aku bisa memulai dari awal, aku akan melakukan semua kesalahan yang sama.",
        credit: "Takemichi Hanagaki, Tokyo Revengers",
    },
    {
        code: "DS-Q030",
        content:
            "Those who regret their actions are better than those who do nothing.",
        content_id:
            "Mereka yang menyesali perbuatannya lebih baik daripada yang tidak melakukan apa-apa.",
        credit: "Tanjiro Kamado, Demon Slayer",
    },
    {
        code: "AOT-Q031",
        content:
            "If you win, you live. If you lose, you die. If you don't fight, you can't win!",
        content_id:
            "Jika kau menang, kau hidup. Jika kau kalah, kau mati. Jika kau tidak bertarung, kau tidak bisa menang!",
        credit: "Eren Yeager, Attack on Titan",
    },
    {
        code: "BC-Q032",
        content: "My magic is never giving up!",
        content_id: "Sihirku adalah tidak pernah menyerah!",
        credit: "Asta, Black Clover",
    },
    {
        code: "BSD-Q033",
        content:
            "A lesson learned from the past is the guiding light of the future.",
        content_id: "Pelajaran dari masa lalu adalah cahaya penuntun masa depan.",
        credit: "Osamu Dazai, Bungou Stray Dogs",
    },
    {
        code: "YYH-Q034",
        content:
            "A lesson without pain is meaningless, that's because you can't gain something without sacrificing something else.",
        content_id:
            "Pelajaran tanpa rasa sakit tidak ada artinya, karena kamu tidak bisa mendapatkan sesuatu tanpa mengorbankan hal lain.",
        credit: "Yusuke Urameshi, Yu Yu Hakusho",
    },
    {
        code: "SK8-Q035",
        content:
            "The moment you think of giving up, think of the reason why you started.",
        content_id:
            "Saat kamu berpikir untuk menyerah, pikirkan alasan mengapa kamu memulainya.",
        credit: "Reki Kyan, SK8 the Infinity",
    },
    {
        code: "CL-Q036",
        content: "The world cannot be changed with pretty words alone.",
        content_id: "Dunia tidak bisa diubah hanya dengan kata-kata indah.",
        credit: "Lelouch Lamperouge, Code Geass",
    },
    {
        code: "KNY-Q037",
        content:
            "Feel the rage. The powerful, pure rage of not being able to forgive will become your unswerving drive to take action.",
        content_id:
            "Rasakan amarahnya. Amarah murni yang kuat karena tak bisa memaafkan akan menjadi pendorongmu untuk bertindak.",
        credit: "Giyu Tomioka, Demon Slayer",
    },
    {
        code: "TG-Q038",
        content: "It's not the world that's messed up; it's those of us in it.",
        content_id: "Bukan dunia yang rusak; tapi kita yang ada di dalamnya.",
        credit: "Ken Kaneki, Tokyo Ghoul",
    },
    {
        code: "DGS-Q039",
        content:
            "Life is like a pencil that will surely run out, but will leave the beautiful writing of life behind.",
        content_id:
            "Hidup itu seperti pensil yang pasti habis, tapi akan meninggalkan tulisan indah tentang kehidupan.",
        credit: "Gintoki Sakata, Gintama",
    },
    {
        code: "NAR-Q040",
        content:
            "When you give up, your dreams and everything else—they're gone.",
        content_id:
            "Saat kamu menyerah, impian dan segalanya—semuanya lenyap.",
        credit: "Naruto Uzumaki, Naruto Shippuden",
    },

    // ---- from gemini (AQxxx) ----
    {
        code: "AQ001",
        content: "People die when they are killed.",
        content_id: "Orang akan mati ketika mereka dibunuh.",
        credit: "Shirou Emiya, Fate/stay night",
    },
    {
        code: "AQ002",
        content:
            "To know sorrow is not terrifying. What is terrifying is to know you can't go back to happiness you could have.",
        content_id:
            "Mengetahui kesedihan itu tidak menakutkan. Yang menakutkan adalah mengetahui bahwa kau tidak bisa kembali ke kebahagiaan yang bisa saja kau miliki.",
        credit: "Matsumoto Rangiku, Bleach",
    },
    {
        code: "AQ003",
        content: "If you don't take risks, you can't create a future!",
        content_id:
            "Jika kau tidak mengambil risiko, kau tidak bisa menciptakan masa depan!",
        credit: "Monkey D. Luffy, One Piece",
    },
    {
        code: "AQ004",
        content:
            "Hard work is worthless for those that don't believe in themselves.",
        content_id:
            "Kerja keras tidak ada artinya bagi mereka yang tidak percaya pada diri sendiri.",
        credit: "Naruto Uzumaki, Naruto",
    },
    {
        code: "AQ005",
        content:
            "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder.",
        content_id:
            "Rasa takut itu bukanlah kejahatan. Itu memberitahumu apa kelemahanmu. Dan begitu kau tahu kelemahanmu, kau bisa menjadi lebih kuat sekaligus lebih baik hati.",
        credit: "Gildarts Clive, Fairy Tail",
    },
    {
        code: "AQ006",
        content:
            "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
        content_id:
            "Apa pun yang hilang darimu, kau akan menemukannya lagi. Tapi apa yang kau buang tidak akan pernah kembali.",
        credit: "Kenshin Himura, Rurouni Kenshin",
    },
    {
        code: "AQ007",
        content: "If you can't do something, then don't. Focus on what you can.",
        content_id:
            "Jika kau tidak bisa melakukan sesuatu, jangan lakukan. Fokus pada apa yang bisa kau lakukan.",
        credit: "Shiroe, Log Horizon",
    },
    {
        code: "AQ008",
        content:
            "The world isn't perfect. But it's there for us, doing the best it can... that's what makes it so damn beautiful.",
        content_id:
            "Dunia ini tidak sempurna. Tapi ia ada untuk kita, melakukan yang terbaik yang ia bisa... itulah yang membuatnya begitu indah.",
        credit: "Roy Mustang, Fullmetal Alchemist",
    },
    {
        code: "AQ009",
        content:
            "It's not the face that makes someone a monster, it's the choices they make with their lives.",
        content_id:
            "Bukan wajah yang membuat seseorang menjadi monster, melainkan pilihan yang mereka buat dalam hidup mereka.",
        credit: "Naruto Uzumaki, Naruto",
    },
    {
        code: "AQ010",
        content:
            "A lesson without pain is meaningless. That's because no one can gain without sacrificing something.",
        content_id:
            "Pelajaran tanpa rasa sakit itu tidak ada artinya. Karena tak ada yang bisa diperoleh tanpa mengorbankan sesuatu.",
        credit: "Edward Elric, Fullmetal Alchemist: Brotherhood",
    },
    {
        code: "AQ011",
        content:
            "Stand up and walk. Keep moving forward. You've got two good legs. So get up and use them. You're strong enough to make your own path.",
        content_id:
            "Berdiri dan berjalanlah. Teruslah maju. Kau punya dua kaki yang sehat. Jadi berdirilah dan gunakan. Kau cukup kuat untuk membuat jalanmu sendiri.",
        credit: "Edward Elric, Fullmetal Alchemist",
    },
    {
        code: "AQ012",
        content:
            "If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be.",
        content_id:
            "Jika kau tidak menyukai takdirmu, jangan menerimanya. Milikilah keberanian untuk mengubahnya sesuai keinginanmu.",
        credit: "Naruto Uzumaki, Naruto",
    },
    {
        code: "AQ013",
        content:
            "Those who break the rules are scum, but those who abandon their friends are worse than scum.",
        content_id:
            "Mereka yang melanggar aturan adalah sampah, tapi mereka yang meninggalkan teman-temannya lebih buruk dari sampah.",
        credit: "Kakashi Hatake, Naruto",
    },
    {
        code: "AQ014",
        content: "When you give up, that's when the game is over.",
        content_id: "Saat kau menyerah, saat itulah permainan berakhir.",
        credit: "Mitsuyoshi Anzai, Slam Dunk",
    },
    {
        code: "AQ015",
        content:
            "There's no shame in falling down! True shame is to not stand up again!",
        content_id:
            "Tidak ada yang memalukan dari terjatuh! Rasa malu yang sebenarnya adalah tidak bangkit kembali!",
        credit: "Shintaro Midorima, Kuroko's Basketball",
    },
    {
        code: "AQ016",
        content:
            "Sometimes, the things that matter the most are right in front of you.",
        content_id:
            "Terkadang, hal-hal yang paling penting ada tepat di depanmu.",
        credit: "Gray Fullbuster, Fairy Tail",
    },
    {
        code: "AQ017",
        content: "The ticket to the future is always open.",
        content_id: "Tiket menuju masa depan selalu terbuka.",
        credit: "Vash the Stampede, Trigun",
    },
    {
        code: "AQ018",
        content:
            "I want to be a millionaire not for the money, but for the freedom.",
        content_id:
            "Aku ingin menjadi miliuner bukan karena uangnya, tetapi karena kebebasannya.",
        credit: "Spike Spiegel, Cowboy Bebop",
    },
    {
        code: "AQ019",
        content:
            "If you just submit yourself to fate, then that's the end of it.",
        content_id:
            "Jika kau hanya pasrah pada takdir, maka selesai sudah.",
        credit: "Keiichi Maebara, Higurashi: When They Cry",
    },
    {
        code: "AQ020",
        content:
            "Even if I die, you keep living, okay? Live to see the end of this world, and to see why it was born. Live to see why a weak girl like me ended up here.",
        content_id:
            "Bahkan jika aku mati, kau tetaplah hidup, oke? Hiduplah untuk melihat akhir dunia ini, dan melihat mengapa dunia ini lahir. Hiduplah untuk mengetahui mengapa gadis lemah sepertiku berakhir di sini.",
        credit: "Sachi, Sword Art Online",
    },
    {
        code: "AQ021",
        content:
            "It is at the moment of death that humanity has realized the value of life.",
        content_id:
            "Pada saat kematianlah umat manusia menyadari nilai kehidupan.",
        credit: "Gilgamesh, Fate/Zero",
    },
    {
        code: "AQ022",
        content:
            "The weak are destined to lie beneath the boots of the strong. If that angers you, overcome your deficits.",
        content_id:
            "Yang lemah ditakdirkan berada di bawah sepatu bot yang kuat. Jika itu membuatmu marah, atasi kekuranganmu.",
        credit: "Esdeath, Akame ga Kill!",
    },
    {
        code: "AQ023",
        content: "Simplicity is the easiest path to true beauty.",
        content_id: "Kesederhanaan adalah jalan termudah menuju keindahan sejati.",
        credit: "Seishuu Handa, Barakamon",
    },
    {
        code: "AQ024",
        content:
            "Don't be so quick to throw away your life. No matter how disgraceful or embarrassing it may be, you need to keep struggling to find your way out until the very end.",
        content_id:
            "Jangan terlalu cepat membuang hidupmu. Tak peduli seberapa memalukan keadaannya, kau harus terus berjuang mencari jalan keluar sampai akhir.",
        credit: "Clare, Claymore",
    },
    {
        code: "AQ025",
        content:
            "A life that lives without doing anything is the same as a slow death.",
        content_id:
            "Hidup yang dijalani tanpa melakukan apa pun sama saja dengan kematian yang lambat.",
        credit: "Lelouch Lamperouge, Code Geass",
    },
    {
        code: "AQ026",
        content:
            "If you keep on hiding your true feelings, who is going to be happy? If you are sad, you should say it out loud!",
        content_id:
            "Jika kau terus menyembunyikan perasaanmu yang sebenarnya, siapa yang akan bahagia? Jika kau sedih, katakanlah dengan lantang!",
        credit: "Haruhi Fujioka, Ouran High School Host Club",
    },
    {
        code: "AQ027",
        content:
            "No matter how deep the night, it always turns to day, eventually.",
        content_id:
            "Tak peduli seberapa larut malam, akhirnya akan menjadi siang.",
        credit: "Brook, One Piece",
    },
    {
        code: "AQ028",
        content:
            "The moment you think of giving up, think of the reason why you held on so long.",
        content_id:
            "Saat kau berpikir untuk menyerah, pikirkan alasan mengapa kau bertahan selama ini.",
        credit: "Natsu Dragneel, Fairy Tail",
    },
    {
        code: "AQ029",
        content:
            "If you have time to think of a beautiful end, then live beautifully until the end.",
        content_id:
            "Jika kau punya waktu memikirkan akhir yang indah, hiduplah dengan indah sampai akhir.",
        credit: "Gintoki Sakata, Gintama",
    },
    {
        code: "AQ030",
        content: "Revenge just breeds more revenge.",
        content_id: "Balas dendam hanya melahirkan balas dendam yang lebih banyak.",
        credit: "Jiraiya, Naruto",
    },
    {
        code: "AQ031",
        content:
            "Power comes in response to a need, not a desire. You have to create that need.",
        content_id:
            "Kekuatan datang sebagai respons terhadap kebutuhan, bukan keinginan. Kau harus menciptakan kebutuhan itu.",
        credit: "Goku, Dragon Ball Z",
    },
    {
        code: "AQ032",
        content:
            "I am not a hero because I want to be. I am a hero because I have to be.",
        content_id:
            "Aku bukan pahlawan karena aku ingin. Aku pahlawan karena aku harus.",
        credit: "Saitama, One-Punch Man",
    },
    {
        code: "AQ033",
        content: "How can you move forward if you keep regretting the past?",
        content_id:
            "Bagaimana kau bisa maju jika terus menyesali masa lalu?",
        credit: "Edward Elric, Fullmetal Alchemist",
    },
    {
        code: "AQ034",
        content:
            "You can't always hold on to the things that are important. By letting them go we gain something else.",
        content_id:
            "Kau tidak bisa selalu berpegang pada hal-hal penting. Dengan melepaskannya, kita mendapatkan hal lain.",
        credit: "Eikichi Onizuka, Great Teacher Onizuka",
    },
    {
        code: "AQ035",
        content:
            "People's lives don't end when they die. It ends when they lose faith.",
        content_id:
            "Hidup manusia tidak berakhir saat mereka mati. Hidup berakhir ketika mereka kehilangan keyakinan.",
        credit: "Itachi Uchiha, Naruto",
    },
    {
        code: "AQ036",
        content: "Even the strongest of opponents always has a weakness.",
        content_id:
            "Bahkan lawan terkuat sekalipun selalu punya kelemahan.",
        credit: "L Lawliet, Death Note",
    },
    {
        code: "AQ037",
        content:
            "Sometimes I do feel like I'm a failure. Like there's no hope for me. But even so, I'm not gonna give up. Ever!",
        content_id:
            "Kadang aku merasa seperti gagal. Seolah tak ada harapan bagiku. Tapi tetap saja, aku tidak akan menyerah. Tidak pernah!",
        credit: "Izuku Midoriya, My Hero Academia",
    },
    {
        code: "AQ038",
        content:
            "If you wanna make people dream, you've gotta start by believing in that dream yourself!",
        content_id:
            "Jika kau ingin membuat orang bermimpi, mulailah dengan percaya pada mimpimu sendiri!",
        credit: "Nino Nakano, The Quintessential Quintuplets",
    },
    {
        code: "AQ039",
        content:
            "The difference between a novice and a master is that a master has failed more times than a novice has ever tried.",
        content_id:
            "Perbedaan antara pemula dan master adalah master telah gagal lebih banyak daripada jumlah percobaan seorang pemula.",
        credit: "Koro-sensei, Assassination Classroom",
    },
    {
        code: "AQ040",
        content:
            "It's not about whether it's possible or not, I'm doing it because I want to.",
        content_id:
            "Ini bukan tentang mungkin atau tidaknya, aku melakukannya karena aku mau.",
        credit: "Monkey D. Luffy, One Piece",
    },
    {
        code: "AQ041",
        content: "I'll leave tomorrow's problems to tomorrow's me.",
        content_id: "Masalah esok biar diurus diriku yang besok.",
        credit: "Saitama, One-Punch Man",
    },
    {
        code: "AQ042",
        content:
            "Thinking you're no-good and worthless is the worst thing you can do.",
        content_id:
            "Menganggap dirimu tak berguna adalah hal terburuk yang bisa kau lakukan.",
        credit: "Nobita Nobi, Doraemon",
    },
    {
        code: "AQ043",
        content:
            "What is right? What is wrong? In the end, all we have are our own choices.",
        content_id:
            "Apa yang benar? Apa yang salah? Pada akhirnya, yang kita miliki hanyalah pilihan kita sendiri.",
        credit: "Eren Yeager, Attack on Titan",
    },
    {
        code: "AQ044",
        content:
            "If you can't find a reason to fight, then you shouldn't be fighting.",
        content_id:
            "Jika kau tak menemukan alasan untuk bertarung, maka kau tak seharusnya bertarung.",
        credit: "Akame, Akame ga Kill!",
    },
    {
        code: "AQ045",
        content:
            "Humans die. Animals die. Plants die. Even stars die. It's a cycle of life. There's nothing sad about it.",
        content_id:
            "Manusia mati. Hewan mati. Tumbuhan mati. Bahkan bintang pun mati. Itu siklus kehidupan. Tak ada yang perlu disedihkan.",
        credit: "Maka Albarn, Soul Eater",
    },
    {
        code: "AQ046",
        content:
            "Don't live your life making excuses. The one making your choices is yourself.",
        content_id:
            "Jangan jalani hidup dengan alasan. Pembuat keputusanmu adalah dirimu sendiri.",
        credit: "Mugen, Samurai Champloo",
    },
    {
        code: "AQ047",
        content:
            "To abandon your duty is a disgrace. To die is merely to lose your life. That is all.",
        content_id:
            "Meninggalkan tugas adalah aib. Mati hanyalah kehilangan nyawa. Itu saja.",
        credit: "Erwin Smith, Attack on Titan",
    },
    {
        code: "AQ048",
        content:
            "You should enjoy the little detours to the fullest. Because that's where you'll find the things more important than what you want.",
        content_id:
            "Nikmatilah jalan memutar kecil sepenuhnya. Di sanalah kau menemukan hal-hal yang lebih penting daripada yang kau inginkan.",
        credit: "Ging Freecss, Hunter x Hunter",
    },
    {
        code: "AQ049",
        content: "The world is cruel, but also very beautiful.",
        content_id: "Dunia ini kejam, tetapi juga sangat indah.",
        credit: "Mikasa Ackerman, Attack on Titan",
    },
    {
        code: "AQ050",
        content:
            "Even if you're a hero, you're still human. You're allowed to make mistakes.",
        content_id:
            "Meski kau seorang pahlawan, kau tetap manusia. Kau boleh membuat kesalahan.",
        credit: "All Might, My Hero Academia",
    },
    {
        code: "KNY101",
        content: "Set your heart ablaze!",
        content_id: "Bakar semangatmu!",
        credit: "Kyojuro Rengoku, Demon Slayer: Kimetsu no Yaiba",
    },
    {
        code: "AOT102",
        content: "The only thing we're allowed to do is to believe we won't regret the choice we made.",
        content_id: "Satu-satunya yang boleh kita lakukan adalah percaya bahwa kita takkan menyesali pilihan yang kita buat.",
        credit: "Levi Ackerman, Attack on Titan",
    },
    {
        code: "ORE103",
        content: "Youth is a lie. It is nothing but evil.",
        content_id: "Masa muda adalah kebohongan. Tak lain hanyalah kejahatan.",
        credit: "Hachiman Hikigaya, Oregairu",
    },
    {
        code: "NGE104",
        content: "I mustn't run away.",
        content_id: "Aku tidak boleh lari.",
        credit: "Shinji Ikari, Neon Genesis Evangelion",
    },
    {
        code: "RK105",
        content: "I will not kill.",
        content_id: "Aku tidak akan membunuh.",
        credit: "Himura Kenshin, Rurouni Kenshin",
    },
    {
        code: "MUS106",
        content: "Not everything has a name. Not everything can be seen.",
        content_id: "Tak semua hal punya nama. Tak semua hal bisa terlihat.",
        credit: "Ginko, Mushishi",
    },
    {
        code: "LAIN107",
        content: "No matter where you go, everyone's connected.",
        content_id: "Ke mana pun kau pergi, semua orang saling terhubung.",
        credit: "Lain Iwakura, Serial Experiments Lain",
    },
    {
        code: "GITS108",
        content: "Overspecialize, and you breed in weakness.",
        content_id: "Terlalu terspesialisasi hanya akan melahirkan kelemahan.",
        credit: "Motoko Kusanagi, Ghost in the Shell",
    },
    {
        code: "OP109",
        content: "Nothing happened.",
        content_id: "Tidak terjadi apa-apa.",
        credit: "Roronoa Zoro, One Piece",
    },
    {
        code: "SM110",
        content: "In the name of the Moon, I'll punish you!",
        content_id: "Atas nama Bulan, aku akan menghukummu!",
        credit: "Usagi Tsukino, Sailor Moon",
    },
    {
        code: "HYO111",
        content: "If I don't have to do it, I won't. If I have to, I'll do it quickly.",
        content_id: "Jika aku tak perlu melakukannya, aku tak akan melakukannya. Jika harus, akan kulakukan dengan cepat.",
        credit: "Houtarou Oreki, Hyouka",
    },
    {
        code: "KIKI112",
        content: "We each need to find our own inspiration.",
        content_id: "Kita masing-masing harus menemukan inspirasi kita sendiri.",
        credit: "Kiki, Kiki's Delivery Service",
    },
    {
        code: "SG113",
        content: "El Psy Congroo.",
        content_id: "El Psy Congroo.",
        credit: "Rintarou Okabe, Steins;Gate",
    },
    {
        code: "VIO114",
        content: "I want to know what 'I love you' means.",
        content_id: "Aku ingin tahu apa arti 'aku mencintaimu'.",
        credit: "Violet Evergarden, Violet Evergarden",
    },
    {
        code: "MP100115",
        content: "It's okay to run away. You can come back stronger.",
        content_id: "Tak apa untuk melarikan diri. Kau bisa kembali dengan lebih kuat.",
        credit: "Reigen Arataka, Mob Psycho 100",
    },
    {
        code: "MP100116",
        content: "You are you, and that is your power.",
        content_id: "Kau adalah dirimu sendiri, dan itulah kekuatanmu.",
        credit: "Shigeo 'Mob' Kageyama, Mob Psycho 100",
    },
    {
        code: "S&W117",
        content: "Call me Holo, the Wise Wolf.",
        content_id: "Panggil aku Holo, Serigala Bijak.",
        credit: "Holo, Spice and Wolf",
    },
    {
        code: "KNB118",
        content: "I am a shadow.",
        content_id: "Aku adalah bayangan.",
        credit: "Tetsuya Kuroko, Kuroko's Basketball",
    },
    {
        code: "DS119",
        content: "Ten billion percent!",
        content_id: "Sepuluh miliar persen!",
        credit: "Senku Ishigami, Dr. Stone",
    },
    {
        code: "VIN120",
        content: "You have no enemies. No one does.",
        content_id: "Kau tak punya musuh. Tak seorang pun yang punya.",
        credit: "Thors, Vinland Saga",
    },
    {
        code: "MIX201",
        content: "Sometimes the only way to escape the cage is to let yourself out.",
        content_id: "Terkadang satu-satunya cara keluar dari kandang adalah melepaskan dirimu sendiri.",
        credit: "Armin Arlert, Attack on Titan",
    },
    {
        code: "MIX202",
        content: "Give your heart!",
        content_id: "Serahkan hatimu!",
        credit: "Erwin Smith, Attack on Titan",
    },
    {
        code: "MIX203",
        content: "The strong should live and the weak should die? Then I'll get stronger.",
        content_id: "Yang kuat harus hidup dan yang lemah harus mati? Kalau begitu aku akan menjadi kuat.",
        credit: "Thorfinn, Vinland Saga",
    },
    {
        code: "MIX204",
        content: "Man proposes, God disposes.",
        content_id: "Manusia berencana, Tuhan yang menentukan.",
        credit: "Askeladd, Vinland Saga",
    },
    {
        code: "MIX205",
        content: "Yare yare daze.",
        content_id: "Ya ampun, merepotkan.",
        credit: "Jotaro Kujo, JoJo's Bizarre Adventure",
    },
    {
        code: "MIX206",
        content: "A lesson learned the hard way is a lesson you never forget.",
        content_id: "Pelajaran yang dipelajari dengan susah payah adalah pelajaran yang takkan terlupa.",
        credit: "Jotaro Kujo, JoJo's Bizarre Adventure",
    },
    {
        code: "MIX207",
        content: "Even if no one believes in you, walk forward with your own legs.",
        content_id: "Meski tak ada yang percaya padamu, berjalanlah maju dengan kakimu sendiri.",
        credit: "Tanjiro Kamado, Demon Slayer",
    },
    {
        code: "MIX208",
        content: "A scoundrel's smile can save a life.",
        content_id: "Senyum seorang penipu pun bisa menyelamatkan nyawa.",
        credit: "Reigen Arataka, Mob Psycho 100",
    },
    {
        code: "MIX209",
        content: "People's lives are not like novels. They're not bound by logic.",
        content_id: "Hidup manusia tidak seperti novel. Ia tidak terikat logika.",
        credit: "Gintoki Sakata, Gintama",
    },
    {
        code: "MIX210",
        content: "The world is not beautiful, therefore it is—because we give it meaning.",
        content_id: "Dunia tidak indah, dan karenanya indah—karena kitalah yang memberinya makna.",
        credit: "Shinobu Oshino, Monogatari Series",
    },
    {
        code: "MIX211",
        content: "If you don't take care of yourself, you can't take care of others.",
        content_id: "Jika kamu tidak menjaga dirimu, kamu takkan bisa menjaga orang lain.",
        credit: "Kaguya Shinomiya, Kaguya-sama: Love Is War",
    },
    {
        code: "MIX212",
        content: "A fake smile is the easiest armor.",
        content_id: "Senyum palsu adalah pelindung termudah.",
        credit: "Ai Hayasaka, Kaguya-sama: Love Is War",
    },
    {
        code: "MIX213",
        content: "If you're gonna hit it, hit it until it breaks.",
        content_id: "Kalau kau mau menghancurkannya, hancurkan sampai benar-benar pecah.",
        credit: "Megumi Fushiguro, Jujutsu Kaisen",
    },
    {
        code: "MIX214",
        content: "A curse can only be met with greater resolve.",
        content_id: "Kutukan hanya bisa dihadapi dengan tekad yang lebih besar.",
        credit: "Yuji Itadori, Jujutsu Kaisen",
    },
    {
        code: "MIX215",
        content: "I'm not alone anymore.",
        content_id: "Aku tidak sendirian lagi.",
        credit: "Atsushi Nakajima, Bungou Stray Dogs",
    },
    {
        code: "MIX216",
        content: "The wind is rising! We must try to live.",
        content_id: "Angin berhembus kencang! Kita harus mencoba untuk hidup.",
        credit: "JirÅ Horikoshi, The Wind Rises",
    },
    {
        code: "MIX217",
        content: "You can't sit around envying other people's worlds. You have to go out and change your own.",
        content_id: "Jangan hanya iri pada dunia orang lain. Ubahlah duniamu sendiri.",
        credit: "Chiaki Shinichi, Nodame Cantabile",
    },
    {
        code: "MIX218",
        content: "The only one who can decide your worth is you.",
        content_id: "Hanya dirimu yang bisa menentukan nilai dirimu.",
        credit: "Sakura Kinomoto, Cardcaptor Sakura",
    },
    {
        code: "MIX219",
        content: "Miracles happen to those who never give up.",
        content_id: "Keajaiban terjadi pada mereka yang tak pernah menyerah.",
        credit: "Tsubasa Ozora, Captain Tsubasa",
    },
    {
        code: "MIX220",
        content: "I am a genius of hard work.",
        content_id: "Aku adalah jenius karena kerja keras.",
        credit: "Rock Lee, Naruto",
    },
    {
        code: "MIX221",
        content: "The ball is alive.",
        content_id: "Bola itu hidup.",
        credit: "Shoyo Hinata, Haikyuu!!",
    },
    {
        code: "MIX222",
        content: "Even if we're not tall, we can fly.",
        content_id: "Meski kami tidak tinggi, kami bisa terbang.",
        credit: "Tobio Kageyama, Haikyuu!!",
    },
    {
        code: "MIX223",
        content: "The moment you think you're weak, you become weaker.",
        content_id: "Saat kau mengira dirimu lemah, kau jadi lebih lemah.",
        credit: "Aomine Daiki, Kuroko's Basketball",
    },
    {
        code: "MIX224",
        content: "We fight not to win, but to keep moving forward.",
        content_id: "Kita bertarung bukan untuk menang, tapi untuk terus maju.",
        credit: "Mikazuki Augus, Mobile Suit Gundam: Iron-Blooded Orphans",
    },
    {
        code: "MIX225",
        content: "I can't stand a world where you can't shout your feelings.",
        content_id: "Aku tak tahan dunia di mana kau tak bisa meneriakkan perasaanmu.",
        credit: "Nana Osaki, NANA",
    },
    {
        code: "MIX226",
        content: "Kindness can be a stronger weapon than any blade.",
        content_id: "Kebaikan bisa jadi senjata yang lebih kuat dari pedang manapun.",
        credit: "Kenshin Himura, Rurouni Kenshin",
    },
    {
        code: "MIX227",
        content: "In this world, the weak don't get to choose how they die.",
        content_id: "Di dunia ini, yang lemah tak bisa memilih cara mereka mati.",
        credit: "Guts, Berserk",
    },
    {
        code: "MIX228",
        content: "Even if we can't be fulfilled, we move forward.",
        content_id: "Meski tak bisa terpenuhi, kita tetap melangkah maju.",
        credit: "Casca, Berserk",
    },
    {
        code: "MIX229",
        content: "Bang.",
        content_id: "Dor.",
        credit: "Vash the Stampede, Trigun",
    },
    {
        code: "MIX230",
        content: "Whatever happens, happens.",
        content_id: "Apa pun yang terjadi, terjadilah.",
        credit: "Spike Spiegel, Cowboy Bebop",
    },
    {
        code: "MIX231",
        content: "Believe in the me that believes in the students.",
        content_id: "Percayalah pada diriku yang percaya pada murid-muridku.",
        credit: "Koro-sensei, Assassination Classroom",
    },
    {
        code: "MIX232",
        content: "Music isn't a tool to win. It's a way to say 'I'm here.'",
        content_id: "Musik bukan alat untuk menang. Musik adalah cara berkata 'aku ada di sini'.",
        credit: "Kaori Miyazono, Your Lie in April",
    },
    {
        code: "MIX233",
        content: "If you don't face someone, you can't understand them.",
        content_id: "Jika kau tak berhadapan dengan seseorang, kau takkan memahaminya.",
        credit: "Shoya Ishida, A Silent Voice",
    },
    {
        code: "MIX234",
        content: "You can't rewind life. But you can play the next track.",
        content_id: "Hidup tak bisa di-rewind. Tapi kau bisa memutar lagu berikutnya.",
        credit: "RintarÅ Okabe, Steins;Gate",
    },
    {
        code: "MIX235",
        content: "A detective who corners himself can't corner the culprit.",
        content_id: "Detektif yang menyudutkan dirinya takkan bisa menyudutkan pelaku.",
        credit: "Shinichi Kudo, Detective Conan",
    },
    {
        code: "MIX236",
        content: "If you have time to worry, run.",
        content_id: "Jika kau punya waktu untuk khawatir, berlarilah.",
        credit: "Sora, No Game No Life",
    },
    {
        code: "MIX237",
        content: "There's no such thing as a painless lesson—that's just a delusion.",
        content_id: "Tak ada pelajaran tanpa rasa sakit—itu hanya delusi.",
        credit: "Riza Hawkeye, Fullmetal Alchemist: Brotherhood",
    },
    {
        code: "MIX238",
        content: "Protecting a person means giving them a place to belong.",
        content_id: "Melindungi seseorang berarti memberinya tempat untuk pulang.",
        credit: "Todoroki Shoto, My Hero Academia",
    },
    {
        code: "MIX239",
        content: "A hero is someone who keeps getting back up.",
        content_id: "Pahlawan adalah orang yang terus bangkit lagi dan lagi.",
        credit: "All Might, My Hero Academia",
    },
    {
        code: "MIX240",
        content: "Hope is like a path: it appears when you walk on it.",
        content_id: "Harapan seperti jalan: ia muncul saat kau melangkah di atasnya.",
        credit: "Natsume Takashi, Natsume's Book of Friends",
    },
    {
        code: "MIX241",
        content: "Humans can change. That's their strength.",
        content_id: "Manusia bisa berubah. Itulah kekuatan mereka.",
        credit: "Edogawa Ranpo, Bungou Stray Dogs",
    },
    {
        code: "MIX242",
        content: "Even if you're scared, move one step forward.",
        content_id: "Meski kau takut, majulah satu langkah.",
        credit: "Shinjiro Aragaki, Persona 3 (Anime)",
    },
    {
        code: "MIX243",
        content: "Justice without power is meaningless; power without justice is violence.",
        content_id: "Keadilan tanpa kekuatan tak berarti; kekuatan tanpa keadilan adalah kekerasan.",
        credit: "Lelouch Lamperouge, Code Geass",
    },
    {
        code: "MIX244",
        content: "A kingdom of isolation is just a prison with velvet walls.",
        content_id: "Kerajaan isolasi hanyalah penjara dengan dinding beludru.",
        credit: "San, Princess Mononoke",
    },
    {
        code: "MIX245",
        content: "The sky doesn't need a reason to be blue, and neither do you to be yourself.",
        content_id: "Langit tak butuh alasan untuk biru, begitu pula kau untuk menjadi dirimu sendiri.",
        credit: "Howl, Howl's Moving Castle",
    },
    {
        code: "MIX246",
        content: "When you can't see the light, become it.",
        content_id: "Saat kau tak bisa melihat cahaya, jadilah cahaya itu.",
        credit: "Shigeo 'Mob' Kageyama, Mob Psycho 100",
    },
    {
        code: "MIX247",
        content: "A warrior's weapon is his heart before his blade.",
        content_id: "Senjata seorang ksatria adalah hatinya sebelum pedangnya.",
        credit: "Saber, Fate/stay night",
    },
    {
        code: "MIX248",
        content: "If you want to grant wishes, you must have the power to do so.",
        content_id: "Jika kau ingin mengabulkan harapan, kau harus punya kekuatan untuk melakukannya.",
        credit: "Homura Akemi, Puella Magi Madoka Magica",
    },
    {
        code: "MIX249",
        content: "Adults are just children who forgot how to be honest.",
        content_id: "Orang dewasa hanyalah anak-anak yang lupa bagaimana jujur.",
        credit: "Aqua Hoshino, Oshi no Ko",
    },
    {
        code: "MIX250",
        content: "The journey matters, even if you forget the destination.",
        content_id: "Perjalanan itu penting, meski kau lupa tujuan akhirnya.",
        credit: "Frieren, Frieren: Beyond Journey's End",
    },
    {
        code: "MIX251",
        content: "The resolve to live is sharper than any blade.",
        content_id: "Tekad untuk hidup itu lebih tajam dari pedang mana pun.",
        credit: "Gabimaru, Hell's Paradise",
    },
    {
        code: "MIX252",
        content: "Talent is found; passion is built stroke by stroke.",
        content_id: "Bakat ditemukan; hasrat dibangun gores demi gores.",
        credit: "Yatora Yaguchi, Blue Period",
    },
    {
        code: "MIX253",
        content: "Immortality means outliving your regrets.",
        content_id: "Keabadian berarti menyalip penyesalanmu sendiri.",
        credit: "Fushi, To Your Eternity",
    },
    {
        code: "MIX254",
        content: "If it's for family, any role is fine.",
        content_id: "Kalau demi keluarga, peran apa pun tak masalah.",
        credit: "Loid Forger, SPY×FAMILY",
    },
    {
        code: "MIX255",
        content: "Waku waku!",
        content_id: "Waku waku!",
        credit: "Anya Forger, SPY×FAMILY",
    },
    {
        code: "MIX256",
        content: "A picture can save what words can't.",
        content_id: "Gambar bisa menyelamatkan hal yang tak bisa diucap kata.",
        credit: "Shoya Ishida, A Silent Voice",
    },
    {
        code: "MIX257",
        content: "I'm home. Welcome back to me.",
        content_id: "Aku pulang. Selamat datang untuk diriku sendiri.",
        credit: "Violet Evergarden, Violet Evergarden",
    },
    {
        code: "MIX258",
        content: "You don't need permission to be yourself.",
        content_id: "Kau tak butuh izin untuk menjadi dirimu sendiri.",
        credit: "Marin Kitagawa, My Dress-Up Darling",
    },
    {
        code: "MIX259",
        content: "A clean hit needs a clean heart.",
        content_id: "Pukulan bersih butuh hati yang bersih.",
        credit: "Ippo Makunouchi, Hajime no Ippo",
    },
    {
        code: "MIX260",
        content: "A mage's pride is the courage to learn.",
        content_id: "Kebanggaan penyihir adalah keberanian untuk belajar.",
        credit: "Frieren, Frieren: Beyond Journey's End",
    },
    {
        code: "MIX261",
        content: "I carry the future in my notebook margins.",
        content_id: "Aku membawa masa depan di pinggir buku catatanku.",
        credit: "Mob, Mob Psycho 100",
    },
    {
        code: "MIX262",
        content: "The board is truth; humans only chase it.",
        content_id: "Papan adalah kebenaran; manusia hanya mengejarnya.",
        credit: "Fujiwara-no-Sai, Hikaru no Go",
    },
    {
        code: "MIX263",
        content: "Survival begins when plans end.",
        content_id: "Bertahan hidup dimulai saat rencana berakhir.",
        credit: "Emma, The Promised Neverland",
    },
    {
        code: "MIX264",
        content: "Reason is a cage; desire is the key.",
        content_id: "Akal adalah sangkar; hasrat adalah kuncinya.",
        credit: "Shogo Makishima, Psycho-Pass",
    },
    {
        code: "MIX265",
        content: "Monster? Look in the mirror first.",
        content_id: "Monster? Lihat cermin dulu.",
        credit: "Johan Liebert, Monster",
    },
    {
        code: "MIX266",
        content: "I don't gamble. I calculate.",
        content_id: "Aku tidak berjudi. Aku menghitung.",
        credit: "Tokuchi Toua, ONE OUTS",
    },
    {
        code: "MIX267",
        content: "Revolution starts with one honest sentence.",
        content_id: "Revolusi dimulai dari satu kalimat jujur.",
        credit: "Armin Arlert, Attack on Titan",
    },
    {
        code: "MIX268",
        content: "The forest forgives nothing, yet it shelters all.",
        content_id: "Hutan tak mengampuni apa pun, namun menaungi semua.",
        credit: "Nanachi, Made in Abyss",
    },
    {
        code: "MIX269",
        content: "Mercy is proof of strength, not weakness.",
        content_id: "Belas kasih adalah bukti kekuatan, bukan kelemahan.",
        credit: "Dororo, Dororo",
    },
    {
        code: "MIX270",
        content: "The hand severed from the body still reaches for tomorrow.",
        content_id: "Tangan yang terpisah dari tubuh tetap meraih esok.",
        credit: "Hyakkimaru, Dororo",
    },
    {
        code: "MIX271",
        content: "The sea remembers who dares it.",
        content_id: "Laut mengingat siapa yang menantangnya.",
        credit: "Luffy, One Piece",
    },
    {
        code: "MIX272",
        content: "Run until your doubts can't keep up.",
        content_id: "Berlari sampai keraguanmu tak bisa menyusul.",
        credit: "Takumi Fujiwara, Initial D",
    },
    {
        code: "MIX273",
        content: "Promise me you'll live like a song that never ends.",
        content_id: "Janji padaku kau akan hidup seperti lagu yang tak pernah usai.",
        credit: "Nana Osaki, NANA",
    },
    {
        code: "MIX274",
        content: "The stage forgives no lies.",
        content_id: "Panggung tak memaafkan kebohongan.",
        credit: "Kage, Ranking of Kings",
    },
    {
        code: "MIX275",
        content: "Kings are crowned by courage, not by crowns.",
        content_id: "Raja dinobatkan oleh keberanian, bukan oleh mahkota.",
        credit: "Bojji, Ranking of Kings",
    },
    {
        code: "MIX276",
        content: "If love needs conditions, it's a contract.",
        content_id: "Jika cinta butuh syarat, itu kontrak.",
        credit: "Mizuhara Chizuru, Rent-A-Girlfriend",
    },
    {
        code: "MIX277",
        content: "Dreams taste best when shared.",
        content_id: "Mimpi terasa paling nikmat saat dibagi.",
        credit: "Hinata Shoyo, Haikyuu!!",
    },
    {
        code: "MIX278",
        content: "We don't need giants to cast long shadows.",
        content_id: "Kita tak butuh raksasa untuk membuat bayangan panjang.",
        credit: "Kuroo Tetsuro, Haikyuu!!",
    },
    {
        code: "MIX279",
        content: "I'll make them regret underestimating average.",
        content_id: "Akan kubuat mereka menyesal meremehkan yang biasa-biasa saja.",
        credit: "Isagi Yoichi, BLUELOCK",
    },
    {
        code: "MIX280",
        content: "Devour the future before it devours you.",
        content_id: "Lahap masa depan sebelum ia melahapmu.",
        credit: "Ego Jinpachi, BLUELOCK",
    },
    {
        code: "MIX281",
        content: "I want simple things: bread, jam, and a tomorrow.",
        content_id: "Aku ingin hal sederhana: roti, selai, dan hari esok.",
        credit: "Denji, Chainsaw Man",
    },
    {
        code: "MIX282",
        content: "Lies are fun because the truth is heavy.",
        content_id: "Kebohongan itu seru karena kebenaran itu berat.",
        credit: "Power, Chainsaw Man",
    },
    {
        code: "MIX283",
        content: "Prayers are wind; resolve is the blade.",
        content_id: "Doa adalah angin; tekad adalah pedangnya.",
        credit: "Aki Hayakawa, Chainsaw Man",
    },
    {
        code: "MIX284",
        content: "A straight road teaches you nothing.",
        content_id: "Jalan lurus tak mengajarkan apa-apa.",
        credit: "Jigen Daisuke, Lupin the Third",
    },
    {
        code: "MIX285",
        content: "Steel breaks; will bends and returns.",
        content_id: "Baja patah; kehendak membengkok lalu kembali.",
        credit: "Guts, Berserk",
    },
    {
        code: "MIX286",
        content: "A soldier's duty is to outlive their sins.",
        content_id: "Tugas seorang prajurit adalah hidup lebih lama dari dosanya.",
        credit: "Levi Ackerman, Attack on Titan",
    },
    {
        code: "MIX287",
        content: "Maps lie; footsteps don't.",
        content_id: "Peta bisa bohong; jejak kaki tidak.",
        credit: "Ashitaka, Princess Mononoke",
    },
    {
        code: "MIX288",
        content: "Even a false smile can keep a friend warm.",
        content_id: "Senyum palsu pun bisa menghangatkan seorang teman.",
        credit: "Orihime Inoue, Bleach",
    },
    {
        code: "MIX289",
        content: "A wish spoken softly can move mountains inside us.",
        content_id: "Harapan yang diucap pelan bisa menggerakkan gunung di dalam diri.",
        credit: "Shinobu Kocho, Demon Slayer",
    },
    {
        code: "MIX290",
        content: "Don't chase genius—chase honest work.",
        content_id: "Jangan kejar kejeniusaan—kejarlah kerja yang jujur.",
        credit: "Miyamoto Musashi, Vagabond",
    },
    {
        code: "MIX291",
        content: "If I can't reach you, I'll become the bridge.",
        content_id: "Jika aku tak bisa meraihmu, aku akan menjadi jembatannya.",
        credit: "Taiga Aisaka, Toradora!",
    },
    {
        code: "MIX292",
        content: "We met by mistake; we stay by choice.",
        content_id: "Kita bertemu karena kebetulan; kita bertahan karena pilihan.",
        credit: "Mitsuha Miyamizu, Your Name.",
    },
    {
        code: "MIX293",
        content: "Sunny days belong to those who dare to pray for them.",
        content_id: "Hari cerah milik mereka yang berani memintanya.",
        credit: "Hina Amano, Weathering With You",
    },
    {
        code: "MIX294",
        content: "Gold is heavy; promises are heavier.",
        content_id: "Emas itu berat; janji lebih berat lagi.",
        credit: "Saichi Sugimoto, Golden Kamuy",
    },
    {
        code: "MIX295",
        content: "The truth tastes like gunpowder.",
        content_id: "Kebenaran rasanya seperti bubuk mesiu.",
        credit: "Hyakunosuke Ogata, Golden Kamuy",
    },
    {
        code: "MIX296",
        content: "Even silence leaves footprints.",
        content_id: "Bahkan keheningan meninggalkan jejak.",
        credit: "Kiyotaka Ayanokoji, Classroom of the Elite",
    },
    {
        code: "MIX297",
        content: "If the world is wrong, draw a better one.",
        content_id: "Jika dunia ini salah, gambar ulang yang lebih baik.",
        credit: "Eiji Niizuma, Bakuman.",
    },
    {
        code: "MIX298",
        content: "Music turns pain into something we can hold.",
        content_id: "Musik mengubah rasa sakit menjadi sesuatu yang bisa kita genggam.",
        credit: "Kousei Arima, Your Lie in April",
    },
    {
        code: "MIX299",
        content: "Justice is a decision you renew every day.",
        content_id: "Keadilan adalah keputusan yang kau perbarui setiap hari.",
        credit: "Light Yagami, Death Note",
    },
    {
        code: "MIX300",
        content: "A true rival teaches you your name.",
        content_id: "Rival sejati mengajarkan namamu sendiri.",
        credit: "Tezuka Kunimitsu, The Prince of Tennis",
    },
    { code: "MIX301", content: "A god is only as real as the prayers that reach him.", content_id: "Seorang dewa hanya setereal doa yang sampai padanya.", credit: "Yato, Noragami" },
    { code: "MIX302", content: "Names bind monsters—and humans—more than chains do.", content_id: "Nama mengikat monster—dan manusia—lebih dari rantai mana pun.", credit: "Migi, Parasyte" },
    { code: "MIX303", content: "Kindness is heavy; carry it anyway.", content_id: "Kebaikan itu berat; bawalah tetap saja.", credit: "Rei Kiriyama, March Comes in Like a Lion" },
    { code: "MIX304", content: "The page forgives rough lines when the heart is steady.", content_id: "Kertas memaafkan garis kasar saat hati mantap.", credit: "Coco, Witch Hat Atelier" },
    { code: "MIX305", content: "Truth is a blade that cuts the hand that hides it.", content_id: "Kebenaran adalah bilah yang melukai tangan yang menyembunyikannya.", credit: "Ougi Oshino, Owarimonogatari" },
    { code: "MIX306", content: "Fear keeps you alive; courage lets you live.", content_id: "Rasa takut membuatmu bertahan; keberanian membuatmu hidup.", credit: "Revy, Black Lagoon" },
    { code: "MIX307", content: "A mistake is only wasted if it stays silent.", content_id: "Kesalahan hanya sia-sia jika tetap diam.", credit: "Seishuu Handa, Barakamon" },
    { code: "MIX308", content: "Love and bullets travel straight; people don't.", content_id: "Cinta dan peluru melaju lurus; manusia tidak.", credit: "Vash the Stampede, Trigun Stampede" },
    { code: "MIX309", content: "If you can't break the wall, draw a door.", content_id: "Jika tak bisa menembus dinding, gambarlah pintu.", credit: "Sakamoto, Sakamoto Desu Ga?" },
    { code: "MIX310", content: "A promise is a spell cast on your future self.", content_id: "Janji adalah mantra pada dirimu di masa depan.", credit: "Chise Hatori, The Ancient Magus' Bride" },
    { code: "MIX311", content: "Talent is the spark; repetition is the fire.", content_id: "Bakat adalah percikan; pengulangan adalah apinya.", credit: "Haru, Free!" },
    { code: "MIX312", content: "Even fools have a style when they fall.", content_id: "Bahkan orang tolol punya gaya saat jatuh.", credit: "Sora, No Game No Life" },
    { code: "MIX313", content: "A good rival is a mirror that doesn't lie.", content_id: "Rival yang baik adalah cermin yang tak berbohong.", credit: "Takashi Morinozuka, Ouran High School Host Club" },
    { code: "MIX314", content: "The ocean writes in waves; learn to read it.", content_id: "Laut menulis dengan ombak; belajarlah membacanya.", credit: "Luca, Children of the Sea" },
    { code: "MIX315", content: "If the world is noisy, listen deeper.", content_id: "Jika dunia bising, dengarkan lebih dalam.", credit: "Shoko Nishimiya, A Silent Voice" },
    { code: "MIX316", content: "You can't bluff a kitchen or a battlefield.", content_id: "Kau tak bisa menggertak dapur atau medan perang.", credit: "Soma Yukihira, Food Wars!" },
    { code: "MIX317", content: "Time moves; hearts decide the direction.", content_id: "Waktu bergerak; hati menentukan arahnya.", credit: "Rika Furude, Higurashi" },
    { code: "MIX318", content: "A city is just a giant puzzle with people for pieces.", content_id: "Sebuah kota hanyalah teka-teki raksasa dengan manusia sebagai kepingannya.", credit: "Kido, Mekakucity Actors" },
    { code: "MIX319", content: "Even a coin toss listens to the hand that throws it.", content_id: "Bahkan lempar koin pun mendengar tangan yang melemparkannya.", credit: "Kaiji Itou, Kaiji" },
    { code: "MIX320", content: "We don't chase ghosts; we chase reasons.", content_id: "Kita tidak mengejar hantu; kita mengejar alasan.", credit: "Kogoro Akechi, Trickster" },
    { code: "MIX321", content: "If you fear the night, become the lamp.", content_id: "Jika kau takut malam, jadilah lampunya.", credit: "Allen Walker, D.Gray-man" },
    { code: "MIX322", content: "Words are cheap until you bleed for them.", content_id: "Kata-kata murah sampai kau berdarah karenanya.", credit: "Mikoto Suoh, K Project" },
    { code: "MIX323", content: "A lie told to protect joy is still a lie.", content_id: "Kebohongan untuk melindungi kebahagiaan tetaplah kebohongan.", credit: "Rikka Takanashi, Chuunibyou" },
    { code: "MIX324", content: "Maps fade; stories endure.", content_id: "Peta memudar; kisah bertahan.", credit: "Askeladd, Vinland Saga" },
    { code: "MIX325", content: "A blade is honest even when its owner isn't.", content_id: "Sebilah pedang jujur bahkan saat pemiliknya tidak.", credit: "Giyu Tomioka, Demon Slayer" },
    { code: "MIX326", content: "Dreams need deadlines to wake up.", content_id: "Mimpi butuh tenggat agar terbangun.", credit: "Moritaka Mashiro, Bakuman." },
    { code: "MIX327", content: "A stage demands your truth, not your excuses.", content_id: "Panggung menuntut kebenaranmu, bukan alasanmu.", credit: "Kageyama Shigeo, Mob Psycho 100" },
    { code: "MIX328", content: "If you can't win by force, win by form.", content_id: "Jika tak bisa menang dengan tenaga, menangkan dengan teknik.", credit: "Kenshin Uesugi, Slam Dunk" },
    { code: "MIX329", content: "Mercy is a strategy, not a weakness.", content_id: "Belas kasih adalah strategi, bukan kelemahan.", credit: "Thorfinn, Vinland Saga" },
    { code: "MIX330", content: "The forest heals what words can't reach.", content_id: "Hutan menyembuhkan hal yang tak tersentuh kata.", credit: "Haku, Spirited Away" },
    { code: "MIX331", content: "Even gods trip on loose shoelaces.", content_id: "Bahkan dewa tersandung tali sepatu yang longgar.", credit: "Konata Izumi, Lucky Star" },
    { code: "MIX332", content: "A pen can break a curse if you keep writing.", content_id: "Pena dapat mematahkan kutukan jika kau terus menulis.", credit: "Shigeo 'Mob' Kageyama, Mob Psycho 100" },
    { code: "MIX333", content: "You don't need permission to be happy today.", content_id: "Kau tak perlu izin untuk bahagia hari ini.", credit: "Usagi Tsukino, Sailor Moon" },
    { code: "MIX334", content: "Chaos is a ladder only for those who climb.", content_id: "Kekacauan adalah tangga hanya bagi yang memanjatnya.", credit: "Hisoka, Hunter × Hunter" },
    { code: "MIX335", content: "Practice turns fear into memory.", content_id: "Latihan mengubah ketakutan menjadi kenangan.", credit: "Aoi Hinata, SK8 the Infinity" },
    { code: "MIX336", content: "A promise tastes like salt when kept.", content_id: "Janji terasa asin saat ditepati.", credit: "Hori Kyouko, Horimiya" },
    { code: "MIX337", content: "If the world is a stage, choose your lines well.", content_id: "Jika dunia adalah panggung, pilihlah dialogmu dengan baik.", credit: "Lelouch Lamperouge, Code Geass" },
    { code: "MIX338", content: "Silence is how blades argue.", content_id: "Keheningan adalah cara pedang berdebat.", credit: "Guts, Berserk" },
    { code: "MIX339", content: "We eat to live, but we cook to belong.", content_id: "Kita makan untuk hidup, tapi kita memasak untuk merasa belong.", credit: "Kotori Iida, Sweetness and Lightning" },
    { code: "MIX340", content: "Kindness is a rebellion that never trends.", content_id: "Kebaikan adalah pemberontakan yang tak pernah jadi tren.", credit: "Nadeshiko Kagamihara, Laid-Back Camp" },
    { code: "MIX341", content: "A mask is heaviest when no one asks you to wear it.", content_id: "Topeng paling berat saat tak ada yang memintamu memakainya.", credit: "Toge Inumaki, Jujutsu Kaisen" },
    { code: "MIX342", content: "Even a dull blade reflects the sun.", content_id: "Bilah tumpul pun memantulkan matahari.", credit: "Roronoa Zoro, One Piece" },
    { code: "MIX343", content: "Loss teaches the grammar of hope.", content_id: "Kehilangan mengajarkan tata bahasa harapan.", credit: "Violet Evergarden, Violet Evergarden" },
    { code: "MIX344", content: "A real teammate makes you louder inside your head.", content_id: "Rekan sejati membuatmu lebih lantang di dalam kepala.", credit: "Bokuto Koutarou, Haikyuu!!" },
    { code: "MIX345", content: "Running away is training for coming back.", content_id: "Melarikan diri adalah latihan untuk kembali.", credit: "Shinji Ikari, Neon Genesis Evangelion" },
    { code: "MIX346", content: "Steel your heart; the rest will follow.", content_id: "Kuatkan hatimu; sisanya akan mengikuti.", credit: "Mikasa Ackerman, Attack on Titan" },
    { code: "MIX347", content: "A detective doubts their favorite answer first.", content_id: "Detektif meragukan jawaban favoritnya terlebih dahulu.", credit: "Conan Edogawa, Detective Conan" },
    { code: "MIX348", content: "If you can't find the path, be the landmark.", content_id: "Jika tak menemukan jalan, jadilah penanda.", credit: "Kino, Kino no Tabi" },
    { code: "MIX349", content: "We don't defeat darkness; we outshine it.", content_id: "Kita tidak mengalahkan kegelapan; kita mengatasinya dengan sinar.", credit: "Tanjiro Kamado, Demon Slayer" },
    { code: "MIX350", content: "Dreams need rent—pay with sweat.", content_id: "Mimpi butuh uang sewa—bayarlah dengan keringat.", credit: "Hinata Shoyo, Haikyuu!!" },
    { code: "MIX351", content: "A scar is proof that the wound had the courage to heal.", content_id: "Luka adalah bukti bahwa luka itu berani untuk sembuh.", credit: "Nami, One Piece" },
    { code: "MIX352", content: "A captain never abandons the sea that shaped him.", content_id: "Seorang kapten tidak pernah meninggalkan lautan yang membentuknya.", credit: "Shanks, One Piece" },
    { code: "MIX353", content: "The strongest chains are the ones we choose to carry.", content_id: "Rantai terkuat adalah rantai yang kita pilih untuk bawa.", credit: "Nico Robin, One Piece" },
    { code: "MIX354", content: "A dream is not smaller because the world laughs at it.", content_id: "Mimpi tidak menjadi lebih kecil hanya karena dunia menertawakannya.", credit: "Usopp, One Piece" },
    { code: "MIX355", content: "The sea remembers every promise made beneath the sky.", content_id: "Laut mengingat setiap janji yang dibuat di bawah langit.", credit: "Jinbe, One Piece" },
    { code: "MIX356", content: "A ninja's path is written one stubborn step at a time.", content_id: "Jalan seorang ninja ditulis melalui langkah-langkah keras kepala.", credit: "Rock Lee, Naruto" },
    { code: "MIX357", content: "Loneliness becomes lighter when someone chooses to sit beside you.", content_id: "Kesepian menjadi lebih ringan ketika seseorang memilih duduk di sampingmu.", credit: "Gaara, Naruto" },
    { code: "MIX358", content: "The village grows stronger when its children protect one another.", content_id: "Desa menjadi lebih kuat ketika anak-anaknya saling melindungi.", credit: "Kakashi Hatake, Naruto" },
    { code: "MIX359", content: "A promise can outlive the person who made it.", content_id: "Sebuah janji dapat hidup lebih lama daripada orang yang mengucapkannya.", credit: "Minato Namikaze, Naruto" },
    { code: "MIX360", content: "Even a broken path can lead you back to the people you love.", content_id: "Bahkan jalan yang rusak dapat membawamu kembali kepada orang-orang yang kau cintai.", credit: "Jiraiya, Naruto" },
    { code: "MIX361", content: "A shinigami's blade is only as honest as its heart.", content_id: "Pedang seorang shinigami hanya setulus hatinya.", credit: "Byakuya Kuchiki, Bleach" },
    { code: "MIX362", content: "The fear of losing someone can teach you how to stand.", content_id: "Rasa takut kehilangan seseorang dapat mengajarimu cara berdiri.", credit: "Rukia Kuchiki, Bleach" },
    { code: "MIX363", content: "A name becomes powerful when someone gives it meaning.", content_id: "Sebuah nama menjadi kuat ketika seseorang memberinya makna.", credit: "Ichigo Kurosaki, Bleach" },
    { code: "MIX364", content: "No soul walks through darkness without leaving a trace of light.", content_id: "Tak ada jiwa yang melewati kegelapan tanpa meninggalkan jejak cahaya.", credit: "Urahara Kisuke, Bleach" },
    { code: "MIX365", content: "The heart is not weak because it chooses to forgive.", content_id: "Hati tidak lemah karena memilih untuk memaafkan.", credit: "Orihime Inoue, Bleach" },
    { code: "MIX366", content: "Alchemy begins with wonder and ends with responsibility.", content_id: "Alkimia dimulai dari rasa ingin tahu dan berakhir pada tanggung jawab.", credit: "Alphonse Elric, Fullmetal Alchemist: Brotherhood" },
    { code: "MIX367", content: "A country is rebuilt by hands that refuse to stay clean.", content_id: "Sebuah negeri dibangun kembali oleh tangan-tangan yang menolak tetap bersih.", credit: "Roy Mustang, Fullmetal Alchemist: Brotherhood" },
    { code: "MIX368", content: "A human life cannot be measured by what it can produce.", content_id: "Kehidupan manusia tidak dapat diukur dari apa yang bisa dihasilkannya.", credit: "Winry Rockbell, Fullmetal Alchemist: Brotherhood" },
    { code: "MIX369", content: "Regret is useful only when it becomes a promise to do better.", content_id: "Penyesalan hanya berguna jika berubah menjadi janji untuk menjadi lebih baik.", credit: "Riza Hawkeye, Fullmetal Alchemist: Brotherhood" },
    { code: "MIX370", content: "Equivalent exchange begins when we admit what we have taken.", content_id: "Pertukaran setara dimulai ketika kita mengakui apa yang telah kita ambil.", credit: "Edward Elric, Fullmetal Alchemist: Brotherhood" },
    { code: "MIX371", content: "A hero is someone who makes room for another person's hope.", content_id: "Pahlawan adalah seseorang yang memberi ruang bagi harapan orang lain.", credit: "All Might, My Hero Academia" },
    { code: "MIX372", content: "Small acts of courage can become a city's shield.", content_id: "Tindakan keberanian kecil dapat menjadi perisai sebuah kota.", credit: "Deku, My Hero Academia" },
    { code: "MIX373", content: "Strength without kindness is only another kind of weakness.", content_id: "Kekuatan tanpa kebaikan hanyalah bentuk kelemahan lainnya.", credit: "Ochaco Uraraka, My Hero Academia" },
    { code: "MIX374", content: "A rival can be the mirror that shows your unfinished work.", content_id: "Rival dapat menjadi cermin yang menunjukkan pekerjaanmu yang belum selesai.", credit: "Katsuki Bakugo, My Hero Academia" },
    { code: "MIX375", content: "A teacher's greatest victory is a student who surpasses them.", content_id: "Kemenangan terbesar seorang guru adalah murid yang melampauinya.", credit: "Shota Aizawa, My Hero Academia" },
    { code: "MIX376", content: "A volleyball falls only to rise from another pair of hands.", content_id: "Bola voli jatuh hanya untuk bangkit dari tangan yang lain.", credit: "Tobio Kageyama, Haikyuu!!" },
    { code: "MIX377", content: "Talent is a door; discipline decides whether you walk through it.", content_id: "Bakat adalah pintu; disiplin menentukan apakah kau melewatinya.", credit: "Kei Tsukishima, Haikyuu!!" },
    { code: "MIX378", content: "The best point is the one everyone believes they can still save.", content_id: "Poin terbaik adalah poin yang masih dipercaya semua orang bisa diselamatkan.", credit: "Daichi Sawamura, Haikyuu!!" },
    { code: "MIX379", content: "A team is not the loudest voice; it is the shared rhythm.", content_id: "Sebuah tim bukanlah suara paling lantang; melainkan irama yang dibagi bersama.", credit: "Koushi Sugawara, Haikyuu!!" },
    { code: "MIX380", content: "The court has no memory of yesterday's applause.", content_id: "Lapangan tidak menyimpan kenangan tepuk tangan kemarin.", credit: "Toru Oikawa, Haikyuu!!" },
    { code: "MIX381", content: "A melody can carry a goodbye farther than words.", content_id: "Melodi dapat membawa perpisahan lebih jauh daripada kata-kata.", credit: "Kaori Miyazono, Your Lie in April" },
    { code: "MIX382", content: "The notes we miss are still part of the song.", content_id: "Nada yang kita lewatkan tetap menjadi bagian dari lagu.", credit: "Kousei Arima, Your Lie in April" },
    { code: "MIX383", content: "Memory is a room where the people we love keep breathing.", content_id: "Ingatan adalah ruangan tempat orang-orang yang kita cintai terus bernapas.", credit: "Violet Evergarden, Violet Evergarden" },
    { code: "MIX384", content: "A letter can say what a frightened heart cannot.", content_id: "Surat dapat mengucapkan hal-hal yang tidak mampu dikatakan hati yang ketakutan.", credit: "Violet Evergarden, Violet Evergarden" },
    { code: "MIX385", content: "Love is not always a destination; sometimes it is the road home.", content_id: "Cinta tidak selalu menjadi tujuan; terkadang ia adalah jalan pulang.", credit: "Violet Evergarden, Violet Evergarden" },
    { code: "MIX386", content: "A quiet room can hold an entire universe of feelings.", content_id: "Ruangan yang sunyi dapat menyimpan seluruh semesta perasaan.", credit: "Sakuta Azusagawa, Rascal Does Not Dream of Bunny Girl Senpai" },
    { code: "MIX387", content: "Being understood is sometimes the bravest kind of comfort.", content_id: "Dipahami terkadang merupakan bentuk kenyamanan yang paling berani.", credit: "Mai Sakurajima, Rascal Does Not Dream of Bunny Girl Senpai" },
    { code: "MIX388", content: "The future is frightening because it has not met us yet.", content_id: "Masa depan menakutkan karena belum pernah bertemu dengan kita.", credit: "Homura Akemi, Puella Magi Madoka Magica" },
    { code: "MIX389", content: "A wish becomes dangerous when it forgets the price of a miracle.", content_id: "Sebuah harapan menjadi berbahaya ketika melupakan harga sebuah keajaiban.", credit: "Madoka Kaname, Puella Magi Madoka Magica" },
    { code: "MIX390", content: "The world can change when one person refuses to give up on another.", content_id: "Dunia dapat berubah ketika seseorang menolak menyerah pada orang lain.", credit: "Madoka Kaname, Puella Magi Madoka Magica" },
    { code: "MIX391", content: "A monster is not born from a face, but from a choice.", content_id: "Monster tidak lahir dari wajah, melainkan dari pilihan.", credit: "Kenzo Tenma, Monster" },
    { code: "MIX392", content: "The darkest room still has a door, if you keep searching.", content_id: "Ruangan tergelap pun masih memiliki pintu jika kau terus mencari.", credit: "Kenzo Tenma, Monster" },
    { code: "MIX393", content: "A name can be erased, but a consequence remembers.", content_id: "Sebuah nama dapat dihapus, tetapi akibat tetap mengingatnya.", credit: "Johan Liebert, Monster" },
    { code: "MIX394", content: "To protect a dream, sometimes you must wake up.", content_id: "Untuk melindungi mimpi, terkadang kau harus terbangun.", credit: "Gintoki Sakata, Gintama" },
    { code: "MIX395", content: "A lazy day can still contain a serious reason to smile.", content_id: "Hari yang malas tetap dapat memiliki alasan serius untuk tersenyum.", credit: "Gintoki Sakata, Gintama" },
    { code: "MIX396", content: "A samurai protects the ordinary moments that make life worth living.", content_id: "Seorang samurai melindungi momen-momen biasa yang membuat hidup layak dijalani.", credit: "Kenshin Himura, Rurouni Kenshin" },
    { code: "MIX397", content: "The sword is only a tool; the hand decides its meaning.", content_id: "Pedang hanyalah alat; tanganlah yang menentukan maknanya.", credit: "Kenshin Himura, Rurouni Kenshin" },
    { code: "MIX398", content: "Even a small village can shelter a very large dream.", content_id: "Bahkan desa kecil dapat menaungi impian yang sangat besar.", credit: "Ash Ketchum, Pokémon" },
    { code: "MIX399", content: "The journey matters because no friend walks it exactly like you.", content_id: "Perjalanan berarti karena tidak ada teman yang menempuhnya persis sepertimu.", credit: "Ash Ketchum, Pokémon" },
    { code: "MIX400", content: "A new world begins whenever curiosity defeats fear.", content_id: "Dunia baru dimulai ketika rasa ingin tahu mengalahkan rasa takut.", credit: "Frieren, Frieren: Beyond Journey's End" },
];

export default animeMangaQuotes;