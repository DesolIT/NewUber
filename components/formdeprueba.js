import React, { useState } from "react";
import { useRouter } from 'next/router';

const FormdePrueba = ()=>{

    const router = useRouter();
    const {query:{id}} = router;

    const [tarea, setTarea] = useState('');
    const [tareas, setTareas] = useState([]);
    const [modoEdicion, setModoEdicion] = useState('false');
    // const [id, setId] = useState('');
    const [error, setError] = useState(null);

    const agregarTarea = e=>{
        e.preventDefault();
        if (!tarea.trim()) {
            console.log('campo vacio');
            setError('E campo no puede estar Vacio');
            return
        }
        setTareas([
            ...tareas,
            {tarea, id}
        ])
        setTarea('')
        setError(null)
    }

    const editarTarea = (e)=>{
        // e.preventDefault();
        if (!tarea.trim()) {
            console.log('campo vacio');
            setError('el campo no puede estar vacio')
            return
        }

        const arrayEditado = tareas.map(item=>item.id===id ? {id,tarea}:item)
        setTareas(arrayEditado)
        setModoEdicion(false)
        setTarea('')
        // setId('')
        setError(null)
    }
    return(
        <div>
            <ul>
                {
                tareas.length === 0 ?(
                    <li>Sin Tareas</li>
                ) : (
                    tareas.map(item=>(
                        <li key={item.id}>
                            <span> {item.tarea}</span>
                            <button onClick = {()=>editarTarea(item)}> 
                                Editar
                            </button>
                        </li>
                    ))
                )}
            </ul>

            {
                modoEdicion ? 'Editar Tarea' : 'Agregar Tarea'
            }
            <form onSubmit={modoEdicion ? editarTarea : agregarTarea}>
                {
                    error ? <span>{error}</span> :null
                }    
                <input
                type='text'
                placeholder='ingrese aqui'
                onChange={e=>setTarea(e.target.value)}
                value={tarea}
                />
                {
                    modoEdicion ? (
                        <button type='submit'>Agregar</button>
                    ):(
                        <button type='submit'>Editar</button>
                    )
                }
            </form>    
        </div>
    )
}

export default FormdePrueba