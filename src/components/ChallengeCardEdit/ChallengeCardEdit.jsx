import './ChallengeCardEdit.css'
import ChallengeCard from '../ChallengeCard/ChallengeCard';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import UploadWidget from '../UploadWidget';
function ChallengeCardEdit({ value }) {
    const [edit, setEdit] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [formData, setFormData] = useState(value);
    console.log(formData);
    return (
        <>
            <div id='editCardMain'>
                {edit
                    ?
                    <form id='editCard'>
                        {`Edit ${value.title}:`} <br /><br />
                        <div className="editCardInputDiv">
                            Title:
                            <input className='editCardInput' value={formData.title} onInput={e => setFormData({...formData, title: e.target.value})} type="text" {
                                ...register('title', {required: true})
                            }/>
                        </div>
                        <div className="editCardInputDiv">
                            Open/Closed:
                            <input className='editCardInput' checked={formData.isOpen} onClick={e => setFormData({...formData, isOpen: e.target.checked})} type="checkbox" {
                                ...register('open', {required: true})
                            }/>
                        </div>
                        <div className="editCardInputDiv">
                            Image:
                            {/* <input className='editCardInput' value={formData.picture} onInput={e => setFormData({...formData, picture: e.target.value})} type="text" {
                                ...register('image', {required: true})
                            }/> */}
                        <UploadWidget />
                        </div>
                        <div className="editCardInputDiv">
                            Description:
                            <input className='editCardInput' value={formData.desc} onInput={e => setFormData({...formData, desc: e.target.value})} type="text" {
                                ...register('desc', {required: true})
                            }/>
                        </div>
                        <div className="editCardInputDiv">
                            Start Date:
                            <input className='editCardInput' value={formData['start-date']} onInput={e => setFormData({...formData, 'start-date': e.target.value})} type="date" {
                                ...register('start-date', {required: true})
                            }/>
                        </div>
                        <div className="editCardInputDiv">
                            End Date:
                            <input className='editCardInput' value={formData['end-date']} onInput={e => setFormData({...formData, 'end-date': e.target.value})} type="date" {
                                ...register('end-date', {required: true})
                            }/>
                        </div>
                        <button>Change</button>
                        <button>Delete</button>
                    </form>
                    :
                    <ChallengeCard value={value} editable={true} edit={edit} setEdit={setEdit}/>
                }
            </div>
        </>
    )
}
export default ChallengeCardEdit;