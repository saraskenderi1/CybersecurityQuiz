const questionData = {
    easy: [
        { 
            question: "1.What is a strong password?", 
            options: ["123456", "password123", "Complex@123", "qwerty"],
            answer: 2,
            explanation: "Strong passwords are essential for account security. A combination of upper- and lowercase letters, numbers, and special symbols makes passwords harder to guess or crack using brute-force methods. Avoid predictable patterns like names or sequential numbers."
        },
        { 
            question: "2.What is phishing?", 
            options: ["A method to encrypt files", "Hacking passwords", "Fraudulent attempts to steal personal information", "Software update"],
            answer: 2,
            explanation: "Phishing is a type of cyberattack where attackers impersonate legitimate entities, like banks or email providers, to trick users into providing sensitive information such as passwords, credit card details, or personal data."
        },
        {
            question: "3.What is malware?",
            options: ["Software that protects your device","Malicious software designed to harm systems","Hardware issue","A gaming app"],
            answer: 1,
            explanation: "Malware, short for “malicious software,” includes viruses, worms, ransomware, and spyware. It is designed to damage, disrupt, or steal data from a computer or network."
        },
        {
            question: "4.What does 'HTTPS' in a URL signify?",
            options: ["High speed","Secure connection","No viruses","Slow connection"],
            answer: 1,
            explanation: "HTTPS (Hypertext Transfer Protocol Secure) ensures data transmitted between your browser and a website is encrypted. This prevents attackers from intercepting sensitive information like credit card details or passwords."
        },
        {
            question: "5.What is two-factor authentication?",
            options: ["Using two passwords","A double-layer security system","Using the same password twice","Sharing passwords with others"],
            answer: 1,
            explanation: "Two-factor authentication (2FA) adds an additional layer of security by requiring two forms of verification, such as a password and a one-time code sent to your phone, making it harder for attackers to gain access."
        },
        {
            question: "6.Why should you log out of public computers?",
            options: ["To save battery","To prevent unauthorized access","To delete data","To refresh the system"],
            answer: 1,
            explanation: "If you don't log out, the next user could access your accounts or sensitive information. Always log out of accounts and clear the browser’s cache when using public or shared devices."
        },
        {
            question: "7.What does a firewall do?",
            options: ["Protects against overheating","Stores passwords","Speeds up your internet","Monitors and blocks unwanted traffic"],
            answer: 3,
            explanation: "A firewall acts as a barrier between your computer and the internet. It monitors incoming and outgoing traffic and blocks unauthorized access, protecting your system from potential threats."
        },
        {
            question: "8.What does antivirus software do?",
            options: ["Deletes all files", "Detects and removes malware", "Improves internet speed","None"],
            answer: 1,
            explanation:"Antivirus software scans for, detects, and removes malicious software (malware) that can harm your device or steal your data. Keeping it updated ensures it protects against the latest threats."
        },
        {
            question: "9.Which is a secure practice?",
            options: ["Using one password everywhere","Sharing passwords","Using two-factor authentication","None"],
            answer: 2,
            explanation:"Two-factor authentication (2FA) adds a layer of security by requiring a second form of verification, such as a one-time code, in addition to a password."
        },
        {
            question: "10.Why is it important to keep your software updated?",
            options: ["To add new features","To improve your internet speed","To fix security vulnerabilities","To use more storage space"],
            answer: 2,
            explanation: "Software updates often include patches that fix known security vulnerabilities, helping protect your system from attacks that exploit those weaknesses."
        },
    ],
    medium: [
        { 
            question: "1.What does 'HTTPS' stand for?", 
            options: ["Hypertext Transfer Protocol", "Hypertext Transfer Protocol Secure", "Hypertext Transport Secure", "None"],
            answer: 1,
            explanation: "HTTPS ensures encrypted communication between the user and server."
        },
        { 
            question: "2.What is a 'zero-day' exploit?", 
            options: ["A security vulnerability that is exploited before the vendor releases a patch","A type of malware","A method of encrypting data","A type of phishing attack"],
            answer: 0,
            explanation: "A zero-day exploit occurs when an attacker takes advantage of a security vulnerability in software or hardware before the developer has had a chance to release a fix or patch."
        },
        { 
            question: "3.What is the primary purpose of a VPN (Virtual Private Network)?", 
            options: ["To improve internet speed","To hide your IP address and encrypt internet traffic","To block malware","To back up files"],
            answer: 1,
            explanation: "A VPN creates a secure, encrypted connection between your device and the internet, masking your IP address and helping protect your privacy and data from third-party monitoring."
        },
        { 
            question: "4.What is the purpose of network segmentation in cybersecurity?", 
            options: ["To prevent malware from spreading across networks","To increase internet speed","To reduce the number of devices on a network","To store backup data"],
            answer: 0,
            explanation: "Network segmentation involves dividing a network into smaller segments to limit the movement of malware within the system. This can reduce the damage caused by security breaches."
        },
        { 
            question: "5.Which of the following is a common way to detect phishing attacks?", 
            options: ["Ignoring all emails from unfamiliar sources","Responding to suspicious emails for verification","Clicking links to verify legitimacy","Checking the sender's email address for discrepancies"],
            answer: 3,
            explanation: "Phishing emails often come from addresses that appear similar to legitimate ones but with slight variations. Checking the sender’s email address is an important step in identifying a phishing attack."
        },
        { 
            question: "6.Which one is a social engineering tactic?", 
            options: ["Impersonating trusted entities","Firewall","Antivirus software","Coding"],
            answer: 0,
            explanation: "Social enginieering exploits human psychology rather then technicak weaknesses.Attackers often impersonate trusted individuals or organizations to manipulate victims divulging sensivitve information."
        },
        { 
            question: "7.Which of the following is a typical feature of a Distributed Denial of Service (DDoS) attack?", 
            options: ["Encrypting user data","Installing malware on target devices","Overloading a system or network with traffic to make it unavailable","Stealing sensitive information"],
            answer: 2,
            explanation: "A DDoS attack involves flooding a target system or network with an overwhelming amount of traffic to cause a disruption in service, often leading to downtime."
        },
        { 
            question: "8.What does 'SQL injection' refer to in cybersecurity?", 
            options: ["A method of encrypting sensitive data","An attack where malicious code is inserted into SQL queries to access or modify a database","A tool for scanning networks for vulnerabilities","A technique used to block unauthorized access to websites"],
            answer: 1,
            explanation: "SQL injection is a type of attack where an attacker inserts malicious SQL code into a query to manipulate or gain unauthorized access to a database, potentially exposing sensitive information."
        },
        { 
            question: "9.What is 'spear phishing'?", 
            options: ["A form of targeted phishing","Fishing in groups","Stealing credit cards","Disabling firewalls"],
            answer: 0,
            explanation: "Spear phishing is a targeted attack that tailors its approach to an individual or organization, often using personal information to appear legitimate."
        },
        { 
            question: "10.What is the main function of a public key in asymmetric encryption?", 
            options: ["To decrypt encrypted messages","To encrypt messages securely","To generate random numbers for encryption","To create digital signatures"],
            answer: 1,
            explanation: "In asymmetric encryption, the public key is used to encrypt messages, while the private key is used to decrypt them. Only the holder of the private key can decrypt messages encrypted with the corresponding public key."
        },
    ],
    hard: [
        { 
            question: "1.What is a 'side-channel' attack?", 
            options: ["A type of attack that focuses on exploiting physical weaknesses in hardware systems","An attack that targets software vulnerabilities in web applications","A way of stealing passwords through phishing emails","A denial-of-service attack targeting network traffic"],
            answer: 0,
            explanation: "Side-channel attacks exploit physical characteristics of a system, such as timing, power consumption, or electromagnetic leaks, to gain access to sensitive information, like cryptographic keys."
        },
        { 
            question: "2.What is a 'buffer overflow' vulnerability?", 
            options: ["A method of hiding malware in encrypted files","A technique used to encrypt data in transit","An error that occurs when a program runs out of memory","A vulnerability where more data is written to a buffer than it can handle, potentially overwriting adjacent memory"],
            answer: 3,
            explanation: "A buffer overflow occurs when a program writes more data to a buffer than it can hold, causing adjacent memory to be overwritten. This can lead to code execution or system crashes."
        },
        { 
            question: "3.Which cryptographic method uses the same key for both 'encryption' and 'decryption'?", 
            options: ["RSA","AES","Elliptic Curve Cryptography","Diffie-Hellman"],
            answer: 1,
            explanation: "AES (Advanced Encryption Standard) is a symmetric encryption algorithm, meaning it uses the same key for both encryption and decryption, making it faster and more efficient than asymmetric algorithms like RSA."
        },
        { 
            question: "4.What is a 'race condition' in the context of cybersecurity?", 
            options: ["A type of malware that spreads by exploiting system processes","A denial-of-service attack targeting system resources","A situation where a system crashes due to excessive traffic","A vulnerability that occurs when the system’s behavior depends on the sequence or timing of uncontrollable events"],
            answer: 3,
            explanation: "A race condition occurs when a system's behavior relies on the timing of events, allowing attackers to exploit it by manipulating the sequence or timing of actions, often leading to unexpected outcomes."
        },
        { 
            question: "5.What does the term 'cryptojacking' refer to?", 
            options: ["The act of stealing encryption keys","The unauthorized use of someone's computer resources to mine cryptocurrency","A method of encrypting and stealing files from a system","The process of hacking cryptocurrency wallets"],
            answer: 1,
            explanation: "Cryptojacking is a form of cyberattack where attackers secretly use the computing power of a victim's system to mine cryptocurrency, often without the user's knowledge or consent."
        },
        { 
            question: "6.What is a 'dual-use vulnerability' in cybersecurity?", 
            options: ["A vulnerability that can be used by both attackers and defenders","A software flaw that can only be exploited by government agencies","A vulnerability that is patched automatically by the system","A security hole that exists in both private and public networks"],
            answer: 0,
            explanation: "A dual-use vulnerability is one that can be exploited for malicious purposes by attackers, but it can also be used by defenders to test or strengthen security systems."
        },
        { 
            question: "7.What is the primary difference between 'symmetrical' and 'asymmetrical' encryption algorithms?", 
            options: ["Symmetrical algorithms use public keys, while asymmetrical algorithms use private keys","Symmetrical algorithms require the same key for encryption and decryption, while asymmetrical algorithms use a pair of keys (public and private)","Symmetrical algorithms are faster than asymmetrical algorithms","Asymmetrical algorithms are used only in web browsers"],
            answer: 1,
            explanation: "Symmetric encryption uses the same key for both encryption and decryption, making it faster but less secure if the key is intercepted. Asymmetric encryption uses a pair of keys: a public key for encryption and a private key for decryption, offering better security for exchanging data over untrusted channels."
        },
        { 
            question: "8.Which of the following best describes a 'Stuxnet' attack?", 
            options: ["A ransomware attack targeting financial institutions","A malware designed to target and sabotage industrial control systems","A phishing attack aimed at government agencies","A DDoS attack on a major website"],
            answer: 1,
            explanation: "Stuxnet was a sophisticated piece of malware discovered in 2010, designed to sabotage industrial control systems, specifically targeting Iran's nuclear enrichment facilities. It spread via USB drives and exploited multiple zero-day vulnerabilities."
        },
        { 
            question: "9.What is a ROP attack?", 
            options: ["Exploiting a buffer overflow","Stealing passwords via phishing","Bypassing firewalls","Manipulating return addresses to execute code"],
            answer: 3,
            explanation: "ROP attacks manipulate the return addresses in a program to execute malicious code using existing program instructions, bypassing security defenses."
        },
        { 
            question: "10.What is the purpose of key exchange algorithms?", 
            options: ["To encrypt data","To validate user identity","To securely share keys over insecure channels","To delete sensitive data"],
            answer: 2,
            explanation: "Key exchange algorithms securely allow two parties to exchange secret keys, enabling encrypted communication."
        },
    ]
};
let currentQuestionIndex = 0; // Keeps track of the current question index
let score = 0; // Keeps track of the score
let playerName = ""; // Stores the player's name
let selectedLevel = ""; // Stores the selected difficulty level
let filteredQuestions = []; // Stores the filtered questions based on selected difficulty

