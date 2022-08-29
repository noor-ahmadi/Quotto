import React from "react";
import "./Dropdown.css";

const Dropdown = () => {
  var angry = [
    "“Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.” \n― Buddha",
    '"Never respond to an angry person with a fiery comeback, even if he deserves it...Don\'t allow his anger to become your anger." \n― Bohdi Sanders',
    '"You can’t selectively numb your anger, any more than you can turn off all lights in a room, and still expect to see the light." \n― Shannon L. Alder',
    '"Use your anger for good. Anger to people is like gas to the automobile - it fuels you to move forward and get to a better place. Without it, we would not be motivated to rise to a challenge. It is an energy that compels us to define what is just and unjust." \n― Arun Gandhi',
    '"If any one is angry with you, meet his anger by returning benefits for it: a quarrel which is only taken up on one side falls to the ground: it takes two men to fight." \n― Seneca',
    '"The cause of anger is the belief that we are injured; this belief, therefore, should not be lightly entertained. We ought not to fly into a rage even when the injury appears to be open and distinct: for some false things bear the semblance of truth. We should always allow some time to elapse, for time discloses the truth." \n― Seneca',
    '"Don\'t allow little things to annoy you. At best, you are poisoning your soul. At worst, you are poisoning everyone around you." \n― Wayne Gerard Trotman',
    '"When we start to investigate in greater detail why someone is really angry, we begin to see why this person is truly sad. The same thing that has made you sad, provoked your anger. The more we think about this, the easier it is to see that anger is nothing more than another way of expressing the sadness on the inside." \n― George Blacken',
    '"The blunderer who expects to receive a searing lash of someone\'s rage , but instead receives a breeze of their tranquilly is swamped immediately with unfathomable shame and misery." \n― Dr. Anhad Kaur Suri',
    '"The quicker a person forgives other people for mistakes the sooner a person moves forward to live their own life free of disabling anger, resentment, bitterness, and regret." \n― Kilroy J. Oldster',
    '"Anger becomes righteous when you use it to defend the rights of another, without nursing any selfish motive." \n― Dada J. P. Vaswani',
    '"Anybody can become angry-that is easy; but to be angry with the right person, and to the right degree, and at the right time, and for the right purpose, and in the right way-that is not within everybody’s power and is not easy." \n― Aristotle',
  ];
  var depressed = [
    '"I want to wake up in this world knowing that you\'re still in it."\n— Somebody in your life',
    '"The woods are lovely, dark and deep, but I have promised to keep, and miles to go before I sleep, and miles to go before I sleep." \n— Robert Frost',
    '"It will be sunny one day" \n— Stephen Fry',
    '"We suffer more often in imagination than in reality" \n—Seneca',
    '"Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad." \n— Henry Wadsworth Longfellow',
    '"Do you not see how necessary a world of pains and troubles is to school an intelligence and make it a soul?" \n— John Keats',
    '"Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved." \n— Helen Keller',
    '"Man is fond of counting his troubles, but he does not count his joys. If he counted them up as he ought to, he would see that every lot has enough happiness provided for it."  \n— Fyodor Dostoevsky',
    '"Ring the bells that still can ring. Forget your perfect offering. There is a crack, a crack in everything. That\'s how the light gets in." \n— Leonard Cohen',
    '"If you could only sense how important you are to the lives of those you meet; how important you can be to the people you may never even dream of. There is something of yourself that you leave at every meeting with another person." \n— Fred Rogers',
    '"The greatest degree of inner tranquility comes from the development of love and compassion. The more we care for the happiness of others, the greater is our own sense of well-being." \n— Tenzin Gyatso',
    '"There are far, far better things ahead than anything we leave behind." \n— C.S. Lewis',
  ];
  var anxious = [
    "\"Worrying is carrying tomorrow's load with today's strength- carrying two days at once. It is moving into tomorrow ahead of time. Worrying doesn't empty tomorrow of its sorrow, it empties today of its strength.\"\n— Corrie Ten Boom",
    '"If you want to conquer the anxiety of life, live in the moment, live in the breath." \n— Amit Ray',
    '"Man is not worried by real problems so much as by his imagined anxieties about real problems"\n— Epictetus',
    "\"To venture causes anxiety, but not to venture is to lose one's self.... And to venture in the highest is precisely to be conscious of one's self.\" \n— Søren Kierkegaard",
    '"Do not let your difficulties fill you with anxiety, after all it is only in the darkest nights that stars shine more brightly." \n— Ali Ibn Abi Talib AS',
    "\"Anxiety's like a rocking chair. It gives you something to do, but it doesn't get you very far.\" \n— Jodi Picoult",
    '"It’s OKAY to be scared. Being scared means you’re about to do something really, really brave."\n— Mandy Hale',
    "\"Feelings don't try to kill you, even the painful ones. Anxiety is a feeling grown too large. A feeling grown aggressive and dangerous. You're responsible for its consequences, you're responsible for treating it. But...you're not responsible for causing it. You're not morally at fault for it. No more than you would be for a tumor.\" \n— Patrick Ness",
    '"Trust yourself. You’ve survived a lot, and you’ll survive whatever is coming." \n— Robert Tew',
    '"Peace is the result of retraining your mind to process life as it is, rather than as you think it should be."\n— Wayne W. Dyer',
    '"To suffer before it is necessary is to suffer more than is necessary."\n— Seneca',
    '"This too, shall pass."\n— Abraham Lincoln',
  ];
  var insecure = [
    '"Happiness and freedom begin with a clear understanding of one principle. Some things are within our control. And some things are not." \n— Epictetus',
    '"Be who you are and say what you feel, because those who mind don’t matter, and those who matter don’t mind."\n— Dr. Seuss',
    '"Someone who never made a mistake never tried anything new." \n— Albert Einstein',
    '"Often those that criticise others reveal what he himself lacks."\n— Shannon L. Alder',
    '"We\'re going to have to let truth scream louder to our souls than the lies that have infected us."\n— Beth Moore',
    "\"If you're waiting until you feel talented enough to make it, you'll never make it.\"\n— Criss Jami",
    '"We are more often frightened than hurt; and we suffer more from imagination than from reality."\n— Seneca',
    '"Knowing not everyone sees a certain situation as catastrophic should make us more aware that the "awfulness" of it derives from our own thinking, our value judgments, and our way of responding rather than the thing itself."\n— Donald Robertson',
    "Today I escaped anxiety. Or no, I discarded it, because it was within me, in my own perceptions \n— not outside.\n— Marcus Aurelius",
    '"Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present."\n— Marcus Aurelius',
    '"Memory brings back the agony of fear while foresight brings it on prematurely. No one confines his unhappiness to the present."\n— Seneca',
    '"I still have pretty much the same fears I had as a kid. I’m not sure I’d want to give them up; a lot of these insecurities fuel the movies I make." \n— Steven Spielberg',
  ];
  var happy = [
    '"Most folks are as happy as they make up their minds to be."\n— Abraham Lincoln',
    '"The happiness of your life depends upon the quality of your thoughts: therefore, guard accordingly, and take care that you entertain no notions unsuitable to virtue and reasonable nature."\n— Marcus Aurelius',
    '"There is only one happiness in this life, to love and be loved."\n— George Sand',
    '"For every minute you are angry you lose sixty seconds of happiness."\n— Ralph Waldo Emerson',
    '"Love is that condition in which the happiness of another person is essential to your own."\n— Robert A. Heinlein',
    '"Time you enjoy wasting is not wasted time."\n— Marthe Troly-Curtin',
    '"You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life."\n— Albert Camus',
    '"Happiness is when what you think, what you say, and what you do are in harmony."\n— Mahatma Gandhi',
    '"There\'s nothing like deep breaths after laughing that hard. Nothing in the world like a sore stomach for the right reasons."\n— Stephen Chbosky',
    '"Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely."\n— Roy T. Bennett',
    '"They say a person needs just three things to be truly happy in this world: someone to love, something to do, and something to hope for."\n— Tom Bodett',
    '"Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom."\n— Marcel Proust',
  ];
  var envious = [
    '"The envious man grows lean at the success of his neighbor."\n— Horace',
    '"A man shall never be enriched by envy."\n— Thomas Draxe',
    '"Envy always implies conscious inferiority wherever it resides."\n— Pliny',
    '"Resentment is like drinking poison and waiting for the other person to die. "\n— Carrie Fisher',
    '"Our envy always lasts longer than the happiness of those we envy."\n— François Duc de La Rochefoucauld',
    '"There is no disappointment so numbing...as someone no better than you achieving more."\n— Joseph Heller',
    '"Comparison is the thief of joy. Do not succumb to it."\n— Theodore Roosevelt',
    '"When you have wit of your own, it\'s a pleasure to credit other people for theirs."\n— Criss Jami',
    '"Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind."\n— Buddha',
    '"The envious die not once, but as oft as the envied win applause."\n— Baltasar Gracián',
    '"A sound heart is the life of the flesh: but envy the rottenness of the bones."\n— Proverbs 14:30',
    '"Envy is a littleness of soul, which cannot see beyond a certain point, and if it does not occupy the whole space, feels itself excluded."\n— William Hazlitt',
  ];

  const [count, setCount] = React.useState(0);
  const options = [
    { label: "Click Me", value: "Choose the emotion you are feeling at this moment and Quotto will give you some meaningful words to hopefully help!" },
    { label: "Angry", value: angry[count] },
    {
      label: "Anxious",
      value: anxious[count],
    },
    {
      label: "Insecure",
      value: insecure[count],
    },
    { label: "Happy", value: happy[count] },
    { label: "Envious", value: envious[count] },
    {
      label: "Depressed",
      value: depressed[count],
    },
  ];

  const [value, setValue] = React.useState("Choose the emotion you are feeling at this moment and Quotto will give you some meaningful words to hopefully help! \n~~ More emotions coming soon~~");

  const incrementCount = () => {
    setCount(count + 1);
    if (count >= 11) {
      setCount(0);
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <section>
      <label>
        <select
          className="dropbtn"
          value={value}
          onChange={handleChange}
          onMouseOver={incrementCount}
        >
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>

      <p className="line">{value}</p>
    </section>
  );
};

export default Dropdown;
