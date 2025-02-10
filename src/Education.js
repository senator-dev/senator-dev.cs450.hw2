

const Education = (props) => {
    const { institutions, degrees, dates, gpas } = props.education; // Destructure props.education

    return (
        <div class="section" id="education">
            <div class="section-title">
                Education
            </div>
            <div class="section-content">

            
            {institutions.map((institution, i) => (
                <div class="section-subsection">
                    <div class="content-header">{institution}</div>
                    <div class="content-body">
                        <div>{degrees[i]}</div>
                        <div>{dates[i]}</div>
                        <div>{gpas[i]}</div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Education;

