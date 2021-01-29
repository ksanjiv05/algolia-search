import React, { useState, useEffect } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits,Configure } from "react-instantsearch-dom";
import Hit from "./Hint";
// import config from "../../config";
export default function Search() {
  const [isShow, setIsShow] = useState(false);
  const [value, setValue] = useState();
  // const data = {
  //   algoliaId: process.env.REACT_APP_ALGOLIA_APP_ID,
  //   algoliaApiKey: process.env.REACT_APP_ALGOLIA_API_KEY,
  //   algoliaIndexName: process.env.REACT_APP_ALGOLIA_INDEX_NAME,
  // };
  useEffect(() => {
    setIsShow(value != null ? true : false);
  }, [value]);
  // const { algoliaId, algoliaApiKey, algoliaIndexName } = data;
  //const searchClient = algoliasearch(algoliaId, algoliaApiKey);
  const searchClient = algoliasearch('UE79BOFCH0', '39bcba225bacc52c6cc67ff0814fda7a');
  return (
    <div className="search-margin">
      <InstantSearch indexName='dev_NAME' searchClient={searchClient}>
      {/* <Configure filters='name:IMG_20180423_142620.jpg' /> */}
      <Configure filters='userid:kumarsanjiv0005@gmail.com' />
        <SearchBox
          className="searchbox-margin"
          autoFocus={false}
          searchAsYouType={true}
          showLoadingIndicator={true}
          onChange={(e) =>
            setValue(e.target.value.length >= 2 ? e.target.value : null)
          }
        />
        <main>{isShow && <Hits hitComponent={Hit} />}</main>
      </InstantSearch>
    </div>
  );
}
