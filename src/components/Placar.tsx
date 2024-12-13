import Liverpool from "../assets/liverpool_logo.png"

interface PlacarProps {
    logoHome: string,
    logoAway: string,
    nameHome: string,
    nameAway: string,
    goalsHome: number,
    goalsAway: number
}

// props: PlacarProps

function Placar(){
    // const { logoHome, logoAway, nameAway, nameHome, goalsHome, goalsAway } = props;

    return(
        <div>
            <div>
                <img src={Liverpool} alt="" className="w-16" />
            </div>
        </div>
    )
}

export default Placar;