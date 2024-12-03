import Ball from "../assets/bola.png"

function Loading() {
    return (
      <div className="w-full h-full flex justify-center items-center my-20">
        <img src={Ball} className="w-14 h-14 border-blue-500 border-t-transparent animate-bounce" />
      </div>
    );
  }
  

export default Loading