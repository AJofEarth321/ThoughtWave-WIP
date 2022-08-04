export default function validateInfo(values) {
    let errors = {}

    if(!values.firstname.trim()) {
        errors.firstname = "First name required"
    }

    if(!values.lastname) {
        errors.lastname = "Last name requried"
    }

    if(!values.email) {
        errors.email = "Email requried"
    } else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/.test(values.email)) {
        errors.email="Email address is invalid. Please enter again"
    }

    if(!values.state) {
        errors.state = "State requried"
    }

    if(!values.message) {
        errors.message = "Message required"
    } else if (values.message.length > 500) {
        errors.message = "Your message cannot exceed 500 characters"
    }

    return errors
}