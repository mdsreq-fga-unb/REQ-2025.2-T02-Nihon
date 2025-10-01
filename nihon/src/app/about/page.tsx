export default function About() {
  return(
    <div className="w-full h-full bg-white block items-center overflow-x-hidden">
      <div className="h-130 w-screen bg-white  flex items-center justify-center">
        <div className="  h-70 w-70 bg-[url('../images/circuloNihon.png')] bg-cover bg-center rounded-full drop-shadow-[10px_10px_5px_rgba(0,0,0,0.25)]"></div>
      </div>
      <div className="h-100 w-screen bg-[#E21414] flex-row items-center justify-center ">
        <p className="text-justify px-30 pt-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sapiente earum culpa ducimus facere itaque consequatur facilis placeat ab qui id sed doloremque amet quia eligendi, sit ipsa! Dolorum, officiis?</p>
        <p className="text-justify px-30">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque in eligendi praesentium temporibus molestiae quam fugit mollitia quos illum impedit, unde maxime ipsa libero, est distinctio officiis magni repellat recusandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt nihil officia consequatur saepe dolor ut alias consequuntur, doloribus quibusdam. Ratione, tenetur animi perferendis expedita nisi excepturi repudiandae. Ullam, ipsa tempora!</p>
        <div className="pt-15 justify-between flex">
          <div className=" h-15 w-15 bg-white"></div>
          <div className=" h-15 w-15 bg-white"></div>
        </div>
      </div>
      <div className="h-100 w-screen bg-white  flex items-center justify-center ">
        <div className=" h-15 w-15 bg-black"></div>
      </div>
      <div className="h-100 w-screen bg-[#E21414]  flex items-center justify-center ">
        <div className=" h-15 w-15 bg-white"></div>
      </div>
    </div>
  );
}
