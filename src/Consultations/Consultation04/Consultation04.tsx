
import {useState} from 'react'
import MyButton from "../../components/myButton/MyButton";
import { PageWrapper, UserCard, Avatar, UserInfo, UserTitle, InfoContainer} from "./styles";

function Consultation04 () {
const [userData, setUserData] = useState<any>(undefined)

    const RANDOM_USER_URL: string = 'https://randomuser.me/api/';

    const getRandomUser = async () => {
        const response = await fetch(RANDOM_USER_URL, {
            method: 'Get'
        });

        console.log(response);

        const result = await response.json();


        if(response.ok) {
          setUserData(result.results[0])

        }else {

        }
        
    };
    console.log(userData);
    
    


     return (
        <PageWrapper>
      <UserCard>
       <Avatar src={userData?.picture?.large} alt="User Avatar" />
        <InfoContainer>
          <UserTitle>Full Name:</UserTitle>
          <UserInfo></UserInfo>
        </InfoContainer>
        <InfoContainer>
          <UserTitle>Email:</UserTitle>
          <UserInfo>{userData?.email}</UserInfo>
        </InfoContainer>
        <InfoContainer>
          <UserTitle>Phone:</UserTitle>
          <UserInfo></UserInfo>
        </InfoContainer>
        
        <MyButton name="Get Random User" onClick={getRandomUser}/>
      </UserCard>
    </PageWrapper>
    );
}
   
export default Consultation04;