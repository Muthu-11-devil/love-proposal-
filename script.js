let proposal = "";
let i = 0;
let customMessage = "";


/* ==========================================
   GENERATE PROPOSAL
========================================== */

function generateProposal() {

    let yourName = document.getElementById("yourName").value.trim();
    let crushName = document.getElementById("crushName").value.trim();
    let years = parseFloat(document.getElementById("years").value);
    let firstLove = document.getElementById("firstLove").value;

    customMessage = document.getElementById("customMessage").value.trim();
    specialDate = document.getElementById("specialDate").value;

    /* Photo is read only once */
    let photoFile = document.getElementById("specialPhoto").files[0];

    if (yourName === "" || crushName === "" || isNaN(years) || years < 0) {
        alert("Please fill all the details.");
        return;
    }

    let templates = [];

    let duration = years === 1 ? "1 year" : `${years} years`;


    /* ==========================================
       LESS THAN 1 YEAR
    ========================================== */

    if (years < 1) {

        if (firstLove === "Yes") {

            templates = [

`Dear ${crushName},

Sometimes life surprises us in the most beautiful ways.

Even though it hasn't been a year, you've already become one of the most special people in my life.

Every smile of yours brightens my day.
Every conversation with you gives me another reason to smile.

You are my very first love, and I never imagined someone could make me feel this way.

Today, I just want to be honest about what is in my heart.

❤️ ${crushName},

Will you be my girlfriend?

Forever hopeful,
${yourName}`,

`Dear ${crushName},

Love doesn't always need years to become meaningful.

In this short time, you've filled my life with happiness and beautiful memories.

I find myself thinking about you more often than I expected, and every little moment with you has become special.

You are my first love, and I want to be brave enough to tell you how I feel.

❤️ ${crushName},

Will you be my girlfriend?

With love,
${yourName}`,

`Dear ${crushName},

I never knew that someone could become so important to me in such a short time.

Every conversation, every smile, and every little memory has made you more special to me.

Because you are my first love, these feelings are completely new to me.

But one thing is certain.

They are real.

❤️ ${crushName},

Would you give me the chance to be your boyfriend?

With all my heart,
${yourName}`,

`Dear ${crushName},

My first love has a name.

That name is you.

We may not have years of memories together yet, but the moments we already have mean more to me than I can explain.

You make ordinary days feel special.

You make me smile without even trying.

And I don't want to keep these feelings hidden anymore.

❤️ ${crushName},

Will you be my girlfriend?

Yours,
${yourName}`,

`Dear ${crushName},

Sometimes you meet someone and your heart simply knows that they are special.

That's how I feel about you.

It hasn't been a year, but you've already become an important part of my thoughts and my happiness.

You are my first love, and I would love to make many more beautiful memories with you.

❤️ ${crushName},

Will you start this beautiful journey with me?

With hope,
${yourName}`,

`Dear ${crushName},

I used to wonder what first love would feel like.

Now I know.

It feels like smiling when I see your name.

It feels like looking forward to every conversation.

It feels like wanting to make someone happy.

And somehow, all of those feelings lead me to you.

❤️ ${crushName},

Would you be my girlfriend?

With love,
${yourName}`

            ];

        } else {

            templates = [

`Dear ${crushName},

Meeting you changed something in my life.

Although it hasn't been very long, you've already become someone I deeply admire and care about.

Every moment with you feels special.

I don't want to compare you with anyone from my past.

I simply want to appreciate what we have now.

❤️ ${crushName},

Will you be my girlfriend?

With sincere feelings,
${yourName}`,

`Dear ${crushName},

I didn't expect someone to become this important to me so quickly.

But then I met you.

You have a way of making ordinary moments feel special.

Your smile, your personality, and the little conversations we share have become memories I truly value.

❤️ ${crushName},

Would you give us a chance?

Will you be my girlfriend?

Yours,
${yourName}`,

`Dear ${crushName},

Sometimes a new person comes into your life and creates a completely new feeling.

That's what happened when I met you.

It hasn't been long, but I already care about you more than I expected.

I don't want to keep wondering what could happen.

I want to ask.

❤️ ${crushName},

Will you be my girlfriend?

With hope,
${yourName}`,

`Dear ${crushName},

Life has taught me that every love story is different.

I don't want to compare our story with anything from the past.

I only want to appreciate what is happening right now.

And right now, you are someone very special to me.

❤️ ${crushName},

Would you start a new chapter with me?

Will you be my girlfriend?

${yourName}`,

`Dear ${crushName},

You became special to me without even trying.

Every conversation with you makes my day a little brighter.

Even though our story is still young, I already find myself looking forward to creating many more memories with you.

❤️ ${crushName},

Would you be my girlfriend?

With all sincerity,
${yourName}`,

`Dear ${crushName},

Maybe love isn't about finding the same feeling twice.

Maybe it is about meeting someone who creates a completely new feeling.

You are that person for me.

I care about you, I appreciate you, and I would love to see where our story could go.

❤️ ${crushName},

Will you be my girlfriend?

Yours,
${yourName}`

            ];

        }

    }


    /* ==========================================
       1 TO 3 YEARS
    ========================================== */

    else if (years <= 3) {

        if (firstLove === "Yes") {

            templates = [

`Dear ${crushName},

For the past ${duration}, you've been the reason behind countless smiles.

Every memory with you is precious.

You've shown me what true love feels like.

You are my first love, and I will always treasure that.

❤️ ${crushName},

Will you be my girlfriend?

Forever,
${yourName}`,

`Dear ${crushName},

Some people search their whole lives for someone special.

I found that person in you.

These ${duration} have been some of the happiest moments of my life.

You have become such an important part of my story.

❤️ ${crushName},

Will you be my girlfriend?

With love,
${yourName}`,

`Dear ${crushName},

For ${duration}, my feelings for you have continued to grow.

At first I didn't understand what was happening.

Then I realized how often I thought about you and how happy I felt whenever you were around.

You became my first love.

❤️ ${crushName},

Would you take my hand and start a new chapter with me?

${yourName}`,

`Dear ${crushName},

When I look back at the past ${duration}, so many of my favorite memories have one thing in common.

You were there.

You became my first love and someone whose happiness genuinely matters to me.

I don't want to hide my feelings anymore.

❤️ ${crushName},

Will you be my girlfriend?

With all my heart,
${yourName}`,

`Dear ${crushName},

Love is sometimes found in the smallest moments.

A smile.

A conversation.

A memory.

A simple moment together.

For ${duration}, those little moments have slowly become something much bigger in my heart.

You are my first love.

❤️ ${crushName},

Would you give this love a chance?

Will you be my girlfriend?

${yourName}`,

`Dear ${crushName},

For ${duration}, you have been part of some of the most meaningful moments of my life.

You have made me smile, laugh, and look forward to tomorrow.

As my first love, you will always have a special place in my heart.

But I don't want this to remain only a feeling.

❤️ ${crushName},

Will you be my girlfriend?

Forever hopeful,
${yourName}`

            ];

        } else {

            templates = [

`Dear ${crushName},

Life introduced me to many people, but meeting you felt different.

These ${duration} have made me realize how wonderful you truly are.

You have become someone I genuinely care about.

❤️ ${crushName},

Will you be my girlfriend?

${yourName}`,

`Dear ${crushName},

For ${duration}, you've slowly become someone very special to me.

Every conversation and every memory has made me appreciate you more.

I don't want to compare our story with anything from the past.

I want our story to be ours.

❤️ ${crushName},

Will you be my girlfriend?

With sincerity,
${yourName}`,

`Dear ${crushName},

Over ${duration}, you have become part of my favorite memories.

You make ordinary days brighter and simple conversations memorable.

I don't want to keep wondering what might happen if I tell you how I feel.

❤️ ${crushName},

Would you give us a chance?

Will you be my girlfriend?

${yourName}`,

`Dear ${crushName},

I have learned that every relationship creates its own story.

For ${duration}, you have been writing a beautiful part of mine.

You matter to me more than I probably say.

And today I want to be honest.

❤️ ${crushName},

Will you be my girlfriend?

With love,
${yourName}`,

`Dear ${crushName},

Some people become memories.

Some become part of the future.

For ${duration}, you've become someone I hope will be part of mine.

You have brought happiness and countless smiles into my life.

❤️ ${crushName},

Would you start the next chapter with me?

${yourName}`,

`Dear ${crushName},

For ${duration}, you've given me countless reasons to smile.

I've learned that love doesn't need to be compared with the past.

What matters is what we build from this moment forward.

And I want to build something beautiful with you.

❤️ ${crushName},

Will you be my girlfriend?

Yours,
${yourName}`

            ];

        }

    }


    /* ==========================================
       MORE THAN 3 YEARS
    ========================================== */

    else {

        if (firstLove === "Yes") {

            templates = [

`Dear ${crushName},

For ${duration}, you've lived in my heart.

Every day my feelings have grown stronger.

You are my first love, my greatest happiness, and someone I hope to share many more beautiful moments with.

❤️ ${crushName},

Will you be my girlfriend?

Forever yours,
${yourName}`,

`Dear ${crushName},

Time has passed, but my feelings have remained.

For ${duration}, you have been part of my thoughts, my memories, and my heart.

You became my first love, and that is something I will always treasure.

I don't want to simply look back at our memories.

I want to create more.

❤️ ${crushName},

Will you be my girlfriend?

With all my heart,
${yourName}`,

`Dear ${crushName},

Some feelings disappear with time.

Mine became stronger.

For ${duration}, you've remained incredibly special to me.

You were my first love, and even after all this time, I still find myself hoping for something more.

❤️ ${crushName},

Would you give us a chance?

Will you be my girlfriend?

${yourName}`,

`Dear ${crushName},

If our memories were pages in a book, we would already have so many beautiful chapters.

For ${duration}, you've been part of my favorite memories.

You are my first love, and I want to write the next chapter with you.

❤️ ${crushName},

Will you be my girlfriend?

Forever hopeful,
${yourName}`,

`Dear ${crushName},

There are people who change our lives without realizing it.

You are one of those people.

For ${duration}, you have been a constant thought in my heart.

You became my first love, and I would love for you to become part of my future too.

❤️ ${crushName},

Will you be my girlfriend?

With love,
${yourName}`,

`Dear ${crushName},

I sometimes wonder how different my life would be if I had never met you.

Then I realize I don't want to imagine it.

For ${duration}, you've been part of a story that means so much to me.

❤️ ${crushName},

Would you let this first love become the beginning of something beautiful?

Will you be my girlfriend?

${yourName}`

            ];

        } else {

            templates = [

`Dear ${crushName},

For ${duration}, you've made my life brighter.

Thank you for every smile, every laugh, and every beautiful memory.

Today I want to stop hiding my feelings.

❤️ ${crushName},

Will you be my girlfriend?

With all my love,
${yourName}`,

`Dear ${crushName},

For ${duration}, you have become someone incredibly important to me.

Life has taught me many things, but one thing I know for sure is that you are someone I never want to take for granted.

❤️ ${crushName},

Would you be my girlfriend?

With sincere feelings,
${yourName}`,

`Dear ${crushName},

Time has a way of showing us what truly matters.

For ${duration}, you've remained someone I deeply appreciate.

I don't want to compare our story with anything that came before.

I want our future to belong to us.

❤️ ${crushName},

Will you be my girlfriend?

${yourName}`,

`Dear ${crushName},

For ${duration}, you've been part of countless memories.

Every conversation, every laugh, and every little moment has become something I treasure.

I would love to create many more memories with you.

❤️ ${crushName},

Will you be my girlfriend?

With hope,
${yourName}`,

`Dear ${crushName},

Some people arrive in our lives and become memories.

Others arrive and become part of the story we keep writing.

For ${duration}, you've become the second kind of person for me.

❤️ ${crushName},

Would you let me be your boyfriend?

With all my heart,
${yourName}`,

`Dear ${crushName},

I don't know exactly what tomorrow will bring.

But after ${duration} of knowing you, I know one thing.

I want you to be part of it.

You have become someone I care about deeply.

❤️ ${crushName},

Will you be my girlfriend?

Forever hopeful,
${yourName}`

            ];

        }

    }


    /* ==========================================
       SELECT RANDOM PROPOSAL
    ========================================== */

    proposal =
        templates[
            Math.floor(
                Math.random() * templates.length
            )
        ];


    /* ==========================================
       RESET LETTER
    ========================================== */

    document.getElementById("proposalText").textContent = "";

    document.getElementById("proposalQuestion").classList.add("hidden");

    document.getElementById("answerMessage").textContent = "";


    /* ==========================================
       PERSONAL MESSAGE
    ========================================== */

    let messageBox =
        document.getElementById("customMessageDisplay");


    if (customMessage !== "") {

        messageBox.textContent =
            "💌 " + customMessage;

        messageBox.classList.remove("hidden");

    } else {

        messageBox.classList.add("hidden");

    }


    /* ==========================================
       PHOTO
    ========================================== */

    let photoContainer =
        document.getElementById("photoContainer");


    if (photoFile) {

        let reader = new FileReader();


        reader.onload = function(event) {

            document.getElementById("proposalPhoto").src =
                event.target.result;

            photoContainer.classList.remove("hidden");

        };


        reader.readAsDataURL(photoFile);

    } else {

        photoContainer.classList.add("hidden");

    }


    /*  ==========================================
       LOVE SCORE
    ========================================== */

    let score =
        Math.floor(Math.random() * 21) + 80;


    document.getElementById("scoreSection")
        .classList.remove("hidden");


    let scoreFill =
        document.getElementById("scoreFill");


    scoreFill.style.width = "0%";
    scoreFill.textContent = "0%";


    setTimeout(function() {

        scoreFill.style.width = score + "%";
        scoreFill.textContent = score + "%";

    }, 100);


    if (score >= 95) {

        document.getElementById("scoreMessage").textContent =
            "🔥 Amazing! Your love is incredibly strong!";

    } else if (score >= 90) {

        document.getElementById("scoreMessage").textContent =
            "💖 Wonderful! Your love is looking beautiful!";

    } else {

        document.getElementById("scoreMessage").textContent =
            "💕 Sweet! Your love story has a special spark!";

    }


    /* ==========================================
       SHOW ENVELOPE
    ========================================== */

    document.getElementById("envelopeSection")
        .classList.remove("hidden");

}


