const quotes = [
    {
        quote: "I can do all things through Christ who strengthens me.",
        verse: "Phillipians 4:13"
    }, 
    {
        quote: "Cast all your anxiety on him because he cares for you.",
        verse: "1 Peter 5:7"
    }, 
    {
        quote: '"For I know the plans I have for you,” declares the LORD, “plans to prosper you and not to harm you, plans to give you hope and a future."',
        verse: "Jeremiah 29:11"
    }, 
    {
        quote: "The LORD is my shepherd, I lack nothing",
        verse: "Psalm 23:1"
    }, 
    {
        quote: "Love your Lord your god with all your heart and with all your soul and with all you mind.",
        verse: "Matthew 22:37"
    }, 
    {
        quote: "When anxiety was great within me, your consolation brought me joy",
        verse: "Psalm 94:19"
    }, 
    {
        quote: "Trust in the LORD with all your heart and lean not on your own understanding",
        verse: "Proverbs 3:5"
    }, 
    {
        quote: "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me",
        verse: "Psalm 23:4"
    }, 
    {
        quote: 'Blessed are the poor in spirit for theirs is the kingdom of heaven',
        verse: 'Matthew 5:3'
    }, 
    {
        quote: 'For nothing will be impossible with God',
        verse: 'Luke 1:37'
    }
];

const quote = document.querySelector(".quote-place");
const verse = document.querySelector(".verse-place");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);


quote.innerHTML = todaysQuote.quote;
verse.innerText = todaysQuote.verse;