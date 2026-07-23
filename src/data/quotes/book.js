const bookQuotes = [
    {
        code: "tkam",
        content:
            "You never really understand a person until you consider things from his point of view... Until you climb into his skin and walk around in it.",
        content_id:
            "Kamu tidak benar-benar memahami seseorang sampai kamu melihat dari sudut pandangnya... Sampai kamu masuk ke dalam kulitnya dan berjalan di dalamnya.",
        credit: "To Kill a Mockingbird, pages 39",
    },
    {
        code: "alch",
        content:
            "When you want something, all the universe conspires in helping you to achieve it.",
        content_id:
            "Ketika kamu menginginkan sesuatu, seluruh alam semesta akan berkonspirasi untuk membantumu mewujudkannya.",
        credit: "The Alchemist, pages 22",
    },
    {
        code: "hob",
        content: "There is some good in this world, and it's worth fighting for.",
        content_id: "Masih ada kebaikan di dunia ini, dan itu layak diperjuangkan.",
        credit: "The Hobbit, pages 310",
    },
    {
        code: "hp1",
        content: "It does not do to dwell on dreams and forget to live.",
        content_id: "Tidak baik terus larut dalam mimpi dan lupa untuk hidup.",
        credit: "Harry Potter and the Sorcerer's Stone, pages 214",
    },
    {
        code: "1984",
        content:
            "Perhaps one did not want to be loved so much as to be understood.",
        content_id:
            "Mungkin seseorang tidak terlalu ingin dicintai, melainkan lebih ingin dipahami.",
        credit: "1984, pages 136",
    },
    {
        code: "tfios",
        content: "You gave me a forever within the numbered days.",
        content_id: "Kau memberiku keabadian di dalam hari-hari yang terbatas.",
        credit: "The Fault in Our Stars, pages 260",
    },
    {
        code: "ana",
        content:
            "I don't want to be at the mercy of my emotions. I want to use them, to enjoy them, and to dominate them.",
        content_id:
            "Aku tidak ingin diperbudak oleh emosiku. Aku ingin menggunakannya, menikmatinya, dan menguasainya.",
        credit: "The Picture of Dorian Gray, pages 75",
    },
    {
        code: "jane",
        content:
            "I am no bird; and no net ensnares me: I am a free human being with an independent will.",
        content_id:
            "Aku bukan burung; dan tidak ada jaring yang menjebakku: aku adalah manusia bebas dengan kehendak independen.",
        credit: "Jane Eyre, pages 293",
    },
    {
        code: "gats",
        content:
            "So we beat on, boats against the current, borne back ceaselessly into the past.",
        content_id:
            "Jadi kita terus maju, seperti perahu melawan arus, terus terlempar kembali ke masa lalu.",
        credit: "The Great Gatsby, pages 180",
    },
    {
        code: "brave",
        content: "You must be the change you wish to see in the world.",
        content_id: "Kamu harus menjadi perubahan yang ingin kamu lihat di dunia.",
        credit: "The Story of My Experiments with Truth, page 33",
    },
    {
        code: "pride",
        content:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        content_id:
            "Ini adalah kebenaran yang diterima secara universal, bahwa seorang pria yang memiliki kekayaan besar, pasti membutuhkan seorang istri.",
        credit: "Pride and Prejudice, page 1",
    },
    {
        code: "lesmis",
        content: "To love another person is to see the face of God.",
        content_id: "Mencintai orang lain adalah melihat wajah Tuhan.",
        credit: "Les Misérables, page 482",
    },
    {
        code: "huxley",
        content:
            "Words can be like X-rays if you use them properly—they'll go through anything. You read and you're pierced.",
        content_id:
            "Kata-kata bisa seperti sinar-X jika kamu menggunakannya dengan benar—mereka akan menembus apapun.",
        credit: "Brave New World, page 86",
    },
    {
        code: "siddhartha",
        content: "I have learned that to be with those I like is enough.",
        content_id:
            "Aku telah belajar bahwa bersama orang yang aku sukai sudah cukup.",
        credit: "Siddhartha, page 142",
    },
    {
        code: "alch1",
        content:
            "When you want something, all the universe conspires in helping you to achieve it.",
        content_id:
            "Ketika kamu menginginkan sesuatu, seluruh alam semesta akan berkonspirasi untuk membantumu mewujudkannya.",
        credit: "The Alchemist, page 22",
    },
    {
        code: "alch2",
        content:
            "It's the possibility of having a dream come true that makes life interesting.",
        content_id:
            "Kemungkinan untuk mewujudkan impianlah yang membuat hidup menarik.",
        credit: "The Alchemist, page 11",
    },
    {
        code: "alch3",
        content:
            "People learn, at least when they are young, to accept their own fate.",
        content_id:
            "Orang-orang belajar, setidaknya ketika mereka masih muda, untuk menerima takdir mereka sendiri.",
        credit: "The Alchemist, page 49",
    },
    {
        code: "alch4",
        content: "To realize one's destiny is a person's only obligation.",
        content_id:
            "Menyadari takdir seseorang adalah satu-satunya kewajiban seorang manusia.",
        credit: "The Alchemist, page 34",
    },
    {
        code: "alch5",
        content:
            "Remember that wherever your heart is, there you will find your treasure.",
        content_id:
            "Ingatlah bahwa di mana pun hatimu berada, di situlah kamu akan menemukan harta karunmu.",
        credit: "The Alchemist, page 61",
    },
    {
        code: "alch6",
        content:
            "The secret of happiness is to see all the marvels of the world, and never to forget the drops of oil on the spoon.",
        content_id:
            "Rahasia kebahagiaan adalah melihat semua keajaiban dunia, dan tidak pernah lupa akan tetesan minyak di sendok.",
        credit: "The Alchemist, page 56",
    },
    {
        code: "alch7",
        content:
            "Courage is the quality most essential to understanding the Language of the World.",
        content_id:
            "Keberanian adalah kualitas yang paling penting untuk memahami Bahasa Dunia.",
        credit: "The Alchemist, page 107",
    },
    {
        code: "alch8",
        content:
            "When we strive to become better than we are, everything around us becomes better too.",
        content_id:
            "Ketika kita berusaha untuk menjadi lebih baik dari sebelumnya, segala sesuatu di sekitar kita juga menjadi lebih baik.",
        credit: "The Alchemist, page 132",
    },
    {
        code: "alch9",
        content:
            "Everyone seems to have a clear idea of how other people should lead their lives, but none about his or her own.",
        content_id:
            "Setiap orang sepertinya memiliki gagasan yang jelas tentang bagaimana orang lain seharusnya menjalani hidup mereka, tetapi tidak ada yang memiliki gagasan tentang hidup mereka sendiri.",
        credit: "The Alchemist, page 65",
    },
    {
        code: "alch10",
        content:
            "The simple things are also the most extraordinary things, and only the wise can see them.",
        content_id:
            "Hal-hal sederhana juga merupakan hal-hal yang paling luar biasa, dan hanya orang bijak yang bisa melihatnya.",
        credit: "The Alchemist, page 86",
    },
    {
        code: "alch11",
        content:
            "You must understand that love never keeps a man from pursuing his destiny. If he abandons that pursuit, it's because it wasn't true love.",
        content_id:
            "Kamu harus memahami bahwa cinta tidak pernah menghalangi seseorang untuk mengejar takdirnya. Jika dia meninggalkan pencariannya, itu karena cinta itu bukan cinta yang sejati.",
        credit: "The Alchemist, page 123",
    },
    {
        code: "alch12",
        content:
            "Don't give in to your fears. If you do, you won't be able to talk to your heart.",
        content_id:
            "Jangan menyerah pada ketakutanmu. Jika kamu melakukannya, kamu tidak akan bisa berbicara dengan hatimu.",
        credit: "The Alchemist, page 118",
    },
    {
        code: "alch13",
        content:
            "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
        content_id:
            "Hanya ada satu hal yang membuat sebuah impian tidak mungkin tercapai: rasa takut akan kegagalan.",
        credit: "The Alchemist, page 145",
    },
    {
        code: "alch14",
        content: "The world is changed by your example, not by your opinion.",
        content_id:
            "Dunia ini berubah melalui teladanmu, bukan melalui pendapatmu.",
        credit: "The Alchemist, page 134",
    },
    {
        code: "alch15",
        content:
            "People learn, at least when they are young, to accept their own fate.",
        content_id:
            "Orang-orang belajar, setidaknya ketika mereka masih muda, untuk menerima takdir mereka sendiri.",
        credit: "The Alchemist, page 49",
    },
    {
        code: "alch17",
        content:
            "Everything that happens once can never happen again. But everything that happens twice will surely happen a third time.",
        content_id:
            "Segala sesuatu yang terjadi sekali tidak akan pernah terulang lagi. Tetapi segala sesuatu yang terjadi dua kali pasti akan terjadi untuk ketiga kalinya.",
        credit: "The Alchemist, page 55",
    },
    {
        code: "alch18",
        content: "The fear of suffering is worse than the suffering itself.",
        content_id:
            "Ketakutan akan penderitaan lebih buruk daripada penderitaan itu sendiri.",
        credit: "The Alchemist, page 99",
    },
    {
        code: "alch19",
        content:
            "No matter what he does, every person on Earth plays a central role in the history of the world. And normally he doesn't know it.",
        content_id:
            "Tidak peduli apa yang dia lakukan, setiap orang di Bumi memainkan peran penting dalam sejarah dunia. Dan biasanya dia tidak mengetahuinya.",
        credit: "The Alchemist, page 135",
    },
    {
        code: "alch20",
        content:
            "The most important part of the treasure you seek is the journey itself.",
        content_id:
            "Bagian terpenting dari harta yang kamu cari adalah perjalanan itu sendiri.",
        credit: "The Alchemist, page 68",
    },
    {
        code: "sidd1",
        content:
            "Wisdom cannot be imparted. Wisdom that a wise man attempts to impart always sounds like foolishness to someone else.",
        content_id:
            "Kebijaksanaan tidak bisa diajarkan. Kebijaksanaan yang coba disampaikan oleh orang bijak akan selalu terdengar seperti kebodohan bagi orang lain.",
        credit: "Siddhartha, page 89",
    },
    {
        code: "sidd3",
        content:
            "I have had to experience despair, I have had to sink to the greatest mental depths, to thoughts of suicide, in order to experience grace.",
        content_id:
            "Aku harus mengalami keputusasaan, aku harus tenggelam ke dalam kedalaman mental yang paling dalam, hingga berpikir tentang bunuh diri, untuk bisa mengalami anugerah.",
        credit: "Siddhartha, page 75",
    },
    {
        code: "sidd5",
        content: "You seek too much, and as a result you cannot find.",
        content_id:
            "Kamu terlalu banyak mencari, dan akibatnya kamu tidak bisa menemukan.",
        credit: "Siddhartha, page 61",
    },
    {
        code: "sidd6",
        content:
            "The world was beautiful when looked at in this way—without any seeking, so simple, so childlike.",
        content_id:
            "Dunia tampak indah ketika dilihat dengan cara ini—tanpa pencarian, begitu sederhana, begitu seperti anak-anak.",
        credit: "Siddhartha, page 108",
    },
    {
        code: "sidd7",
        content:
            "Love can be begged, bought, or received as a gift, but it cannot be stolen.",
        content_id:
            "Cinta bisa dimohon, dibeli, atau diterima sebagai hadiah, tetapi tidak bisa dicuri.",
        credit: "Siddhartha, page 51",
    },
    {
        code: "sidd8",
        content:
            "We are not going in circles, we are going upwards. The path is a spiral; we have already climbed many steps.",
        content_id:
            "Kita tidak berjalan dalam lingkaran, kita sedang naik. Jalannya berbentuk spiral; kita sudah menaiki banyak anak tangga.",
        credit: "Siddhartha, page 95",
    },
    {
        code: "sidd9",
        content:
            "One must find the source within one's own Self, one must possess it.",
        content_id:
            "Seseorang harus menemukan sumbernya dalam dirinya sendiri, ia harus memilikinya.",
        credit: "Siddhartha, page 46",
    },
    {
        code: "sidd10",
        content:
            "I have always believed, and I still believe, that whatever good or bad fortune may come our way we can always give it meaning and transform it into something of value.",
        content_id:
            "Aku selalu percaya, dan masih percaya, bahwa apapun keberuntungan atau kemalangan yang datang kepada kita, kita selalu bisa memberinya makna dan mengubahnya menjadi sesuatu yang bernilai.",
        credit: "Siddhartha, page 112",
    },
    {
        code: "zhuang1",
        content:
            "Flow with whatever may happen, and let your mind be free: Stay centered by accepting whatever you are doing. This is the ultimate.",
        content_id:
            "Mengalirlah dengan apapun yang terjadi, dan biarkan pikiranmu bebas: Tetaplah terpusat dengan menerima apapun yang kamu lakukan. Inilah yang tertinggi.",
        credit: "Zhuangzi, page 23",
    },
    {
        code: "zhuang2",
        content:
            "Once upon a time, I dreamt I was a butterfly... Now I do not know whether I was then a man dreaming I was a butterfly, or whether I am now a butterfly, dreaming I am a man.",
        content_id:
            "Suatu ketika, aku bermimpi menjadi kupu-kupu... Sekarang aku tidak tahu apakah dulu aku adalah manusia yang bermimpi menjadi kupu-kupu, atau sekarang aku adalah kupu-kupu yang bermimpi menjadi manusia.",
        credit: "Zhuangzi, page 45",
    },
    {
        code: "suntzu1",
        content: "The supreme art of war is to subdue the enemy without fighting.",
        content_id:
            "Seni perang tertinggi adalah menundukkan musuh tanpa bertempur.",
        credit: "The Art of War, page 39",
    },
    {
        code: "suntzu2",
        content:
            "If you know the enemy and know yourself, you need not fear the result of a hundred battles.",
        content_id:
            "Jika kamu mengenal musuh dan mengenal dirimu sendiri, kamu tidak perlu takut terhadap hasil dari seratus pertempuran.",
        credit: "The Art of War, page 18",
    },
    {
        code: "marcus1",
        content:
            "You have power over your mind - not outside events. Realize this, and you will find strength.",
        content_id:
            "Kamu memiliki kekuatan atas pikiranmu - bukan atas peristiwa di luar dirimu. Sadarilah ini, dan kamu akan menemukan kekuatan.",
        credit: "Meditations, page 12",
    },
    {
        code: "marcus2",
        content:
            "The happiness of your life depends upon the quality of your thoughts.",
        content_id: "Kebahagiaan hidupmu tergantung pada kualitas pikiranmu.",
        credit: "Meditations, page 35",
    },
    {
        code: "gibran1",
        content:
            "Your children are not your children. They are the sons and daughters of Life's longing for itself.",
        content_id:
            "Anak-anakmu bukanlah anak-anakmu. Mereka adalah putra dan putri dari Kerinduan Kehidupan akan dirinya sendiri.",
        credit: "The Prophet, page 17",
    },
    {
        code: "gibran2",
        content:
            "Let there be spaces in your togetherness, and let the winds of the heavens dance between you.",
        content_id:
            "Biarkan ada ruang dalam kebersamaanmu, dan biarkan angin surga menari di antara kalian.",
        credit: "The Prophet, page 19",
    },
    {
        code: "siddh1",
        content:
            "Wisdom cannot be imparted. Wisdom that a wise man attempts to impart always sounds like foolishness to someone else.",
        content_id:
            "Kebijaksanaan tidak bisa diajarkan. Kebijaksanaan yang coba disampaikan oleh orang bijak akan selalu terdengar seperti kebodohan bagi orang lain.",
        credit: "Siddhartha, page 89",
    },
    {
        code: "siddh2",
        content: "I can think, I can wait, I can fast.",
        content_id: "Aku bisa berpikir, aku bisa menunggu, aku bisa berpuasa.",
        credit: "Siddhartha, page 38",
    },
    {
        code: "zhuang1",
        content: "Happiness is the absence of the striving for happiness.",
        content_id:
            "Kebahagiaan adalah ketiadaan dari upaya untuk mengejar kebahagiaan.",
        credit: "Zhuangzi, page 56",
    },
    {
        code: "zhuang2",
        content: "A path is made by walking on it.",
        content_id: "Sebuah jalan tercipta karena kita berjalan di atasnya.",
        credit: "Zhuangzi, page 71",
    },
    {
        code: "suntzu1",
        content:
            "To win one hundred victories in one hundred battles is not the acme of skill. To subdue the enemy without fighting is the acme of skill.",
        content_id:
            "Memenangkan seratus pertempuran bukanlah puncak keahlian. Menaklukkan musuh tanpa bertempur adalah puncak keahlian.",
        credit: "The Art of War, page 42",
    },
    {
        code: "suntzu2",
        content: "In the midst of chaos, there is also opportunity.",
        content_id: "Di tengah kekacauan, selalu ada peluang.",
        credit: "The Art of War, page 57",
    },
    {
        code: "marcus1",
        content:
            "Accept the things to which fate binds you and love the people with whom fate brings you together, but do so with all your heart.",
        content_id:
            "Terimalah segala hal yang ditakdirkan untukmu dan cintailah orang-orang yang takdir pertemukan denganmu, lakukanlah dengan sepenuh hati.",
        credit: "Meditations, page 67",
    },
    {
        code: "marcus2",
        content:
            "Look well into thyself; there is a source of strength which will always spring up if thou wilt always look.",
        content_id:
            "Lihatlah ke dalam dirimu; di sana ada sumber kekuatan yang akan selalu muncul jika engkau terus mencarinya.",
        credit: "Meditations, page 81",
    },
    {
        code: "gibran1",
        content:
            "Your pain is the breaking of the shell that encloses your understanding.",
        content_id:
            "Rasa sakitmu adalah pecahnya cangkang yang membungkus pemahamanmu.",
        credit: "The Prophet, page 48",
    },
    {
        code: "gibran2",
        content: "Work is love made visible.",
        content_id: "Pekerjaan adalah cinta yang menjadi tampak.",
        credit: "The Prophet, page 29",
    },
    {
        code: "zen1",
        content:
            "When the mind is nowhere it is everywhere. When it clings to nothing it clings to everything.",
        content_id:
            "Saat pikiran berada di mana-mana, ia juga tidak berada di mana-mana. Saat tidak melekat pada apapun, ia bersatu dengan segalanya.",
        credit: "The Book of Serenity, page 104",
    },
    {
        code: "zen2",
        content: "No snowflake ever falls in the wrong place.",
        content_id: "Tak ada kepingan salju yang jatuh di tempat yang salah.",
        credit: "The Book of Serenity, page 87",
    },
    {
        code: "newbook001",
        content: "There is no frigate like a book to take us lands away.",
        content_id: "Tidak ada kapal seperti buku untuk membawa kita ke negeri-negeri jauh.",
        credit: "Emily Dickinson, Selected Poems",
    },
    {
        code: "newbook002",
        content: "A reader lives a thousand lives before he dies.",
        content_id: "Seorang pembaca menjalani seribu kehidupan sebelum ia meninggal.",
        credit: "A Dance with Dragons",
    },
    {
        code: "newbook003",
        content: "Books are a uniquely portable magic.",
        content_id: "Buku adalah sihir yang unik dan dapat dibawa ke mana-mana.",
        credit: "On Writing: A Memoir of the Craft",
    },
    {
        code: "newbook004",
        content: "The ones that love us never really leave us.",
        content_id: "Mereka yang mencintai kita tidak pernah benar-benar meninggalkan kita.",
        credit: "Harry Potter and the Prisoner of Azkaban",
    },
    {
        code: "newbook005",
        content: "It is the unknown we fear when we look upon death and darkness, nothing more.",
        content_id: "Yang kita takuti saat memandang kematian dan kegelapan hanyalah hal yang tidak kita kenal.",
        credit: "Harry Potter and the Half-Blood Prince",
    },
    {
        code: "newbook006",
        content: "There is no good and evil, there is only power and those too weak to seek it.",
        content_id: "Tidak ada kebaikan dan kejahatan; hanya ada kekuatan dan mereka yang terlalu lemah untuk mencarinya.",
        credit: "Harry Potter and the Philosopher's Stone",
    },
    {
        code: "newbook007",
        content: "The world is full of obvious things which nobody by any chance ever observes.",
        content_id: "Dunia dipenuhi hal-hal jelas yang tak pernah diamati siapa pun.",
        credit: "The Hound of the Baskervilles",
    },
    {
        code: "newbook008",
        content: "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
        content_id: "Setelah menyingkirkan yang mustahil, apa pun yang tersisa, betapapun tak masuk akalnya, pasti merupakan kebenaran.",
        credit: "The Sign of the Four",
    },
    {
        code: "newbook009",
        content: "I never make exceptions. An exception disproves the rule.",
        content_id: "Aku tidak pernah membuat pengecualian. Pengecualian membantah aturan.",
        credit: "The Adventures of Sherlock Holmes",
    },
    {
        code: "newbook010",
        content: "The best way to destroy an enemy is to make him a friend.",
        content_id: "Cara terbaik menghancurkan musuh adalah menjadikannya teman.",
        credit: "The Autobiography of Benjamin Franklin",
    },
    {
        code: "newbook011",
        content: "My good opinion once lost is lost forever.",
        content_id: "Pendapat baikku, jika sudah hilang, akan hilang selamanya.",
        credit: "Pride and Prejudice",
    },
    {
        code: "newbook012",
        content: "There is no charm equal to tenderness of heart.",
        content_id: "Tidak ada pesona yang menyamai kelembutan hati.",
        credit: "Sense and Sensibility",
    },
    {
        code: "newbook013",
        content: "I declare after all there is no enjoyment like reading!",
        content_id: "Kunyatakan bahwa tidak ada kenikmatan seperti membaca!",
        credit: "Pride and Prejudice",
    },
    {
        code: "newbook014",
        content: "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
        content_id: "Seseorang yang tidak menikmati novel bagus pasti sangat bodoh.",
        credit: "Northanger Abbey",
    },
    {
        code: "newbook015",
        content: "Whatever our souls are made of, his and mine are the same.",
        content_id: "Apa pun bahan pembentuk jiwa kami, jiwa kami sama.",
        credit: "Wuthering Heights",
    },
    {
        code: "newbook016",
        content: "He's more myself than I am.",
        content_id: "Ia lebih merupakan diriku daripada diriku sendiri.",
        credit: "Wuthering Heights",
    },
    {
        code: "newbook017",
        content: "I am no bird; and no net ensnares me.",
        content_id: "Aku bukan burung; tak ada jaring yang dapat menjeratku.",
        credit: "Jane Eyre",
    },
    {
        code: "newbook018",
        content: "I have not much pride, but I have a great deal of self-respect.",
        content_id: "Aku tidak memiliki banyak kesombongan, tetapi aku punya harga diri yang besar.",
        credit: "Jane Eyre",
    },
    {
        code: "newbook019",
        content: "I would always rather be happy than dignified.",
        content_id: "Aku selalu lebih memilih bahagia daripada bermartabat.",
        credit: "Jane Eyre",
    },
    {
        code: "newbook020",
        content: "Beware; for I am fearless, and therefore powerful.",
        content_id: "Waspadalah; aku tidak mengenal takut, dan karena itu aku kuat.",
        credit: "Frankenstein",
    },
    {
        code: "newbook021",
        content: "Nothing is so painful to the human mind as a great and sudden change.",
        content_id: "Tidak ada yang begitu menyakitkan bagi pikiran manusia selain perubahan besar dan mendadak.",
        credit: "Frankenstein",
    },
    {
        code: "newbook022",
        content: "The world was to me a secret which I desired to divine.",
        content_id: "Dunia bagiku adalah rahasia yang ingin kuungkap.",
        credit: "Frankenstein",
    },
    {
        code: "newbook023",
        content: "I am not afraid of storms, for I am learning how to sail my ship.",
        content_id: "Aku tidak takut badai, karena aku sedang belajar mengemudikan kapalku.",
        credit: "Little Women",
    },
    {
        code: "newbook024",
        content: "I am not afraid of storms, for I am learning how to steer my ship.",
        content_id: "Aku tidak takut badai, karena aku sedang belajar mengarahkan kapalku.",
        credit: "Little Women",
    },
    {
        code: "newbook025",
        content: "I'd rather take coffee than compliments just now.",
        content_id: "Saat ini aku lebih memilih kopi daripada pujian.",
        credit: "Little Women",
    },
    {
        code: "newbook026",
        content: "A well-read woman is a dangerous creature.",
        content_id: "Perempuan yang banyak membaca adalah makhluk yang berbahaya.",
        credit: "The Company of Wolves",
    },
    {
        code: "newbook027",
        content: "We are such stuff as dreams are made on.",
        content_id: "Kita terbuat dari bahan yang sama dengan impian.",
        credit: "The Tempest",
    },
    {
        code: "newbook028",
        content: "Books are mirrors: you only see in them what you already have inside you.",
        content_id: "Buku adalah cermin: kau hanya melihat di dalamnya apa yang sudah ada dalam dirimu.",
        credit: "The Shadow of the Wind",
    },
    {
        code: "newbook029",
        content: "It's no use going back to yesterday, because I was a different person then.",
        content_id: "Tidak ada gunanya kembali ke kemarin, karena saat itu aku adalah orang yang berbeda.",
        credit: "Alice's Adventures in Wonderland",
    },
    {
        code: "newbook030",
        content: "We are all born mad. Some remain so.",
        content_id: "Kita semua terlahir gila. Sebagian tetap demikian.",
        credit: "Waiting for Godot",
    },
    {
        code: "newbook031",
        content: "The only way out of the labyrinth of suffering is to forgive.",
        content_id: "Satu-satunya jalan keluar dari labirin penderitaan adalah memaafkan.",
        credit: "Looking for Alaska",
    },
    {
        code: "newbook032",
        content: "What is the point of being alive if you don't at least try to do something remarkable?",
        content_id: "Apa gunanya hidup jika kau tidak mencoba melakukan sesuatu yang luar biasa?",
        credit: "An Abundance of Katherines",
    },
    {
        code: "newbook033",
        content: "Some infinities are bigger than other infinities.",
        content_id: "Sebagian keabadian lebih besar daripada keabadian lainnya.",
        credit: "The Fault in Our Stars",
    },
    {
        code: "newbook034",
        content: "You don't get to choose if you get hurt in this world, but you do have some say in who hurts you.",
        content_id: "Kau tidak bisa memilih apakah akan terluka di dunia ini, tetapi kau bisa memilih siapa yang melukaimu.",
        credit: "The Fault in Our Stars",
    },
    {
        code: "newbook035",
        content: "Some people don't know how to love you because they don't know how to love themselves.",
        content_id: "Sebagian orang tidak tahu cara mencintaimu karena mereka tidak tahu cara mencintai diri sendiri.",
        credit: "The Perks of Being a Wallflower",
    },
    {
        code: "newbook036",
        content: "And in that moment, I swear we were infinite.",
        content_id: "Dan pada saat itu, aku bersumpah kami adalah keabadian.",
        credit: "The Perks of Being a Wallflower",
    },
    {
        code: "newbook037",
        content: "So many things become beautiful when you really look.",
        content_id: "Begitu banyak hal menjadi indah ketika kau benar-benar melihat.",
        credit: "The Secret Garden",
    },
    {
        code: "newbook038",
        content: "Where you tend a rose, a thistle cannot grow.",
        content_id: "Di tempat kau merawat mawar, onak tidak dapat tumbuh.",
        credit: "The Secret Garden",
    },
    {
        code: "newbook039",
        content: "All grown-ups were once children... but only few of them remember it.",
        content_id: "Semua orang dewasa pernah menjadi anak-anak, tetapi hanya sedikit yang mengingatnya.",
        credit: "The Little Prince",
    },
    {
        code: "newbook040",
        content: "It is such a secret place, the land of tears.",
        content_id: "Betapa rahasianya tempat itu, negeri air mata.",
        credit: "The Little Prince",
    },
    {
        code: "newbook041",
        content: "The most beautiful things in the world cannot be seen or touched.",
        content_id: "Hal-hal terindah di dunia tidak dapat dilihat atau disentuh.",
        credit: "The Little Prince",
    },
    {
        code: "newbook042",
        content: "All happy families are alike; each unhappy family is unhappy in its own way.",
        content_id: "Semua keluarga bahagia serupa; setiap keluarga tidak bahagia memiliki caranya sendiri.",
        credit: "Anna Karenina",
    },
    {
        code: "newbook043",
        content: "If you look for perfection, you'll never be content.",
        content_id: "Jika mencari kesempurnaan, kau tidak akan pernah merasa puas.",
        credit: "Anna Karenina",
    },
    {
        code: "newbook044",
        content: "The greatest happiness is to know the source of unhappiness.",
        content_id: "Kebahagiaan terbesar adalah mengetahui sumber ketidakbahagiaan.",
        credit: "Anna Karenina",
    },
    {
        code: "newbook045",
        content: "The mystery of life isn't a problem to solve, but a reality to experience.",
        content_id: "Misteri kehidupan bukanlah masalah untuk dipecahkan, melainkan kenyataan untuk dialami.",
        credit: "Dune",
    },
    {
        code: "newbook046",
        content: "Fear is the mind-killer.",
        content_id: "Rasa takut adalah pembunuh pikiran.",
        credit: "Dune",
    },
    {
        code: "newbook047",
        content: "A beginning is a very delicate time.",
        content_id: "Sebuah permulaan adalah waktu yang sangat rapuh.",
        credit: "Dune",
    },
    {
        code: "newbook048",
        content: "The future is always changing.",
        content_id: "Masa depan selalu berubah.",
        credit: "Dune",
    },
    {
        code: "newbook049",
        content: "The truth is seldom told during the nine-to-five hours.",
        content_id: "Kebenaran jarang diceritakan selama jam kerja sembilan sampai lima.",
        credit: "The Great Gatsby",
    },
    {
        code: "newbook050",
        content: "I hope she'll be a fool—that's the best thing a girl can be in this world.",
        content_id: "Aku berharap ia menjadi orang bodoh—itulah hal terbaik bagi seorang gadis di dunia ini.",
        credit: "The Great Gatsby",
    },
];


export default bookQuotes;