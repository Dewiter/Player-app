import React, { useState, useEffect } from 'react';
import Button from '../player/Inputs/Button';

const Suggestions = ({ value, setSuggestion, first }) => {
  const [data, setData] = useState([]);
  const getSuggestion = async () => {
    const url = `http://localhost:5000/youtube/suggestions/${value}`;
    if (value) {
      const response = await fetch(url, {
        headers: { 'Access-Control-Allow-Origin': '*' },
      })
        .then((result) => {
          return result.json();
        })
        .then((resultParsed) => {
          return resultParsed;
        })
        .catch((err) => {
          console.log(err);
        });
      if (response) {
        setData(response);
      }
    }
  };

  useEffect(() => {
    getSuggestion();
  }, [value]);

  return (
    <div className="suggestions">
      {data.map((res) => {
        return (
          <div className="suggestion">
            <p>{res.name}</p>
            <Button
              content="plus-circle"
              customClass="btn-suggestion"
              onClick={setSuggestion(res)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Suggestions;
