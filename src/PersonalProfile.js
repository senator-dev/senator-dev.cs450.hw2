
const PersonalProfile = (props) => {
    return (
        <div class="section" id="personal-profile">
            <div class="section-title">
                Personal Profile
            </div>
            <div class="section-content">
                {props.profile}
            </div>
        </div>
    );
};


export default PersonalProfile;