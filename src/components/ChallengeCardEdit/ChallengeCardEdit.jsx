import './ChallengeCardEdit.css'
import ChallengeCard from '../ChallengeCard/ChallengeCard';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import UploadWidget from '../UploadWidget';
function ChallengeCardEdit({ value }) {
    const [edit, setEdit] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formData, setFormData] = useState(value);
    const [data, setData] = useState(); 
    const [users, setUsers] = useState();
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('challenges')));
        setUsers(JSON.parse(localStorage.getItem('users')))
    }, [])
    function calcFinal(start, end, status) {
        if (!status || status == 'pending' || !end) return 604800;
        const sDate = new Date(start);
        const eDate = new Date(end);
        return Math.abs(sDate.getTime() - eDate.getTime() / 1000)
    }
    function pointCalc() {
        const newData = value.participants.map(element => {
            return { ...element, 'final_time': calcFinal(element['start_time'], element['end_time'], element.status) }
        })
        newData.sort((a, b) => a['final_time'] - b['final_time']);
        newData.forEach(value => {
            setUsers(prev => prev.map(v => {
                if (value?.id == v?.id) {
                    return { ...v, grade: parseInt(v.grade) ? parseInt(v.grade) + Math.floor(value['final_time'] / newData.length) : Math.floor(value['final_time'] / newData.length) }
                }
                else return v
            }))
        })
        setData([...data.map(v => {
            if(v.id == value.id) return {...v, participants: newData };
            else return {...v}
        })])
        localStorage.setItem('challenges', JSON.stringify(data));
        localStorage.setItem('users', JSON.stringify(users))
    }
    console.log(users);
    return (
        <>
            <div id='editCardMain'>
                {edit
                    ?
                    <form id='editCard' onSubmit={handleSubmit(() => {
                        !(formData.isOpen) && pointCalc()
                        localStorage.setItem('challenges', JSON.stringify(data?.map(v => (v.id === formData.id) ? { ...formData } : { ...v })))
                        setEdit(false)
                        // console.log(!(formData.isOpen) && 'he');
                    })}>
                        {`Edit ${value.title}:`} <br /><br />
                        <div className="editCardInputDiv">
                            Title:
                            <input className='editCardInput' value={formData.title} onInput={e => setFormData({ ...formData, title: e.target.value })} type="text" {
                                ...register('title', { required: true })
                            } />
                        </div>
                        <div className="editCardInputDiv">
                            Open/Closed:
                            <input className='editCardInput' checked={formData.isOpen} onClick={e => setFormData({ ...formData, isOpen: !formData.isOpen })} type="checkbox" {
                                ...register('open')
                            } />
                        </div>
                        <div className="editCardInputDiv">
                            Image:
                            <UploadWidget formData={formData} setFormData={setFormData} />
                            <img id='editPic' src={formData.image} alt="" />
                        </div>
                        <div className="editCardInputDiv">
                            Description:
                            <input className='editCardInput' value={formData.desc} onInput={e => setFormData({ ...formData, desc: e.target.value })} type="text" {
                                ...register('desc', { required: true })
                            } />
                        </div>
                        <div className="editCardInputDiv">
                            Start Date:
                            <input className='editCardInput' value={formData['start-date']} onInput={e => setFormData({ ...formData, 'start-date': e.target.value })} type="date" {
                                ...register('start-date', { required: true })
                            } />
                        </div>
                        <div className="editCardInputDiv">
                            End Date:
                            <input className='editCardInput' value={formData['end-date']} onInput={e => setFormData({ ...formData, 'end-date': e.target.value })} type="date" {
                                ...register('end-date', { required: true })
                            } />
                        </div>
                        <button>Change</button>
                        <button type='button'>Delete</button>
                    </form>
                    :
                    <ChallengeCard value={value} editable={true} edit={edit} setEdit={setEdit} />
                }
            </div>
        </>
    )
}
export default ChallengeCardEdit;