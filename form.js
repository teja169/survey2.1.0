class Form {

    constructor() {
        this.input = createInput("Name");
        this.email = createInput("email")
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "Lets Do A Survey On Our School Students");
        this.question1 = createElement('h3', "Q1. Are you intrested in building PC's and techie stuff ?");
        this.radio = createRadio('h3');
        this.radio.option('yes');
        this.radio.option('No');
        this.question2 = createElement('h3', "Q2. Are you an Intel fan ?");
        this.radio1 = createRadio('h3');
        this.radio1.option('yes');
        this.radio1.option('No');
        this.question3 = createElement('h3', "Q3. Do you like MSI's GPU's and cases ?");
        this.radio2 = createRadio('h3');
        this.radio2.option('yes');
        this.radio2.option('No');
        this.question4 = createElement('h3', "Q4. What is the fulform of MSI ?");
        this.radio3 = createRadio('h3');
        this.radio3.option('Magister Scientiae International');
        this.radio3.option('Micro-Star International');
    }


    display() {
        this.input.position(670, 255);
        this.email.position(670, 165);
        this.button.position(700, 760);
        this.greeting.position(600, 105);
        this.text.position(600, 5);
        this.question1.position(500, 360);
        this.radio.position(600, 420);
        this.question2.position(500, 450);
        this.radio1.position(600, 510);
        this.question3.position(500, 540);
        this.radio2.position(600, 600);
        this.question4.position(500, 630);
        this.radio3.position(500, 690);

        this.button.mousePressed(() => {
            User.input = this.input.value();
            User.email = this.email.value();
            peopleCount += 1;
            User.index = peopleCount;
            User.update();
            User.updateCount(peopleCount);
        });

    }
}