/* ==========================================
   OPEN LETTER
========================================== */

function openLetter() {

    document.getElementById("envelopeSection")
        .classList.add("hidden");


    document.getElementById("letterSection")
        .classList.remove("hidden");


    document.getElementById("proposalText")
        .textContent = "";


    i = 0;


    typeWriter();

}


/* ==========================================
   TYPEWRITER
========================================== */

function typeWriter() {

    if (i < proposal.length) {

        document.getElementById("proposalText")
            .textContent += proposal.charAt(i);

        i++;

        setTimeout(typeWriter, 25);

    } else {

        setTimeout(function() {

            document.getElementById("proposalQuestion")
                .classList.remove("hidden");

        }, 500);

    }

}


/* ==========================================
   DOWNLOAD PROPOSAL
========================================== */

function downloadTxt() {

    let text = proposal;


    if (customMessage !== "") {

        text +=
            "\n\n💌 Personal Message:\n" +
            customMessage;

    }


    if (specialDate !== "") {

        let formatted =
            new Date(
                specialDate + "T00:00:00"
            ).toLocaleDateString(
                undefined,
                {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                }
            );


        text +=
            "\n\n💕 Special Date: " +
            formatted;

    }


    let blob =
        new Blob(
            [text],
            {
                type: "text/plain"
            }
        );


    let link =
        document.createElement("a");


    link.href =
        URL.createObjectURL(blob);


    link.download =
        "Love_Proposal.txt";


    link.click();


    URL.revokeObjectURL(link.href);

}


