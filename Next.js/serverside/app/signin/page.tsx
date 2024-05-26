import client from '@/db';

async function getData() {
    const user = await client.user.findFirst();
    return user;
  }

export default async function Signin() {
const userDetails = await getData();

return (
    <div>
   {userDetails.username},
   {userDetails.id}
    </div>
)
}