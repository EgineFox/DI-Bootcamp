type Indicator = "positive" | "negative" | "zero";

type myFunction = ( num: number) => Indicator;

const examleFunc: myFunction = ( a ) => {
    if ( a > 0 ) return "positive";
    if ( a < 0 ) return "negative";
    if ( a === 0 ) return "zero";
};

examleFunc(15);
examleFunc(-15);
examleFunc(0);