/* ==========================================
   SHARE PROPOSAL
========================================== */

function shareProposal() {

    let text = proposal;


    if (customMessage !== "") {

        text +=
            "\n\n💌 Personal Message:\n" +
            customMessage;

    }


    if (navigator.share) {

        navigator.share({

            title: "Love Proposal ❤️",

            text: text

        }).catch(function(error) {

            console.log(
                "Share cancelled",
                error
            );

        });

    } else if (navigator.clipboard) {

        navigator.clipboard.writeText(text)
            .then(function() {

                alert(
                    "Proposal copied! ❤️"
                );

            });

    } else {

        alert(
            "Sharing is not supported on this browser."
        );

    }

}


/* ==========================================
   FEEDBACK
========================================== */

function submitFeedback() {

    let feedback =
        document.getElementById("feedbackText")
        .value.trim();


    if (feedback === "") {

        alert(
            "Please write some feedback first ❤️"
        );

        return;

    }


    document.getElementById("feedbackMessage")
        .textContent =
        "Thank you for your feedback! 💖";


    document.getElementById("feedbackText")
        .value = "";

}


/* ==========================================
   MUSIC
========================================== */

function toggleMusic() {

    let music =
        document.getElementById("bgMusic");


    let button =
        document.getElementById("musicButton");


    if (music.paused) {

        music.play()
            .then(function() {

                button.textContent =
                    "🔊 Music On";

            })
            .catch(function() {

                alert(
                    "Music could not play. Make sure love-music.mp3 is in the same folder as index.html."
                );

            });

    } else {

        music.pause();

        button.textContent =
            "🎵 Play Music";

    }

}


