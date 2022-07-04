import { useState, useEffect, useRef } from "react";
import { useFetch } from "../../hooks/useFetch";
import type { Video } from "ytubes/dist/types/data";
import { Loader, TextInput } from "@mantine/core";
import clsx from "clsx";

interface SearchProps {
  addSong: (found: Video) => void;
}

const Search = ({ addSong }: SearchProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [data, fetchData] = useFetch<Video[]>();
  const [input, setInput] = useState("");

  const ref = useRef<HTMLInputElement>(null);

  const handleInput = (event) => {
    event.preventDefault();
    if (data.value) {
      switch (event.key) {
        case "Enter":
          addSong(data.value[selectedIndex]);
          setInput("");
          break;
        case "ArrowUp":
          setSelectedIndex(
            selectedIndex > 0 ? selectedIndex - 1 : data.value?.length - 1
          );
          break;
        case "ArrowDown":
          setSelectedIndex(
            selectedIndex < data.value.length - 1 ? selectedIndex + 1 : 0
          );
          break;

        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (!input) return;
    fetchData(`api/Youtube/getSuggestions`, {
      method: "POST",
      body: input,
    });
  }, [input, fetchData]);

  return (
    <>
      <TextInput
        placeholder="Search a song"
        rightSection={data.loading && <Loader size="xs" />}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyUp={handleInput}
        ref={ref}
      />
      {input &&
        data.value?.map((value, index) => {
          return (
            <p
              className={clsx({ selected: index === selectedIndex })}
              key={value.id}
              onClick={() => {
                setInput("");
                addSong(value);
              }}
            >
              {value.title}
            </p>
          );
        })}
    </>
  );
};

export default Search;
