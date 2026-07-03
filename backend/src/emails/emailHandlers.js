import { resendClient , sender } from "../lib/resend.js";
import {createWelcomeEmailTemplate} from "../emails/emailTemplates.js";

export const sendEmail = async(email,name,clientURL) =>{
    const {data,error} = await resendClient.emails.send({
        from:`${sender.name} <${sender.email}>`,
        to:email,
        subject:"welcome to SnapTalk",
        html: createWelcomeEmailTemplate(name, clientURL)
    });

    if(error){
        console.log("Error sending email: ", error);
        throw new Error("Failed to send welcome email");
    }

    console.log("welcome Email sent successfully" , data);
};