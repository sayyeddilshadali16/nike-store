import { Carousel } from "flowbite-react";

function CarouselComponent() {
  return (
    <div className="h-[550px] sm:h-[500px] xl:h-[500px] 2xl:h-96">
      <Carousel>
        <img
          src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww"
          alt="..."
        />
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww"
          alt="..."
        />
        <img
          src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww"
          alt="..."
        />
        <img
          src="https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="..."
        />
        <img
          src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="..."
        />
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
