// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"What message is needed when heart speaks to heart?"
];

var elizaFinals = [
"Under whatever name or form we worship It, It leads us on to knowledge of the nameless, formless Absolute. Yet, to see one's true Self in the Absolute, to subside into It and be one with It, this is the true Knowledge of the Truth."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
    "True silence is really endless speech.",
"There is no greater mystery than this: being Reality ourselves, we seek to gain Reality.",
"I want you to dive consciously into the Self, i.e., into the Heart.",
"Unless one is happy, one cannot bestow happiness on others.",
"We see only the script and not the paper on which the script is written. The paper is there, whether the script is on it or not. To those who look upon the script as real, you have to say that it is unreal--an illusion--since it rests upon paper. The wise person looks upon both paper and script as one.",
"Forgetfulness of your real nature is true death; remembrance of it is rebirth",
"Truly there is no cause for you to be miserable and unhappy. You yourself impose limitations on your true nature of infinite Being and then weep that you are but a finite creature. Then you take up this or that sadhana to transcend the nonexistent limitations. But if your sadhana itself assumes the existence of the limitations, how can it help you to transcend them? Hence I say know that you are really the infinite, pure Being, the Self Absolute. You are always that Self and nothing but that Self. Therefore, you can never be really ignorant of the Self; your ignorance is merely a formal ignorance... Know then that true Knowledge does not create a new Being for you; it only removes your 'ignorant ignorance. Bliss is not added to your nature; it is merely revealed as your true and natural state, eternal and imperishable. The only way to be rid of your grief is to know and be the Self.",
"Even if you try not to do your duty you will be perforce obliged to do it. Let the body complete the task for which it came into being. Sri Krishna also says in the Gita, whether Arjuna liked it or not he would be forced to fight. When there is work to be done by you, you cannot keep away; nor can you continue to do a thing when you are not required to do it, that is to say, when the work allotted to you has been done. In short, the work will go on and you must take your share in it -- the share which is allotted to you. [Question: How can it be done? Reply:] Like an actor playing his part in a drama: free from duality.",
"In accordance with the prarabdha of each, the One whose function it is to ordain makes each to act. What will not happen will never happen, whatever effort one may put forth. And what will happen will not fail to happen, however much one may seek to prevent it. This is certain. The part of wisdom therefore is to stay quiet.",
"Wanting to reform the world without discovering one's true self is like trying to cover the world with leather to avoid the pain of walking on stones and thorns. It is much simpler to wear shoes.",
"Eating, bathing, going to the toilet, talking, thinking, and many other activities related to the body are all work. How is it that the performance of one particular act is alone (considered) work? To be still is to be always engaged in work. To be silent is to be always talking.",
"We loosely talk of Self-realization, for lack of a better term. But how can one realize or make real that which alone is real? All we need to do is to give up our habit of regarding as real that which is unreal. All religious practices are meant solely to help us do this. When we stop regarding the unreal as real, then Reality alone will remain, and we will be That.",
"It is false to speak of realization. What is there to realize? The real is as it is always. We are not creating anything new or achieving something which we did not have before. The illustration given in books is this. We dig a well and create a huge pit. The space in the pit or well has not been created by us. We have just removed the earth which was filling the space there. The space was there then and is also there now. Similarly we have simply to throw out all the age-long sanskaras which are inside us. When all of them have been given up, the Self will shine alone.",
"Relative knowledge pertains to the mind and not to the Self. It is therefore illusory and not permanent. Take a scientist, for instance. He formulates a theory that the Earth is round and goes on to prove it on an incontrovertible basis. When he falls asleep the whole idea vanishes; his mind is left a blank. What does it matter whether the world remains round or flat when he is asleep? So you see the futility of all such relative knowledge. One should go beyond relative knowledge and abide in the Self. Real knowledge is such experience, and not apprehension by the mind.",
"Your own Self-realization is the greatest service you can render the world.",
"Why should you trouble yourself about the future? You do not even properly know about the present. Take care of the present, the future will take care of itself.",
"There are no impediments to meditation. The very thought of such obstacles is the greatest impediment.",
"Ishta-devata and Guru are aids - very powerful aids on this path. But an aid to be effective requires your effort also. Your effort is a sine qua non. It is you who should see the sun. Can spectacles and the sun see for you? You yourself have to see your true nature. Not much aid is required for doing it!",
"Existence of Isvara follows our conception of Isvara. Let us first know whose concept He is. The concept will be only according to the one who conceives. Find out who you are and the other problem will solve itself.",
"If one watches whence the notion 'I' arises, the mind gets absorbed there; that is tapas. When a mantra is repeated, if one watches whence that mantra sound arises, the mind gets absorbed there; that is tapas.",
"Silence is most powerful. Speech is always less powerful than silence.",
"Seek the seeker.",
"Self-Enquiry paraphrased, as spoken by Ram Dass in the film 'Abide as the Self.'",
"Non-action is unceasing activity. The sage is characterized by eternal and intense activity. His stillness is like the apparent stillness of a fast rotating gyroscope.",
"The world is so unhappy because it is ignorant of the true Self. Man's real nature is happiness. Happiness is inborn in the true Self. Man's search for happiness is an unconscious search for his true Self. The true Self is imperishable; therefore, when a man finds it, he finds a happiness which does not come to an end.",
"Know Thyself. All else will be known to thee of its own accord. Discriminate between the undying, unchanging, all-pervading, infinite Atma and the ever-changing, phenomenal and perishable universe and body. Enquire, 'Who am I?' Make the mind calm. Free yourself from all thoughts other than the simple thought of the Self or Atma. Dive deep into the chambers of your heart. Find out the real, infinite 'I'. Rest there peacefully for ever and become identical with the Supreme Self.",
"The Self is only one. Do you feel hurt if you blame yourself or scorn yourself for your errors? If you hold the Self there is no second person to scorn you. When you see the world you have lost hold of the Self. On the contrary, hold the Self and the world will not appear.",
"In the Heart's cavity, the sole Brahman as an ever-persisting 'I' shines direct in the form of the Self. Into the Heart enter thyself, with mind in search or in deeper plunge. Or by restraint of life-movement be firmly poised in the Self.",
"Let knowledge be guessed by the sign of equality to all beings.",
"… just as the limb gives assistance to the body, likewise the member of the community helps the community and reigns supreme.",
"It is said that a good brotherly feeling with a sense of equality is the supreme goal to be reached collectively by all members of the community.",
"By happy fraternity amongst themselves, the embodied beings get the supreme peace. Then all this earth shines like one house. When the men, the embodied beings treat each other with equal respect and have good brotherly feelings amongst themselves, great peace and harmony abound. Then all this earth shines like one house. The whole world shines like the one dwelling house of the entire human family.",
"[A member of the community] should conduct himself always by word, mind and body in such a fashion that it results in help to the society. He should also make his own men understand this.",
"Having set one's family in consonance with the community, he should make his family prosperous to ensure the prosperity of the community.",
"Peace is for the purification of one's mind. Power is for the growth of the community. Having established the community with power, one should then establish supreme peace."
  ]]
]],
["DANM", 0, [
 ["*", [
     "The Science of the Heart http://en.wikiquote.org/wiki/Ramana_Maharshi"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof