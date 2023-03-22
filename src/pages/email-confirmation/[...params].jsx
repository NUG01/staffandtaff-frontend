import Loader from "@/components/Loader"
import { useAjax } from "@/hooks/ajax"
import Router from "next/router"
import { useEffect } from "react";

export default function Token({info, user}){
    const {sendData} = useAjax()

    let code = info.params[0].split('&')[1].split('=')[1]
    let email = info.params[0].split('&')[0].split('=')[1]

    useEffect(()=>{
        if(user && !user.data.verified){
            sendData('/api/v1/verify-email', {code, email }, res => {
                location.href = '/recruiter-register'
            })
        }
    })

    return (
        <Loader className='show-loader'/>
    )

}

export async function getServerSideProps(context){
        return{
            props: {
                info: context.params,
            }
        }
}