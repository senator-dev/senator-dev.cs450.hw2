
const Skills = (props) => {
    return (
    <div class="section">
        <div class="section-title">
        Key Skills
        </div>
        <div class="section-content" id="key-skills">
            <div  id="skills">
                {props.keySkills.map((keySkill, i) => (
                    <div class="skill">{keySkill}</div>
                ))}
            </div>
        </div>
    </div>
    );
};

export default Skills;