import './ChallengeCard.css'
function ChallengeCard({ value, editable, edit, setEdit }) {
    let currentUser = localStorage.getItem("currentUser")
    let users = JSON.parse(localStorage.getItem("users"))
    let challenges = JSON.parse(localStorage.getItem("challenges"))
    function isUser(value) {
        if (currentUser && (!users?.find(value => value.id == currentUser).username.includes("admin"))) return true;
        return false
    }
    function joinChallenge(value) {
        if (value.participants?.find(Element => Element.id == currentUser.id)) {
            alert("You have already joined this challenge")
            console.log('hello');
            return
        }
        const date = new Date()
        currentUser.challenges?.push({
            id: currentUser.id,
            grade: "",
            Response: "",
            start_time: date,
            end_time: "",
            status: ""
        })
        for (let i = 0; i < users?.length; i++) {
            if (users[i].id == currentUser.id) {
                users[i].challenges.push({
                    id: value.id,
                    status: ""
                })
            }
        }
        localStorage.setItem('users', JSON.stringify(users))
        localStorage.setItem('challenges', JSON.stringify(challenges))
        alert("You succesfuly joined the challenge")
        return
    }
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
                    <button className='button' onClick={() => {
                        setEdit(true)
                    }}>Edit</button>
                    :
                    isUser() && <button className="join-btn" onClick={() => joinChallenge(value.id)}>Join Challenge</button>
                }

            </div>
        </div>

    )
}
export default ChallengeCard;