/* ==========================================
   FLOATING HEARTS
========================================== */

function createHeart() {

    let heart =
        document.createElement("div");


    heart.className =
        "floating-heart";


    heart.textContent =
        Math.random() > 0.5
        ? "❤️"
        : "💕";


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        15 + Math.random() * 20 + "px";


    heart.style.animationDuration =
        5 + Math.random() * 5 + "s";


    document.getElementById("hearts")
        .appendChild(heart);


    setTimeout(function() {

        heart.remove();

    }, 10000);

}


setInterval(createHeart, 700);
/* ==========================================
   LOVE STORY GENERATOR
========================================== */

function generateLoveStory(){

    let meet =
        document.getElementById("meetPlace")
        .value.trim();

    let memory =
        document.getElementById("favoriteMemory")
        .value.trim();

    let dream =
        document.getElementById("dreamPlace")
        .value.trim();

    let yourName =
        document.getElementById("yourName")
        .value.trim();

    let crushName =
        document.getElementById("crushName")
        .value.trim();


    if(
        meet === "" ||
        memory === "" ||
        dream === ""
    ){

        alert(
            "Please fill all three story details ❤️"
        );

        return;

    }


    let story =
`Once upon a time, ${yourName || "someone special"} met ${crushName || "someone wonderful"} at ${meet}.

What started as a simple moment slowly became something unforgettable.

Among all the memories they created together, one remained especially precious:

"${memory}"

And perhaps the most beautiful part of their story is that it isn't finished yet.

One day, they dream of making another unforgettable memory together in ${dream}.

Because some stories aren't meant to have an ending...

They are meant to become beautiful beginnings. ❤️`;


    let storyBox =
        document.getElementById("loveStory");

    storyBox.textContent = story;

    storyBox.classList.remove("hidden");

}


/* ==========================================
   STAR MESSAGES
========================================== */

function starMessage(number){

    let messages = [

        "You are someone's favorite thought. ❤️",

        "Some memories are worth keeping forever. 💕",

        "A beautiful story can start with one simple moment. ✨",

        "Someone out there is lucky to have you. 🌟",

        "Love makes ordinary moments extraordinary. 💖",

        "Your story is still being written... 🌌"

    ];


    document.getElementById("starMessage")
        .textContent =
        messages[number - 1];

}