// Transition to the sign-in page
function goToSignIn() {
    document.getElementById('start-page').style.display = 'none'; // Hides the start page
    document.getElementById('sign-in-page').style.display = 'block'; // Displays the sign-in page
}

// Start the quiz
function startQuiz() {
    playerName = document.getElementById('player-name').value.trim(); // Gets and trims the player's name
    selectedLevel = document.getElementById('difficulty-level').value; // Gets the selected difficulty level

    if (!playerName) { // If no player name is entered
        alert("Please enter your name to continue."); // Shows an alert
        return; // Stops the function execution
    }

    // Filter questions based on the selected level
    filteredQuestions = questionData[selectedLevel];
    if (filteredQuestions.length === 0) { // If no questions are available for the selected level
        alert("No questions available for the selected level."); // Shows an alert
        return; // Stops the function execution
    }

    document.getElementById('sign-in-page').style.display = 'none'; // Hides the sign-in page
    document.getElementById('quiz-page').style.display = 'block'; // Displays the quiz page
    loadQuestion(); // Loads the first question
}

// Load the current question
function loadQuestion() {
    const question = filteredQuestions[currentQuestionIndex]; // Gets the current question
    document.getElementById('question').innerText = question.question; // Displays the question

    const optionsContainer = document.getElementById('options'); // Gets the options container
    optionsContainer.innerHTML = ''; // Clears the options container
    question.options.forEach((option, index) => { // Loops through each option
        const button = document.createElement('button'); // Creates a new button for each option
        button.textContent = option; // Sets the option text
        button.className = 'btn-option'; // Sets the button class
        button.onclick = () => checkAnswer(index); // Sets the click event to check the answer
        optionsContainer.appendChild(button); // Adds the button to the options container
    });

    document.getElementById('explanation-container').style.display = 'none'; // Hides the explanation container
    document.getElementById('next').style.display = 'none'; // Hides the next button
}

