import Loader from "@/components/Loader"
import { useAjax } from "@/hooks/ajax"


export default function Token({token, user}){
    const {sendData} = useAjax()
    
    if(user){
        sendData('/api/v1/verify-email', {code: token}, (res)=>{
            console.log(res)
        })
    }

    return (
        <Loader className='show-loader'/>
    )

}

export async function getServerSideProps(context){
        return{
            props: {
                token: context.params.token
            }
        }
}