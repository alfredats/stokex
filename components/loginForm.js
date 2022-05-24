import { Formik, Form, Field } from 'formik';
import { FormControl, Input, Button, Center, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useState } from 'react';
import SessionContext from '../contexts/SessionContext';


export default function LoginForm() {
    const { appRouter } = useContext(SessionContext);
    const [failedAuth, setFailedAuth] = useState(false);

    async function authLogin({username, password}) {
        const ENDPOINT = process.env.NEXT_PUBLIC_CMS_HOST + process.env.NEXT_PUBLIC_CMS_AUTHLOGIN_ENDPOINT;
            const sessionKey = await axios.post(ENDPOINT, {
                    username: username,
                    password: password
                }).then((response) => {
                    const { sessionKey } = response.data;
                    return sessionKey;
                }).catch((error) => {
                    console.log(error);
                    return;
                });
            return sessionKey;
    }

    return (
        <>
        <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit = {async (values, actions) => {
                setTimeout(()=> {
                    const keyPromise = authLogin(values) 
                    keyPromise.then((key) => {
                        window.localStorage.setItem("sessionKey", key);
                        console.log(window.localStorage.getItem("sessionKey"));
                        actions.setSubmitting(false);
                        appRouter.push("/dashboard");
                    }).catch(() => {
                        setFailedAuth(true);
                    });
                })
            }}
        >
            { (props) => (
                <Form>
                    <Center flexDir='column'>
                    <Field name='username'>
                        {({ field, form}) => (
                            <> 
                            <FormControl p='2'>
                                <Input {...field}  id='username' placeholder='Username' backgroundColor='white' />
                            </FormControl>
                            </>
                        )}
                    </Field>
                    <Field name='password'>
                        {({ field, form}) => (
                            <> 
                            <FormControl p='2'>
                                <Input {...field}  id='password' placeholder='Password' backgroundColor='white' type='password' />
                            </FormControl>
                            </>
                        )}
                    </Field>
                    { failedAuth && 
                        <Text color="red">Incorrect login credentials!</Text> 
                    }
                    <Button
                        mt='4'
                        colorScheme='teal' 
                        type='submit'
                        disabled={props.isSubmitting}
                    >
                        Log In
                    </Button>
                    </Center>
                </Form>
            )}
        </Formik>
        </>
    )
}
