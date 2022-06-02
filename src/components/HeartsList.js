import CandyColoredHeart from "./CandyColoredHeart";

const messages = [
    'cool cud',
    'me my <3',
    'you are bear',
    'team bear',
    'time hug',
    'fang',
    'bog love',
    'me have love',
    'all hover',
    'sweat poo',
    'u hack',
    'stank love',
    'heart me',
    'wink bear',
    'bear bear',
    'be my bear',
    'yank o way',
    'mage love',
    'oy',
    'in a fan'
];

const HeartsList = () => {
    return(
        <div className='hearts-container'>
            {messages.map((message, index) => (
                // The key={index}, with the key prop defined above, prevents the key console error
                <CandyColoredHeart key={index} msg={message}/>
            ))}
        </div>
    )
}

export default HeartsList;