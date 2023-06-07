import './ChallengeCard.css'
function ChallengeCard() {
    return (

        <div id='challenge-card-main'>
            <img className='challenge-card-img' src="https://good-deeds-day.org.il/wp-content/uploads/2023/04/13134636/%D7%9B45-%D7%A2%D7%95%D7%91%D7%93%D7%99%D7%9D-%D7%9E%D7%97%D7%91%D7%A8%D7%95%D7%AA-%D7%90%D7%91%D7%91%D7%99-%D7%95%D7%A8%D7%93-%D7%91%D7%A0%D7%93.-%D7%94%D7%AA%D7%92%D7%99%D7%99%D7%A1%D7%95-%D7%91%D7%A8%D7%A2%D7%A0%D7%A0%D7%94-%D7%9C%D7%90%D7%A8%D7%99%D7%96%D7%AA-%D7%A4%D7%99%D7%A8%D7%95%D7%AA-%D7%95%D7%99%D7%A8%D7%A7%D7%95%D7%AA-%D7%91%D7%9E%D7%A1%D7%92%D7%A8%D7%AA-%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%AA-%D7%A9%D7%9C-%D7%9C%D7%A7%D7%98-%D7%99%D7%A9%D7%A8%D7%90%D7%9C-555x417.jpg" alt="" />
            <div className='card-inner-text'>

                <h1 className='card-title'>Name Challenge</h1>

                <h3 className='card-inner-info'>
                    Description:
                </h3>
                <h3 className='card-inner-info'>
                    Start Date:
                </h3>
                <h3 className='card-inner-info'>
                    End Date:
                </h3>

                <button class="button">Join Challenge</button>

            </div>
        </div>

    )
}
export default ChallengeCard;