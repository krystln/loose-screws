'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';

const HireUse = () => {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const [jobData, setJobData] = useState({
        name: '',
        email: '',
        description: ''
    });

    function handleChange(event) {
        setJobData({
            ...jobData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("sending data to post");
        setSubmitting(true);

        try {
            const response = await fetch('/api/jobs', {
                method: 'POST',
                body: JSON.stringify({
                    name: jobData.name,
                    email: jobData.email,
                    description: jobData.description
                }),
            });

            if (response.ok) {
                alert('Job Submitted');
                router.push('/');
            }
            
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" value={jobData.name} placeholder="Name" onChange={handleChange} />
            <input type="email" name="email" id="email" value={jobData.email} placeholder="Email" onChange={handleChange} />
            <textarea name="description" id="message" cols="30" rows="10" value={jobData.description} placeholder="Job Description" onChange={handleChange} ></textarea>
            <input type="submit" value='Submit'/>
        </form>
    )
}

export default HireUse;