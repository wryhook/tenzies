type StatBoxProps = {
    label: string,
    value: number
}

export default function StatBox(props: StatBoxProps) {
    return (
        <div className="statbox-container">
            <div className="statbox-label">{props.label}</div>
            <div className="statbox-value">{props.value}</div>
        </div>
    )
}