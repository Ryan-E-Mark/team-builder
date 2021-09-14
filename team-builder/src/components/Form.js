
import React from 'react';

export default function Form(props) {
    const { update, values, submit } = props;

    const onChange = (evt => {
        update({...values, [evt.target.name]: evt.target.value});
    })

    const onSubmit = (evt => {
        evt.preventDefault();
        submit();
    })


    return (
        <form onSubmit={onSubmit}>
            <label>
                Username:
                    <input
                        type="text"
                        name="username"
                        onChange={onChange}
                        value={values.username}
                        />
            </label>
            <label>
                Email:
                    <input
                        type="email"
                        name="email"
                        onChange={onChange}
                        value={values.email}
                        placeholder="Enter your email"
                        />
            </label>
            <label>
                Role:
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value="">Select your Role</option>
                        <option value="No Programming Experience">No Programming Experience</option>
                        <option value="New Programmer">New Programmer</option>
                        <option value="Intermediate Programmer">Intermediate Programmer</option>
                        <option value="Experienced Programmer">Experienced Programmer</option>
                        
                    </select>
            </label>
            <div>
                <button>Submit</button>
            </div>
        </form>
        
    )
}