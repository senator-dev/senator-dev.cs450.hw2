
const Header = (props) => {
    return (
        <div id="intro">
            <div id="intro-left">
                <div id="name"><b>{props.contactInfo.name}</b></div>
                <div>{props.contactInfo.occupation}</div>
            </div>
            <div id="intro-right">
                <div>Email: {props.contactInfo.email}</div>
                <div>Web: {props.contactInfo.github}</div>
                <div>Mobile: {props.contactInfo.phone}</div>
            </div>
        </div>
    );
}


export default Header;