import React from 'react';
import "../styles/style.css";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

type FormInputs={
    subject: string,
    email: string, 
    message : string
}

export const ContactForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<FormInputs>()

    const onSubmit: SubmitHandler<FormInputs>= data =>{
        emailjs.send(
            'service_nhvr251', 
            'template_kl2yqwd',
            {
                subject: data.subject,
                email: data.email,
                message: data.message
            },
            'YuF-ZyYUezqNLSYkz'
            )
    }

    return(
    <div id="contactForm">
        <h4>Nous contacter</h4>
        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-3">
                <input {...register("email", {required:true})} className= "border" type="email" name= "email" id="email" placeholder="Votre adresse mail * " />
                {errors.email && <p id= "erreur-contact-form"> Email requis </p>}
            </div>

            <div className="mb-3">
                <input {...register("subject")} className="border" type="text" name= "subject" id="subject" placeholder="Sujet de votre demande" />
            </div>

            <div className="mb-3">
                <textarea {...register("message", {required:true})} rows={5} className="border resize-none" name= "message" id="message" placeholder="Contenu de votre demande *" />
                {errors.message && <p id= "erreur-contact-form"> Message requis </p>}


            </div>

            
            <input id="bouton" type='submit' className="block bg-[blue] text-[white] py-3 hover:bg-[gray]"/>
        </form>
    </div>
    )
}