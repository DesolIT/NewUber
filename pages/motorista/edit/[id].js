import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router';
import Form from '../../../components/form';

const EditMotorista = () => {

const router = useRouter();
const {query:{id}} = router;

return (
    <>
    <Form />
    <p>Su numero de identidad es {id}</p>
    </>
    
)}
 
export default EditMotorista