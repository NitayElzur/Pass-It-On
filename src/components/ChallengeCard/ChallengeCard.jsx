import './ChallengeCard.css'
function ChallengeCard({ value, editable, edit, setEdit }) {
    return (

        <div id='challenge-card-main'>
            <img className='challenge-card-img' src={value?.picture} alt="" />
            <div className='card-inner-text'>

                <h1 className='card-title'>{value?.title}</h1>

                <h3 className='card-inner-info'>
                    {`Description: ${value?.desc}`}
                </h3>
                <h3 className='card-inner-info'>
                    {`Start Date: ${value && value['start-date']}`}
                </h3>
                <h3 className='card-inner-info'>
                    {`End Date: ${value && value['end-date']}`}
                </h3>

                {editable
                    ?
                    <button className='join-btn' onClick={() => {
                        setEdit(true)
                    }}>Edit</button>
                    :
                    <button className="join-btn">Join Challenge</button>
                }

            </div>
        </div>

    )
}
export default ChallengeCard;