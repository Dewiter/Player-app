import React, { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import Button from '../Buttons/Button';
import { v4 as uuidv4 } from 'uuid';

const Search = ({ notifHandler, player, playerHandler }) => {
  const [link, setLink] = useState('');
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  const [suggestionState, fetchSuggestion] = useFetch();
  const [data, fetchData] = useFetch();

  // ---------------------------------------------------------------------------//
  // Fetches suggestions triggered by on change from input                      //
  // ---------------------------------------------------------------------------//

  const handleChange = ({ target }) => {
    setLink(target.value);
    const url = `${process.env.REACT_APP_BACK_END_PORT}youtube/suggestions/${target.value}`;
    fetchSuggestion(url);
  };

  // ---------------------------------------------------------------------------//
  // Fetches song based on either selected or first suggestion                  //
  // ---------------------------------------------------------------------------//

  const handleSubmit = (event) => {
    event.preventDefault();
    if (suggestionState.loading || suggestionState.error) {
      notifHandler({ type: 'EMPTY_INPUT' });
      return;
    }

    const send = selectedSuggestion
      ? selectedSuggestion
      : suggestionState.value[0];

    const url = `${process.env.REACT_APP_BACK_END_PORT}youtube/query/`;
    fetchData(url, 'POST', JSON.stringify(send));
    setLink('');
  };

  // ---------------------------------------------------------------------------//
  // Adds song to queue                                                         //
  // ---------------------------------------------------------------------------//
  useEffect(() => {
    if (data.value) {
      const song = data.value.data;
      if (data.value.status === 200) {
        notifHandler({ type: 'ADD_SONG' });
        song.key = uuidv4();
        song.index = player.queue.length;
        if (player.queue.length === 0) {
          playerHandler({ type: 'INIT', payload: song });
          suggestionState.value = null;
          playerHandler({ type: 'PLAY' });
        } else {
          console.log('upodate');
          playerHandler({ type: 'UPDATE', payload: song });
          suggestionState.value = null;
        }
      }
    }
  }, [data.value]);

  // ---------------------------------------------------------------------------//
  // Styling for suggestions                                                    //
  // ---------------------------------------------------------------------------//
  useEffect(() => {
    if (link) {
      document
        .querySelector('.input-search')
        .classList.remove('input-search-not-active');
      document
        .querySelector('.input-search')
        .classList.add('input-search-active');
    } else {
      document
        .querySelector('.input-search')
        .classList.remove('input-search-active');
      document
        .querySelector('.input-search')
        .classList.add('input-search-not-active');
    }
  }, [link]);

  const displayChange = (res) => {
    setSelectedSuggestion(res);
    setLink(res.name);
  };

  // ---------------------------------------------------------------------------//
  // Componenent                                                                //
  // ---------------------------------------------------------------------------//

  return (
    <div className="search-container">
      <form className="query" onSubmit={handleSubmit}>
        <input
          className="input-search input-search-not-active"
          type="text"
          id="sendLink"
          name="sendLink"
          placeholder="Search"
          value={link}
          onChange={handleChange}
          autoComplete="off"
        />
        <Button content="search" customClass="btn-search" />
      </form>
      {suggestionState.loading ? (
        <div className="suggestions">
          <div>loading...</div>
        </div>
      ) : suggestionState.error ? (
        <div>Error : {suggestionState.error}</div>
      ) : (
        link && (
          <div className="suggestions">
            {suggestionState.value?.map((res) => {
              return (
                <div key={uuidv4()} className="suggestion">
                  <p>{res.name}</p>
                  <Button
                    content="plus-circle"
                    customClass="btn-suggestion"
                    onclick={() => displayChange(res)}
                  />
                </div>
              );
            })}
          </div>
        )
      )}
    </div>
  );
};

export default Search;
