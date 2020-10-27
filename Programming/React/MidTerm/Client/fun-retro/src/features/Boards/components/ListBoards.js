import React, { useEffect, useState } from "react";
import axios from "axios";
import BoardItem from "./BoardItem";
import "../style.css";

function ListBoards() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchURL = "http://localhost:3001/boards";
      const response = await axios.get(fetchURL);
      setBoards(response.data);
    }

    fetchData();
  }, []);

  return (
    <ul className="list-boards">
      {boards.map((board) => (
        <li key={board.board_id}>
          <BoardItem
            boardName={board.board_name}
            boardCreatedDate={board.created_date}
          />
        </li>
      ))}
    </ul>
  );
}

export default ListBoards;
