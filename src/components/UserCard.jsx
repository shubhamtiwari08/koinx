import React from "react";



function UserCard({src}) {
  return (
    <div className="flex items-center justify-between gap-8 py-2  bg-blue-100 my-5 rounded-md">
      <div className="w-72 flex flex-col justify-center items-center">
        <div className="w-24 h-24 rounded-md overflow-hidden" >
        <img src={src} alt="user" />
        </div>
        <p className="font-semibold text-black">name</p>
        <p className="text-xs text-gray-500">Designation here</p>
      </div>
      <p className="text-[14px] font-semibold text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
        temporibus consequuntur optio necessitatibus veniam repudiandae a?
        Molestias itaque, quos sit esse facilis ex neque nam harum tempora in
        impedit modi rem dignissimos odit explicabo eum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum neque ad officiis? Qui, facilis.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, accusantium.
      </p>
    </div>
  );
}

export default UserCard;