// Check the answer
function checkAnswer(selectedIndex) {
    const question = filteredQuestions[currentQuestionIndex]; // Gets the current question
    const correctIndex = question.answer; // Gets the correct answer index
    const options = document.getElementById('options').children; // Gets all the option buttons

    for (let i = 0; i < options.length; i++) { // Loops through all options
        options[i].disabled = true; // Disables all options
        if (i === correctIndex) { // If the option is correct
            options[i].style.backgroundColor = '#98FB98'; // Sets the background color to green
        } else if (i === selectedIndex) { // If the option is selected but incorrect
            options[i].style.backgroundColor = '#FF6347'; // Sets the background color to red
        }
    }

    if (selectedIndex === correctIndex) { // If the selected answer is correct
        score++; // Increases the score
    }

    document.getElementById('explanation').innerText = question.explanation; // Displays the explanation
    document.getElementById('explanation-container').style.display = 'block'; // Shows the explanation container
    document.getElementById('next').style.display = 'inline-block'; // Shows the next button
}

// Move to the next question
function nextQuestion() {
    currentQuestionIndex++; // Increases the question index
    if (currentQuestionIndex < filteredQuestions.length) { // If there are more questions
        loadQuestion(); // Loads the next question
    } else {
        showScore(); // If no more questions, show the final score
    }
}

// Display the final score
function showScore() {
    document.getElementById('quiz-page').style.display = 'none'; // Hides the quiz page
    document.getElementById('score-page').style.display = 'block'; // Displays the score page

    // Decide the message based on the score range
    let scoreMessage = "";
    if (score >= 1 && score <= 3) {
        scoreMessage = "Keep learning and improving your cybersecurity skills";
    } else if (score >= 4 && score <= 8) {
        scoreMessage = "Good work:You are getting there.Keep practicing";
    } else if (score >= 9 && score <= 10) {
        scoreMessage = "You are a Cybermaster:Excellent work";
    }

    document.getElementById('score-message').innerText = `${scoreMessage}, ${playerName}!`; // Displays the personalized message
    document.getElementById('final-score').innerText = `${score} / ${filteredQuestions.length}`; // Displays the final score
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0; // Resets the question index
    score = 0; // Resets the score
    document.getElementById('score-page').style.display = 'none'; // Hides the score page
    document.getElementById('start-page').style.display = 'block'; // Displays the start page
}


