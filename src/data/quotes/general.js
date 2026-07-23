const generalQuotes = [
    // done translating chatgpt
    {
        code: "AE01",
        content: "Imagination is more important than knowledge.",
        content_id: "Imajinasi lebih penting daripada pengetahuan.",
        credit: "Albert Einstein",
    },
    {
        code: "AE02",
        content:
            "Life is like riding a bicycle. To keep your balance you must keep moving.",
        content_id:
            "Hidup itu seperti mengendarai sepeda. Untuk menjaga keseimbangan, kamu harus terus bergerak.",
        credit: "Albert Einstein",
    },
    {
        code: "SH01",
        content: "Remember to look up at the stars and not down at your feet.",
        content_id:
            "Ingatlah untuk melihat ke atas bintang-bintang dan bukan ke bawah ke kakimu.",
        credit: "Stephen Hawking",
    },
    {
        code: "SH02",
        content:
            "However difficult life may seem, there is always something you can do and succeed at.",
        content_id:
            "Sesulit apa pun hidup kelihatannya, selalu ada sesuatu yang bisa kamu lakukan dan berhasil.",
        credit: "Stephen Hawking",
    },
    {
        code: "MLK01",
        content: "Injustice anywhere is a threat to justice everywhere.",
        content_id:
            "Ketidakadilan di mana pun merupakan ancaman bagi keadilan di mana pun.",
        credit: "Martin Luther King Jr.",
    },
    {
        code: "MLK02",
        content: "The time is always right to do what is right.",
        content_id: "Waktu selalu tepat untuk melakukan apa yang benar.",
        credit: "Martin Luther King Jr.",
    },
    {
        code: "RM01",
        content:
            "Let yourself be silently drawn by the strange pull of what you really love.",
        content_id:
            "Biarkan dirimu diam-diam ditarik oleh tarikan aneh dari apa yang benar-benar kamu cintai.",
        credit: "Rumi",
    },
    {
        code: "RM02",
        content: "The wound is the place where the Light enters you.",
        content_id: "Luka adalah tempat Cahaya memasukimu.",
        credit: "Rumi",
    },
    {
        code: "MG01",
        content:
            "The best way to find yourself is to lose yourself in the service of others.",
        content_id:
            "Cara terbaik untuk menemukan dirimu adalah dengan kehilangan dirimu dalam melayani orang lain.",
        credit: "Mahatma Gandhi",
    },
    {
        code: "MG02",
        content:
            "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        content_id:
            "Hiduplah seolah engkau akan mati besok. Belajarlah seolah engkau akan hidup selamanya.",
        credit: "Mahatma Gandhi",
    },
    {
        code: "CS01",
        content:
            "You are never too old to set another goal or to dream a new dream.",
        content_id:
            "Kamu tidak pernah terlalu tua untuk menetapkan tujuan lain atau memimpikan mimpi baru.",
        credit: "C.S. Lewis",
    },
    {
        code: "CS02",
        content:
            "Hardships often prepare ordinary people for an extraordinary destiny.",
        content_id:
            "Kesulitan sering kali mempersiapkan orang biasa untuk takdir yang luar biasa.",
        credit: "C.S. Lewis",
    },
    {
        code: "BF01",
        content:
            "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        content_id:
            "Beritahu aku dan aku lupa. Ajari aku dan aku ingat. Libatkan aku dan aku belajar.",
        credit: "Benjamin Franklin",
    },
    {
        code: "BF02",
        content: "An investment in knowledge pays the best interest.",
        content_id: "Investasi dalam pengetahuan memberikan hasil terbaik.",
        credit: "Benjamin Franklin",
    },
    {
        code: "OS01",
        content: "Be yourself; everyone else is already taken.",
        content_id: "Jadilah dirimu sendiri; yang lain sudah diambil.",
        credit: "Oscar Wilde",
    },
    {
        code: "OS02",
        content:
            "To live is the rarest thing in the world. Most people exist, that is all.",
        content_id:
            "Untuk hidup adalah hal yang paling langka di dunia. Kebanyakan orang hanya ada, itu saja.",
        credit: "Oscar Wilde",
    },
    {
        code: "EM01",
        content:
            "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        content_id:
            "Jangan pergi ke mana jalan mungkin mengarah, pergilah ke tempat yang tidak ada jalan dan tinggalkan jejak.",
        credit: "Ralph Waldo Emerson",
    },
    {
        code: "EM02",
        content:
            "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        content_id:
            "Apa yang ada di belakang kita dan apa yang ada di depan kita adalah hal-hal kecil dibandingkan dengan apa yang ada di dalam diri kita.",
        credit: "Ralph Waldo Emerson",
    },
    {
        code: "TW01",
        content: "The secret of getting ahead is getting started.",
        content_id: "Rahasia untuk maju adalah memulai.",
        credit: "Mark Twain",
    },
    {
        code: "TW02",
        content:
            "Courage is resistance to fear, mastery of fear—not absence of fear.",
        content_id:
            "Keberanian adalah perlawanan terhadap rasa takut, penguasaan rasa takut—bukan ketiadaan rasa takut.",
        credit: "Mark Twain",
    },
    {
        code: "JKR01",
        content:
            "It is our choices that show what we truly are, far more than our abilities.",
        content_id:
            "Pilihan kita yang menunjukkan siapa kita sebenarnya, jauh lebih banyak daripada kemampuan kita.",
        credit: "J.K. Rowling",
    },
    {
        code: "JKR02",
        content:
            "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
        content_id:
            "Kebahagiaan dapat ditemukan bahkan di saat-saat tergelap, jika seseorang hanya ingat untuk menyalakan cahaya.",
        credit: "J.K. Rowling",
    },
    {
        code: "NS01",
        content: "The cosmos is within us. We are made of star-stuff.",
        content_id:
            "Kosmos ada di dalam diri kita. Kita terbuat dari materi bintang.",
        credit: "Carl Sagan",
    },
    {
        code: "NS02",
        content: "We are a way for the cosmos to know itself.",
        content_id: "Kita adalah cara bagi kosmos untuk mengenal dirinya sendiri.",
        credit: "Carl Sagan",
    },
    {
        code: "SC01",
        content: "The unexamined life is not worth living.",
        content_id: "Kehidupan yang tidak teruji tidak layak dijalani.",
        credit: "Socrates",
    },
    {
        code: "SC02",
        content:
            "I know that I am intelligent, because I know that I know nothing.",
        content_id:
            "Saya tahu bahwa saya cerdas, karena saya tahu bahwa saya tidak tahu apa-apa.",
        credit: "Socrates",
    },
    {
        code: "AP01",
        content:
            "Wise men speak because they have something to say; fools because they have to say something.",
        content_id:
            "Orang bijak berbicara karena mereka punya sesuatu untuk dikatakan; orang bodoh karena mereka harus mengatakan sesuatu.",
        credit: "Plato",
    },
    {
        code: "AP02",
        content: "Courage is knowing what not to fear.",
        content_id: "Keberanian adalah mengetahui apa yang tidak perlu ditakuti.",
        credit: "Plato",
    },
    {
        code: "EMH01",
        content: "The only way to do great work is to love what you do.",
        content_id:
            "Satu-satunya cara untuk melakukan pekerjaan hebat adalah mencintai apa yang kamu lakukan.",
        credit: "Steve Jobs",
    },
    {
        code: "EMH02",
        content:
            "Your time is limited, so don't waste it living someone else's life.",
        content_id:
            "Waktumu terbatas, jadi jangan sia-siakan dengan menjalani hidup orang lain.",
        credit: "Steve Jobs",
    },
    {
        code: "NGT01",
        content:
            "The good thing about science is that it's true whether or not you believe in it.",
        content_id:
            "Hal baik tentang sains adalah itu benar terlepas dari apakah kamu memercayainya atau tidak.",
        credit: "Neil deGrasse Tyson",
    },
    {
        code: "NGT02",
        content:
            "For me, I am driven by two main philosophies: know more today about the world than I knew yesterday and lessen the suffering of others.",
        content_id:
            "Bagi saya, saya didorong oleh dua filosofi utama: mengetahui lebih banyak tentang dunia hari ini daripada yang saya tahu kemarin dan mengurangi penderitaan orang lain.",
        credit: "Neil deGrasse Tyson",
    },
    {
        code: "RM03",
        content: "Don't grieve. Anything you lose comes round in another form.",
        content_id:
            "Jangan bersedih. Apa pun yang hilang darimu akan kembali dalam bentuk lain.",
        credit: "Rumi",
    },
    {
        code: "RM04",
        content:
            "Try not to resist the changes that come your way. Instead, let life live through you.",
        content_id:
            "Cobalah untuk tidak menolak perubahan yang datang menghampirimu. Sebaliknya, biarkan kehidupan mengalir melaluimu.",
        credit: "Rumi",
    },
    {
        code: "NS03",
        content: "Somewhere, something incredible is waiting to be known.",
        content_id:
            "Di suatu tempat, sesuatu yang luar biasa sedang menunggu untuk diketahui.",
        credit: "Carl Sagan",
    },
    {
        code: "NS04",
        content:
            "We are like butterflies who flutter for a day and think it is forever.",
        content_id:
            "Kita seperti kupu-kupu yang terbang sebentar dan mengira itu selamanya.",
        credit: "Carl Sagan",
    },
    {
        code: "SC03",
        content: "True knowledge exists in knowing that you know nothing.",
        content_id:
            "Pengetahuan sejati ada dalam mengetahui bahwa kamu tidak tahu apa-apa.",
        credit: "Socrates",
    },
    {
        code: "SC04",
        content: "The only true wisdom is in knowing you know nothing.",
        content_id:
            "Satu-satunya kebijaksanaan sejati adalah dalam mengetahui bahwa kamu tidak tahu apa-apa.",
        credit: "Socrates",
    },
    {
        code: "LT01",
        content: "A journey of a thousand miles begins with a single step.",
        content_id: "Perjalanan seribu mil dimulai dengan satu langkah.",
        credit: "Lao Tzu",
    },
    {
        code: "LT02",
        content: "When I let go of what I am, I become what I might be.",
        content_id:
            "Saat aku melepaskan diriku yang sekarang, aku menjadi seperti yang seharusnya.",
        credit: "Lao Tzu",
    },
    {
        code: "LT03",
        content: "Knowing others is intelligence; knowing yourself is true wisdom.",
        content_id:
            "Mengetahui orang lain adalah kecerdasan; mengetahui diri sendiri adalah kebijaksanaan sejati.",
        credit: "Lao Tzu",
    },
    {
        code: "LT04",
        content:
            "He who conquers others is strong; he who conquers himself is mighty.",
        content_id:
            "Dia yang menaklukkan orang lain kuat; dia yang menaklukkan dirinya sendiri sangat kuat.",
        credit: "Lao Tzu",
    },
    {
        code: "LT05",
        content: "Mastering others is strength. Mastering yourself is true power.",
        content_id:
            "Menguasai orang lain adalah kekuatan. Menguasai diri sendiri adalah kekuatan sejati.",
        credit: "Lao Tzu",
    },
    {
        code: "LT06",
        content: "Silence is a source of great strength.",
        content_id: "Keheningan adalah sumber kekuatan besar.",
        credit: "Lao Tzu",
    },
    {
        code: "LT07",
        content: "The best fighter is never angry.",
        content_id: "Petarung terbaik tidak pernah marah.",
        credit: "Lao Tzu",
    },
    {
        code: "LT08",
        content:
            "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
        content_id:
            "Dicintai seseorang dengan mendalam memberi kekuatan, mencintai seseorang dengan mendalam memberi keberanian.",
        credit: "Lao Tzu",
    },
    {
        code: "LT09",
        content: "Nature does not hurry, yet everything is accomplished.",
        content_id: "Alam tidak terburu-buru, namun semuanya tercapai.",
        credit: "Lao Tzu",
    },
    {
        code: "LT10",
        content: "To the mind that is still, the whole universe surrenders.",
        content_id: "Bagi pikiran yang tenang, seluruh alam semesta menyerah.",
        credit: "Lao Tzu",
    },
    {
        code: "LT11",
        content: "Those who know do not speak. Those who speak do not know.",
        content_id:
            "Mereka yang tahu tidak berbicara. Mereka yang berbicara tidak tahu.",
        credit: "Lao Tzu",
    },
    {
        code: "LT12",
        content:
            "Care about what other people think and you will always be their prisoner.",
        content_id:
            "Peduli pada apa yang dipikirkan orang lain dan kamu akan selalu menjadi tawanan mereka.",
        credit: "Lao Tzu",
    },
    {
        code: "LT13",
        content: "He who knows that enough is enough will always have enough.",
        content_id: "Dia yang tahu bahwa cukup adalah cukup, akan selalu cukup.",
        credit: "Lao Tzu",
    },
    {
        code: "LT14",
        content: "New beginnings are often disguised as painful endings.",
        content_id:
            "Awal yang baru sering kali tersamar sebagai akhir yang menyakitkan.",
        credit: "Lao Tzu",
    },
    {
        code: "LT15",
        content:
            "Simplicity, patience, compassion. These three are your greatest treasures.",
        content_id:
            "Kesederhanaan, kesabaran, kasih sayang. Ketiga hal ini adalah harta terbesarmu.",
        credit: "Lao Tzu",
    },
    {
        code: "LT16",
        content: "Act without expectation.",
        content_id: "Bertindaklah tanpa harapan.",
        credit: "Lao Tzu",
    },
    {
        code: "LT17",
        content:
            "A good traveler has no fixed plans and is not intent on arriving.",
        content_id:
            "Pengelana yang baik tidak memiliki rencana tetap dan tidak berniat untuk sampai.",
        credit: "Lao Tzu",
    },
    {
        code: "LT18",
        content: "Stop thinking, and end your problems.",
        content_id: "Berhentilah berpikir, dan akhiri masalahmu.",
        credit: "Lao Tzu",
    },
    {
        code: "LT19",
        content: "Respond intelligently even to unintelligent treatment.",
        content_id:
            "Tanggapi dengan cerdas bahkan perlakuan yang tidak cerdas sekalipun.",
        credit: "Lao Tzu",
    },
    {
        code: "LT20",
        content:
            "To attain knowledge, add things every day. To attain wisdom, remove things every day.",
        content_id:
            "Untuk mencapai pengetahuan, tambahkan hal setiap hari. Untuk mencapai kebijaksanaan, kurangi hal setiap hari.",
        credit: "Lao Tzu",
    },
    {
        code: "Q001",
        content: "Be yourself; everyone else is already taken.",
        content_id: "Jadilah dirimu sendiri; semua orang lain sudah diambil.",
        credit: "Oscar Wilde",
    },
    {
        code: "Q002",
        content:
            "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        content_id:
            "Dua hal tidak terbatas: alam semesta dan kebodohan manusia; dan aku tidak yakin tentang alam semesta.",
        credit: "Albert Einstein",
    },
    {
        code: "Q003",
        content:
            "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        content_id:
            "Kegelapan tidak bisa mengusir kegelapan: hanya cahaya yang bisa melakukan itu. Kebencian tidak bisa mengusir kebencian: hanya cinta yang bisa melakukan itu.",
        credit: "Martin Luther King Jr.",
    },
    {
        code: "Q004",
        content:
            "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        content_id:
            "Hiduplah seolah-olah kamu akan mati besok. Belajarlah seolah-olah kamu akan hidup selamanya.",
        credit: "Mahatma Gandhi",
    },
    {
        code: "Q005",
        content: "Without music, life would be a mistake.",
        content_id: "Tanpa musik, hidup akan menjadi kesalahan.",
        credit: "Friedrich Nietzsche",
    },
    {
        code: "Q006",
        content:
            "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        content_id:
            "Menjadi dirimu sendiri di dunia yang terus berusaha membuatmu menjadi sesuatu yang lain adalah pencapaian terbesar.",
        credit: "Ralph Waldo Emerson",
    },
    {
        code: "Q007",
        content:
            "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        content_id:
            "Aku egois, tidak sabaran dan sedikit tidak aman. Aku membuat kesalahan, aku di luar kendali dan terkadang sulit untuk dihadapi. Tapi jika kamu tidak bisa menanganiku saat terburukku, maka kamu pasti tidak pantas mendapatkanku saat terbaikku.",
        credit: "Marilyn Monroe",
    },
    {
        code: "Q008",
        content:
            "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        content_id:
            "Kamu tahu kamu sedang jatuh cinta ketika kamu tidak bisa tidur karena kenyataan akhirnya lebih baik dari mimpimu.",
        credit: "Dr. Seuss",
    },
    {
        code: "Q009",
        content: "So many books, so little time.",
        content_id: "Begitu banyak buku, begitu sedikit waktu.",
        credit: "Frank Zappa",
    },
    {
        code: "Q010",
        content: "A friend is someone who knows all about you and still loves you.",
        content_id:
            "Seorang teman adalah seseorang yang tahu segala sesuatu tentangmu dan tetap mencintaimu.",
        credit: "Elbert Hubbard",
    },
    {
        code: "Q011",
        content:
            "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        content_id:
            "Ada hanya dua cara untuk menjalani hidupmu. Satu adalah seolah-olah tidak ada yang merupakan keajaiban. Yang lainnya adalah seolah-olah segala sesuatu adalah keajaiban.",
        credit: "Albert Einstein",
    },
    {
        code: "Q012",
        content:
            "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        content_id:
            "Jika kamu ingin tahu seperti apa seorang pria, lihatlah bagaimana dia memperlakukan orang yang lebih rendah darinya, bukan teman sebandingnya.",
        credit: "J.K. Rowling",
    },
    {
        code: "Q013",
        content:
            "There is no greater agony than bearing an untold story inside you.",
        content_id:
            "Tidak ada penderitaan yang lebih besar daripada menanggung cerita yang tak terungkap di dalam dirimu.",
        credit: "Maya Angelou",
    },
    {
        code: "Q014",
        content: "Always forgive your enemies; nothing annoys them so much.",
        content_id:
            "Selalu maafkan musuhmu; tidak ada yang mengganggu mereka sebanyak itu.",
        credit: "Oscar Wilde",
    },
    {
        code: "Q015",
        content: "Everything you can imagine is real.",
        content_id: "Segala sesuatu yang bisa kamu bayangkan adalah nyata.",
        credit: "Pablo Picasso",
    },
    {
        code: "Q016",
        content:
            "A mind that is stretched by a new experience can never go back to its old dimensions.",
        content_id:
            "Pikiran yang terbentang oleh pengalaman baru tidak akan pernah kembali ke dimensi lamanya.",
        credit: "Oliver Wendell Holmes Jr.",
    },
    {
        code: "Q017",
        content: "The only true journey is the one within.",
        content_id:
            "Perjalanan sejati satu-satunya adalah perjalanan ke dalam diri sendiri.",
        credit: "Rainer Maria Rilke",
    },
    {
        code: "Q018",
        content:
            "The only thing worse than being talked about is not being talked about.",
        content_id:
            "Satu-satunya hal yang lebih buruk daripada dibicarakan adalah tidak dibicarakan.",
        credit: "Oscar Wilde",
    },
    {
        code: "Q019",
        content:
            "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
        content_id:
            "Ketika satu pintu kebahagiaan tertutup, pintu lainnya terbuka; namun sering kali kita terlalu lama melihat pintu yang tertutup hingga tidak melihat pintu yang sudah dibuka untuk kita.",
        credit: "Helen Keller",
    },
    {
        code: "Q020",
        content: "No one can make you feel inferior without your consent.",
        content_id:
            "Tidak ada yang bisa membuatmu merasa lebih rendah tanpa persetujuanmu.",
        credit: "Eleanor Roosevelt",
    },
    {
        code: "Q021",
        content:
            "Life isn't about finding yourself. Life is about creating yourself.",
        content_id:
            "Hidup bukanlah tentang menemukan dirimu. Hidup adalah tentang menciptakan dirimu.",
        credit: "George Bernard Shaw",
    },
    {
        code: "Q022",
        content: "The things you own end up owning you.",
        content_id: "Hal-hal yang kamu miliki akhirnya akan menguasaimu.",
        credit: "Chuck Palahniuk",
    },
    {
        code: "Q023",
        content: "Stories are how we fix the brokenness of life.",
        content_id: "Cerita adalah cara kita memperbaiki kerusakan dalam hidup.",
        credit: "Luis Alberto Urrea",
    },
    {
        code: "Q024",
        content:
            "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
        content_id:
            "Jika ada buku yang ingin kamu baca, tetapi belum ditulis, maka kamu harus menulisnya.",
        credit: "Toni Morrison",
    },
    {
        code: "Q025",
        content:
            "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        content_id:
            "Kita adalah apa yang kita lakukan berulang kali. Oleh karena itu, keunggulan bukanlah sebuah tindakan, melainkan sebuah kebiasaan.",
        credit: "Aristotle",
    },
    {
        code: "Q026",
        content: "Live boldly. Push yourself. Don't settle.",
        content_id: "Hiduplah dengan berani. Dorong dirimu sendiri. Jangan puas.",
        credit: "Jojo Moyes",
    },
    {
        code: "Q027",
        content: "The only way to do great work is to love what you do.",
        content_id:
            "Satu-satunya cara untuk melakukan pekerjaan hebat adalah dengan mencintai apa yang kamu lakukan.",
        credit: "Steve Jobs",
    },
    {
        code: "Q028",
        content:
            "The sun himself is weak when he first rises, and gathers strength and courage as the day gets on.",
        content_id:
            "Matahari sendiri lemah ketika pertama kali terbit, dan mengumpulkan kekuatan serta keberanian seiring berjalannya hari.",
        credit: "Charles Dickens",
    },
    {
        code: "Q029",
        content: "Don't cry because it's over, smile because it happened.",
        content_id:
            "Jangan menangis karena sudah berakhir, tersenyumlah karena itu terjadi.",
        credit: "Dr. Seuss",
    },
    {
        code: "Q030",
        content: "The journey of a thousand miles begins with a single step.",
        content_id: "Perjalanan seribu mil dimulai dengan satu langkah.",
        credit: "Lao Tzu",
    },
    {
        code: "Q031",
        content:
            "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
        content_id:
            "Tantangan adalah yang membuat hidup menarik dan mengatasinya adalah yang membuat hidup bermakna.",
        credit: "Joshua J. Marine",
    },
    {
        code: "Q032",
        content:
            "Love is that condition in which the happiness of another person is essential to your own.",
        content_id:
            "Cinta adalah keadaan di mana kebahagiaan orang lain sangat penting bagi kebahagiaanmu.",
        credit: "Robert A. Heinlein",
    },
    {
        code: "Q033",
        content: "Time you enjoy wasting is not wasted time.",
        content_id:
            "Waktu yang kamu nikmati dengan menyia-nyiakannya bukanlah waktu yang sia-sia.",
        credit: "Marthe Troly-Curtin",
    },
    {
        code: "Q034",
        content:
            "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.",
        content_id:
            "Hal terbaik dan terindah di dunia ini tidak bisa dilihat atau didengar, tetapi harus dirasakan dengan hati.",
        credit: "Helen Keller",
    },
    {
        code: "Q035",
        content: "The best way to predict the future is to create it.",
        content_id:
            "Cara terbaik untuk memprediksi masa depan adalah dengan menciptakannya.",
        credit: "Abraham Lincoln",
    },
    {
        code: "Q036",
        content: "A person who never made a mistake never tried anything new.",
        content_id:
            "Seseorang yang tidak pernah membuat kesalahan tidak pernah mencoba hal baru.",
        credit: "Albert Einstein",
    },
    {
        code: "Q037",
        content:
            "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        content_id:
            "Kita adalah apa yang kita lakukan berulang kali. Maka, keunggulan bukanlah tindakan, tetapi kebiasaan.",
        credit: "Aristotle",
    },
    {
        code: "Q038",
        content: "Do what you can, with what you have, where you are.",
        content_id:
            "Lakukan apa yang kamu bisa, dengan apa yang kamu punya, di tempat kamu berada.",
        credit: "Theodore Roosevelt",
    },
    {
        code: "Q039",
        content:
            "Life isn't about finding yourself. Life is about creating yourself.",
        content_id:
            "Hidup bukan tentang menemukan dirimu. Hidup adalah tentang menciptakan dirimu.",
        credit: "George Bernard Shaw",
    },
    {
        code: "Q040",
        content: "The purpose of our lives is to be happy.",
        content_id: "Tujuan hidup kita adalah untuk bahagia.",
        credit: "Dalai Lama",
    },
    {
        code: "Q041",
        content: "In the middle of every difficulty lies opportunity.",
        content_id: "Di tengah setiap kesulitan ada peluang.",
        credit: "Albert Einstein",
    },
    {
        code: "Q042",
        content:
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        content_id:
            "Kesuksesan bukanlah akhir, kegagalan bukanlah kematian: Yang penting adalah keberanian untuk terus melangkah.",
        credit: "Winston Churchill",
    },
    {
        code: "Q043",
        content: "You miss 100% of the shots you don't take.",
        content_id: "Kamu melewatkan 100% peluang yang tidak kamu ambil.",
        credit: "Wayne Gretzky",
    },
    {
        code: "Q044",
        content: "Don't watch the clock; do what it does. Keep going.",
        content_id: "Jangan melihat jam; lakukan seperti jam. Terus bergerak.",
        credit: "Sam Levenson",
    },
    {
        code: "Q045",
        content: "Life is 10% what happens to us and 90% how we react to it.",
        content_id:
            "Hidup adalah 10% tentang apa yang terjadi pada kita dan 90% tentang bagaimana kita bereaksi terhadapnya.",
        credit: "Charles R. Swindoll",
    },
    {
        code: "Q046",
        content: "Only in the darkness can you see the stars.",
        content_id: "Hanya dalam kegelapan kamu bisa melihat bintang-bintang.",
        credit: "Martin Luther King Jr.",
    },
    {
        code: "Q047",
        content: "Act as if what you do makes a difference. It does.",
        content_id:
            "Bertindaklah seolah apa yang kamu lakukan membuat perbedaan. Itu memang membuat perbedaan.",
        credit: "William James",
    },
    {
        code: "Q048",
        content:
            "Success usually comes to those who are too busy to be looking for it.",
        content_id:
            "Kesuksesan biasanya datang kepada mereka yang terlalu sibuk untuk mencarinya.",
        credit: "Henry David Thoreau",
    },
    {
        code: "Q049",
        content:
            "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        content_id:
            "Jangan didorong oleh ketakutan dalam pikiranmu. Biarlah impian di hatimu yang memimpin.",
        credit: "Roy T. Bennett",
    },
    {
        code: "Q050",
        content:
            "If you want to fly, you have to give up the things that weigh you down.",
        content_id:
            "Jika kamu ingin terbang, kamu harus melepaskan hal-hal yang membebanimu.",
        credit: "Toni Morrison",
    },
    {
        code: "Q051",
        content:
            "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        content_id:
            "Orang bodoh mengira dirinya bijak, tetapi orang bijak tahu dirinya bodoh.",
        credit: "William Shakespeare",
    },
    {
        code: "Q052",
        content:
            "We are all in the gutter, but some of us are looking at the stars.",
        content_id:
            "Kita semua berada di selokan, tetapi beberapa dari kita melihat bintang-bintang.",
        credit: "Oscar Wilde",
    },
    {
        code: "Q053",
        content:
            "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
        content_id:
            "Dongeng itu lebih dari sekadar benar: bukan karena memberitahu kita bahwa naga itu ada, tetapi karena memberitahu kita bahwa naga bisa dikalahkan.",
        credit: "Neil Gaiman",
    },
    {
        code: "Q054",
        content:
            "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
        content_id:
            "Kemarin aku pintar, jadi aku ingin mengubah dunia. Hari ini aku bijak, jadi aku mengubah diriku sendiri.",
        credit: "Rumi",
    },
    {
        code: "Q055",
        content:
            "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
        content_id:
            "Bukan kurangnya cinta, tetapi kurangnya persahabatan yang membuat pernikahan tidak bahagia.",
        credit: "Friedrich Nietzsche",
    },
    {
        code: "Q056",
        content:
            "The only thing necessary for the triumph of evil is for good men to do nothing.",
        content_id:
            "Satu-satunya hal yang diperlukan agar kejahatan menang adalah orang baik tidak melakukan apa-apa.",
        credit: "Edmund Burke",
    },
    {
        code: "Q057",
        content:
            "To live is the rarest thing in the world. Most people exist, that is all.",
        content_id:
            "Hidup adalah hal paling langka di dunia. Kebanyakan orang hanya ada, itu saja.",
        credit: "Oscar Wilde",
    },
    {
        code: "Q058",
        content: "If you tell the truth, you don't have to remember anything.",
        content_id:
            "Jika kamu mengatakan yang sebenarnya, kamu tidak perlu mengingat apa pun.",
        credit: "Mark Twain",
    },
    {
        code: "Q059",
        content: "A room without books is like a body without a soul.",
        content_id: "Ruangan tanpa buku seperti tubuh tanpa jiwa.",
        credit: "Marcus Tullius Cicero",
    },
    {
        code: "Q060",
        content:
            "The man who does not read has no advantage over the man who cannot read.",
        content_id:
            "Orang yang tidak membaca tidak memiliki kelebihan dibandingkan orang yang tidak bisa membaca.",
        credit: "Mark Twain",
    },

    // next translate
    {
        code: "AP03",
        content: "The measure of a man is what he does with power.",
        content_id:
            "Ukuran seorang pria adalah apa yang dia lakukan dengan kekuasaan.",
        credit: "Plato",
    },
    {
        code: "AP04",
        content: "At the touch of love everyone becomes a poet.",
        content_id: "Sentuhan cinta membuat setiap orang menjadi penyair.",
        credit: "Plato",
    },
    {
        code: "JKR03",
        content: "It matters not what someone is born, but what they grow to be.",
        content_id:
            "Yang penting bukanlah seseorang dilahirkan sebagai apa, tetapi menjadi apa dia tumbuh.",
        credit: "J.K. Rowling",
    },
    {
        code: "JKR04",
        content:
            "We are only as strong as we are united, as weak as we are divided.",
        content_id: "Kita hanya sekuat kita bersatu, selemah kita terpecah belah.",
        credit: "J.K. Rowling",
    },
    {
        code: "OS03",
        content: "Experience is simply the name we give our mistakes.",
        content_id:
            "Pengalaman hanyalah nama yang kita berikan pada kesalahan kita.",
        credit: "Oscar Wilde",
    },
    {
        code: "OS04",
        content: "To love oneself is the beginning of a lifelong romance.",
        content_id: "Mencintai diri sendiri adalah awal dari romansa seumur hidup.",
        credit: "Oscar Wilde",
    },
    {
        code: "EM03",
        content:
            "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        content_id:
            "Menjadi dirimu sendiri di dunia yang terus-menerus mencoba menjadikanmu orang lain adalah pencapaian terbesar.",
        credit: "Ralph Waldo Emerson",
    },
    {
        code: "EM04",
        content:
            "The only person you are destined to become is the person you decide to be.",
        content_id:
            "Satu-satunya orang yang ditakdirkan menjadi dirimu adalah orang yang kamu putuskan untuk menjadi.",
        credit: "Ralph Waldo Emerson",
    },
    {
        code: "TW03",
        content:
            "Kindness is the language which the deaf can hear and the blind can see.",
        content_id:
            "Kebaikan adalah bahasa yang bisa didengar oleh orang tuli dan dilihat oleh orang buta.",
        credit: "Mark Twain",
    },
    {
        code: "TW04",
        content:
            "The best way to cheer yourself up is to try to cheer somebody else up.",
        content_id:
            "Cara terbaik untuk menghibur dirimu sendiri adalah dengan mencoba menghibur orang lain.",
        credit: "Mark Twain",
    },
    {
        code: "CS03",
        content:
            "You can't go back and change the beginning, but you can start where you are and change the ending.",
        content_id:
            "Kamu tidak bisa kembali dan mengubah permulaan, tetapi kamu bisa mulai dari posisimu sekarang dan mengubah akhirnya.",
        credit: "C.S. Lewis",
    },
    {
        code: "AE03",
        content:
            "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
        content_id:
            "Yang terpenting adalah jangan pernah berhenti bertanya. Keingintahuan punya alasan tersendiri untuk eksis.",
        credit: "Albert Einstein",
    },
    {
        code: "SH03",
        content: "We are all different, and that is what makes us unique.",
        content_id: "Kita semua berbeda, dan itulah yang membuat kita unik.",
        credit: "Stephen Hawking",
    },
    {
        code: "MLK03",
        content:
            "Faith is taking the first step even when you don't see the whole staircase.",
        content_id:
            "Iman adalah mengambil langkah pertama bahkan ketika kamu tidak melihat seluruh anak tangga.",
        credit: "Martin Luther King Jr.",
    },
    {
        code: "RM030",
        content:
            "Don't be satisfied with stories, how things have gone with others. Unfold your own myth.",
        content_id:
            "Jangan puas dengan cerita, bagaimana hal-hal telah berjalan dengan orang lain. Singkapkan mitosmu sendiri.",
        credit: "Rumi",
    },
    {
        code: "MG03",
        content: "In a gentle way, you can shake the world.",
        content_id: "Dengan cara yang lembut, kamu bisa mengguncang dunia.",
        credit: "Mahatma Gandhi",
    },
    {
        code: "CS03",
        content: "You can make anything by writing.",
        content_id: "Kamu bisa membuat apa saja dengan menulis.",
        credit: "C.S. Lewis",
    },
    {
        code: "BF05",
        content:
            "It takes many good deeds to build a good reputation, and only one bad one to lose it.",
        content_id:
            "Dibutuhkan banyak perbuatan baik untuk membangun reputasi yang baik, dan hanya satu perbuatan buruk untuk menghilangkannya.",
        credit: "Benjamin Franklin",
    },
    {
        code: "OS05",
        content: "Life is too important to be taken seriously.",
        content_id: "Hidup terlalu penting untuk dianggap serius.",
        credit: "Oscar Wilde",
    },
    {
        code: "EM05",
        content:
            "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        content_id:
            "Jangan pergi ke mana jalan mungkin mengarah, pergilah ke tempat yang tidak ada jalan dan tinggalkan jejak.",
        credit: "Ralph Waldo Emerson",
    },
    {
        code: "TW05",
        content:
            "The man who does not read has no advantage over the man who cannot read.",
        content_id:
            "Orang yang tidak membaca tidak memiliki keunggulan atas orang yang tidak bisa membaca.",
        credit: "Mark Twain",
    },
    {
        code: "CS04",
        content:
            "Integrity is doing the right thing, even when no one is watching.",
        content_id:
            "Integritas adalah melakukan hal yang benar, bahkan ketika tidak ada yang melihat.",
        credit: "C.S. Lewis",
    },
    {
        code: "BF03",
        content: "Well done is better than well said.",
        content_id:
            "Pekerjaan yang dilakukan dengan baik lebih baik daripada perkataan yang baik.",
        credit: "Benjamin Franklin",
    },
    {
        code: "BF04",
        content: "By failing to prepare, you are preparing to fail.",
        content_id:
            "Dengan gagal mempersiapkan diri, kamu sedang mempersiapkan kegagalan.",
        credit: "Benjamin Franklin",
    },
    {
        code: "AE04",
        content: "Anyone who stops learning is old, whether at twenty or eighty.",
        content_id:
            "Siapa pun yang berhenti belajar itu tua, entah pada usia dua puluh atau delapan puluh.",
        credit: "Albert Einstein",
    },
    {
        code: "SH04",
        content: "Intelligence is the ability to adapt to change.",
        content_id:
            "Kecerdasan adalah kemampuan untuk beradaptasi terhadap perubahan.",
        credit: "Stephen Hawking",
    },
    {
        code: "MLK04",
        content:
            "Our lives begin to end the day we become silent about things that matter.",
        content_id:
            "Hidup kita mulai berakhir pada hari ketika kita bungkam mengenai hal-hal yang penting.",
        credit: "Martin Luther King Jr.",
    },
    {
        code: "RM04",
        content:
            "Let yourself be silently drawn by the strange pull of what you really love.",
        content_id:
            "Biarkan dirimu diam-diam ditarik oleh tarikan aneh dari apa yang benar-benar kamu cintai.",
        credit: "Rumi",
    },
    {
        code: "MG04",
        content: "An eye for an eye only ends up making the whole world blind.",
        content_id:
            "Mata ganti mata hanya akan berakhir membuat seluruh dunia buta.",
        credit: "Mahatma Gandhi",
    },
    {
        code: "CS05",
        content:
            "You are never too old to set another goal or to dream a new dream.",
        content_id:
            "Kamu tidak pernah terlalu tua untuk menetapkan tujuan lain atau memimpikan mimpi baru.",
        credit: "C.S. Lewis",
    },
    {
        code: "BF06",
        content:
            "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        content_id:
            "Beritahu aku dan aku lupa. Ajari aku dan aku ingat. Libatkan aku dan aku belajar.",
        credit: "Benjamin Franklin",
    },
    {
        code: "OS06",
        content: "Experience is simply the name we give our mistakes.",
        content_id:
            "Pengalaman hanyalah nama yang kita berikan pada kesalahan kita.",
        credit: "Oscar Wilde",
    },
    {
        code: "EM06",
        content:
            "Do not follow where the path may lead. Go instead where there is no path and leave a trail.",
        content_id:
            "Jangan ikuti ke mana jalan mungkin mengarah. Pergilah ke tempat yang tidak ada jalan dan tinggalkan jejak.",
        credit: "Ralph Waldo Emerson",
    },
    {
        code: "TW06",
        content: "The secret of getting ahead is getting started.",
        content_id: "Rahasia untuk maju adalah memulai.",
        credit: "Mark Twain",
    },
    {
        code: "AE05",
        content: "The only source of knowledge is experience.",
        content_id: "Satu-satunya sumber pengetahuan adalah pengalaman.",
        credit: "Albert Einstein",
    },
    {
        code: "SH05",
        content:
            "There is no greater disability in society than the inability to see a person as more.",
        content_id:
            "Tidak ada kecacatan yang lebih besar dalam masyarakat selain ketidakmampuan untuk melihat seseorang lebih dari sekadar dirinya.",
        credit: "Stephen Hawking",
    },
    {
        code: "MLK05",
        content:
            "Faith is taking the first step even when you don't see the whole staircase.",
        content_id:
            "Iman adalah mengambil langkah pertama bahkan ketika kamu tidak melihat seluruh anak tangga.",
        credit: "Martin Luther King Jr.",
    },
    {
        code: "RM05",
        content: "Don't grieve. Anything you lose comes round in new form.",
        content_id:
            "Jangan berduka. Apa pun yang hilang darimu akan kembali dalam bentuk baru.",
        credit: "Rumi",
    },
    {
        code: "MG05",
        content:
            "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        content_id:
            "Hiduplah seolah engkau akan mati besok. Belajarlah seolah engkau akan hidup selamanya.",
        credit: "Mahatma Gandhi",
    },
    {
        code: "CS06",
        content:
            "Hardships often prepare ordinary people for an extraordinary destiny.",
        content_id:
            "Kesulitan sering kali mempersiapkan orang biasa untuk takdir yang luar biasa.",
        credit: "C.S. Lewis",
    },
    {
        code: "BF07",
        content: "An investment in knowledge always pays the best interest.",
        content_id: "Investasi dalam pengetahuan selalu memberikan bunga terbaik.",
        credit: "Benjamin Franklin",
    },
    {
        code: "OS07",
        content:
            "We are all in the gutter, but some of us are looking at the stars.",
        content_id:
            "Kita semua ada di selokan, tetapi beberapa dari kita sedang melihat bintang-bintang.",
        credit: "Oscar Wilde",
    },
    {
        code: "EM07",
        content:
            "The only person you are destined to become is the person you decide to be.",
        content_id:
            "Satu-satunya orang yang ditakdirkan menjadi dirimu adalah orang yang kamu putuskan untuk menjadi.",
        credit: "Ralph Waldo Emerson",
    },
    {
        code: "TW07",
        content:
            "Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.",
        content_id:
            "Kebaikan dalam perkataan menciptakan keyakinan. Kebaikan dalam berpikir menciptakan kedalaman. Kebaikan dalam memberi menciptakan cinta.",
        credit: "Lao Tzu",
    },
    {
        code: "AE06",
        content: "The important thing is not to stop questioning.",
        content_id: "Hal yang terpenting adalah jangan pernah berhenti bertanya.",
        credit: "Albert Einstein",
    },
    {
        code: "SH06",
        content: "Intelligence is the ability to adapt to change.",
        content_id:
            "Kecerdasan adalah kemampuan untuk beradaptasi terhadap perubahan.",
        credit: "Stephen Hawking",
    },
    {
        code: "MLK06",
        content:
            "Our lives begin to end the day we become silent about things that matter.",
        content_id:
            "Hidup kita mulai berakhir pada hari ketika kita bungkam mengenai hal-hal yang penting.",
        credit: "Martin Luther King Jr.",
    },
    {
        code: "RM06",
        content:
            "Don't be satisfied with stories, how things have gone with others. Unfold your own myth.",
        content_id:
            "Jangan puas dengan cerita, bagaimana hal-hal telah berjalan dengan orang lain. Singkapkan mitosmu sendiri.",
        credit: "Rumi",
    },
    {
        code: "MG06",
        content:
            "The best way to find yourself is to lose yourself in the service of others.",
        content_id:
            "Cara terbaik untuk menemukan dirimu adalah dengan kehilangan dirimu dalam melayani orang lain.",
        credit: "Mahatma Gandhi",
    },
    {
        code: "CS07",
        content:
            "Courage is not simply one of the virtues, but the form of every virtue at the testing point.",
        content_id:
            "Keberanian bukanlah sekadar salah satu kebajikan, melainkan bentuk setiap kebajikan pada titik ujian.",
        credit: "C.S. Lewis",
    },
    {
        code: "BF08",
        content:
            "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        content_id:
            "Beritahu aku dan aku lupa. Ajari aku dan aku ingat. Libatkan aku dan aku belajar.",
        credit: "Benjamin Franklin",
    },
    {
        code: "OS08",
        content:
            "The only thing to do with good advice is to pass it on. It is never any use to oneself.",
        content_id:
            "Satu-satunya hal yang bisa dilakukan dengan nasihat yang baik adalah meneruskannya. Itu tidak pernah berguna bagi diri sendiri.",
        credit: "Oscar Wilde",
    },
    {
        code: "EM08",
        content:
            "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        content_id:
            "Apa yang ada di belakang kita dan apa yang ada di depan kita adalah hal-hal kecil dibandingkan dengan apa yang ada di dalam diri kita.",
        credit: "Ralph Waldo Emerson",
    },
    {
        code: "TW08",
        content:
            "Good friends, good books, and a sleepy conscience: this is the ideal life.",
        content_id:
            "Teman yang baik, buku yang bagus, dan hati nurani yang tenang: inilah kehidupan yang ideal.",
        credit: "Mark Twain",
    },
    {
        code: "AE07",
        content: "A person who never made a mistake never tried anything new.",
        content_id:
            "Seseorang yang tidak pernah membuat kesalahan tidak pernah mencoba hal baru.",
        credit: "Albert Einstein",
    },
    {
        code: "SH07",
        content:
            "We are all different, but we share the same goal of wanting to understand the universe.",
        content_id:
            "Kita semua berbeda, tetapi kita berbagi tujuan yang sama, yaitu ingin memahami alam semesta.",
        credit: "Stephen Hawking",
    },
    {
        code: "MLK07",
        content:
            "Faith is taking the first step even when you don't see the whole staircase.",
        content_id:
            "Iman adalah mengambil langkah pertama bahkan ketika kamu tidak melihat seluruh anak tangga.",
        credit: "Martin Luther King Jr.",
    },
    {
        code: "RM07",
        content:
            "Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.",
        content_id:
            "Biarkan dirimu diam-diam ditarik oleh tarikan aneh dari apa yang benar-benar kamu cintai. Itu tidak akan menyesatkanmu.",
        credit: "Rumi",
    },
    {
        code: "MG07",
        content: "An eye for an eye only ends up making the whole world blind.",
        content_id:
            "Mata ganti mata hanya akan berakhir membuat seluruh dunia buta.",
        credit: "Mahatma Gandhi",
    },
    {
        code: "CS08",
        content:
            "You are never too old to set another goal or to dream a new dream.",
        content_id:
            "Kamu tidak pernah terlalu tua untuk menetapkan tujuan lain atau memimpikan mimpi baru.",
        credit: "C.S. Lewis",
    },
    {
        code: "BF09",
        content:
            "He that is good for making excuses is seldom good for anything else.",
        content_id:
            "Orang yang pandai membuat alasan jarang pandai dalam hal lain.",
        credit: "Benjamin Franklin",
    },
    {
        code: "OS09",
        content:
            "There is only one thing in the world worse than being talked about, and that is not being talked about.",
        content_id:
            "Hanya ada satu hal di dunia yang lebih buruk daripada dibicarakan, yaitu tidak dibicarakan sama sekali.",
        credit: "Oscar Wilde",
    },
    {
        code: "EM09",
        content: "Life is a journey, not a destination.",
        content_id: "Hidup adalah sebuah perjalanan, bukan tujuan.",
        credit: "Ralph Waldo Emerson",
    },
    {
        code: "TW09",
        content:
            "It's not the years in your life that count. It's the life in your years.",
        content_id:
            "Bukan tahun-tahun dalam hidupmu yang penting. Tapi kehidupan dalam tahun-tahunmu.",
        credit: "Mark Twain",
    },
    {
        code: "Q051",
        content:
            "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        content_id:
            "Orang bodoh mengira dirinya bijak, tetapi orang bijak tahu dirinya bodoh.",
        credit: "William Shakespeare",
    },
    {
        code: "Q052",
        content:
            "We are all in the gutter, but some of us are looking at the stars.",
        content_id:
            "Kita semua berada di selokan, tetapi beberapa dari kita melihat bintang-bintang.",
        credit: "Oscar Wilde",
    },
    {
        code: "Q053",
        content:
            "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
        content_id:
            "Dongeng itu lebih dari sekadar benar: bukan karena memberitahu kita bahwa naga itu ada, tetapi karena memberitahu kita bahwa naga bisa dikalahkan.",
        credit: "Neil Gaiman",
    },
    {
        code: "Q054",
        content:
            "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
        content_id:
            "Kemarin aku pintar, jadi aku ingin mengubah dunia. Hari ini aku bijak, jadi aku mengubah diriku sendiri.",
        credit: "Rumi",
    },
    {
        code: "Q055",
        content:
            "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
        content_id:
            "Bukan kurangnya cinta, tetapi kurangnya persahabatan yang membuat pernikahan tidak bahagia.",
        credit: "Friedrich Nietzsche",
    },
    {
        code: "Q056",
        content:
            "The only thing necessary for the triumph of evil is for good men to do nothing.",
        content_id:
            "Satu-satunya hal yang diperlukan agar kejahatan menang adalah orang baik tidak melakukan apa-apa.",
        credit: "Edmund Burke",
    },
    {
        code: "Q057",
        content:
            "To live is the rarest thing in the world. Most people exist, that is all.",
        content_id:
            "Hidup adalah hal paling langka di dunia. Kebanyakan orang hanya ada, itu saja.",
        credit: "Oscar Wilde",
    },
    {
        code: "Q058",
        content: "If you tell the truth, you don't have to remember anything.",
        content_id:
            "Jika kamu mengatakan yang sebenarnya, kamu tidak perlu mengingat apa pun.",
        credit: "Mark Twain",
    },
    {
        code: "Q059",
        content: "A room without books is like a body without a soul.",
        content_id: "Ruangan tanpa buku seperti tubuh tanpa jiwa.",
        credit: "Marcus Tullius Cicero",
    },
    {
        code: "Q060",
        content:
            "The man who does not read has no advantage over the man who cannot read.",
        content_id:
            "Orang yang tidak membaca tidak memiliki kelebihan dibandingkan orang yang tidak bisa membaca.",
        credit: "Mark Twain",
    },
    {
        code: "Q061",
        content:
            "It is better to be hated for what you are than to be loved for what you are not.",
        content_id:
            "Lebih baik dibenci karena menjadi dirimu apa adanya daripada dicintai karena menjadi orang lain.",
        credit: "André Gide",
    },
    {
        code: "Q062",
        content: "We accept the love we think we deserve.",
        content_id: "Kita menerima cinta yang kita pikir pantas kita dapatkan.",
        credit: "Stephen Chbosky",
    },
    {
        code: "Q063",
        content:
            "Insanity is doing the same thing over and over again and expecting different results.",
        content_id:
            "Kegilaan adalah melakukan hal yang sama berulang kali dan mengharapkan hasil yang berbeda.",
        credit: "Narcotics Anonymous (often misattributed to Albert Einstein)",
    },
    {
        code: "Q064",
        content: "I have not failed. I've just found 10,000 ways that won't work.",
        content_id:
            "Saya belum gagal. Saya hanya menemukan 10.000 cara yang tidak akan berhasil.",
        credit: "Thomas A. Edison",
    },
    {
        code: "Q065",
        content: "That which does not kill us makes us stronger.",
        content_id: "Apa yang tidak membunuh kita membuat kita lebih kuat.",
        credit: "Friedrich Nietzsche",
    },
    {
        code: "Q066",
        content:
            "It is our choices, Harry, that show what we truly are, far more than our abilities.",
        content_id:
            "Pilihan kitalah, Harry, yang menunjukkan siapa kita sebenarnya, jauh lebih dari kemampuan kita.",
        credit: "J.K. Rowling",
    },
    {
        code: "Q067",
        content: "The truth is rarely pure and never simple.",
        content_id: "Kebenaran jarang murni dan tidak pernah sederhana.",
        credit: "Oscar Wilde",
    },
    {
        code: "Q068",
        content:
            "If I am worth anything later, I am worth something now. For wheat is wheat, even if people think it is a grass in the beginning.",
        content_id:
            "Jika saya berharga nanti, saya juga berharga sekarang. Karena gandum adalah gandum, bahkan jika orang mengira itu rumput pada awalnya.",
        credit: "Vincent van Gogh",
    },
    {
        code: "Q069",
        content: "It does not do to dwell on dreams and forget to live.",
        content_id: "Tidak ada gunanya memikirkan mimpi dan lupa untuk hidup.",
        credit: "J.K. Rowling",
    },
    {
        code: "Q070",
        content:
            "Good friends, good books, and a sleepy conscience: this is the ideal life.",
        content_id:
            "Teman baik, buku bagus, dan hati nurani yang tenang: inilah kehidupan yang ideal.",
        credit: "Mark Twain",
    },
    {
        code: "Q071",
        content: "Life is what happens to us while we are making other plans.",
        content_id:
            "Hidup adalah apa yang terjadi pada kita saat kita sedang membuat rencana lain.",
        credit: "Allen Saunders (often misattributed to John Lennon)",
    },
    {
        code: "Q072",
        content:
            "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        content_id:
            "Saya cukup seorang seniman untuk menggambar bebas dari imajinasi saya. Imajinasi lebih penting daripada pengetahuan. Pengetahuan terbatas. Imajinasi melingkupi dunia.",
        credit: "Albert Einstein",
    },
    {
        code: "Q073",
        content:
            "The world breaks everyone, and afterward, some are strong at the broken places.",
        content_id:
            "Dunia menghancurkan semua orang, dan setelah itu, beberapa menjadi kuat di tempat-tempat yang hancur.",
        credit: "Ernest Hemingway",
    },
    {
        code: "Q074",
        content: "Pain is inevitable. Suffering is optional.",
        content_id: "Rasa sakit tidak bisa dihindari. Penderitaan adalah pilihan.",
        credit: "Haruki Murakami (popularized by, original source debated)",
    },
    {
        code: "Q075",
        content: "Be the change that you wish to see in the world.",
        content_id: "Jadilah perubahan yang ingin kamu lihat di dunia.",
        credit: "Mahatma Gandhi",
    },
    {
        code: "Q076",
        content:
            "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
        content_id:
            "Seorang pria kreatif termotivasi oleh keinginan untuk mencapai, bukan oleh keinginan untuk mengalahkan orang lain.",
        credit: "Ayn Rand",
    },
    {
        code: "Q077",
        content:
            "Never let your sense of morals prevent you from doing what is right.",
        content_id:
            "Jangan pernah biarkan rasa moralmu menghalangimu melakukan apa yang benar.",
        credit: "Isaac Asimov",
    },
    {
        code: "Q078",
        content:
            "The future belongs to those who believe in the beauty of their dreams.",
        content_id:
            "Masa depan adalah milik mereka yang percaya pada keindahan mimpi-mimpi mereka.",
        credit: "Eleanor Roosevelt",
    },
    {
        code: "Q079",
        content: "Do what you can, with what you have, where you are.",
        content_id:
            "Lakukan apa yang kamu bisa, dengan apa yang kamu miliki, di mana pun kamu berada.",
        credit: "Theodore Roosevelt",
    },
    {
        code: "Q080",
        content: "The mind is everything. What you think you become.",
        content_id:
            "Pikiran adalah segalanya. Apa yang kamu pikirkan, itulah dirimu jadinya.",
        credit: "Buddha",
    },
    {
        code: "Q081",
        content:
            "Success is stumbling from failure to failure with no loss of enthusiasm.",
        content_id:
            "Kesuksesan adalah tersandung dari kegagalan ke kegagalan tanpa kehilangan antusiasme.",
        credit: "Winston S. Churchill",
    },
    {
        code: "Q082",
        content:
            "Happiness is not something readymade. It comes from your own actions.",
        content_id:
            "Kebahagiaan bukanlah sesuatu yang sudah jadi. Itu datang dari tindakanmu sendiri.",
        credit: "Dalai Lama XIV",
    },
    {
        code: "Q083",
        content: "You must do the things you think you cannot do.",
        content_id:
            "Kamu harus melakukan hal-hal yang kamu pikir tidak bisa kamu lakukan.",
        credit: "Eleanor Roosevelt",
    },
    {
        code: "Q084",
        content: "It is never too late to be what you might have been.",
        content_id:
            "Tidak pernah ada kata terlambat untuk menjadi apa yang mungkin telah kamu capai.",
        credit: "George Eliot",
    },
    {
        code: "Q085",
        content: "If you don't stand for something you will fall for anything.",
        content_id:
            "Jika kamu tidak membela sesuatu, kamu akan mudah terpengaruh oleh apa pun.",
        credit: "Gordon A. Eadie (often misattributed)",
    },
    {
        code: "Q086",
        content:
            "I would rather walk with a friend in the dark, than alone in the light.",
        content_id:
            "Aku lebih suka berjalan dengan teman dalam kegelapan, daripada sendirian dalam terang.",
        credit: "Helen Keller",
    },
    {
        code: "Q087",
        content:
            "The only limit to our realization of tomorrow will be our doubts of today.",
        content_id:
            "Satu-satunya batasan untuk realisasi kita akan hari esok adalah keraguan kita hari ini.",
        credit: "Franklin D. Roosevelt",
    },
    {
        code: "Q088",
        content: "Knowing yourself is the beginning of all wisdom.",
        content_id: "Mengenal diri sendiri adalah awal dari semua kebijaksanaan.",
        credit: "Aristotle",
    },
    {
        code: "Q089",
        content:
            "We are such stuff as dreams are made on, and our little life is rounded with a sleep.",
        content_id:
            "Kita terbuat dari bahan yang sama dengan mimpi, dan hidup kita yang singkat dilingkupi oleh tidur.",
        credit: "William Shakespeare",
    },
    {
        code: "Q090",
        content: "The unexamined life is not worth living.",
        content_id: "Hidup yang tidak direfleksikan tidak layak untuk dijalani.",
        credit: "Socrates",
    },
    {
        code: "Q091",
        content:
            "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        content_id:
            "Apa yang ada di belakang kita dan apa yang ada di depan kita adalah hal-hal kecil dibandingkan dengan apa yang ada di dalam diri kita.",
        credit: "Ralph Waldo Emerson",
    },
    {
        code: "Q092",
        content: "To love oneself is the beginning of a lifelong romance.",
        content_id: "Mencintai diri sendiri adalah awal dari romansa seumur hidup.",
        credit: "Oscar Wilde",
    },
    {
        code: "Q093",
        content: "Where there is love there is life.",
        content_id: "Di mana ada cinta, di situ ada kehidupan.",
        credit: "Mahatma Gandhi",
    },
    {
        code: "Q094",
        content: "The purpose of our lives is to be happy.",
        content_id: "Tujuan hidup kita adalah untuk bahagia.",
        credit: "Dalai Lama XIV",
    },
    {
        code: "Q095",
        content: "Get busy living or get busy dying.",
        content_id: "Sibuklah hidup atau sibuklah mati.",
        credit: "Stephen King",
    },
    {
        code: "Q096",
        content: "You only live once, but if you do it right, once is enough.",
        content_id:
            "Kamu hanya hidup sekali, tetapi jika kamu melakukannya dengan benar, sekali saja sudah cukup.",
        credit: "Mae West",
    },
    {
        code: "Q097",
        content:
            "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        content_id:
            "Banyak kegagalan dalam hidup adalah orang-orang yang tidak menyadari seberapa dekat mereka dengan kesuksesan ketika mereka menyerah.",
        credit: "Thomas A. Edison",
    },
    {
        code: "Q098",
        content:
            "If you want to live a happy life, tie it to a goal, not to people or things.",
        content_id:
            "Jika kamu ingin menjalani hidup yang bahagia, kaitkanlah pada tujuan, bukan pada orang atau benda.",
        credit: "Albert Einstein",
    },
    {
        code: "Q099",
        content:
            "Your time is limited, so don't waste it living someone else's life.",
        content_id:
            "Waktumu terbatas, jadi jangan sia-siakan dengan menjalani hidup orang lain.",
        credit: "Steve Jobs",
    },
    {
        code: "Q100",
        content: "The best revenge is massive success.",
        content_id: "Pembalasan terbaik adalah kesuksesan besar.",
        credit: "Frank Sinatra",
    },
    {
        code: "Q101",
        content: "Dreams become directions when you give them a date.",
        content_id: "Mimpi berubah menjadi arah ketika kau memberinya tenggat waktu.",
        credit: "Anonymous",
    },
    {
        code: "Q102",
        content: "Do one thing every day that scares you.",
        content_id: "Lakukan satu hal setiap hari yang membuatmu takut.",
        credit: "Eleanor Roosevelt",
    },
    {
        code: "Q103",
        content: "Your worth is not reduced by another person's inability to recognize it.",
        content_id: "Nilaimu tidak berkurang hanya karena orang lain tidak mampu mengenalinya.",
        credit: "Anonymous",
    },
    {
        code: "Q104",
        content: "In the middle of difficulty lies opportunity.",
        content_id: "Di tengah kesulitan terdapat kesempatan.",
        credit: "Albert Einstein",
    },
    {
        code: "Q105",
        content: "Great work begins where excuses end.",
        content_id: "Pekerjaan hebat dimulai ketika alasan-alasan berakhir.",
        credit: "Anonymous",
    },
    {
        code: "Q106",
        content: "Stay hungry, stay foolish.",
        content_id: "Tetap lapar, tetaplah bodoh.",
        credit: "Steve Jobs",
    },
    {
        code: "Q107",
        content: "Momentum often begins with one imperfect attempt.",
        content_id: "Momentum sering dimulai dari satu percobaan yang belum sempurna.",
        credit: "Anonymous",
    },
    {
        code: "Q108",
        content: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
        content_id: "Saat kau mendapati dirimu berada di pihak mayoritas, itulah saatnya berhenti dan merenung.",
        credit: "Mark Twain",
    },
    {
        code: "Q109",
        content: "The secret of life is to appreciate the pleasure of being terribly, terribly alive.",
        content_id: "Rahasia hidup adalah menghargai kenikmatan karena benar-benar hidup.",
        credit: "Oscar Wilde",
    },
    {
        code: "Q110",
        content: "Authenticity is quieter than approval.",
        content_id: "Keaslian lebih tenang daripada pengakuan orang lain.",
        credit: "Anonymous",
    },
    {
        code: "Q111",
        content: "A view of the stars can begin with a single lifted gaze.",
        content_id: "Pandangan menuju bintang dapat dimulai dari satu tatapan yang diangkat.",
        credit: "Anonymous",
    },
    {
        code: "Q112",
        content: "A late beginning still counts as a beginning.",
        content_id: "Permulaan yang terlambat tetaplah sebuah permulaan.",
        credit: "Anonymous",
    },
    {
        code: "Q113",
        content: "What do we live for, if it is not to make life less difficult for each other?",
        content_id: "Untuk apa kita hidup jika bukan untuk membuat hidup satu sama lain lebih mudah?",
        credit: "George Eliot",
    },
    {
        code: "Q114",
        content: "The mind is its own place, and in itself can make a heaven of hell.",
        content_id: "Pikiran adalah tempatnya sendiri, dan dapat mengubah neraka menjadi surga.",
        credit: "John Milton",
    },
    {
        code: "Q115",
        content: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        content_id: "Kemuliaan terbesar dalam hidup bukanlah tidak pernah jatuh, melainkan bangkit setiap kali jatuh.",
        credit: "Nelson Mandela",
    },
    {
        code: "Q116",
        content: "It always seems impossible until it's done.",
        content_id: "Sesuatu selalu tampak mustahil sampai berhasil dilakukan.",
        credit: "Nelson Mandela",
    },
    {
        code: "Q117",
        content: "Education is the most powerful weapon which you can use to change the world.",
        content_id: "Pendidikan adalah senjata paling ampuh yang dapat digunakan untuk mengubah dunia.",
        credit: "Nelson Mandela",
    },
    {
        code: "Q118",
        content: "We must accept finite disappointment, but never lose infinite hope.",
        content_id: "Kita harus menerima kekecewaan yang terbatas, tetapi tidak pernah kehilangan harapan yang tak terbatas.",
        credit: "Martin Luther King Jr.",
    },
    {
        code: "Q119",
        content: "Courage sometimes sounds like 'I will try once more.'",
        content_id: "Keberanian terkadang terdengar seperti, 'Aku akan mencoba sekali lagi.'",
        credit: "Anonymous",
    },
    {
        code: "Q120",
        content: "The right moment is often made by the first right action.",
        content_id: "Momen yang tepat sering diciptakan oleh tindakan benar yang pertama.",
        credit: "Anonymous",
    },
    {
        code: "Q121",
        content: "Long roads become possible when the next step is visible.",
        content_id: "Jalan panjang menjadi mungkin ketika langkah berikutnya terlihat.",
        credit: "Anonymous",
    },
    {
        code: "Q122",
        content: "Release the old shape; growth needs room.",
        content_id: "Lepaskan bentuk lama; pertumbuhan membutuhkan ruang.",
        credit: "Anonymous",
    },
    {
        code: "Q123",
        content: "Mastering others is strength; mastering yourself is true power.",
        content_id: "Menguasai orang lain adalah kekuatan; menguasai diri sendiri adalah kuasa sejati.",
        credit: "Lao Tzu",
    },
    {
        code: "Q124",
        content: "He who has a why to live can bear almost any how.",
        content_id: "Dia yang memiliki alasan untuk hidup dapat menanggung hampir segala cara.",
        credit: "Friedrich Nietzsche",
    },
    {
        code: "Q125",
        content: "Survival is not the same as strength; choosing to rise is.",
        content_id: "Bertahan hidup tidak sama dengan menjadi kuat; memilih untuk bangkitlah yang membuatnya demikian.",
        credit: "Anonymous",
    },
    {
        code: "Q126",
        content: "Become who you are.",
        content_id: "Jadilah dirimu yang sebenarnya.",
        credit: "Friedrich Nietzsche",
    },
    {
        code: "Q127",
        content: "We do not remember days; we remember moments.",
        content_id: "Kita tidak mengingat hari-hari; kita mengingat momen-momen.",
        credit: "Cesare Pavese",
    },
    {
        code: "Q128",
        content: "Happiness depends upon ourselves.",
        content_id: "Kebahagiaan bergantung pada diri kita sendiri.",
        credit: "Aristotle",
    },
    {
        code: "Q129",
        content: "The roots of education are bitter, but the fruit is sweet.",
        content_id: "Akar pendidikan memang pahit, tetapi buahnya manis.",
        credit: "Aristotle",
    },
    {
        code: "Q130",
        content: "Wisdom starts when certainty makes room for questions.",
        content_id: "Kebijaksanaan dimulai ketika kepastian memberi ruang bagi pertanyaan.",
        credit: "Anonymous",
    },
    {
        code: "Q131",
        content: "The honest mind knows where its knowledge ends.",
        content_id: "Pikiran yang jujur mengetahui di mana pengetahuannya berakhir.",
        credit: "Anonymous",
    },
    {
        code: "Q132",
        content: "An unexamined life is not worth living.",
        content_id: "Hidup yang tidak direnungkan tidak layak dijalani.",
        credit: "Socrates",
    },
    {
        code: "Q133",
        content: "The beginning is the most important part of the work.",
        content_id: "Awal adalah bagian paling penting dari sebuah pekerjaan.",
        credit: "Plato",
    },
    {
        code: "Q134",
        content: "Bravery is not the absence of fear, but the refusal to let fear decide.",
        content_id: "Keberanian bukan ketiadaan rasa takut, melainkan penolakan untuk membiarkan rasa takut memutuskan.",
        credit: "Anonymous",
    },
    {
        code: "Q135",
        content: "The future depends on what you do today.",
        content_id: "Masa depan bergantung pada apa yang kau lakukan hari ini.",
        credit: "Mahatma Gandhi",
    },
    {
        code: "Q136",
        content: "Gentleness can move what force only dents.",
        content_id: "Kelembutan dapat menggerakkan sesuatu yang hanya bisa dirusak oleh kekuatan.",
        credit: "Anonymous",
    },
    {
        code: "Q137",
        content: "Find yourself by becoming useful to someone beyond yourself.",
        content_id: "Temukan dirimu dengan menjadi berguna bagi seseorang di luar dirimu.",
        credit: "Anonymous",
    },
    {
        code: "Q138",
        content: "If you want to lift yourself up, lift up someone else.",
        content_id: "Jika ingin mengangkat dirimu, angkatlah orang lain.",
        credit: "Booker T. Washington",
    },
    {
        code: "Q139",
        content: "Success is to be measured not so much by the position one has reached as by the obstacles overcome.",
        content_id: "Kesuksesan diukur bukan dari posisi yang dicapai, melainkan dari rintangan yang berhasil dilewati.",
        credit: "Booker T. Washington",
    },
    {
        code: "Q140",
        content: "A meaningful life is built from small actions repeated with care.",
        content_id: "Hidup yang bermakna dibangun dari tindakan-tindakan kecil yang diulang dengan kepedulian.",
        credit: "Anonymous",
    },
    {
        code: "Q141",
        content: "The greatest use of life is to spend it for something that will outlast life.",
        content_id: "Penggunaan hidup yang terbaik adalah menghabiskannya untuk sesuatu yang melampaui hidup.",
        credit: "William James",
    },
    {
        code: "Q142",
        content: "You miss one hundred percent of the shots you don't take.",
        content_id: "Kau melewatkan seratus persen kesempatan yang tidak kau ambil.",
        credit: "Wayne Gretzky",
    },
    {
        code: "Q143",
        content: "Everything you've ever wanted is on the other side of fear.",
        content_id: "Segala yang kau inginkan berada di sisi lain dari rasa takut.",
        credit: "George Addair",
    },
    {
        code: "Q144",
        content: "Don't count the days, make the days count.",
        content_id: "Jangan menghitung hari; buatlah setiap hari berarti.",
        credit: "Muhammad Ali",
    },
    {
        code: "Q145",
        content: "He who is not courageous enough to take risks will accomplish nothing in life.",
        content_id: "Dia yang tidak cukup berani mengambil risiko tidak akan mencapai apa pun dalam hidup.",
        credit: "Muhammad Ali",
    },
    {
        code: "Q146",
        content: "If you can't explain it simply, you don't understand it well enough.",
        content_id: "Jika tidak bisa menjelaskannya dengan sederhana, kau belum cukup memahaminya.",
        credit: "Albert Einstein",
    },
    {
        code: "Q147",
        content: "Try not to become a person of success, but rather try to become a person of value.",
        content_id: "Jangan berusaha menjadi orang sukses, tetapi berusahalah menjadi orang yang bernilai.",
        credit: "Albert Einstein",
    },
    {
        code: "Q148",
        content: "The measure of intelligence is the ability to change.",
        content_id: "Ukuran kecerdasan adalah kemampuan untuk berubah.",
        credit: "Albert Einstein",
    },
    {
        code: "Q149",
        content: "If you want to go fast, go alone. If you want to go far, go together.",
        content_id: "Jika ingin berjalan cepat, berjalanlah sendiri. Jika ingin berjalan jauh, berjalanlah bersama.",
        credit: "African Proverb",
    },
    {
        code: "Q150",
        content: "A smooth sea never made a skilled sailor.",
        content_id: "Laut yang tenang tidak pernah menghasilkan pelaut yang terampil.",
        credit: "English Proverb",
    },
];

export default generalQuotes;