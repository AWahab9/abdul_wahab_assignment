import Image from "next/image";
import ProfilePic from "../public/profilepic.jpg"

export default function Home() {
  return (
    <div className="home container ">
      <div className="child container">
      
        Hi,
        <br/>
        My Name is <span className="skyblueColor" >ABDUL WAHAB KHAN</span>
    <br/>I am a <span className="DarkblueClor">GIAIC </span>student.
    <br/>I want to become a <span className="BlueColor">Professional Next Js Developer</span>

    <div>
          <Image
          src={ProfilePic}
          alt="myPic"
          width={200}
          height={200}   
       className="w-[200px] h-[200px]  float-right  mr-[100px] mt-[100px] ml-[70px] md:ml-[100px] rounded-full mb-2 bg-brown-200"
       />
        </div>

  </div>        
  </div>
  );
}
