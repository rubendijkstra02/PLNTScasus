const Footer = props => {
    const {
        countries
    } = props

    return (
        <select placeholder="language">
            {
                countries.map(({name}, i) => (
                    <option key={i}>{name}</option>
                ))
            }
        </select>
    )
}

export default Footer