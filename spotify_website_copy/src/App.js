import React from "react";
import "tailwindcss/tailwind.css";
import FilterButton from "./components/FilterButton";
import SongItem from "./components/SongItem";
import "./global_styles.css";

function App() {
  return (
    <body className="bg-mainBackground h-screen text-white flex justify-between p-2">
      {/* Left Side Bar */}
      <article className="flex-[2] flex flex-col mr-2">
        {/* // Home + Search Button */}
        <section className="bg-secondaryBackground flex-[1] rounded-md flex flex-col pl-4 justify-evenly">
          <button className="flex place-items-center gap-2 small_header">
            <img
              src={require("./icons/home_white.png")}
              className="icon"
              alt="Home Button"
            />
            Home
          </button>
          <button className="flex place-items-center gap-2 sub_small_header">
            <img
              src={require("./icons/search_gray.png")}
              className="icon"
              alt="Search Button"
            />
            Search
          </button>
        </section>
        {/* // Song Library */}
        <section className="bg-secondaryBackground flex flex-col max-h-[90%] flex-[9] mt-2 rounded-md gap-3 p-4">
          <header className="flex gap-2">
            <button className="flex gap-2 place-items-center sub_small_header">
              <img
                src={require("./icons/books_gray.png")}
                className="icon"
                alt="Library Icon"
              />
              Your Library
            </button>
            <div className="justify-end flex gap-2 flex-1">
              <button>
                <img
                  src={require("./icons/plus_gray.png")}
                  className="icon"
                  alt="Add Song Button"
                />
              </button>
              <button>
                <img
                  src={require("./icons/arrow_gray.png")}
                  className="icon"
                  alt="Show More Button"
                />
              </button>
            </div>
          </header>
          <div className="flex gap-2">
            <FilterButton text="Playlists" />
            <FilterButton text="Albums" />
            <FilterButton text="Artists" />
          </div>
          <button>
            <img
              src={require("./icons/search_gray.png")}
              className="icon"
              alt="Search Button"
            />
          </button>
          <div className="grid grid-cols-1 gap-3 overflow-y-auto">
            {[...Array(15)].map((_, index) => (
              <SongItem
                key={index}
                title={"Not Like Us"}
                type="Song"
                creator={`Kendrick Lamar`}
              />
            ))}
          </div>
        </section>
      </article>
      <article className="bg-secondaryBackground flex-[6] mr-2">
        Left side
      </article>
      <article className="bg-secondaryBackground flex-[2]">Left side</article>
    </body>
  );
}

export default App;
