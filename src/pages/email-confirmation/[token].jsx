export default function Token({token}){

    return (
        <div>
            {token}
        </div>
    )

}

export async function getServerSideProps(context){
        return{
            props: {
                token: context.params.token
            }
        }
}