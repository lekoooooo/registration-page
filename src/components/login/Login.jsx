import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { LoggedUser } from "../../api/api"
import { LoginSchema } from "../../Schema/LoginSchema"





const Login = () => {
   const {handleSubmit, register, setError, formState: {errors}} = useForm({
    resolver: zodResolver(LoginSchema)
   })
   const {mutate} = useMutation({
    mutationFn: LoggedUser,
    onSuccess: (data) => {
        alert("sagol")
    }
   })
   const onSubmit = (data) => (
    mutate(data)
   )
      return (
        <div>
    <div>
   <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col m-auto">
<div>
    <input type="text" placeholder="username" {...register("username")}/>
<p>{errors.username && errors.username.message }</p>
</div>
<div>
    <input type="text" placeholder="password" {...register("password")}/>
    <p>{errors.password && errors.password.message }</p>
</div>
<button type="submit" className="bg-black rounded-lg w-[100px] h-[50px] text-white">Submit</button>
   </form>
    </div>
    </div>
  )
}

export default Login
