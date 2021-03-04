function ItemFeature({entry}) {
    return (
        <div className="card-feature">
        <div className="check">
            <i className="fas fa-check"></i>
        </div>
        <div className="text-feature">
            <h4>{entry.featureText}</h4>
            <p>{entry.text}</p>
        </div>
    </div>
    )
}

export default ItemFeature