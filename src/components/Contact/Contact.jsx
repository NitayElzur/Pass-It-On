import React from 'react'
import '../Contact/Contact.css'
import {AiFillPhone} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'

function Contact() {
  return (
    <div>
      <div className='contact_header'>
        <h1>Contact Us</h1>
      </div>
      <div className='contact_link_exp_div'> 
        <div  className='contact_exp_div'>
        Remember that We are always here for you! If you have any questions, feedback,or you faced any problem, let us know and we will do our best to help you. You can contact us at our E-mail, Phone number or in the Social medias. We can't wait to see all the wonderful things you've done!
        </div>

        <div className='contact_links_div'>
          <div className='contact_link'><span className='span_pic'><AiFillPhone/></span><a href="tel:123-456-7890"> Call Us</a></div>

          <div className='contact_link'><span className='span_pic'><AiOutlineMail/></span><a href="mailto: Passit_on@gmail.com"> Send Us an Email</a></div>

          <div className='contact_link'><span className='span_pic'><MdLocationOn/></span><a target='blank' href="https://goo.gl/maps/ZVAjA4qYsaESeDPh8"> Ha-Khilazon Street, Ramat Gan, Israel</a></div>
        </div>
      </div>
    </div>
  )
}

export default Contact