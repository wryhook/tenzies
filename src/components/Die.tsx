import '../styles.css'

function DieBody(dieNumber: number) {
    if (dieNumber === 1) {
        return(
            <circle cx="100" cy="100" r="20" fill="#252525"/>
        )
    }
    if (dieNumber === 2) {
        return(
            <>
                <circle cx="160" cy="40" r="20" fill="#252525"/>
                <circle cx="40" cy="160" r="20" fill="#252525"/>
            </>
        )
    }
    if (dieNumber === 3) {
        return(
            <>
                <circle cx="100" cy="100" r="20" fill="#252525"/>
                <circle cx="160" cy="40" r="20" fill="#252525"/>
                <circle cx="40" cy="160" r="20" fill="#252525"/>
            </>
        )
    }
    if (dieNumber === 4) {
        return(
            <>
                <circle cx="160" cy="160" r="20" fill="#252525"/>
                <circle cx="40" cy="40" r="20" fill="#252525"/>
                <circle cx="160" cy="40" r="20" fill="#252525"/>
                <circle cx="40" cy="160" r="20" fill="#252525"/>
            </>
        )
    }
    if (dieNumber === 5) {
        return(
            <>
                <circle cx="100" cy="100" r="20" fill="#252525"/>
                <circle cx="160" cy="160" r="20" fill="#252525"/>
                <circle cx="40" cy="40" r="20" fill="#252525"/>
                <circle cx="160" cy="40" r="20" fill="#252525"/>
                <circle cx="40" cy="160" r="20" fill="#252525"/>
            </>
        )
    }

    if (dieNumber === 6) {
        return(
            <>
                <circle cx="40" cy="100" r="20" fill="#252525"/>
                <circle cx="160" cy="100" r="20" fill="#252525"/>
                <circle cx="160" cy="160" r="20" fill="#252525"/>
                <circle cx="40" cy="40" r="20" fill="#252525"/>
                <circle cx="160" cy="40" r="20" fill="#252525"/>
                <circle cx="40" cy="160" r="20" fill="#252525"/>
            </>
        )
    }
}

type DiceProps = {
    key: number
    value: number
    isHeld: boolean
    holdDie: () => void
}
export default function Die(props: DiceProps) {
    const style = {
        backgroundColor: props.isHeld ? '#7af6e1' : 'white'
    }

    return(
        <div style={style} className="die" onClick={props.holdDie}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200">
                {DieBody(props.value)}
            </svg>
        </div>
    )
}