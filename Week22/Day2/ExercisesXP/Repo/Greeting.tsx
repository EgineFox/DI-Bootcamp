interface GreetingProps {
    name: string;
    messageCount: number;
}

const Greeting: React.FC<GreetingProps> = ({name, messageCount}) => {
    return ( <div>
                  <h1> Hello, {name}! </h1>
                  <h3> Your count is {messageCount} </h3>
             </div>
    );
};

export default Greeting;