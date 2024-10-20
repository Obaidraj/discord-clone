import { InitialModal } from "@/components/modals/initial-modal"
import { db } from "@/lib/db"
import { initialProfile } from "@/lib/initial-profile"
import { INSPECT_MAX_BYTES } from "buffer"
import { log } from "console"
import { redirect } from "next/navigation"

const SetupPage = async() => {
  const profile=await initialProfile()
  const server=await db.server.findFirst({
    where:{
        members:{
            some:{

                profileId:profile.id
            }
        }
    }
  }) 

console.log(server);

  if(server){
    return redirect(`/servers/${server.id}`)
  }
  return (
    <InitialModal/>
  )
}

export default SetupPage