import Contact from "../../models/Contact.js";

export const postFeedback = async (req,res)=>{
    const {name,email,message} = req.body;
    try {
        const feedback = new Contact({name,email,message})
        await feedback.save()
        res.json(feedback)
    } catch (e) {
        console.error(e.message);
        res.json({message:"Feedback not submitted"})
    }
}