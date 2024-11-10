import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [alertInfo, setAlertInfo] = useState({ display: false, message: '', type: '' });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  const onSubmit = (data) => {
    toggleAlert('Message sent successfully!', 'success');
    reset();
  };

  return (
    <div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      {...register('name', { required: 'Please enter your name', maxLength: 30 })}
                      className='form-control formInput'
                      placeholder='Name'
                    />
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      {...register('email', {
                        required: 'Please enter a valid email address',
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    />
                    {errors.email && <span className='errorMessage'>{errors.email.message}</span>}
                  </div>
                </div>
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      {...register('subject', { required: 'Please enter a subject', maxLength: 75 })}
                      className='form-control formInput'
                      placeholder='Subject'
                    />
                    {errors.subject && <span className='errorMessage'>{errors.subject.message}</span>}
                  </div>
                </div>
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      {...register('message', { required: 'Please enter a message' })}
                      className='form-control formInput'
                      placeholder='Message'
                    />
                    {errors.message && <span className='errorMessage'>{errors.message.message}</span>}
                  </div>
                </div>
                <button className='submit-btn btn btn-primary' type='submit'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {alertInfo.display && (
        <div className={`alert alert-${alertInfo.type} alert-dismissible mt-5`} role='alert'>
          {alertInfo.message}
          <button
            type='button'
            className='btn-close'
            aria-label='Close'
            onClick={() => setAlertInfo({ display: false, message: '', type: '' })}
          ></button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;

