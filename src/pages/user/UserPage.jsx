import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import Value from "../../component/values/Value";



function UserPage(props) {

    const {register, handleSubmit,formState:{errors}, reset
    } = useForm()

    const [state, setState] = useState([])

    function onSubmit(data){
        const newUser = {
            name: data.name,
            username: data.username,
            email: data.email,
            phone: data.phone,
            website: data.website
        };
        setState([...state, newUser])
        reset()
    }

function deleteUser (index){
    const updateUsers =[...state]
    updateUsers.splice(index,1)
    setState(updateUsers)
}
function emptyList(){
        setState([])
}

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">
                    <input
                        className={errors.name && "error"}
                        type="text"
                        name="name"
                        placeholder={errors.name ? "you need enter your name":"name" }
                        {...register("name", {required: true})}/>
                    {errors.name && <span>warning</span>}
                </label>

                <label htmlFor="">
                    <input
                        className={errors.username && "error"}
                        type="text"
                        name="username"
                        placeholder={errors.username ? "you need enter your username":"username" }
                        {...register("username", {required: true})}/>
                        {errors.username && <span>error</span>}

                </label>

                <label htmlFor="">

                    <input
                        className={errors.email && "error"}
                        type="text"
                        name="email"
                        placeholder={errors.email ? "you need enter your":"email"}
                        {...register("email", {required: true})}/>
                    {errors.email && <span>error</span>}

                </label>

                <label htmlFor="">
                    <input
                        className={errors.phone && "error"}
                        type="text"
                        name="phone"
                        placeholder={errors.phone ? "you need enter your":"phone" }
                        {...register("phone", {required: true})}/>
                    {errors.phone && <span>error</span>}
                </label>

                <label htmlFor="">
                    <input type="text" name="website" placeholder="website" {...register("website")}/>
                </label>
                <button type="submit">add</button>
                <button type="button" onClick={emptyList}>delete</button>
            </form>
            {state.length > 0 ? (
                state.map((user, index) => (
                <Value key={index} user={user} onDelete={()=>deleteUser(index)}/>
            ))
            ):(
                <p>empty list</p>
            )
            }



</div>
    );
}

export default UserPage;