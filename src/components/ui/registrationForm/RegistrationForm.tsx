import './RegistrationForm.styles.scss';
import { Input } from '@/components';

export const RegistrationForm = () => {
    return (
        <form>
            <h1>Registration form</h1>
            <Input label='First name' name='firstName' type='text'/>
            <Input label='Last name' name='lastName' type='text'/>
            <Input label='Email' name='email' type='text'/>
            <Input label='Password' name='password' type='text'/>
            <Input label='Confirm password' name='confirmPassword' type='text'/>
        </form>
    )
}