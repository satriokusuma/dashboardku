
let imageArr = [
                "url('assets/img/hero/hero-1.jpg')",
                "url('assets/img/hero/hero-2.png')",
                "url('assets/img/hero/hero-3.png')",
                "url('assets/img/hero/hero-4.png')",
                "url('assets/img/hero/hero-5.png')",
                "url('assets/img/hero/hero-6.jpg')",
                "url('assets/img/hero/hero-7.jpg')",
                "url('assets/img/hero/hero-8.jpg')",
                "url('assets/img/hero/hero-9.png')",
                "url('assets/img/hero/hero-10.jpg')",
                "url('assets/img/hero/hero-11.jpg')",
                "url('assets/img/hero/hero-12.png')",
                "url('assets/img/hero/hero-13.jpg')",
                "url('assets/img/hero/hero-14.jpg')",
                ];
let  quotesArr = [];

quotesArr[0] = "Genius is one percent inspiration and ninety-nine percent perspiration.";
quotesArr[1] = "You can observe a lot just by watching.";
quotesArr[2] = "A house divided against itself cannot stand";
quotesArr[3] = "Difficulties increase the nearer we get to the goal.";
quotesArr[4] = "Fate is in your hands and no one elses ";
quotesArr[5] = "Be the chief but never the lord.";
quotesArr[6] = "Nothing happens unless first we dream. ";
quotesArr[7] = "Well begun is half done";
quotesArr[8] = "Life is a learning experience, only if you learn";
quotesArr[9] = "Self-complacency is fatal to progress.";
quotesArr[10] = "Peace comes from within. Do not seek it without.";
quotesArr[11] = "What you give is what you get. ";
quotesArr[12] = "We can only learn to love by loving";
quotesArr[13] = "Life is change. Growth is optional. Choose wisely.";
quotesArr[14] = "You'll see it when you believe it.";
quotesArr[15] = "Today is the tomorrow we worried about yesterday.  ";
quotesArr[16] = "It's easier to see the mistakes on someone else's paper.";
quotesArr[17] = "Ideas are the beginning points of all fortunes.";
quotesArr[18] = "Trust yourself. You know more than you think you do.";
quotesArr[19] = "Well done is better than well said.";
quotesArr[20] = "Work out your own salvation. Do not depend on others.";
quotesArr[21] = "Learning is a treasure that will follow its owner everywhere";
quotesArr[22] = "Love is the flower you've got to let grow.";
quotesArr[23] = "I never think of the future. It comes soon enough.";
quotesArr[24] = "Important principles may, and must, be inflexible.";
quotesArr[25] = "Love all, trust a few, do wrong to none.";
quotesArr[26] = "Knowledge is a process of piling up facts; wisdom lies in their simplification.";
quotesArr[27] = "Life is like riding a bicycle. To keep your balance you must keep moving.";
quotesArr[28] = "We should all be thankful for those people who rekindle the inner spirit.";
quotesArr[29] = "Quality is never an accident; it is always the result of intelligent effort.";
quotesArr[30] = "If you want your life to be more rewarding, you have to change the way you think.";
quotesArr[31] = "The only difference between your abilities and others is the ability to put yourself in their shoes and actually try.";
quotesArr[32] = "Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them.";
quotesArr[33] = "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.";
quotesArr[34] = "A wise man can learn more from a foolish question than a fool can learn from a wise answer.";
quotesArr[35] = "The only thing to do with good advice is to pass it on. It is never of any use to oneself.";
quotesArr[36] = "here is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered.";
quotesArr[37] = "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.";
quotesArr[38] = "I find hope in the darkest of days, and focus in the brightest. I do not judge the universe.";
quotesArr[39] = "People take different roads seeking fulfilment and happiness. Just because theyre not on your road doesn't mean they've gotten lost.";
quotesArr[40] = "Many of life's failures are people who did not realize how close they were to success when they gave up.";
quotesArr[41] = "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.";
quotesArr[42] = "I am always doing that which I cannot do, in order that I may learn how to do it.";
quotesArr[43] = "Change is the law of life. And those who look only to the past or present are certain to miss the future.";
quotesArr[44] = "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.";
quotesArr[45] = "He who is fixed to a star does not change his mind.";
quotesArr[46] = "Let us always meet each other with smile, for the smile is the beginning of love. ";
quotesArr[47] = "Sometimes it is better to lose and do the right thing than to win and do the wrong thing.";
quotesArr[48] = "The best thing about the future is that it only comes one day at a time.";
quotesArr[49] = "A lot of times people look at the negative side of what they feel they can't do. I always look on the positive side of what I can do.";
quotesArr[50] = "The ladder of success is never crowded at the top.";
quotesArr[51] = "You have to think anyway, so why not think big?";
quotesArr[52] = "Be sure you put your feet in the right place, then stand firm";
quotesArr[53] = "If you want a thing done well, do it yourself.";
quotesArr[54] = "Never regret. If it's good, it's wonderful. If it's bad, it's experience.";




function displayDetails() {
    let randomImage = Math.floor(Math.random() * (imageArr.length - 0));
    let randomQuote = Math.floor(Math.random() * (quotesArr.length - 0));
    
    document.querySelector(".card-quote").style.backgroundImage = imageArr[randomImage];
    document.querySelector(".qoute").innerHTML = quotesArr[randomQuote];
  
}



var date = new Date();
    var tahun = date.getFullYear();
    var bulan = date.getMonth();
    var tanggal = date.getDate();
    var hari = date.getDay();
    var jam = date.getHours();
    var menit = date.getMinutes();
    var detik = date.getSeconds();

    if (jam < 10){
        jam = "0" + jam
        }
    if (menit < 10){
        menit = "0" + menit
        }

    switch(hari) {
    case 0: hari = "Minggu"; break;
    case 1: hari = "Senin"; break;
    case 2: hari = "Selasa"; break;
    case 3: hari = "Rabu"; break;
    case 4: hari = "Kamis"; break;
    case 5: hari = "Jum'at"; break;
    case 6: hari = "Sabtu"; break;
    }
    switch(bulan) {
    case 0: bulan = "Jan"; break;
    case 1: bulan = "Feb"; break;
    case 2: bulan = "Mar"; break;
    case 3: bulan = "Apr"; break;
    case 4: bulan = "Mei"; break;
    case 5: bulan = "Jun"; break;
    case 6: bulan = "Jul"; break;
    case 7: bulan = "Agust"; break;
    case 8: bulan = "Sep"; break;
    case 9: bulan = "Okt"; break;
    case 10: bulan = "Nov"; break;
    case 11: bulan = "Des"; break;
    }
    var tampilTanggal =  hari + ", " + tanggal + " " + bulan + " " + tahun;
    var tampilWaktu =jam + ":" + menit ;
    document.getElementById("datetime").innerHTML = tampilTanggal;
    document.getElementById("time").innerHTML = tampilWaktu;

    $('body').tooltip({
        selector: '[data-toggle="tooltip"]',
        placement:'top'
    });