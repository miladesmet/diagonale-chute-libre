import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'

type FormInputs = {
  subject: string
  email: string
  message: string
}

export const ContactForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>()

  const onSubmit: SubmitHandler<FormInputs> = async data => {
    await emailjs.send(
      'service_nhvr251',
      'template_kl2yqwd',
      {
        subject: data.subject,
        email: data.email,
        message: data.message,
      },
      'YuF-ZyYUezqNLSYkz'
    )

    setIsFormSubmitted(true)
  }

  return (
    <div id="contactForm">
      <h4>Nous contacter</h4>
      {isFormSubmitted ? (
        <p id="confirmation-message">Votre demande a été soumise avec succès ! Nous vous répondrons dans les plus brefs délais</p>
      ) : (
        <>
          <div className="mt-4 flex flex-col justify-center items-center ">
            <div className="mb-6 flex flex-col justify-start">
              <label htmlFor="email">Votre email</label>
              <input
                {...register('email', { required: true })}
                className="border"
                type="email"
                name="email"
                id="email"
                placeholder="Votre adresse mail * "
              />
              {errors.email && <p className="text-red-500"> Email requis </p>}
            </div>

            <div className="mb-6 flex flex-col justify-start">
              <label htmlFor="subject">Sujet</label>
              <input {...register('subject')} className="border" type="text" name="subject" id="subject" placeholder="Sujet de votre demande" />
            </div>

            <div className="mb-6 flex flex-col justify-start">
              <label htmlFor="message">Message</label>
              <textarea
                {...register('message', { required: true })}
                rows={5}
                className="border resize-none"
                name="message"
                id="message"
                placeholder="Contenu de votre demande *"
              />
              {errors.message && <p className="text-red-500"> Message requis </p>}
            </div>

            <div id="bouton" onClick={handleSubmit(onSubmit)}>
              Soumettre
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ContactForm
